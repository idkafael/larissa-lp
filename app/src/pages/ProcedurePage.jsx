import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  ArrowLeft, ArrowRight, CheckCircle, WhatsappLogo,
  Eye, Sparkle, Drop, ArrowUp, Sun, Leaf, Star,
  Clock, Warning, Shield, Medal, Globe,
} from '@phosphor-icons/react'
import { waLink } from '../data/procedures'

// ─── Mini Navbar ─────────────────────────────────────────────────────────────
function ProcedureNavbar({ name, onBack, waHref }) {
  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(253,250,246,0.92)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--color-border)',
      padding: '0.875rem var(--container-px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '1rem',
    }}>
      <button
        onClick={onBack}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontFamily: 'var(--font-body)',
          fontSize: '0.8125rem',
          fontWeight: 400,
          color: 'var(--color-text-muted)',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          transition: 'color 0.2s',
          padding: 0,
          flexShrink: 0,
        }}
        onMouseEnter={e => e.currentTarget.style.color = 'var(--color-text)'}
        onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text-muted)'}
      >
        <ArrowLeft size={16} weight="regular" />
        <span className="proc-nav-label">Voltar ao site</span>
      </button>

      <div style={{ textAlign: 'center', flex: 1, minWidth: 0 }}>
        <div style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(0.875rem, 2vw, 1.0625rem)',
          fontWeight: 500,
          color: 'var(--color-text)',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}>
          Dra. Larissa Vasconcelos
        </div>
        <div style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.5625rem',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'var(--color-mocha)',
          fontWeight: 500,
        }}>
          Cirurgia Plástica Ocular
        </div>
      </div>

      <a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-whatsapp proc-nav-cta"
        style={{ fontSize: '0.75rem', padding: '0.5rem 1rem', flexShrink: 0 }}
      >
        <WhatsappLogo size={15} weight="fill" />
        Agendar
      </a>

      <style>{`
        @media (max-width: 480px) {
          .proc-nav-label { display: none; }
          .proc-nav-cta { display: none !important; }
        }
      `}</style>
    </header>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function ProcedureHero({ proc, waHref }) {
  const tagColors = {
    Laser:    { bg: 'rgba(107,92,81,0.12)', color: '#6B5C51' },
    Cirurgia: { bg: 'rgba(140,123,110,0.12)', color: '#8C7B6E' },
    Estético: { bg: 'rgba(201,184,168,0.3)', color: '#8C7B6E' },
  }
  const tc = tagColors[proc.tag] || tagColors.Estético

  return (
    <section style={{
      background: 'var(--color-bg-muted)',
      padding: 'clamp(3.5rem, 8vw, 7rem) var(--container-px)',
      textAlign: 'center',
    }}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{ maxWidth: '680px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}
      >
        <span style={{
          display: 'inline-flex',
          alignItems: 'center',
          background: tc.bg,
          color: tc.color,
          fontFamily: 'var(--font-body)',
          fontSize: '0.625rem',
          fontWeight: 500,
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          padding: '0.3rem 0.875rem',
          borderRadius: 'var(--radius-pill)',
          border: `1px solid ${tc.color}22`,
        }}>
          {proc.tag}
        </span>

        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2rem, 5vw, 3.75rem)',
          fontWeight: 400,
          color: 'var(--color-text)',
          lineHeight: 1.1,
          letterSpacing: '-0.02em',
        }}>
          {proc.hook}
        </h1>

        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(0.9375rem, 2vw, 1.0625rem)',
          fontWeight: 300,
          color: 'var(--color-text-muted)',
          lineHeight: 1.75,
          maxWidth: '52ch',
        }}>
          {proc.heroDesc}
        </p>

        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '0.5rem' }}>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
            style={{ fontSize: '0.9375rem' }}
          >
            <WhatsappLogo size={18} weight="fill" />
            Quero agendar minha avaliação
          </a>
          <a
            href="#como-funciona"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontFamily: 'var(--font-body)',
              fontSize: '0.875rem',
              fontWeight: 400,
              color: 'var(--color-text-muted)',
              border: '1px solid var(--color-border)',
              background: 'var(--color-bg-card)',
              padding: '0.875rem 1.5rem',
              borderRadius: 'var(--radius-pill)',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--color-mocha)'; e.currentTarget.style.color = 'var(--color-text)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.color = 'var(--color-text-muted)' }}
          >
            Entender o procedimento <ArrowRight size={14} />
          </a>
        </div>

        {/* Trust bar */}
        <div style={{
          display: 'flex',
          gap: '1.5rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginTop: '1rem',
          paddingTop: '1.5rem',
          borderTop: '1px solid var(--color-border)',
          width: '100%',
        }}>
          {[
            { icon: Shield, label: 'Especialista em pálpebras (SBCPO)' },
            { icon: Medal, label: 'Fellowship UFBA' },
            { icon: Globe, label: 'Observership UCLA' },
            { icon: Star,  label: 'Avaliação 5★ no Google' },
          ].map(({ icon: Icon, label }) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Icon size={13} weight="fill" color="var(--color-mocha)" />
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 300 }}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

