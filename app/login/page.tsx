"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { createClient } from "../../lib/supabase-browser";

export default function LoginPage() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setError(""); setLoading(true);
    const form = new FormData(event.currentTarget);
    try {
      const { error: loginError } = await createClient().auth.signInWithPassword({ email: String(form.get("email")), password: String(form.get("password")) });
      if (loginError) throw loginError;
      window.location.href = "/";
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to log in."); setLoading(false);
    }
  }

  return (
    <main className="auth-shell"><section className="auth-card">
      <Link href="/" className="auth-brand"><span className="brand-mark">M</span> MyCampus <b>NG</b></Link>
      <h1>Welcome back</h1><p className="auth-subtitle">Sign in to see what is happening on campus.</p>
      <form onSubmit={submit} className="auth-form">
        <label>Email address<input name="email" type="email" placeholder="you@example.com" required /></label>
        <label>Password<input name="password" type="password" placeholder="Your password" required /></label>
        {error && <p className="form-error">{error}</p>}
        <button className="auth-button" type="submit" disabled={loading}>{loading ? "Logging in..." : "Log in"}</button>
      </form>
      <p className="auth-note">New to MyCampus NG? <Link href="/signup">Create an account</Link></p>
    </section></main>
  );
}
