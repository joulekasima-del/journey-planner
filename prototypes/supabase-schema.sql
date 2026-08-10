-- Journey Planner Scouting — Supabase schema
-- Run once in the Supabase Dashboard: SQL Editor -> New query -> paste this whole file -> Run.
-- Tables use lowercase snake_case (Postgres folds unquoted identifiers to lowercase anyway):
--   Experience -> experience, Place -> place, Host -> host, Experience_Attribute -> experience_attribute

create extension if not exists pgcrypto;

create table public.place (
  id uuid primary key default gen_random_uuid(),
  moo text,
  area text,
  landscape text,
  lat text,
  lng text,
  created_at timestamptz not null default now()
);

create table public.host (
  id uuid primary key default gen_random_uuid(),
  name text,
  contact text,
  created_at timestamptz not null default now()
);

create table public.experience (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  primary_type text,
  category text,
  description text,
  place_id uuid references public.place(id) on delete set null,
  host_id uuid references public.host(id) on delete set null,
  related_to_id uuid references public.experience(id) on delete set null,
  duration text,
  access text,
  tags text,
  culture text[] not null default '{}',
  donation text,
  donation_detail text,
  notes text,
  photos_collected boolean not null default false,
  date_scouted date,
  status text not null default 'draft' check (status in ('draft', 'verified')),
  created_by uuid references auth.users(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.experience_attribute (
  id uuid primary key default gen_random_uuid(),
  experience_id uuid not null references public.experience(id) on delete cascade,
  key text not null,
  value text not null,
  created_at timestamptz not null default now()
);

create index on public.experience (place_id);
create index on public.experience (host_id);
create index on public.experience (related_to_id);
create index on public.experience_attribute (experience_id);

-- Row Level Security: authenticated sessions only, full shared access (no per-Scout
-- restriction, per current product decision). No policy at all is granted to the
-- `anon` role on any table, so an unauthenticated request is denied by default --
-- not just unauthorized, but with no matching row-visibility rule whatsoever.

alter table public.place enable row level security;
alter table public.host enable row level security;
alter table public.experience enable row level security;
alter table public.experience_attribute enable row level security;

create policy "authenticated full access" on public.place
  for all to authenticated using (true) with check (true);

create policy "authenticated full access" on public.host
  for all to authenticated using (true) with check (true);

create policy "authenticated full access" on public.experience
  for all to authenticated using (true) with check (true);

create policy "authenticated full access" on public.experience_attribute
  for all to authenticated using (true) with check (true);
