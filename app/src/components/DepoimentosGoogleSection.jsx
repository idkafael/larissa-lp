import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, ArrowRight } from '@phosphor-icons/react'

// ─── Atualize a URL com o link do perfil Google da Dra. Larissa ──────────────
const GOOGLE_PERFIL_URL = '#'

const reviews = [
  {
    name: 'Ana Paula M.',
    nota: 5,
    data: 'Março de 2025',
    texto:
      'Fiz a blefaroplastia superior com a Dra. Larissa e o resultado superou todas as expectativas. O atendimento foi acolhedor desde a primeira consulta, e a recuperação foi muito mais tranquila do que eu imaginava. Olhar completamente renovado!',
    foto: 'AP',
  },
  {
    name: 'Renata S.',
    nota: 5,
    data: 'Janeiro de 2025',
    texto:
      'Profissional extremamente competente e humana. Ela explicou cada etapa do procedimento de correção de ptose com clareza. Resultado natural, exatamente o que eu queria. Recomendo sem hesitar.',
    foto: 'RS',
  },
  {
    name: 'Cláudia F.',
    nota: 5,
    data: 'Novembro de 2024',
    texto:
      'Fiz o lifting de supercílios e a diferença foi incrível. Meu rosto ficou mais jovem sem parecer que "fiz alguma coisa". A Dra. Larissa tem um olhar artístico e cirúrgico ao mesmo tempo. Estou muito satisfeita.',
    foto: 'CF',
  },
  {
    name: 'Mariana L.',
    nota: 5,
    data: 'Outubro de 2024',
    texto:
      'Pesquisei muito antes de escolher minha cirurgiã. A Dra. Larissa foi a que transmitiu mais segurança e transparência. A blefaroplastia inferior eliminou as bolsas que me incomodavam há anos. Resultado impecável.',
    foto: 'ML',
  },
]

const AVATAR_COLORS = [
  { bg: '#E8E0D5', text: '#6B5C51' },
  { bg: '#DDD0C4', text: '#3D3530' },
  { bg: '#C9B8A8', text: '#3D3530' },
  { bg: '#F0EAE1', text: '#8C7B6E' },
]

function StarRating({ nota }) {
  return (
    <div style={{ display: 'flex', gap: '2px' }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          weight={i < nota ? 'fill' : 'regular'}
          color={i < nota ? '#FBBC04' : '#D5C9BE'}
        />
      ))}
    </div>
  )
}

function ReviewCard({ review, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const avatarStyle = AVATAR_COLORS[index % AVATAR_COLORS.length]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      style={{
        background: 'var(--color-bg-card)',
        border: '1px solid var(--color-border-soft)',
        borderRadius: 'var(--radius-card)',
        padding: 'clamp(1.25rem, 3vw, 1.75rem)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
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
      {/* Header: avatar + nome + data */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
        <div style={{
          width: '42px',
          height: '42px',
          borderRadius: '50%',
          background: avatarStyle.bg,
          color: avatarStyle.text,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'var(--font-body)',
          fontSize: '0.75rem',
          fontWeight: 600,
          flexShrink: 0,
          letterSpacing: '0.03em',
        }}>
          {review.foto}
        </div>
        <div>
          <div style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.875rem',
            fontWeight: 500,
            color: 'var(--color-text)',
          }}>
            {review.name}
          </div>
          <div style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.6875rem',
            fontWeight: 300,
            color: 'var(--color-text-soft)',
            marginTop: '1px',
          }}>
            {review.data}
          </div>
        </div>

        {/* Google icon — top right */}
        <div style={{ marginLeft: 'auto', opacity: 0.5 }}>
          <GoogleMark size={18} />
        </div>
      </div>

      {/* Stars */}
      <StarRating nota={review.nota} />

      {/* Review text */}
      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: '0.875rem',
        fontWeight: 300,
        color: 'var(--color-text-muted)',
        lineHeight: 1.75,
        flex: 1,
      }}>
        "{review.texto}"
      </p>
    </motion.div>
  )
}

// Google "G" SVG — inline, sem dependências externas
function GoogleMark({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  )
}

export default function DepoimentosGoogleSection() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' })

  return (
    <section id="depoimentos" className="section" style={{ background: 'var(--color-bg-muted)' }}>
      <div className="container">

        {/* Header */}
        <div
          ref={titleRef}
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
            marginBottom: 'clamp(2rem, 4vw, 3.5rem)',
          }}
        >
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}
            >
              <span className="eyebrow-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <GoogleMark size={14} />
                Avaliações do Google
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="display-lg"
              style={{ marginTop: '1rem' }}
            >
              O que nossas<br />
              <em style={{ fontStyle: 'italic', color: 'var(--color-mocha)' }}>pacientes dizem</em>
            </motion.h2>

            {/* Score summary */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginTop: '1rem',
              }}
            >
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2.5rem',
                fontWeight: 400,
                color: 'var(--color-text)',
                lineHeight: 1,
                letterSpacing: '-0.02em',
              }}>
                5,0
              </span>
              <div>
                <div style={{ display: 'flex', gap: '3px' }}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={18} weight="fill" color="#FBBC04" />
                  ))}
                </div>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.75rem',
                  fontWeight: 300,
                  color: 'var(--color-text-muted)',
                  marginTop: '3px',
                }}>
                  Baseado em avaliações reais no Google
                </p>
              </div>
            </motion.div>
          </div>

          {/* Desktop CTA */}
          <motion.a
            href={GOOGLE_PERFIL_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontFamily: 'var(--font-body)',
              fontSize: '0.875rem',
              fontWeight: 500,
              color: 'var(--color-mocha-dark)',
              border: '1px solid var(--color-border)',
              background: 'var(--color-bg-card)',
              padding: '0.75rem 1.25rem',
              borderRadius: 'var(--radius-pill)',
              transition: 'all 0.25s var(--ease-elegant)',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'var(--color-text)'
              e.currentTarget.style.color = 'var(--color-white)'
              e.currentTarget.style.borderColor = 'transparent'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'var(--color-bg-card)'
              e.currentTarget.style.color = 'var(--color-mocha-dark)'
              e.currentTarget.style.borderColor = 'var(--color-border)'
            }}
            className="google-cta-desktop"
          >
            <GoogleMark size={16} />
            Ver todas as avaliações
            <ArrowRight size={14} weight="regular" />
          </motion.a>
        </div>

        {/* Reviews grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 1fr)',
            gap: '1rem',
          }}
          className="reviews-grid"
        >
          {reviews.map((review, i) => (
            <ReviewCard key={review.name} review={review} index={i} />
          ))}
        </div>

        {/* Mobile CTA */}
        <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }} className="google-cta-mobile">
          <a
            href={GOOGLE_PERFIL_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontFamily: 'var(--font-body)',
              fontSize: '0.875rem',
              fontWeight: 500,
              color: 'var(--color-mocha-dark)',
              border: '1px solid var(--color-border)',
              background: 'var(--color-bg-card)',
              padding: '0.875rem 1.5rem',
              borderRadius: 'var(--radius-pill)',
            }}
          >
            <GoogleMark size={16} />
            Ver todas as avaliações no Google
            <ArrowRight size={14} weight="regular" />
          </a>
        </div>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .reviews-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (min-width: 1024px) {
          .reviews-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }
        @media (min-width: 640px) {
          .google-cta-mobile { display: none !important; }
        }
        @media (max-width: 639px) {
          .google-cta-desktop { display: none !important; }
        }
      `}</style>
    </section>
  )
}
