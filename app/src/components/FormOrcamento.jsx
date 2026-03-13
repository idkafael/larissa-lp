import { useState } from 'react'

const TELEFONE_PATTERN = '^\\([0-9]{2}\\) [0-9]{4,5}-[0-9]{4}$'

function formatTelefone(value) {
  const digits = value.replace(/\D/g, '').slice(0, 11)
  if (digits.length <= 2) return digits ? `(${digits}` : ''
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

export function FormOrcamento({ onSubmit, idPrefix = 'orcamento' }) {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [mensagem, setMensagem] = useState('')
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')

  function handleTelefoneChange(e) {
    setTelefone(formatTelefone(e.target.value))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')
    try {
      const result = await Promise.resolve(onSubmit?.({ nome, email, telefone, mensagem }))
      if (result?.ok) {
        setStatus('success')
        setNome('')
        setEmail('')
        setTelefone('')
        setMensagem('')
      } else {
        setStatus('error')
        setErrorMessage(result?.error || 'Erro ao enviar. Tente novamente.')
      }
    } catch (err) {
      setStatus('error')
      setErrorMessage(err?.message || 'Erro ao enviar. Tente novamente.')
    }
  }

  const n = (id) => (idPrefix ? `${idPrefix}-${id}` : id)

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor={n('nome')} className="sr-only">
          Nome
        </label>
        <input
          id={n('nome')}
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
          placeholder="Seu nome"
          className="w-full px-4 py-3 text-sm rounded-xl bg-surface border border-surface-light text-foreground placeholder:text-muted focus:outline-none focus:border-bronze/50 transition-colors"
        />
      </div>
      <div>
        <label htmlFor={n('email')} className="sr-only">
          E-mail
        </label>
        <input
          id={n('email')}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Seu melhor e-mail"
          className="w-full px-4 py-3 text-sm rounded-xl bg-surface border border-surface-light text-foreground placeholder:text-muted focus:outline-none focus:border-bronze/50 transition-colors"
        />
      </div>
      <div className="flex rounded-xl bg-surface border border-surface-light overflow-hidden focus-within:border-bronze/50 transition-colors">
        <div className="flex items-center gap-1.5 pl-4 pr-2 text-muted shrink-0">
          <span className="text-lg" aria-hidden>🇧🇷</span>
          <span className="text-sm font-medium">+55</span>
        </div>
        <label htmlFor={n('telefone')} className="sr-only">Telefone / WhatsApp</label>
        <input
          id={n('telefone')}
          type="tel"
          value={telefone}
          onChange={handleTelefoneChange}
          required
          pattern={TELEFONE_PATTERN}
          title="Use o formato (00) 00000-0000 ou (00) 0000-0000"
          placeholder="WhatsApp com DDD"
          className="flex-1 min-w-0 px-3 py-3 text-sm bg-transparent text-foreground placeholder:text-muted focus:outline-none"
        />
      </div>
      <div>
        <label htmlFor={n('mensagem')} className="sr-only">
          Mensagem
        </label>
        <textarea
          id={n('mensagem')}
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          rows={4}
          placeholder="Conte brevemente sobre seu consultório ou o que você precisa no site (opcional)"
          className="w-full px-4 py-3 text-sm rounded-xl bg-surface border border-surface-light text-foreground placeholder:text-muted focus:outline-none focus:border-bronze/50 transition-colors resize-none"
        />
      </div>
      {status === 'success' && (
        <p className="text-sm text-emerald-400" role="alert">
          Pedido enviado com sucesso! Em breve entraremos em contato.
        </p>
      )}
      {status === 'error' && (
        <p className="text-sm text-red-400" role="alert">
          {errorMessage}
        </p>
      )}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-background bg-bronze hover:bg-bronze-light transition-all duration-200 rounded-xl uppercase tracking-wider disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Enviando...' : 'Solicitar orçamento'}
      </button>
    </form>
  )
}
