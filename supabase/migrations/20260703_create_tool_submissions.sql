create table if not exists public.tool_submissions (
  id uuid default gen_random_uuid() primary key,
  tool_name text not null,
  tool_url text not null,
  description text,
  submitter_email text,
  status text default 'pending' not null,
  created_at timestamptz default now() not null
);

alter table public.tool_submissions enable row level security;

create policy "Anyone can insert submissions"
  on public.tool_submissions for insert
  with check (true);
