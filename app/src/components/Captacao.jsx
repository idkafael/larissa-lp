import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { WhatsappLogo, ArrowRight } from '@phosphor-icons/react'

const WA_NUMBER = '5511999999999'
const WA_MESSAGE = 'Olá, Dra. Larissa Vasconcelos! Gostaria de agendar uma avaliação para blefaroplastia.'
const waLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`

export default function Captacao() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [formData, setFormData] = useState({ nome: '', telefone: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setFormData(p => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    if (formData.nome && formData.telefone) {
      const msg = `Olá, Dra. Larissa Vasconcelos! Me chamo ${formData.nome} e gostaria de agendar uma avaliação. Telefone: ${formData.telefone}`
      window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank')
      setSent(true)
    }
  }

  return (
    <section id="captacao" className="section" style={{ background: 'var(--color-bg)' }}>
      <div className="container">
        <div
          ref={ref}
          style={{
            background: 'linear-gradient(145deg, var(--color-bege-light) 0%, #EDE5DA 60%, #E0D9CF 100%)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-card)',
            padding: 'clamp(2.5rem, 7vw, 6rem) clamp(1.5rem, 5vw, 5rem)',
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            alignItems: 'center',
            overflow: 'hidden',
            position: 'relative',
          }}
          className="captacao-grid"
        >
          {/* Decorative orb */}
          <div aria-hidden="true" style={{
            position: 'absolute',
            top: '-4rem',
            right: '-4rem',
            width: '24rem',
            height: '24rem',
            borderRadius: '50%',
            background: 'rgba(201,184,168,0.25)',
            filter: 'blur(60px)',
            pointerEvents: 'none',
          }} />

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'relative', zIndex: 1 }}
          >
            <span className="eyebrow-pill">Agende sua avaliação</span>
            <h2 className="display-lg" style={{ marginTop: '1.25rem', maxWidth: '14ch' }}>
              O primeiro passo<br />
              começa com<br />
              <em style={{ fontStyle: 'italic', color: 'var(--color-mocha)' }}>uma conversa</em>
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.0625rem', fontWeight: 300, color: 'var(--color-text-muted)', lineHeight: 1.75, marginTop: '1.25rem', maxWidth: '46ch' }}>
              A avaliação é o momento em que entendo o seu olhar, seus objetivos e
              se a blefaroplastia ou outros procedimentos é a melhor indicação para você.
            </p>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ marginTop: '2rem', display: 'inline-flex' }}
            >
              <WhatsappLogo size={18} weight="fill" />
              Conversar pelo WhatsApp
            </a>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'relative', zIndex: 1 }}
          >
            {sent ? (
              <div style={{
                background: 'rgba(253,250,246,0.85)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.5)',
                borderRadius: 'var(--radius-card)',
                padding: '3rem 2rem',
                textAlign: 'center',
              }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 400, color: 'var(--color-mocha)' }}>
                  Obrigada.
                </div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', fontWeight: 300, color: 'var(--color-text-muted)', marginTop: '0.75rem', lineHeight: 1.7 }}>
                  Sua mensagem foi enviada. Em breve entraremos em contato para confirmar sua avaliação.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  background: 'rgba(253,250,246,0.85)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,255,255,0.5)',
                  borderRadius: 'var(--radius-card)',
                  padding: '2.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                  boxShadow: 'var(--shadow-soft)',
                }}
              >
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 500, color: 'var(--color-text)' }}>
                  Solicitar avaliação
                </h3>

                {[
                  { label: 'Seu nome', name: 'nome', type: 'text', placeholder: 'Como prefere ser chamada?' },
                  { label: 'WhatsApp', name: 'telefone', type: 'tel', placeholder: '(11) 99999-9999' },
                ].map(field => (
                  <div key={field.name} style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                    <label htmlFor={field.name} style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', fontWeight: 500, color: 'var(--color-text-muted)', letterSpacing: '0.02em' }}>
                      {field.label}
                    </label>
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      value={formData[field.name]}
                      onChange={handleChange}
                      required
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.9375rem',
                        fontWeight: 300,
                        color: 'var(--color-text)',
                        background: 'var(--color-bg)',
                        border: '1px solid var(--color-border)',
                        borderRadius: 'var(--radius-md)',
                        padding: '0.875rem 1rem',
                        outline: 'none',
                        transition: 'border-color 0.25s, box-shadow 0.25s',
                      }}
                      onFocus={e => { e.target.style.borderColor = 'var(--color-mocha)'; e.target.style.boxShadow = '0 0 0 3px rgba(140,123,110,0.1)' }}
                      onBlur={e => { e.target.style.borderColor = 'var(--color-border)'; e.target.style.boxShadow = 'none' }}
                    />
                  </div>
                ))}

                <button type="submit" className="btn-primary" style={{ marginTop: '0.5rem', justifyContent: 'center' }}>
                  Enviar pelo WhatsApp
                  <span className="arrow-icon">
                    <ArrowRight size={14} />
                  </span>
                </button>

                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--color-text-soft)', textAlign: 'center', lineHeight: 1.5 }}>
                  Suas informações são tratadas com sigilo e nunca compartilhadas.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .captacao-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  )
}
