# MyCampus NG

A social network for Nigeria's higher-institution community.

## Run locally

1. Install dependencies:

```bash
npm install
```

2. Copy `.env.example` to `.env.local` and add the Supabase project URL and anonymous key from Supabase Project Settings → API.

3. Run the app:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Supabase setup

Run `supabase/schema.sql` in the Supabase SQL editor. Then enable the email provider under Authentication → Providers. For production, configure your site URL and redirect URLs in Authentication → URL Configuration.

Never add a `service_role` key to the browser or commit secrets to GitHub. The public anonymous key is safe for browser use only with Row Level Security enabled.

## Current MVP

- Responsive social feed
- Sign-up and login connected to Supabase Auth
- Institution onboarding interface
- Initial profiles, posts, follows, and verification-request schema
- Trending topics, communities, events, and marketplace navigation
