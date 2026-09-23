import Link from "next/link";
import { submitVerificationAction } from "./actions";

export default function VerificationPage() {
  return (
    <main className="section-shell">
      <header className="section-header">
        <div>
          <p className="eyebrow">Build trust on campus</p>
          <h1>Verify your identity</h1>
        </div>
        <Link href="/profile" className="secondary-button">Back to profile</Link>
      </header>

      <section className="info-card verification-card">
        <p className="auth-subtitle">Submit one document so communities can recognize verified campus members. Your document is kept private and is only used for review.</p>
        <form action={submitVerificationAction} className="auth-form" encType="multipart/form-data">
          <label>Verification method
            <select name="method" defaultValue="student_id" required>
              <option value="school_email">School email</option>
              <option value="student_id">Student ID</option>
              <option value="admission_letter">Admission letter</option>
              <option value="manual_review">Manual review</option>
            </select>
          </label>
          <label>Document (PDF, JPG, PNG; max 8 MB)
            <input name="document" type="file" accept="application/pdf,image/*" required />
          </label>
          <button className="primary-button" type="submit">Submit for review</button>
        </form>
      </section>
    </main>
  );
}
