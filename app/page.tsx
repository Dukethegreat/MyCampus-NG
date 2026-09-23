@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap');
:root { --ink:#17152b; --muted:#8a879c; --line:#eceaf3; --purple:#6752d6; --soft:#f7f6fb; --green:#53b995; --orange:#f4a261; --blue:#4aa3ff; }
* { box-sizing:border-box; }
html { scroll-behavior:smooth; }
body { margin:0; color:var(--ink); background:#fff; font-family:'DM Sans',sans-serif; }
button,input,textarea,select { font:inherit; }
button { border:0; background:none; cursor:pointer; color:inherit; }
a { text-decoration:none; }
.shell { display:grid; grid-template-columns:250px minmax(480px,650px) 320px; gap:34px; max-width:1320px; margin:auto; min-height:100vh; padding:0 25px; }
.sidebar { border-right:1px solid var(--line); padding:29px 25px 25px 0; display:flex; flex-direction:column; min-height:100vh; position:sticky; top:0; height:100vh; }
.brand { font-family:'Space Grotesk'; font-size:20px; font-weight:700; display:flex; align-items:center; gap:9px; white-space:nowrap; }
.brand-mark { width:31px;height:31px;border-radius:10px;background:var(--purple);color:#fff;display:inline-grid;place-items:center;font-size:18px; }
.brand b { color:var(--purple); }
.sidebar nav { margin-top:54px; display:grid; gap:8px; }
.nav-item { text-align:left; border-radius:12px; padding:13px 14px; display:flex; align-items:center; gap:15px; font-size:15px; color:#5c596e; }
.nav-item.selected,.nav-item:hover { background:#f0edff; color:var(--purple); font-weight:600; }
.nav-icon { font-size:22px; width:23px; text-align:center; }
.post-button, .primary-button { background:var(--purple); color:#fff; padding:14px; border-radius:12px; font-weight:700; box-shadow:0 8px 20px #6752d633; }
.primary-button.small { padding:9px 12px; font-size:12px; border-radius:10px; }
.sidebar-bottom { margin-top:auto; }
.mini-profile { display:flex; gap:9px; align-items:center; border-top:1px solid var(--line); padding-top:20px; margin-top:15px; font-size:12px; }
.mini-profile div { flex:1; display:grid; gap:3px; }
.mini-profile strong { font-size:12px; }
.mini-profile small,.muted,small { color:var(--muted); }
.avatar { display:inline-grid; place-items:center; min-width:43px; height:43px; border-radius:50%; background:#dfe4f2; color:#514e69; font-weight:700; font-size:12px; }
.avatar.green { background:#d5f0e5; color:#208664; }
.avatar.purple { background:#e9e2ff; color:#7158c8; }
.avatar.large { width:88px; height:88px; min-width:88px; font-size:24px; }
.feed-column { border-right:1px solid var(--line); min-height:100vh; }
.feed-header { height:96px; display:flex; justify-content:space-between; align-items:center; }
.feed-header h1 { font:700 24px 'Space Grotesk'; margin:0 0 5px; }
.feed-header p { color:var(--muted); margin:0; font-size:13px; }
.bell { font-size:21px; color:var(--purple); }
.tabs { display:flex; border-bottom:1px solid var(--line); gap:27px; }
.tab { color:var(--muted); padding:14px 5px; position:relative; font-size:13px; }
.tab.active { color:var(--ink); font-weight:700; }
.tab.active:after { content:''; position:absolute; height:3px; background:var(--purple); bottom:-1px; left:0; right:0; border-radius:3px; }
.composer,.post { display:flex; gap:13px; padding:22px 0; border-bottom:1px solid var(--line); }
.composer-body { flex:1; }
.composer textarea { border:0; resize:none; outline:0; width:100%; padding:5px 0; color:var(--ink); }
.composer textarea::placeholder { color:#aaa7b7; }
.composer-actions { border-top:1px solid var(--line); margin-top:8px; padding-top:11px; display:flex; justify-content:space-between; align-items:center; }
.composer-actions div { display:flex; gap:18px; color:var(--purple); font-size:18px; }
.small-post { background:var(--purple); color:white; border-radius:8px; padding:8px 18px; font-size:12px; font-weight:700; }
.small-post:disabled { opacity:.4; cursor:not-allowed; }
.post-content { flex:1; min-width:0; }
.post-meta { display:flex; justify-content:space-between; }
.post-meta strong { font-size:14px; }
.verified { color:white; background:var(--purple); border-radius:50%; font-size:9px; padding:2px 4px; margin:0 6px; }
.post p { line-height:1.55; font-size:14px; margin:9px 0; }
.hashtag { color:var(--purple); font-size:13px; }
.more { color:var(--muted); }
.post-actions { display:flex; justify-content:space-between; margin-top:18px; color:var(--muted); max-width:410px; }
.post-actions button { font-size:15px; }
.post-actions span { font-size:12px; margin-left:5px; }
.post-actions .liked { color:#e4517c; }
.rightbar { padding-top:24px; }
.search { background:var(--soft); border-radius:11px; padding:11px 14px; color:var(--muted); display:flex; gap:9px; }
.search input { border:0; outline:0; background:none; width:100%; font-size:12px; }
.card { background:var(--soft); border-radius:15px; padding:18px; margin-top:23px; }
.card-title { display:flex; justify-content:space-between; align-items:center; }
.card h2 { font:700 16px 'Space Grotesk'; margin:0 0 16px; }
.trend { display:grid; gap:5px; padding:11px 0; border-bottom:1px solid #eae7f2; }
.trend strong { font-size:13px; }
.trend span { font-size:11px; color:var(--muted); }
.trend small { font-size:10px; }
.show-more { color:var(--purple); font-size:12px; font-weight:600; padding-top:15px; }
.person { display:flex; align-items:center; gap:9px; margin:14px 0; }
.person div { flex:1; display:grid; gap:3px; }
.person strong { font-size:12px; }
.person small { font-size:11px; }
.follow { border:1px solid var(--purple); color:var(--purple); border-radius:7px; font-size:11px; font-weight:700; padding:6px 9px; }
.footer { color:#aaa7b7; font-size:10px; line-height:2; margin:22px 8px; }
.mobile-header { display:none; }
.auth-shell { min-height:100vh; background:linear-gradient(135deg,#f8f7ff 0%,#fff 55%,#eefaf6 100%); display:grid; place-items:center; padding:24px; }
.auth-card { width:min(100%,430px); background:#fff; border:1px solid var(--line); border-radius:20px; padding:36px; box-shadow:0 18px 60px #30207812; }
.onboarding-card { width:min(100%,480px); }
.auth-brand { font-family:'Space Grotesk'; font-size:20px; font-weight:700; display:flex; align-items:center; gap:8px; text-decoration:none; color:var(--ink); margin-bottom:42px; }
.auth-brand b { color:var(--purple); }
.auth-card h1 { font:700 27px 'Space Grotesk'; margin:0 0 9px; }
.auth-subtitle { color:var(--muted); font-size:14px; line-height:1.6; margin:0 0 26px; }
.auth-form { display:grid; gap:17px; }
.auth-form label { display:grid; gap:7px; font-size:12px; font-weight:700; color:#49465b; }
.auth-form input,.auth-form select { width:100%; border:1px solid #dedbe8; border-radius:9px; padding:12px; outline:none; background:#fff; font-size:13px; color:var(--ink); }
.auth-form input:focus,.auth-form select:focus { border-color:var(--purple); box-shadow:0 0 0 3px #6752d615; }
.auth-button { background:var(--purple); color:#fff; border-radius:9px; padding:13px; font-weight:700; margin-top:5px; }
.auth-note { color:var(--muted); text-align:center; font-size:12px; margin:23px 0 0; }
.auth-note a { color:var(--purple); font-weight:700; }
.auth-legal { color:#aaa7b7; text-align:center; font-size:10px; line-height:1.5; margin:25px 0 0; }
.step-label { color:var(--purple); font-size:10px; font-weight:700; letter-spacing:1px; margin-bottom:13px; }
.form-error { margin:0; color:#c43f61; background:#fff0f3; border-radius:8px; padding:10px; font-size:12px; line-height:1.4; }
.auth-button:disabled { opacity:.65; cursor:wait; }
.dashboard-shell { display:grid; grid-template-columns: 220px minmax(0, 1fr) 260px; gap:32px; max-width:1380px; margin:0 auto; min-height:100vh; padding:24px 20px; }
.dashboard-sidebar, .dashboard-sidepanel { background:#faf9ff; border:1px solid var(--line); border-radius:20px; padding:22px 18px; }
.dashboard-main { background:#fff; border:1px solid var(--line); border-radius:20px; padding:24px; }
.dashboard-nav { display:grid; gap:12px; margin-top:40px; }
.dashboard-nav a { text-decoration:none; color:#524f67; padding:11px 10px; border-radius:10px; transition:all .2s ease; }
.dashboard-nav a:hover { background:#f0edff; color:var(--purple); font-weight:600; }
.dashboard-topbar { display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:20px; }
.eyebrow { font-size:10px; letter-spacing:1px; text-transform:uppercase; color:var(--purple); font-weight:700; margin:0 0 6px; }
.dashboard-topbar h1 { margin:0; font-family:'Space Grotesk'; font-size:30px; }
.secondary-button { display:inline-flex; align-items:center; justify-content:center; padding:10px 16px; border-radius:10px; background:#f5f3ff; color:var(--purple); text-decoration:none; font-weight:700; }
.stats-grid { display:grid; grid-template-columns:repeat(3, minmax(0, 1fr)); gap:16px; margin-bottom:24px; }
.stat-box { background:#f8f6ff; border:1px solid #eee8ff; border-radius:16px; padding:18px 16px; display:grid; gap:6px; }
.stat-box strong { font-size:26px; }
.stat-box span { font-size:12px; color:var(--muted); }
.dashboard-composer { margin-bottom:10px; }
.feed-list { display:grid; gap:16px; margin-top:18px; }
.dashboard-post { border:1px solid var(--line); border-radius:16px; padding:18px; background:#fff; }
.post-head { display:flex; align-items:center; gap:12px; margin-bottom:10px; }
.post-head strong { display:block; font-size:14px; }
.post-head small { color:var(--muted); font-size:11px; }
.dashboard-post p { margin:0; line-height:1.6; color:#2d2a3b; }
.compact-card { border-radius:16px; background:#faf9ff; border:1px solid var(--line); padding:18px; margin-bottom:18px; }
.compact-card h3 { margin:0 0 12px; font-size:16px; }
.compact-card p { margin:0; color:#403d52; }
.pill { display:inline-block; background:#e8fff4; color:#1f7753; border-radius:999px; font-size:11px; padding:6px 8px; margin-top:10px; font-weight:700; }
.compact-card ul { margin:0; padding-left:18px; color:#47435a; display:grid; gap:8px; font-size:13px; }
.section-shell { max-width:1100px; margin:0 auto; padding:32px 20px 60px; }
.section-header { display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:26px; }
.section-header h1 { margin:0; font-family:'Space Grotesk'; font-size:32px; }
.section-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:20px; }
.section-list { display:grid; gap:18px; }
.info-card { border:1px solid var(--line); background:#fff; border-radius:18px; padding:20px; box-shadow:0 10px 25px rgba(31,27,70,0.03); }
.tag { display:inline-block; border-radius:999px; padding:6px 10px; font-size:10px; font-weight:700; text-transform:uppercase; letter-spacing:0.5px; }
.tag.purple { background:#f1eeff; color:var(--purple); }
.tag.green { background:#e8fff4; color:#1f7753; }
.tag.orange { background:#fff3e7; color:#ad6000; }
.tag.blue { background:#ebf5ff; color:#195da8; }
.community-card h3, .marketplace-card h3, .event-card h3, .announcement-card h3, .profile-card h2 { margin:14px 0 8px; font-size:20px; }
.community-card p, .marketplace-card p, .event-card p, .announcement-card p, .profile-meta p { color:#514e69; line-height:1.6; }
.event-card { display:flex; gap:20px; align-items:center; }
.event-date { min-width:90px; border-right:1px solid var(--line); padding-right:16px; }
.event-date strong { display:block; font-size:20px; }
.event-date span { font-size:12px; color:var(--muted); }
.event-copy { flex:1; }
.event-copy small { color:var(--muted); }
.announcement-head { display:flex; justify-content:space-between; align-items:center; }
.profile-card { max-width:720px; }
.profile-top { display:flex; align-items:center; gap:18px; }
.profile-meta { margin-top:18px; display:grid; gap:10px; }
.profile-meta p { margin:0; }
.profile-meta strong { color:var(--ink); }
@media(max-width:1050px){ .shell{grid-template-columns:210px minmax(450px,1fr);max-width:900px}.rightbar{display:none}.sidebar{padding-right:15px}.feed-column{border-right:0}.dashboard-shell{grid-template-columns:1fr;} .dashboard-sidebar,.dashboard-sidepanel{display:none;} }
@media(max-width:680px){ .shell{display:block;padding:0 18px;} .sidebar{display:none;} .mobile-header{display:flex;height:68px;align-items:center;justify-content:space-between;border-bottom:1px solid var(--line);} .mobile-header .brand{font-size:17px;} .feed-header{height:85px;} .feed-header h1{font-size:20px;} .tabs{gap:16px;overflow:auto;} .post,.composer{padding:18px 0;} .post-actions{max-width:300px;} .feed-column{min-height:auto;} .avatar{min-width:38px;height:38px;} .section-header{flex-direction:column; align-items:flex-start;} .event-card{flex-direction:column; align-items:flex-start;} .event-date{border-right:0; border-bottom:1px solid var(--line); padding:0 0 12px; width:100%;} }
