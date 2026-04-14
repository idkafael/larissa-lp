import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Eye, Sparkle, Drop, ArrowUp, Sun, Leaf, ArrowRight } from '@phosphor-icons/react'

const PROCEDURES = [
  {
    num: '01',
    icon: Eye,
    tag: 'Laser',
    name: 'Blefaroplastia Superior a laser',
    desc: 'Remoção do excesso de pele da pálpebra superior com precisão laser e mínimo tempo de recuperação.',
    slug: 'blefaroplastia-superior',
  },
  {
    num: '02',
    icon: Leaf,
    tag: 'Laser',
    name: 'Blefaroplastia Inferior a laser',
    desc: 'Correção de bolsas e excesso de pele abaixo dos olhos, devolvendo contorno jovem e descansado.',
    slug: 'blefaroplastia-inferior',
  },
  {
    num: '03',
    icon: Sparkle,
    tag: 'Laser',
    name: 'Blefaroplastia Estruturada a laser',
    desc: 'Abordagem completa com remoção de pele e redistribuição de gordura para resultado harmonioso e duradouro.',
    slug: 'blefaroplastia-estruturada',
  },
  {
    num: '04',
    icon: Eye,
    tag: 'Cirurgia',
    name: 'Correção de Ptose Palpebral',
    desc: 'Eleva a pálpebra caída, recuperando campo visual e a expressão natural do olhar.',
    slug: 'ptose-palpebral',
  },
  {
    num: '05',
    icon: ArrowUp,
    tag: 'Cirurgia',
    name: 'Lifting de Supercílios',
    desc: 'Eleva e reposiciona a sobrancelha rejuvenescendo o terço superior do rosto com naturalidade.',
    slug: 'lifting-supercilios',
  },
  {
    num: '06',
    icon: Sun,
    tag: 'Laser',
    name: 'Ressurfacing palpebral com laser de CO₂',
    desc: 'Renova a pele das pálpebras, reduzindo rugas finas, manchas e textura irregular com laser fracionado.',
    slug: 'ressurfacing-laser',
  },
  {
    num: '07',
    icon: Drop,
    tag: 'Estético',
    name: 'Toxina botulínica estética e funcional',
    desc: 'Aplicação nas pálpebras para fins estéticos (suavizar linhas) ou funcionais (blefarospasmo).',
    slug: 'toxina-botulinica',
  },
]

const tagColors = {
  Laser:    { bg: 'rgba(107,92,81,0.10)', color: '#6B5C51' },
  Cirurgia: { bg: 'rgba(140,123,110,0.10)', color: '#8C7B6E' },
  Estético: { bg: 'rgba(201,184,168,0.25)', color: '#8C7B6E' },
}

function ProcedureCard({ proc, index, navigate }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const Icon = proc.icon
  const tagStyle = tagColors[proc.tag] || tagColors.Estético

  const handleClick = (e) => {
    e.preventDefault()
    navigate(`/${proc.slug}`)
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      style={{
        background: 'var(--color-bg-card)',
        border: '1px solid var(--color-border-soft)',
        borderRadius: 'var(--radius-card)',
        padding: 'clamp(1.25rem, 2.5vw, 1.75rem)',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.875rem',
        position: 'relative',
        overflow: 'hidden',
        transition: 'box-shadow 0.3s var(--ease-elegant), transform 0.3s var(--ease-elegant)',
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
      {/* Número decorativo de fundo */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          right: '0.75rem',
          top: '-0.75rem',
          fontFamily: 'var(--font-display)',
          fontSize: '5rem',
          fontWeight: 400,
          color: 'var(--color-bege)',
          lineHeight: 1,
          pointerEvents: 'none',
          userSelect: 'none',
          letterSpacing: '-0.04em',
        }}
      >
        {proc.num}
      </span>

      {/* Ícone + tag */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <div style={{
          width: '44px', height: '44px', borderRadius: '50%',
          background: 'var(--color-bege)', border: '1px solid var(--color-border)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}>
          <Icon size={20} weight="light" color="var(--color-mocha)" />
        </div>
        <span style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.5625rem',
          fontWeight: 500,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          background: tagStyle.bg,
          color: tagStyle.color,
          padding: '0.2rem 0.6rem',
          borderRadius: 'var(--radius-pill)',
        }}>
          {proc.tag}
        </span>
      </div>

      {/* Nome */}
      <h3 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
        fontWeight: 500,
        color: 'var(--color-text)',
        lineHeight: 1.25,
      }}>
        {proc.name}
      </h3>

      {/* Descrição */}
      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: '0.875rem',
        fontWeight: 300,
        color: 'var(--color-text-muted)',
        lineHeight: 1.7,
        flex: 1,
      }}>
        {proc.desc}
      </p>

      {/* Botão de redirect */}
      <a
        href={`/${proc.slug}`}
        onClick={handleClick}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          alignSelf: 'flex-start',
          fontFamily: 'var(--font-body)',
          fontSize: '0.8125rem',
          fontWeight: 500,
          color: 'var(--color-white)',
          background: 'var(--color-text)',
          padding: '0.5rem 1.125rem',
          borderRadius: 'var(--radius-pill)',
          letterSpacing: '0.02em',
          transition: 'background 0.25s var(--ease-elegant), gap 0.2s var(--ease-elegant)',
          marginTop: '0.25rem',
          textDecoration: 'none',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = 'var(--color-mocha-dark)'
          e.currentTarget.style.gap = '0.75rem'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = 'var(--color-text)'
          e.currentTarget.style.gap = '0.5rem'
        }}
      >
        Saiba mais
        <ArrowRight size={13} weight="regular" />
      </a>
    </motion.div>
  )
}

export default function ProcedimentosSection({ navigate }) {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' })

  return (
    <section id="procedimentos" className="section" style={{ background: 'var(--color-bg)' }}>
      <div className="container">

        {/* Header */}
        <div ref={titleRef} style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="eyebrow-pill"
          >
            Procedimentos realizados
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="display-lg"
            style={{ marginTop: '1rem' }}
          >
            Uma clínica especializada<br />
            <em style={{ fontStyle: 'italic', color: 'var(--color-mocha)' }}>em cada detalhe do olhar</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.9375rem',
              fontWeight: 300,
              color: 'var(--color-text-muted)',
              marginTop: '0.875rem',
              maxWidth: '48ch',
              lineHeight: 1.7,
            }}
          >
            Do procedimento mais simples ao mais completo, cada técnica é
            escolhida de acordo com a anatomia e o objetivo de cada paciente.
          </motion.p>
        </div>

        {/* Grid de procedimentos */}
        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '1rem' }}
          className="procs-grid"
        >
          {PROCEDURES.map((proc, i) => (
            <ProcedureCard key={proc.num} proc={proc} index={i} navigate={navigate} />
          ))}
        </div>

        {/* CTA final */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          style={{
            marginTop: 'clamp(2rem, 4vw, 3rem)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
            textAlign: 'center',
          }}
        >
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.9375rem',
            fontWeight: 300,
            color: 'var(--color-text-muted)',
            maxWidth: '44ch',
            lineHeight: 1.65,
          }}>
            Não sabe qual procedimento é ideal para você? A avaliação individualizada define o melhor caminho.
          </p>
          <a href="#captacao" className="btn-primary">
            Agendar avaliação gratuita
            <span className="arrow-icon">
              <ArrowRight size={14} weight="bold" />
            </span>
          </a>
        </motion.div>
      </div>

      <style>{`
        @media (min-width: 560px) {
          .procs-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (min-width: 960px) {
          .procs-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>
    </section>
  )
}
