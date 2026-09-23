"use client";

import Link from "next/link";

const notifications = [
  { title: "UNILAG Admin", body: "Admissions screening has been rescheduled for next Tuesday.", time: "2m ago" },
  { title: "Tech Students NG", body: "A new workshop has been added to your campus discovery page.", time: "17m ago" },
  { title: "Freshers Jam", body: "You are in the guest list for this weekend’s event.", time: "1h ago" },
];

export default function NotificationsPage() {
  return (
    <main className="section-shell">
      <header className="section-header">
        <div>
          <p className="eyebrow">Updates</p>
          <h1>Notifications</h1>
        </div>
        <Link href="/dashboard" className="secondary-button">Back to dashboard</Link>
      </header>

      <div className="section-list">
        {notifications.map((item) => (
          <article key={item.title} className="info-card notification-card">
            <strong>{item.title}</strong>
            <p>{item.body}</p>
            <small>{item.time}</small>
          </article>
        ))}
      </div>
    </main>
  );
}
