"use client";

import Link from "next/link";

const stats = [
  { label: "Connections", value: "12.7k" },
  { label: "Communities", value: "86" },
  { label: "Events", value: "24" },
];

const feed = [
  { id: 1, type: "Campus announcement", author: "UNILAG Admin", time: "2h", text: "Admissions screening resumes on Tuesday. Visit the student portal for updates." },
  { id: 2, type: "Study group", author: "CSE 300", time: "4h", text: "Anyone taking Data Structures? Share your note summary and exam prep plan." },
  { id: 3, type: "Event", author: "SUG Media", time: "6h", text: "Freshers week talent show is happening this Friday at the central auditorium." },
];

export default function DashboardPage() {
  return (
    <main className="dashboard-shell">
      <aside className="dashboard-sidebar">
        <div className="brand"><span className="brand-mark">M</span> MyCampus <b>NG</b></div>
        <nav className="dashboard-nav">
          <Link href="/dashboard">Home</Link>
          <Link href="/dashboard">Communities</Link>
          <Link href="/dashboard">Announcements</Link>
          <Link href="/dashboard">Events</Link>
          <Link href="/dashboard">Marketplace</Link>
          <Link href="/dashboard">Profile</Link>
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
          {feed.map((post) => (
            <article key={post.id} className="dashboard-post">
              <div className="post-head">
                <span className="avatar purple">{post.author.slice(0,2).toUpperCase()}</span>
                <div>
                  <strong>{post.author}</strong>
                  <small>{post.type} · {post.time}</small>
                </div>
              </div>
              <p>{post.text}</p>
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
            <li>Tech Career Fair — Fri</li>
            <li>Faculty debate — Sat</li>
            <li>Hostel hangout — Sun</li>
          </ul>
        </div>
      </aside>
    </main>
  );
}
