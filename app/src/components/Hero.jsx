import { motion } from 'framer-motion'
import { ArrowRight, Play } from '@phosphor-icons/react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28, filter: 'blur(4px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100dvh',
        display: 'flex',
        alignItems: 'center',
        background: 'var(--color-bg)',
        paddingTop: '6rem',
        paddingBottom: '4rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle background texture gradient */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 70% 60% at 75% 50%, rgba(201,184,168,0.18) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 20% 80%, rgba(232,224,213,0.25) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem',
          alignItems: 'center',
        }}
        className="hero-grid"
        >
          {/* TEXT COLUMN */}
          <div style={{ maxWidth: '560px' }}>
            <motion.div {...fadeUp(0.1)}>
              <span className="eyebrow-pill">
                <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--color-mocha)', display: 'inline-block' }} />
                Blefaroplastia, cirurgia de pálpebras
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.22)}
              className="display-xl"
              style={{ marginTop: '1.75rem', color: 'var(--color-text)' }}
            >
              O olhar que<br />
              <em style={{ fontStyle: 'italic', color: 'var(--color-mocha)' }}>sempre foi</em><br />
              seu
            </motion.h1>

            <motion.p
              {...fadeUp(0.36)}
              style={{
                marginTop: '1.5rem',
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                fontWeight: 300,
                color: 'var(--color-text-muted)',
                lineHeight: 1.7,
                maxWidth: '42ch',
              }}
            >
              Especialista em blefaroplastia com foco em resultados naturais. 
              Cada avaliação é um olhar único, preciso, individualizado e humano.
            </motion.p>

            <motion.div {...fadeUp(0.48)} style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
              <a href="#captacao" className="btn-primary">
                Agendar Avaliação
                <span className="arrow-icon">
                  <ArrowRight size={14} weight="regular" />
                </span>
              </a>
              <a href="#tecnica" className="btn-ghost">
                <Play size={13} weight="fill" style={{ color: 'var(--color-nude)' }} />
                Entenda o procedimento
              </a>
            </motion.div>

            {/* Social proof */}
            <motion.div
              {...fadeUp(0.60)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                marginTop: '3rem',
                paddingTop: '2rem',
                borderTop: '1px solid var(--color-border)',
                flexWrap: 'wrap',
              }}
            >
              {[
                { num: '12+', label: 'Anos de experiência' },
                { num: '2.400+', label: 'Cirurgias realizadas' },
                { num: '100%', label: 'Foco em pálpebras' },
              ].map(stat => (
                <div key={stat.label}>
                  <div className="font-numeric" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--color-text)', lineHeight: 1 }}>
                    {stat.num}
                  </div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--color-text-soft)', marginTop: '0.25rem', letterSpacing: '0.02em' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* PHOTO PLACEHOLDER COLUMN */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'relative' }}
          >
            {/* Double-bezel outer shell */}
            <div
              style={{
                background: 'var(--color-bege-light)',
                border: '1px solid var(--color-border)',
                padding: '4px',
                borderRadius: '2.5rem',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <div
                id="doctor-photo"
                style={{
                  borderRadius: 'calc(2.5rem - 4px)',
                  overflow: 'hidden',
                  aspectRatio: '4 / 5',
                  background: '#D9CFC4',
                  position: 'relative',
                }}
              >
                <img
                  src="/images/prof.png"
                  alt="Dra. Larissa Vasconcelos, especialista em blefaroplastia"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                  }}
                />
              </div>
            </div>


          </motion.div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .hero-grid {
            grid-template-columns: 1.1fr 0.9fr !important;
            gap: 4rem !important;
          }
        }
      `}</style>
    </section>
  )
}

