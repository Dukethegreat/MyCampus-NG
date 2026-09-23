"use client";

import Link from "next/link";
import { mockAnnouncements } from "../lib/mock-data";

export default function AnnouncementsPage() {
  return (
    <main className="section-shell">
      <header className="section-header">
        <div>
          <p className="eyebrow">Official updates</p>
          <h1>Announcements</h1>
        </div>
        <Link href="/dashboard" className="secondary-button">Back to dashboard</Link>
      </header>

      <div className="section-list">
        {mockAnnouncements.map((notice) => (
          <article key={notice.title} className="info-card announcement-card">
            <div className="announcement-head">
              <span className="tag green">Verified</span>
              <small>{notice.time}</small>
            </div>
            <h3>{notice.title}</h3>
            <p>{notice.detail}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
