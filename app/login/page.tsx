import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="auth-shell">
      <section className="auth-card">
        <Link href="/" className="auth-brand"><span className="brand-mark">M</span> MyCampus <b>NG</b></Link>
        <h1>Welcome back</h1>
        <p className="auth-subtitle">Sign in to see what is happening on campus.</p>
        <form action="/" className="auth-form">
          <label>Email address<input type="email" placeholder="you@example.com" required /></label>
          <label>Password<input type="password" placeholder="Your password" required /></label>
          <button className="auth-button" type="submit">Log in</button>
        </form>
        <p className="auth-note">New to MyCampus NG? <Link href="/signup">Create an account</Link></p>
      </section>
    </main>
  );
}
