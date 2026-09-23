"use client";

import Link from "next/link";

const profile = {
  name: "Duke Daniel",
  school: "University of Lagos",
  department: "Computer Science",
  level: "400 Level",
  bio: "Loves product design, campus tech, and building communities around student life.",
};

export default function ProfilePage() {
  return (
    <main className="section-shell">
      <header className="section-header">
        <div>
          <p className="eyebrow">Profile</p>
          <h1>My account</h1>
        </div>
        <Link href="/dashboard" className="secondary-button">Back to dashboard</Link>
      </header>

      <section className="profile-card info-card">
        <div className="profile-top">
          <span className="avatar large green">DD</span>
          <div>
            <h2>{profile.name}</h2>
            <span className="tag green">Verified student</span>
          </div>
        </div>
        <div className="profile-meta">
          <p><strong>Institution:</strong> {profile.school}</p>
          <p><strong>Department:</strong> {profile.department}</p>
          <p><strong>Level:</strong> {profile.level}</p>
          <p><strong>Bio:</strong> {profile.bio}</p>
        </div>
      </section>
    </main>
  );
}
