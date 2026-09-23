import { createServerSupabaseClient } from "../lib/supabase-server";

export async function getDashboardData() {
  const supabase = createServerSupabaseClient();
  const { data: user } = await supabase.auth.getUser();

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.user?.id || "")
    .single();

  const { data: posts } = await supabase
    .from("posts")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(10);

  return { user, profile, posts: posts || [] };
}
