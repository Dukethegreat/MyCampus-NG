"use client";

import Link from "next/link";
import { mockEvents } from "../lib/mock-data";

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
        {mockEvents.map((event) => (
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
