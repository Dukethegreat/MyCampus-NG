"use client";

import Link from "next/link";

const communities = [
  { name: "UNILAG Community", members: "18.4k", type: "Institution", color: "purple" },
  { name: "Computer Science", members: "5.2k", type: "Department", color: "green" },
  { name: "Campus Events", members: "9.1k", type: "Club", color: "orange" },
  { name: "Student Union", members: "7.8k", type: "Organization", color: "blue" },
];

export default function CommunitiesPage() {
  return (
    <main className="section-shell">
      <header className="section-header">
        <div>
          <p className="eyebrow">My communities</p>
          <h1>Communities</h1>
        </div>
        <Link href="/dashboard" className="secondary-button">Back to dashboard</Link>
      </header>

      <div className="section-grid">
        {communities.map((community) => (
          <article key={community.name} className="info-card community-card">
            <span className={`tag ${community.color}`}>{community.type}</span>
            <h3>{community.name}</h3>
            <p>{community.members} members</p>
            <button className="primary-button small">Join</button>
          </article>
        ))}
      </div>
    </main>
  );
}
