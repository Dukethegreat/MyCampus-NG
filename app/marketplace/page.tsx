"use client";

import Link from "next/link";
import { mockMarketplace } from "../lib/mock-data";

export default function MarketplacePage() {
  return (
    <main className="section-shell">
      <header className="section-header">
        <div>
          <p className="eyebrow">Buy and sell</p>
          <h1>Marketplace</h1>
        </div>
        <Link href="/dashboard" className="secondary-button">Back to dashboard</Link>
      </header>

      <div className="section-grid">
        {mockMarketplace.map((item) => (
          <article key={item.title} className="info-card marketplace-card">
            <span className="tag purple">{item.tag}</span>
            <h3>{item.title}</h3>
            <strong>{item.price}</strong>
            <p>Sold by {item.seller}</p>
            <button className="primary-button small">Message seller</button>
          </article>
        ))}
      </div>
    </main>
  );
}
