"use client";

import Link from "next/link";

const notices = [
  { title: "Exam timetable update", detail: "The final exam schedule has been updated for Faculty of Science students.", time: "2h ago" },
  { title: "Fee payment reminder", detail: "All continuing students must complete their semester fees by Friday.", time: "6h ago" },
  { title: "Hostel accommodation", detail: "Room allocation and keys will be issued at the hostel office from Monday.", time: "1d ago" },
];

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
        {notices.map((notice) => (
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
