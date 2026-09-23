import Link from "next/link";

const schools = ["University of Lagos (UNILAG)", "University of Nigeria, Nsukka (UNN)", "Yaba College of Technology (YABATECH)", "Lagos State Polytechnic", "Other institution"];

export default function OnboardingPage() {
  return (
    <main className="auth-shell">
      <section className="auth-card onboarding-card">
        <Link href="/" className="auth-brand"><span className="brand-mark">M</span> MyCampus <b>NG</b></Link>
        <div className="step-label">STEP 1 OF 2</div>
        <h1>Tell us about your campus</h1>
        <p className="auth-subtitle">This helps us show you relevant communities and announcements.</p>
        <form action="/" className="auth-form">
          <label>Account type<select name="accountType" defaultValue="student"><option value="student">Student</option><option value="staff">Staff or lecturer</option><option value="alumni">Alumni</option><option value="public">Public user</option><option value="creator">Creator or business</option></select></label>
          <label>Your institution<select name="institution" defaultValue=""><option value="" disabled>Select your institution</option>{schools.map((school) => <option key={school}>{school}</option>)}</select></label>
          <label>Department or course (optional)<input placeholder="e.g. Computer Science" /></label>
          <button className="auth-button" type="submit">Continue to MyCampus NG</button>
        </form>
        <p className="auth-note"><Link href="/">Skip for now</Link> · You can verify your institution later.</p>
      </section>
    </main>
  );
}
