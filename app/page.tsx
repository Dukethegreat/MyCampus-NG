"use client";

import { useState } from "react";
import { mockPosts } from "../lib/mock-data";

const nav = ["Home", "Discover", "Communities", "Events", "Marketplace"];

export default function Home() {
  const [active, setActive] = useState("Home");
  const [liked, setLiked] = useState<number[]>([]);
  const [following, setFollowing] = useState<string[]>([]);
  const [composer, setComposer] = useState("");

  const toggleLike = (id: number) =>
    setLiked((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]));

  const toggleFollow = (name: string) =>
    setFollowing((current) => (current.includes(name) ? current.filter((item) => item !== name) : [...current, name]));

  return (
    <main className="shell">
      <aside className="sidebar">
        <div className="brand"><span className="brand-mark">M</span><span>MyCampus <b>NG</b></span></div>
        <nav>
          {nav.map((item) => (
            <button key={item} className={`nav-item ${active === item ? "selected" : ""}`} onClick={() => setActive(item)}>
              <span className="nav-icon">{({ Home: "⌂", Discover: "⌕", Communities: "♧", Events: "◷", Marketplace: "▣" } as Record<string, string>)[item]}</span>
              {item}
            </button>
          ))}
        </nav>
        <button className="post-button" onClick={() => document.getElementById("composer")?.focus()}>＋ Create post</button>
        <div className="sidebar-bottom">
          <button className="nav-item"><span className="nav-icon">⚙</span>Settings</button>
          <div className="mini-profile">
            <span className="avatar green">DG</span>
            <div>
              <strong>Duke the Great</strong>
              <small>@dukethegreat</small>
            </div>
            <span>•••</span>
          </div>
        </div>
      </aside>

      <section className="feed-column">
        <header className="mobile-header"><div className="brand"><span className="brand-mark">M</span>MyCampus <b>NG</b></div><span className="avatar green">DG</span></header>
        <div className="feed-header">
          <div>
            <h1>{active}</h1>
            <p>{active === "Home" ? "What&apos;s happening on campus?" : `Explore ${active.toLowerCase()} across Nigeria`}</p>
          </div>
          <button className="bell">♧</button>
        </div>

        <div className="tabs">
          <button className="tab active">For you</button>
          <button className="tab">Following</button>
          <button className="tab">My school</button>
        </div>

        <div className="composer">
          <span className="avatar green">DG</span>
          <div className="composer-body">
            <textarea id="composer" value={composer} onChange={(e) => setComposer(e.target.value)} placeholder="Share something with your campus..." rows={2} />
            <div className="composer-actions">
              <div><button>▧</button><button>▶</button><button>☻</button><button>☷</button></div>
              <button className="small-post" disabled={!composer.trim()} onClick={() => setComposer("")}>Post</button>
            </div>
          </div>
        </div>

        {mockPosts.map((post) => (
          <article className="post" key={post.id}>
            <span className="avatar" style={{ background: post.accent }}>{post.avatar}</span>
            <div className="post-content">
              <div className="post-meta">
                <div>
                  <strong>{post.name}</strong>
                  <span className="verified">✓</span>
                  <span className="muted">@{post.handle} · {post.time}</span>
                </div>
                <button className="more">•••</button>
              </div>
              <p>{post.text}</p>
              <span className="hashtag">#{post.tag}</span>
              <div className="post-actions">
                <button onClick={() => toggleLike(post.id)} className={liked.includes(post.id) ? "liked" : ""}>♡ <span>{post.likes + (liked.includes(post.id) ? 1 : 0)}</span></button>
                <button>◯ <span>{post.comments}</span></button>
                <button>↻ <span>{post.reposts}</span></button>
                <button>⌑</button>
              </div>
            </div>
          </article>
        ))}
      </section>

      <aside className="rightbar">
        <div className="search">⌕ <input placeholder="Search MyCampus NG" /></div>
        <section className="card">
          <div className="card-title"><h2>Trending on campus</h2><button>•••</button></div>
          <div className="trend"><small>CampusLife · Trending</small><strong>#ASUUUpdate</strong><span>2,481 posts</span></div>
          <div className="trend"><small>UNILAG · Trending</small><strong>New Hall</strong><span>1,204 posts</span></div>
          <div className="trend"><small>Opportunities</small><strong>#CampusToCareer</strong><span>896 posts</span></div>
          <button className="show-more">Show more</button>
        </section>

        <section className="card people">
          <div className="card-title"><h2>People you may know</h2><button>•••</button></div>
          {[
            { n: "Sarah Williams", h: "sarahw", a: "SW" },
            { n: "Campus Eats NG", h: "campuseats", a: "CE" },
            { n: "Tunde Adebayo", h: "tunde.a", a: "TA" },
          ].map((person) => (
            <div className="person" key={person.h}>
              <span className="avatar purple">{person.a}</span>
              <div>
                <strong>{person.n}</strong>
                <small>@{person.h}</small>
              </div>
              <button className="follow" onClick={() => toggleFollow(person.h)}>{following.includes(person.h) ? "Following" : "Follow"}</button>
            </div>
          ))}
        </section>
        <p className="footer">About · Guidelines · Help · Privacy · Terms<br />© 2025 MyCampus NG</p>
      </aside>
    </main>
  );
}
