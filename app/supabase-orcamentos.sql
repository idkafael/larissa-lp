-- Cole no Supabase: SQL Editor → New query → Execute
-- Tabela para pedidos de orçamento (LP de orçamento para site)

create table if not exists public.orcamentos (
  id uuid primary key default gen_random_uuid(),
  nome text not null,
  email text not null,
  telefone text not null,
  mensagem text,
  created_at timestamptz default now()
);

alter table public.orcamentos enable row level security;

create policy "Permitir insert anônimo para orçamentos"
  on public.orcamentos for insert
  to anon
  with check (true);
