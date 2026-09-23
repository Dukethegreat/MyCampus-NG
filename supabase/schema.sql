-- MyCampus NG initial Supabase schema
-- Run this in the Supabase SQL editor after creating a project.

create extension if not exists "uuid-ossp";

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  username text unique,
  full_name text not null,
  bio text,
  account_type text not null default 'public' check (account_type in ('student','staff','alumni','public','creator','business')),
  institution text,
  department text,
  verification_status text not null default 'unverified' check (verification_status in ('unverified','pending','verified','rejected')),
  avatar_url text,
  created_at timestamptz not null default now()
);

create table if not exists public.posts (
  id uuid primary key default uuid_generate_v4(),
  author_id uuid not null references public.profiles(id) on delete cascade,
  body text not null check (char_length(body) <= 5000),
  media_url text,
  media_type text check (media_type in ('image','video')),
  community text,
  created_at timestamptz not null default now()
);

create table if not exists public.follows (
  follower_id uuid references public.profiles(id) on delete cascade,
  following_id uuid references public.profiles(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (follower_id, following_id),
  check (follower_id <> following_id)
);

create table if not exists public.verification_requests (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  method text not null check (method in ('school_email','student_id','admission_letter','manual_review')),
  document_url text,
  status text not null default 'pending' check (status in ('pending','approved','rejected')),
  reviewer_note text,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;
alter table public.posts enable row level security;
alter table public.follows enable row level security;
alter table public.verification_requests enable row level security;

create policy "Profiles are publicly readable" on public.profiles for select using (true);
create policy "Users update their profile" on public.profiles for update using (auth.uid() = id);
create policy "Users create their profile" on public.profiles for insert with check (auth.uid() = id);
create policy "Posts are publicly readable" on public.posts for select using (true);
create policy "Authenticated users create posts" on public.posts for insert with check (auth.uid() = author_id);
create policy "Authors update posts" on public.posts for update using (auth.uid() = author_id);
create policy "Users manage their follows" on public.follows for all using (auth.uid() = follower_id);
create policy "Users view their verification requests" on public.verification_requests for select using (auth.uid() = user_id);
create policy "Users submit verification requests" on public.verification_requests for insert with check (auth.uid() = user_id);
