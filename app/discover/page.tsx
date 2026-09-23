"use client";

import Link from "next/link";
import { mockCommunities } from "../../lib/mock-data";

export default function DiscoverPage() {
  return (
    <main className="section-shell">
      <header className="section-header">
        <div>
          <p className="eyebrow">Find more</p>
          <h1>Discover</h1>
        </div>
        <Link href="/dashboard" className="secondary-button">Back to dashboard</Link>
      </header>

      <div className="discover-grid">
        {mockCommunities.map((community) => (
          <article key={community.name} className="info-card">
            <span className={`tag ${community.color}`}>{community.type}</span>
            <h3>{community.name}</h3>
            <p>{community.members} members</p>
            <button className="primary-button small">Follow</button>
          </article>
        ))}
      </div>
    </main>
  );
}
