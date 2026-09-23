-- MyCampus NG initial schema and seed-ready structures
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
  body text not null,
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

create table if not exists public.communities (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  type text not null default 'institution',
  members_count bigint not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.events (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  description text,
  location text,
  event_date timestamptz,
  host text,
  created_at timestamptz not null default now()
);

create table if not exists public.announcements (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  detail text not null,
  kind text not null default 'official',
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;
alter table public.posts enable row level security;
alter table public.follows enable row level security;
alter table public.verification_requests enable row level security;
alter table public.communities enable row level security;
alter table public.events enable row level security;
alter table public.announcements enable row level security;

create policy "Profiles are readable" on public.profiles for select using (true);
create policy "Users can update own profile" on public.profiles for update using (auth.uid() = id);
create policy "Users can insert own profile" on public.profiles for insert with check (auth.uid() = id);
create policy "Posts are readable" on public.posts for select using (true);
create policy "Authenticated users can create posts" on public.posts for insert with check (auth.uid() = author_id);
create policy "Users can update own posts" on public.posts for update using (auth.uid() = author_id);
create policy "Users can manage their follows" on public.follows for all using (auth.uid() = follower_id);
create policy "Users can view own verification requests" on public.verification_requests for select using (auth.uid() = user_id);
create policy "Users can submit their verification" on public.verification_requests for insert with check (auth.uid() = user_id);
create policy "Communities readable" on public.communities for select using (true);
create policy "Events readable" on public.events for select using (true);
create policy "Announcements readable" on public.announcements for select using (true);

insert into public.communities (name, type, members_count) values
  ('UNILAG Community', 'institution', 18400),
  ('Computer Science', 'department', 5200),
  ('Campus Events', 'club', 9100),
  ('Student Union', 'organization', 7800)
on conflict do nothing;

insert into public.events (title, description, location, event_date, host) values
  ('Career Fair 2025', 'Campus-wide job and internship summit for students.', 'Main Auditorium', '2025-10-10 09:00:00+00', 'Career Center'),
  ('Faculty Debate Night', 'Student debate competition across faculties.', 'Lecture Hall 2', '2025-10-11 18:00:00+00', 'SUG'),
  ('Freshers Jam', 'Music, dance, and student social gathering.', 'Campus Garden', '2025-10-12 17:00:00+00', 'Creative Club')
on conflict do nothing;

insert into public.announcements (title, detail, kind) values
  ('Exam timetable update', 'The final exam schedule has been updated for Faculty of Science students.', 'official'),
  ('Fee payment reminder', 'All continuing students must complete their semester fees by Friday.', 'official'),
  ('Hostel accommodation', 'Room allocation and keys will be issued at the hostel office from Monday.', 'official')
on conflict do nothing;
