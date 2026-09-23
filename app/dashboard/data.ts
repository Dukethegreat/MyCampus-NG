import { createServerSupabaseClient } from "../../lib/supabase-server";

export async function getDashboardData() {
  const supabase = createServerSupabaseClient();

  const { data: authData, error: authError } = await supabase.auth.getUser();
  if (authError || !authData.user) {
    return {
      user: null,
      profile: null,
      posts: [],
      announcements: [],
      events: [],
      communities: [],
    };
  }

  const [{ data: profile }, { data: posts }, { data: announcements }, { data: events }, { data: communities }] = await Promise.all([
    supabase.from("profiles").select("*").eq("id", authData.user.id).single(),
    supabase
      .from("posts")
      .select("*, profiles:author_id (id, full_name, institution, account_type)")
      .order("created_at", { ascending: false })
      .limit(20),
    supabase.from("announcements").select("*").order("created_at", { ascending: false }).limit(5),
    supabase.from("events").select("*").order("event_date", { ascending: true }).limit(5),
    supabase.from("communities").select("*").order("members_count", { ascending: false }).limit(6),
  ]);

  return {
    user: authData.user,
    profile: profile ?? null,
    posts: posts ?? [],
    announcements: announcements ?? [],
    events: events ?? [],
    communities: communities ?? [],
  };
}
