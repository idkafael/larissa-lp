import { supabase } from '../lib/supabase'

const TABLE_ORCAMENTOS = 'orcamentos'

/**
 * Envia pedido de orçamento para o Supabase.
 * @param {{ nome: string, email: string, telefone: string, mensagem?: string }} data
 * @returns {Promise<{ ok: boolean, error?: string }>}
 */
export async function submitOrcamento(data) {
  if (!supabase) {
    return { ok: false, error: 'Supabase não configurado. Defina VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY no .env' }
  }

  const { nome, email, telefone, mensagem } = data || {}
  if (!nome?.trim() || !email?.trim() || !telefone?.trim()) {
    return { ok: false, error: 'Nome, e-mail e telefone são obrigatórios.' }
  }

  const { error } = await supabase
    .from(TABLE_ORCAMENTOS)
    .insert([{
      nome: nome.trim(),
      email: email.trim(),
      telefone: telefone.trim(),
      mensagem: mensagem?.trim() || null,
    }])

  if (error) {
    return { ok: false, error: error.message }
  }

  return { ok: true }
}
