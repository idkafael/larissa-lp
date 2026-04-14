import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const steps = [
  {
    num: '01',
    label: 'Avaliação',
    title: 'Primeira avaliação on-line ou consulta presencial completa',
    desc: 'Análise das pálpebras, estrutura óssea e pele. Conversa sobre expectativas, objetivos e histórico de saúde.',
  },
  {
    num: '02',
    label: 'Indicação',
    title: 'Planejamento personalizado',
    desc: 'Definição da técnica mais adequada para cada olhar (superior, inferior ou combinada), com simulação do resultado.',
  },
  {
    num: '03',
    label: 'Cirurgia',
    title: 'Procedimento cirúrgico',
    desc: 'Realizado em ambiente hospitalar, com anestesia local e sedação. Duração de 1 a 2:30h. Alta no mesmo dia.',
  },
  {
    num: '04',
    label: 'Recuperação',
    title: 'Pós-operatório confortável',
    desc: 'Edema e equimoses nas primeiras duas semanas. Repouso leve. Retorno às atividades sociais em 10 a 14 dias.',
  },
  {
    num: '05',
    label: 'Resultado',
    title: 'Olhar que se renova',
    desc: 'Os resultados definitivos se consolidam em torno de 90 dias. Natural, duradouro e compatível com o seu rosto.',
  },
  {
    num: '06',
    label: 'Acompanhamento',
    title: 'Retornos e cuidado contínuo',
    desc: 'Consultas de acompanhamento para avaliar a cicatrização e garantir o melhor resultado final.',
  },
]

function StepCard({ step, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28, scale: 0.96 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.65, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      style={{
        background: 'var(--color-bg-card)',
        border: '1px solid var(--color-border-soft)',
        borderRadius: 'var(--radius-card)',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        position: 'relative',
        overflow: 'hidden',
        transition: 'box-shadow 0.3s var(--ease-elegant), transform 0.3s var(--ease-elegant)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = 'var(--shadow-hover)'
        e.currentTarget.style.transform = 'translateY(-4px)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = 'none'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      {/* Big number background */}
      <div className="font-numeric" style={{
        position: 'absolute',
        top: '-0.5rem',
        right: '1rem',
        fontSize: '5rem',
        fontWeight: 500,
        letterSpacing: '-0.04em',
        color: 'var(--color-bege)',
        lineHeight: 1,
        userSelect: 'none',
        pointerEvents: 'none',
      }}>
        {step.num}
      </div>

      <span className="eyebrow-pill" style={{ width: 'fit-content', fontSize: '0.625rem' }}>
        {step.label}
      </span>
      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.375rem', fontWeight: 500, color: 'var(--color-text)', lineHeight: 1.2, position: 'relative' }}>
        {step.title}
      </h3>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', fontWeight: 300, color: 'var(--color-text-muted)', lineHeight: 1.7, position: 'relative' }}>
        {step.desc}
      </p>
    </motion.div>
  )
}

export default function Jornada() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' })

  return (
    <section id="jornada" className="section">
      <div className="container">
        <div ref={titleRef} style={{ marginBottom: 'clamp(3rem, 6vw, 5rem)', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1rem' }}>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="eyebrow-pill"
          >
            Como funciona
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="display-lg"
          >
            Sua jornada,<br />
            passo a <em style={{ fontStyle: 'italic', color: 'var(--color-mocha)' }}>passo</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontFamily: 'var(--font-body)', fontSize: '1.0625rem', fontWeight: 300, color: 'var(--color-text-muted)', lineHeight: 1.7, maxWidth: '50ch' }}
          >
            Da primeira consulta ao resultado final, cada etapa é conduzida
            com cuidado e clareza.
          </motion.p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(1, 1fr)',
          gap: '1rem',
        }}
        className="journey-grid"
        >
          {steps.map((step, i) => (
            <StepCard key={step.num} step={step} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .journey-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (min-width: 1024px) {
          .journey-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>
    </section>
  )
}
