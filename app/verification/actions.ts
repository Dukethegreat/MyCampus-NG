"use server";

import { redirect } from "next/navigation";
import { createServerSupabaseClient } from "../../lib/supabase-server";

const allowedMethods = new Set(["school_email", "student_id", "admission_letter", "manual_review"]);
const maxFileSize = 8 * 1024 * 1024;

export async function submitVerificationAction(formData: FormData) {
  const supabase = createServerSupabaseClient();
  const { data: authData, error: authError } = await supabase.auth.getUser();

  if (authError || !authData.user) redirect("/login");

  const method = String(formData.get("method") || "");
  const file = formData.get("document");

  if (!allowedMethods.has(method)) throw new Error("Choose a valid verification method.");
  if (!(file instanceof File) || file.size === 0) throw new Error("Upload a verification document.");
  if (file.size > maxFileSize) throw new Error("The document must be 8 MB or smaller.");
  if (!file.type.startsWith("image/") && file.type !== "application/pdf") {
    throw new Error("Only PDF and image documents are accepted.");
  }

  const extension = file.name.split(".").pop()?.toLowerCase() || "bin";
  const path = `${authData.user.id}/${crypto.randomUUID()}.${extension}`;
  const { error: uploadError } = await supabase.storage
    .from("verification-documents")
    .upload(path, file, { contentType: file.type, upsert: false });

  if (uploadError) throw uploadError;

  const { error: requestError } = await supabase.from("verification_requests").insert({
    user_id: authData.user.id,
    method,
    document_url: path,
    status: "pending",
  });

  if (requestError) {
    await supabase.storage.from("verification-documents").remove([path]);
    throw requestError;
  }

  const { error: profileError } = await supabase
    .from("profiles")
    .update({ verification_status: "pending" })
    .eq("id", authData.user.id);

  if (profileError) throw profileError;
  redirect("/profile?verification=submitted");
}
