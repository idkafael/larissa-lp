import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from '@phosphor-icons/react'

const faqs = [
  {
    q: 'Como saber se a blefaroplastia é indicada para mim?',
    a: 'A indicação é feita na consulta de avaliação, onde analisamos a anatomia das suas pálpebras, a qualidade da pele, a estrutura óssea e o que você deseja melhorar. Há casos em que o excesso de pele compromete a visão periférica; nesses casos, a cirurgia tem indicação funcional além da estética.',
  },
  {
    q: 'A blefaroplastia deixa o rosto com aparência artificial?',
    a: 'Não, quando bem indicada e realizada. O objetivo do procedimento é restituir a aparência natural e descansada do olhar, sem criar um olhar diferente. O resultado deve ser indistinguível de uma aparência natural mais jovem.',
  },
  {
    q: 'Como é o pós-operatório?',
    a: 'Nos primeiros 7 dias é comum apresentar edema (inchaço) e hematomas ao redor dos olhos. A maioria das pacientes retorna às atividades sociais entre 10 e 14 dias. Durante esse período, é orientado repouso relativo, uso de compressas e proteção solar. O desconforto é geralmente leve e bem controlado com medicação oral.',
  },
  {
    q: 'Quando vejo os resultados definitivos?',
    a: 'Os principais resultados já são visíveis a partir de 3 a 4 semanas. O resultado definitivo, com a resolução total do edema e o amadurecimento das cicatrizes, se consolida em torno de 90 dias após a cirurgia.',
  },
  {
    q: 'A blefaroplastia corrige as bolsas abaixo dos olhos?',
    a: 'Sim. A blefaroplastia inferior atua diretamente na correção das bolsas infrapalpebral. Ela pode ser feita por via externa (com incisão discreta abaixo dos cílios) ou transconjuntival (sem incisão visível), dependendo da anatomia de cada paciente.',
  },
  {
    q: 'Toda pálpebra caída precisa de cirurgia?',
    a: 'Não necessariamente. Há casos em que o aspecto de pálpebra caída é causado por ptose do supercílio, que pode ser tratado com outros procedimentos. A avaliação presencial é fundamental para determinar a melhor abordagem para cada caso específico.',
  },
]

function FAQItem({ item, index }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      style={{
        borderBottom: '1px solid var(--color-border)',
        overflow: 'hidden',
      }}
    >
      <button
        onClick={() => setOpen(v => !v)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          padding: '1.5rem 0',
          background: 'none',
          cursor: 'pointer',
          textAlign: 'left',
        }}
        aria-expanded={open}
      >
        <span style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.0625rem, 1.5vw, 1.25rem)',
          fontWeight: 500,
          color: open ? 'var(--color-mocha)' : 'var(--color-text)',
          lineHeight: 1.35,
          transition: 'color 0.25s',
        }}>
          {item.q}
        </span>
        <div style={{
          width: '32px',
          height: '32px',
          flexShrink: 0,
          borderRadius: '50%',
          background: open ? 'var(--color-text)' : 'var(--color-bege-light)',
          border: '1px solid var(--color-border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s var(--ease-elegant)',
          color: open ? 'var(--color-white)' : 'var(--color-text-muted)',
        }}>
          {open
            ? <Minus size={14} weight="regular" />
            : <Plus size={14} weight="regular" />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ height: { duration: 0.38, ease: [0.16, 1, 0.3, 1] }, opacity: { duration: 0.25 } }}
          >
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.9375rem',
              fontWeight: 300,
              color: 'var(--color-text-muted)',
              lineHeight: 1.78,
              paddingBottom: '1.75rem',
              maxWidth: '76ch',
            }}>
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' })

  return (
    <section id="faq" className="section" style={{ background: 'var(--color-bg-muted)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', alignItems: 'start' }} className="faq-grid">

          {/* Sticky só no desktop: em 1 coluna, sticky faz a lista rolar por baixo do título */}
          <div ref={titleRef} className="faq-sticky-title">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="eyebrow-pill"
            >
              Dúvidas frequentes
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="display-lg"
              style={{ marginTop: '1.25rem' }}
            >
              Suas perguntas,<br />
              <em style={{ fontStyle: 'italic', color: 'var(--color-mocha)' }}>respondidas</em>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', fontWeight: 300, color: 'var(--color-text-muted)', lineHeight: 1.7, marginTop: '1rem', maxWidth: '38ch' }}
            >
              Perguntas que toda paciente tem antes de dar o próximo passo.
            </motion.p>
          </div>

          {/* FAQ list */}
          <div>
            {faqs.map((item, i) => (
              <FAQItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .faq-sticky-title {
          align-self: start;
        }
        @media (min-width: 900px) {
          .faq-grid { grid-template-columns: 0.85fr 1.15fr !important; }
          .faq-sticky-title {
            position: sticky;
            top: 6rem;
            z-index: 1;
            padding-bottom: 0.5rem;
            background: var(--color-bg-muted);
          }
        }
      `}</style>
    </section>
  )
}
