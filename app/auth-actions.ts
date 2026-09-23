"use server";

import { redirect } from "next/navigation";
import { createServerSupabaseClient } from "../lib/supabase-server";

export async function signUpAction(formData: FormData) {
  const supabase = createServerSupabaseClient();
  const email = String(formData.get("email") || "");
  const password = String(formData.get("password") || "");
  const fullName = String(formData.get("name") || "");

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { full_name: fullName },
    },
  });

  if (error) {
    throw error;
  }

  if (data.user) {
    await supabase.from("profiles").upsert({
      id: data.user.id,
      full_name: fullName,
      account_type: "student",
      verification_status: "unverified",
    });
  }

  redirect("/onboarding");
}

export async function signInAction(formData: FormData) {
  const supabase = createServerSupabaseClient();
  const email = String(formData.get("email") || "");
  const password = String(formData.get("password") || "");

  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) {
    throw error;
  }

  redirect("/");
}
