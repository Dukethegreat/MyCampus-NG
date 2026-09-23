"use client";

import Link from "next/link";
import { mockCommunities } from "../lib/mock-data";

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
        {mockCommunities.map((community) => (
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
