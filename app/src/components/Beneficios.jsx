import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Eye, Sparkle, Leaf, Smiley, Flower } from '@phosphor-icons/react'

const benefits = [
  {
    icon: Eye,
    title: 'Olhar mais descansado',
    desc: 'A queda das pálpebras superiores dá aspecto cansado ao rosto. A blefaroplastia remove esse excesso, devolvendo leveza ao olhar.',
  },
  {
    icon: Flower,
    title: 'Rejuvenescimento natural',
    desc: 'O resultado respeita a identidade de cada rosto. O objetivo é um olhar renovado, não um olhar diferente.',
  },
  {
    icon: Leaf,
    title: 'Mais harmonia facial',
    desc: 'Os olhos são o centro de expressão do rosto. Quando recuperam o contorno, todo o conjunto facial ganha equilíbrio.',
  },
  {
    icon: Sparkle,
    title: 'Sem bolsas abaixo dos olhos',
    desc: 'As bolsas inferiores promovem um aspecto de cansaço.',
  },
  {
    icon: Smiley,
    title: 'Autoestima sem perder identidade',
    desc: 'Sentir-se bem ao espelho sem parecer que "fez alguma coisa". Esse é o padrão que buscamos em cada resultado.',
  },
]

function BenefitItem({ benefit, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const Icon = benefit.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      style={{
        display: 'flex',
        gap: '1.25rem',
        alignItems: 'flex-start',
        padding: '1.75rem',
        background: 'var(--color-bg-card)',
        border: '1px solid var(--color-border-soft)',
        borderRadius: 'var(--radius-card)',
        transition: 'box-shadow 0.3s var(--ease-elegant), transform 0.3s var(--ease-elegant)',
        cursor: 'default',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = 'var(--shadow-hover)'
        e.currentTarget.style.transform = 'translateY(-3px)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = 'none'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      <div style={{
        width: '44px',
        height: '44px',
        flexShrink: 0,
        borderRadius: '50%',
        background: 'var(--color-bege)',
        border: '1px solid var(--color-border)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Icon size={20} weight="light" color="var(--color-mocha)" />
      </div>
      <div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 500, color: 'var(--color-text)', lineHeight: 1.2 }}>
          {benefit.title}
        </h3>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', fontWeight: 300, color: 'var(--color-text-muted)', lineHeight: 1.7, marginTop: '0.5rem' }}>
          {benefit.desc}
        </p>
      </div>
    </motion.div>
  )
}

export default function Beneficios() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' })

  return (
    <section id="beneficios" className="section">
      <div className="container">
        {/* Section header */}
        <div ref={titleRef} style={{ maxWidth: '600px', marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="eyebrow-pill"
          >
            Por que fazer
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="display-lg"
            style={{ marginTop: '1.25rem', color: 'var(--color-text)' }}
          >
            O que muda<br />no seu olhar
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontFamily: 'var(--font-body)', fontSize: '1.0625rem', fontWeight: 300, color: 'var(--color-text-muted)', lineHeight: 1.7, marginTop: '1rem', maxWidth: '50ch' }}
          >
            A blefaroplastia não transforma o rosto: ela devolve ao olhar a
            leveza que o tempo foi retirando.
          </motion.p>
        </div>

        {/* Benefits grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(1, 1fr)',
          gap: '1rem',
        }}
        className="benefits-grid"
        >
          {benefits.map((b, i) => (
            <BenefitItem key={b.title} benefit={b} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .benefits-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  )
}
