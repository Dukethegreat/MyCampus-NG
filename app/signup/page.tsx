"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { createBrowserSupabaseClient } from "../../lib/supabase-browser";

export default function SignupPage() {
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(""); setMessage(""); setLoading(true);
    const form = new FormData(event.currentTarget);
    try {
      const { data, error: signUpError } = await createBrowserSupabaseClient().auth.signUp({
        email: String(form.get("email")),
        password: String(form.get("password")),
        options: { data: { full_name: String(form.get("name")) }, emailRedirectTo: `${window.location.origin}/auth/callback?next=/onboarding` },
      });
      if (signUpError) throw signUpError;
      if (data.session) window.location.href = "/onboarding";
      else setMessage("Check your email to confirm your account, then return here to continue.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to create your account.");
    } finally { setLoading(false); }
  }

  return <main className="auth-shell"><section className="auth-card">
    <Link href="/" className="auth-brand"><span className="brand-mark">M</span> MyCampus <b>NG</b></Link>
    <h1>Join your campus community</h1><p className="auth-subtitle">Connect with students, creators, schools, and communities across Nigeria.</p>
    <form onSubmit={submit} className="auth-form">
      <label>Full name<input name="name" placeholder="Your full name" required /></label>
      <label>Email address<input name="email" type="email" placeholder="you@example.com" required /></label>
      <label>Password<input name="password" type="password" placeholder="At least 8 characters" minLength={8} required /></label>
      {error && <p className="form-error">{error}</p>}{message && <p className="form-success">{message}</p>}
      <button className="auth-button" type="submit" disabled={loading}>{loading ? "Creating account..." : "Create account"}</button>
    </form>
    <p className="auth-note">Already have an account? <Link href="/login">Log in</Link></p><p className="auth-legal">By joining, you agree to our Terms and Community Guidelines.</p>
  </section></main>;
}
