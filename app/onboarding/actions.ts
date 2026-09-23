"use server";

import { redirect } from "next/navigation";
import { createServerSupabaseClient } from "../lib/supabase-server";

export async function saveOnboarding(formData: FormData) {
  const supabase = createServerSupabaseClient();
  const { data: userData, error: userError } = await supabase.auth.getUser();

  if (userError || !userData.user) {
    redirect("/login");
  }

  const payload = {
    id: userData.user.id,
    full_name: userData.user.user_metadata?.full_name || "Campus user",
    account_type: String(formData.get("accountType") || "student"),
    institution: String(formData.get("institution") || ""),
    department: String(formData.get("department") || ""),
    verification_status: "unverified",
  };

  const { error } = await supabase.from("profiles").upsert(payload);

  if (error) {
    throw error;
  }

  redirect("/dashboard");
}
