import Link from "next/link";

export default function SignupPage() {
  return (
    <main className="auth-shell">
      <section className="auth-card">
        <Link href="/" className="auth-brand"><span className="brand-mark">M</span> MyCampus <b>NG</b></Link>
        <h1>Join your campus community</h1>
        <p className="auth-subtitle">Connect with students, creators, schools, and communities across Nigeria.</p>
        <form action="/onboarding" className="auth-form">
          <label>Full name<input name="name" placeholder="Your full name" required /></label>
          <label>Email address<input name="email" type="email" placeholder="you@example.com" required /></label>
          <label>Password<input name="password" type="password" placeholder="At least 8 characters" minLength={8} required /></label>
          <button className="auth-button" type="submit">Create account</button>
        </form>
        <p className="auth-note">Already have an account? <Link href="/login">Log in</Link></p>
        <p className="auth-legal">By joining, you agree to our Terms and Community Guidelines.</p>
      </section>
    </main>
  );
}
