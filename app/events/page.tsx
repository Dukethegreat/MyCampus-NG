"use client";

import Link from "next/link";

const events = [
  { title: "Career Fair 2025", date: "Fri, 10 Oct", location: "Main Auditorium", host: "Career Center" },
  { title: "Faculty Debate Night", date: "Sat, 11 Oct", location: "Lecture Hall 2", host: "SUG" },
  { title: "Freshers Jam", date: "Sun, 12 Oct", location: "Campus Garden", host: "Creative Club" },
];

export default function EventsPage() {
  return (
    <main className="section-shell">
      <header className="section-header">
        <div>
          <p className="eyebrow">Campus calendar</p>
          <h1>Events</h1>
        </div>
        <Link href="/dashboard" className="secondary-button">Back to dashboard</Link>
      </header>

      <div className="section-list">
        {events.map((event) => (
          <article key={event.title} className="info-card event-card">
            <div className="event-date">
              <strong>{event.date.split(",")[0]}</strong>
              <span>{event.date.split(",").slice(1).join(",").trim()}</span>
            </div>
            <div className="event-copy">
              <h3>{event.title}</h3>
              <p>{event.location}</p>
              <small>Hosted by {event.host}</small>
            </div>
            <button className="primary-button small">RSVP</button>
          </article>
        ))}
      </div>
    </main>
  );
}
