import Link from "next/link";
import { createServerSupabaseClient } from "../../lib/supabase-server";

export default async function ProfilePage() {
  const supabase = createServerSupabaseClient();
  const { data: authData, error: authError } = await supabase.auth.getUser();

  if (authError || !authData.user) {
    return <main className="section-shell"><section className="info-card"><h1>Please log in</h1><Link href="/login" className="primary-button">Go to login</Link></section></main>;
  }

  const { data: profile } = await supabase.from("profiles").select("*").eq("id", authData.user.id).single();
  const status = profile?.verification_status || "unverified";
  const statusLabel = status.charAt(0).toUpperCase() + status.slice(1);

  return (
    <main className="section-shell">
      <header className="section-header">
        <div>
          <p className="eyebrow">Your profile</p>
          <h1>{profile?.full_name || "Campus user"}</h1>
        </div>
        <Link href="/dashboard" className="secondary-button">Back to dashboard</Link>
      </header>

      <section className="info-card" style={{ display: "grid", gap: 16 }}>
        <div className="profile-header" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <strong>{profile?.institution || "No institution set yet"}</strong>
            <p>{profile?.department || "Department not set"}</p>
          </div>
          <span className="pill">{statusLabel}</span>
        </div>

        <div className="profile-meta">
          <p><strong>Email:</strong> {authData.user.email}</p>
          <p><strong>Account type:</strong> {profile?.account_type || "student"}</p>
          <p><strong>Verification:</strong> {statusLabel}</p>
        </div>

        <div style={{ display: "flex", gap: 12 }}>
          <Link href="/verification" className="primary-button">Verify identity</Link>
          <Link href="/onboarding" className="secondary-button">Edit onboarding</Link>
        </div>
      </section>
    </main>
  );
}
