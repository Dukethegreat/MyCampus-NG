"use client";

import Link from "next/link";
import { mockAnnouncements, mockEvents } from "../lib/mock-data";

const stats = [
  { label: "Connections", value: "12.7k" },
  { label: "Communities", value: "86" },
  { label: "Events", value: "24" },
];

export default function DashboardPage() {
  return (
    <main className="dashboard-shell">
      <aside className="dashboard-sidebar">
        <div className="brand"><span className="brand-mark">M</span> MyCampus <b>NG</b></div>
        <nav className="dashboard-nav">
          <Link href="/dashboard">Home</Link>
          <Link href="/communities">Communities</Link>
          <Link href="/announcements">Announcements</Link>
          <Link href="/events">Events</Link>
          <Link href="/marketplace">Marketplace</Link>
          <Link href="/profile">Profile</Link>
          <Link href="/notifications">Notifications</Link>
        </nav>
      </aside>

      <section className="dashboard-main">
        <header className="dashboard-topbar">
          <div>
            <p className="eyebrow">Campus overview</p>
            <h1>Welcome back, Duke</h1>
          </div>
          <Link href="/" className="secondary-button">Public feed</Link>
        </header>

        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-box">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="composer dashboard-composer">
          <span className="avatar green">DG</span>
          <div className="composer-body">
            <textarea placeholder="Share with your campus community..." rows={2} />
            <div className="composer-actions">
              <div><button>▧</button><button>▶</button><button>☻</button></div>
              <button className="small-post">Post</button>
            </div>
          </div>
        </div>

        <div className="feed-list">
          {mockAnnouncements.map((post) => (
            <article key={post.title} className="dashboard-post">
              <div className="post-head">
                <span className="avatar purple">UN</span>
                <div>
                  <strong>UNILAG Admin</strong>
                  <small>Campus announcement · {post.time}</small>
                </div>
              </div>
              <p><strong>{post.title}</strong><br />{post.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <aside className="dashboard-sidepanel">
        <div className="card compact-card">
          <h3>My school</h3>
          <p>University of Lagos</p>
          <span className="pill">Verified student</span>
        </div>
        <div className="card compact-card">
          <h3>Upcoming events</h3>
          <ul>
            {mockEvents.map((event) => (
              <li key={event.title}>{event.title} — {event.date.split(",")[0]}</li>
            ))}
          </ul>
        </div>
      </aside>
    </main>
  );
}
