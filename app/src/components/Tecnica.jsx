import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle } from '@phosphor-icons/react'
import { depoimentoSrc } from '../data/depoimentosImages'

const blocks = [
  {
    tag: 'O que é',
    title: 'Cirurgia de precisão no olhar',
    text: 'A blefaroplastia é um procedimento cirúrgico que atua sobre as pálpebras superiores, inferiores ou ambas, removendo ou reposicionando o excesso de pele, músculo e gordura que se acumula com o tempo. O resultado é um olhar mais descansado, harmônico e jovial, sem alterar a expressão natural do rosto.',
    checks: ['Cirurgia realizada com segurança em Day Hospital', 'Anestesia local com sedação', 'Cicatriz discreta e camuflada nas dobras naturais dos olhos'],
    imageUrl: 'https://i.imgur.com/RwjSrE2.jpg',
    imageAlt: 'Referência visual: o que é blefaroplastia',
  },
  {
    tag: 'Pálpebra Superior',
    title: 'Quando a pele pesa sobre o olhar',
    text: 'Com o envelhecimento, a pele da pálpebra superior perde elasticidade e começa a cair sobre o olho, o que cria a sensação visual de cansaço e pode reduzir o campo de visão em casos mais avançados. A blefaroplastia superior remove esse excesso com precisão, reestabelecendo o contorno natural do olho.',
    checks: ['Indicada para excesso de pele palpebral', 'Melhora visual e estética simultâneas', 'Recuperação rápida'],
    imageUrl: 'https://i.imgur.com/xTGFNvI.jpg',
    imageAlt: 'Referência visual: blefaroplastia da pálpebra superior',
  },
  {
    tag: 'Pálpebra Inferior',
    title: 'Bolsas que envelhecem o olhar',
    text: 'As bolsas inferiores promovem um aspecto de cansaço. Elas surgem quando a gordura natural da órbita ocular se projeta para frente, perdendo o suporte dos tecidos. A blefaroplastia inferior reposiciona ou remove essas bolsas com sutileza, eliminando o aspecto de cansaço crônico sem criar um resultado artificial.',
    checks: ['Cicatriz discreta abaixo dos cílios ou sem cicatriz (via transconjutival)', 'Resultado natural e duradouro', 'Combinável com outras técnicas'],
    imageUrl: depoimentoSrc('20250808_155104000_iOS.jpg'),
    imageAlt: 'Caso clínico, foto 20250808_155104000_iOS, blefaroplastia',
  },
  {
    tag: 'Avaliação',
    title: 'Cada olhar é único',
    text: 'Antes de qualquer decisão cirúrgica, realizamos uma avaliação completa e individualizada. Analisamos a anatomia das pálpebras, a estrutura óssea, a qualidade da pele e os objetivos reais da paciente. O planejamento cirúrgico é feito para cada rosto, sem protocolo genérico.',
    checks: ['Avaliação presencial completa', 'Fotografia clínica padronizada', 'Planejamento cirúrgico personalizado'],
    imageUrl: 'https://i.imgur.com/pBh5rKL.jpg',
    imageAlt: 'Referência visual: avaliação e planejamento do olhar',
  },
]

function TechBlock({ block, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '2rem',
        alignItems: 'center',
        padding: '3rem 0',
        borderTop: '1px solid var(--color-border)',
      }}
      className={`tech-block ${isEven ? 'tech-even' : 'tech-odd'}`}
    >
      {/* Tag + content */}
      <div style={{ order: isEven ? 1 : 2 }} className="tech-text">
        <span className="eyebrow-pill" style={{ marginBottom: '1.25rem', display: 'inline-flex' }}>
          {block.tag}
        </span>
        <h3 className="display-md" style={{ marginTop: '0.75rem', color: 'var(--color-text)' }}>
          {block.title}
        </h3>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', fontWeight: 300, color: 'var(--color-text-muted)', lineHeight: 1.75, marginTop: '1rem', maxWidth: '52ch' }}>
          {block.text}
        </p>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1.5rem' }}>
          {block.checks.map(c => (
            <li key={c} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--color-text-muted)', fontWeight: 300 }}>
              <CheckCircle size={16} weight="regular" color="var(--color-mocha)" style={{ flexShrink: 0 }} />
              {c}
            </li>
          ))}
        </ul>
      </div>

      {/* Visual accent */}
      <div style={{ order: isEven ? 2 : 1 }} className="tech-visual">
        <div style={{
          background: block.imageUrl ? 'var(--color-text)' : 'var(--color-bege-light)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-card)',
          padding: block.imageUrl ? 0 : '2.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          aspectRatio: '4/3',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {block.imageUrl ? (
            <img
              src={block.imageUrl}
              alt={block.imageAlt ?? ''}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              className="tech-image"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
          ) : (
            <>
              <div style={{
                position: 'absolute',
                inset: 0,
                background: `radial-gradient(ellipse 60% 60% at ${isEven ? '70% 30%' : '30% 70%'}, rgba(201,184,168,0.3) 0%, transparent 70%)`,
              }} />
              <span className="font-numeric" style={{
                fontSize: 'clamp(5rem, 10vw, 9rem)',
                fontWeight: 500,
                letterSpacing: '-0.04em',
                color: 'var(--color-nude)',
                lineHeight: 1,
                opacity: 0.6,
                userSelect: 'none',
                position: 'relative',
              }}>
                {String(index + 1).padStart(2, '0')}
              </span>
            </>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function Tecnica() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' })

  return (
    <section id="tecnica" className="section" style={{ background: 'var(--color-bg-muted)' }}>
      <div className="container">
        <div ref={titleRef} style={{ maxWidth: '640px', marginBottom: 'clamp(3rem, 6vw, 4.5rem)' }}>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="eyebrow-pill"
          >
            Sobre o Procedimento
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="display-lg"
            style={{ marginTop: '1.25rem' }}
          >
            Blefaroplastia:<br />
            <em style={{ fontStyle: 'italic', color: 'var(--color-mocha)' }}>técnica e cuidado</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontFamily: 'var(--font-body)', fontSize: '1.0625rem', fontWeight: 300, color: 'var(--color-text-muted)', lineHeight: 1.7, marginTop: '1rem' }}
          >
            Entenda o que é feito, como funciona e por que o resultado dura.
          </motion.p>
        </div>

        <div>
          {blocks.map((b, i) => (
            <TechBlock key={b.tag} block={b} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        .tech-image {
          transform: scale(1.1);
          transform-origin: center;
        }
        @media (min-width: 768px) {
          .tech-image {
            transform: none;
          }
          .tech-block {
            grid-template-columns: 1fr 1fr !important;
            gap: 4rem !important;
            padding: 4rem 0 !important;
          }
          .tech-odd .tech-text { order: 2 !important; }
          .tech-odd .tech-visual { order: 1 !important; }
          .tech-even .tech-text { order: 1 !important; }
          .tech-even .tech-visual { order: 2 !important; }
        }
      `}</style>
    </section>
  )
}
