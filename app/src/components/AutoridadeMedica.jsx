import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Medal, GraduationCap, Stethoscope, Heart } from '@phosphor-icons/react'

const credentials = [
  { icon: GraduationCap, label: 'Formação', value: 'Medicina, USP, Faculdade de Medicina de São Paulo' },
  { icon: Medal, label: 'Especialização', value: 'Cirurgia Plástica, residência no Hospital das Clínicas (HCFMUSP)' },
  { icon: Stethoscope, label: 'Titulação', value: 'Membro Titular da Sociedade Brasileira de Cirurgia Plástica (SBCP)' },
  { icon: Heart, label: 'Foco clínico', value: 'Blefaroplastia e cirurgia de rejuvenescimento facial com ênfase em naturalidade' },
]

export default function AutoridadeMedica() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="autoridade" className="section">
      <div className="container">
        <div
          ref={ref}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            alignItems: 'center',
          }}
          className="authority-grid"
        >
          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'relative' }}
          >
            <div style={{
              background: 'var(--color-bege-light)',
              border: '1px solid var(--color-border)',
              padding: '4px',
              borderRadius: 'var(--radius-card)',
              boxShadow: 'var(--shadow-card)',
            }}>
              <div
                id="authority-photo"
                style={{
                  borderRadius: 'calc(var(--radius-card) - 4px)',
                  overflow: 'hidden',
                  aspectRatio: '3/4',
                  background: '#D5CBBF',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  position: 'relative',
                }}
              >
                <img
                  src="/images/larissa.jpg"
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

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
          >
            <div>
              <span className="eyebrow-pill">A médica</span>
              <h2 className="display-lg" style={{ marginTop: '1.25rem' }}>
                Especialização<br />que <em style={{ fontStyle: 'italic', color: 'var(--color-mocha)' }}>faz a diferença</em>
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.0625rem', fontWeight: 300, color: 'var(--color-text-muted)', lineHeight: 1.75, marginTop: '1rem', maxWidth: '48ch' }}>
                Com mais de uma década dedicada exclusivamente à cirurgia de pálpebras,
                a Dra. Larissa Vasconcelos desenvolveu uma visão refinada sobre o que torna cada olhar único
                e como a técnica cirúrgica pode servir à individualidade de cada paciente.
              </p>
            </div>

            {/* Credentials */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {credentials.map((cred, i) => {
                const Icon = cred.icon
                return (
                  <motion.div
                    key={cred.label}
                    initial={{ opacity: 0, x: 16 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '1rem',
                      padding: '1rem 1.25rem',
                      background: 'var(--color-bg-card)',
                      border: '1px solid var(--color-border-soft)',
                      borderRadius: 'var(--radius-md)',
                    }}
                  >
                    <div style={{ width: '36px', height: '36px', flexShrink: 0, borderRadius: '50%', background: 'var(--color-bege)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon size={16} weight="light" color="var(--color-mocha)" />
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-text-soft)', marginBottom: '0.25rem' }}>
                        {cred.label}
                      </div>
                      <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', fontWeight: 300, color: 'var(--color-text)', lineHeight: 1.5 }}>
                        {cred.value}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .authority-grid {
            grid-template-columns: 0.85fr 1.15fr !important;
            gap: 5rem !important;
          }
        }
      `}</style>
    </section>
  )
}