// ─── Para quem é indicado ────────────────────────────────────────────────────
function ForWhoSection({ items }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section style={{ background: 'var(--color-bg)', padding: 'clamp(3rem, 6vw, 5rem) var(--container-px)' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        <div ref={ref} style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="eyebrow-pill"
          >
            Para quem é indicado
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
              fontWeight: 400,
              color: 'var(--color-text)',
              marginTop: '1rem',
              lineHeight: 1.15,
            }}
          >
            Você se identifica com<br />
            <em style={{ fontStyle: 'italic', color: 'var(--color-mocha)' }}>alguma dessas situações?</em>
          </motion.h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
          {items.map((item, i) => (
            <motion.div
              key={item.symptom}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background: 'var(--color-bg-card)',
                border: '1px solid var(--color-border-soft)',
                borderRadius: 'var(--radius-card)',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.625rem',
              }}
            >
              <div style={{
                width: '36px', height: '36px', borderRadius: '50%',
                background: 'var(--color-bege)', border: '1px solid var(--color-border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Warning size={16} weight="light" color="var(--color-mocha)" />
              </div>
              <strong style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', fontWeight: 600, color: 'var(--color-text)', lineHeight: 1.3 }}>
                {item.symptom}
              </strong>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', fontWeight: 300, color: 'var(--color-text-muted)', lineHeight: 1.65 }}>
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{
            textAlign: 'center',
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            fontWeight: 400,
            color: 'var(--color-text)',
            marginTop: '2.5rem',
            padding: '1.25rem 1.5rem',
            background: 'var(--color-bege-light)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-md)',
            maxWidth: '56ch',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          Se você se identificou com algum desses pontos, a avaliação com a Dra. Larissa vai definir o
          procedimento mais indicado para o seu caso.
        </motion.p>
      </div>
    </section>
  )
}

// ─── Como funciona ─────────────────────────────────────────────────────────────
function HowItWorksSection({ steps }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="como-funciona" style={{ background: 'var(--color-bg-muted)', padding: 'clamp(3rem, 6vw, 5rem) var(--container-px)' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        <div ref={ref} style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="eyebrow-pill"
          >
            Passo a passo
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', fontWeight: 400, color: 'var(--color-text)', marginTop: '1rem', lineHeight: 1.15 }}
          >
            Como o procedimento<br />
            <em style={{ fontStyle: 'italic', color: 'var(--color-mocha)' }}>é realizado</em>
          </motion.h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start', position: 'relative' }}
            >
              {/* Line connector */}
              {i < steps.length - 1 && (
                <div style={{
                  position: 'absolute',
                  left: '27px',
                  top: '52px',
                  width: '2px',
                  height: 'calc(100% + 0px)',
                  background: 'linear-gradient(to bottom, var(--color-bege), transparent)',
                  zIndex: 0,
                }} />
              )}

              {/* Number circle */}
              <div style={{
                width: '54px',
                height: '54px',
                borderRadius: '50%',
                background: 'var(--color-bg-card)',
                border: '2px solid var(--color-bege)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                zIndex: 1,
                boxShadow: 'var(--shadow-soft)',
              }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.125rem', fontWeight: 500, color: 'var(--color-mocha)', letterSpacing: '-0.02em' }}>
                  {step.num}
                </span>
              </div>

              {/* Content */}
              <div style={{
                background: 'var(--color-bg-card)',
                border: '1px solid var(--color-border-soft)',
                borderRadius: 'var(--radius-md)',
                padding: '1.25rem 1.5rem',
                flex: 1,
                marginBottom: '1rem',
              }}>
                <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', fontWeight: 600, color: 'var(--color-text)', lineHeight: 1.3 }}>
                  {step.title}
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', fontWeight: 300, color: 'var(--color-text-muted)', lineHeight: 1.7, marginTop: '0.375rem' }}>
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Benefícios ──────────────────────────────────────────────────────────────
function BenefitsSection({ benefits }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section style={{ background: 'var(--color-bg)', padding: 'clamp(3rem, 6vw, 5rem) var(--container-px)' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        <div ref={ref} style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
          <motion.span initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="eyebrow-pill">
            O que você ganha
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', fontWeight: 400, color: 'var(--color-text)', marginTop: '1rem', lineHeight: 1.15 }}
          >
            Benefícios do<br />
            <em style={{ fontStyle: 'italic', color: 'var(--color-mocha)' }}>procedimento</em>
          </motion.h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0.75rem' }}>
          {benefits.map((b, i) => (
            <motion.div
              key={b}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.875rem',
                padding: '1rem 1.25rem',
                background: 'var(--color-bg-card)',
                border: '1px solid var(--color-border-soft)',
                borderRadius: 'var(--radius-md)',
              }}
            >
              <CheckCircle size={20} weight="fill" color="var(--color-mocha)" style={{ flexShrink: 0 }} />
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', fontWeight: 400, color: 'var(--color-text)', lineHeight: 1.4 }}>
                {b}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Recuperação ─────────────────────────────────────────────────────────────
function RecoverySection({ recovery }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section style={{ background: 'var(--color-bg-muted)', padding: 'clamp(3rem, 6vw, 5rem) var(--container-px)' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        <div ref={ref} style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
          <motion.span initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="eyebrow-pill">
            <Clock size={12} weight="regular" /> Recuperação
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', fontWeight: 400, color: 'var(--color-text)', marginTop: '1rem', lineHeight: 1.15 }}
          >
            O que esperar<br />
            <em style={{ fontStyle: 'italic', color: 'var(--color-mocha)' }}>após o procedimento</em>
          </motion.h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          {recovery.map((r, i) => (
            <motion.div
              key={r.period}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.1 }}
              style={{
                background: 'var(--color-bg-card)',
                border: '1px solid var(--color-border-soft)',
                borderRadius: 'var(--radius-card)',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                position: 'relative',
              }}
            >
              <span style={{ fontSize: '1.75rem', lineHeight: 1 }}>{r.icon}</span>
              <div style={{
                display: 'inline-block',
                fontFamily: 'var(--font-body)',
                fontSize: '0.625rem',
                fontWeight: 600,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--color-mocha)',
                background: 'var(--color-bege-light)',
                border: '1px solid var(--color-border)',
                padding: '0.2rem 0.6rem',
                borderRadius: 'var(--radius-pill)',
                width: 'fit-content',
              }}>
                {r.period}
              </div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', fontWeight: 300, color: 'var(--color-text-muted)', lineHeight: 1.65 }}>
                {r.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────
function FAQSection({ faq }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section style={{ background: 'var(--color-bg)', padding: 'clamp(3rem, 6vw, 5rem) var(--container-px)' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        <div ref={ref} style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
          <motion.span initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="eyebrow-pill">
            Dúvidas frequentes
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', fontWeight: 400, color: 'var(--color-text)', marginTop: '1rem' }}
          >
            Perguntas sobre<br />
            <em style={{ fontStyle: 'italic', color: 'var(--color-mocha)' }}>este procedimento</em>
          </motion.h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {faq.map((item, i) => (
            <motion.div
              key={item.q}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              style={{
                background: 'var(--color-bg-card)',
                border: '1px solid var(--color-border-soft)',
                borderRadius: 'var(--radius-md)',
                padding: '1.5rem',
              }}
            >
              <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', fontWeight: 600, color: 'var(--color-text)', lineHeight: 1.4, marginBottom: '0.625rem' }}>
                {item.q}
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', fontWeight: 300, color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                {item.a}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── CTA Final ───────────────────────────────────────────────────────────────
function FinalCTA({ proc, waHref, onBack }) {
  return (
    <section style={{
      background: 'var(--color-text)',
      padding: 'clamp(3.5rem, 8vw, 6rem) var(--container-px)',
      textAlign: 'center',
    }}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7 }}
        style={{ maxWidth: '560px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}
      >
        <span style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.625rem',
          fontWeight: 500,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'var(--color-nude)',
          background: 'rgba(201,184,168,0.12)',
          padding: '0.3rem 0.875rem',
          borderRadius: 'var(--radius-pill)',
          border: '1px solid rgba(201,184,168,0.2)',
        }}>
          Próximo passo
        </span>

        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2rem, 4vw, 3.25rem)',
          fontWeight: 400,
          color: 'rgba(253,250,246,0.95)',
          lineHeight: 1.1,
          letterSpacing: '-0.02em',
        }}>
          Pronto para transformar<br />
          <em style={{ fontStyle: 'italic', color: 'var(--color-nude)' }}>o seu olhar?</em>
        </h2>

        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.9375rem',
          fontWeight: 300,
          color: 'rgba(253,250,246,0.6)',
          lineHeight: 1.75,
          maxWidth: '42ch',
        }}>
          A avaliação com a Dra. Larissa é o primeiro passo — sem pressão.
          Só uma conversa honesta sobre o que é possível para o seu caso.
        </p>

        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp"
          style={{ fontSize: '1rem', padding: '1rem 2rem', marginTop: '0.5rem' }}
        >
          <WhatsappLogo size={20} weight="fill" />
          Agendar avaliação pelo WhatsApp
        </a>

        <button
          onClick={onBack}
          style={{
            background: 'none',
            border: 'none',
            fontFamily: 'var(--font-body)',
            fontSize: '0.8125rem',
            fontWeight: 300,
            color: 'rgba(253,250,246,0.4)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.375rem',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.color = 'rgba(253,250,246,0.75)'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(253,250,246,0.4)'}
        >
          <ArrowLeft size={13} /> Voltar ao site da Dra. Larissa
        </button>
      </motion.div>
    </section>
  )
}

// ─── Página completa ──────────────────────────────────────────────────────────
export default function ProcedurePage({ proc, onBack }) {
  const href = waLink(proc.name)

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg)' }}>
      <ProcedureNavbar name={proc.name} onBack={onBack} waHref={href} />
      <ProcedureHero   proc={proc} waHref={href} />
      <ForWhoSection   items={proc.forWho} />
      <HowItWorksSection steps={proc.steps} />
      <BenefitsSection benefits={proc.benefits} />
      <RecoverySection recovery={proc.recovery} />
      <FAQSection      faq={proc.faq} />
      <FinalCTA        proc={proc} waHref={href} onBack={onBack} />
    </div>
  )
}
