import { useRef, useState, useCallback, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import { DEPOIMENTOS_FILENAMES, depoimentoSrc } from '../data/depoimentosImages'

const TAG_PROCEDIMENTO_PADRAO = 'Blefaroplastia, resultados com autorização'
const TAG_PROCEDIMENTO_DESTAQUE = 'Correção de Ptose Palpebral'
/** Qual foto usa a tag de destaque (0 = primeira). Ajuste se for outra imagem do carrossel. */
const INDICE_SLIDE_TAG_DESTAQUE = 1

const SLIDES = DEPOIMENTOS_FILENAMES.map((filename, index) => ({
  id: `depo-${index}-${filename}`,
  src: depoimentoSrc(filename),
  filename,
  procedureTag:
    index === INDICE_SLIDE_TAG_DESTAQUE ? TAG_PROCEDIMENTO_DESTAQUE : TAG_PROCEDIMENTO_PADRAO,
}))


function ReelSlide({ slide, isActive, slideRef }) {
  return (
    <div
      ref={slideRef}
      data-reel-slide="1"
      style={{
        position: 'relative',
        flex: '0 0 auto',
        width: 'min(86vw, 520px)',
        maxWidth: '100%',
        scrollSnapAlign: 'center',
        scrollSnapStop: 'normal',
        borderRadius: 'var(--radius-card)',
        overflow: 'hidden',
        background: 'var(--color-text)',
        boxShadow: 'var(--shadow-card)',
        /* Altura se adapta à imagem — sem corte */
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <img
        src={slide.src}
        alt={`Caso clínico, foto ${slide.filename}`}
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          maxHeight: 'min(72dvh, 680px)',
          objectFit: 'contain',
        }}
        loading={isActive ? 'eager' : 'lazy'}
        decoding="async"
      />
      {/* Tags sobrepostas no canto inferior esquerdo */}
      <div
        className="slide-overlay"
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          padding: '0.625rem 0.75rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '0.375rem',
          background: 'linear-gradient(to top, rgba(61,53,48,0.5) 0%, transparent 100%)',
          pointerEvents: 'none',
        }}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center' }}>
          <span
            className="eyebrow-pill"
            style={{
              width: 'fit-content',
              background: 'rgba(253,250,246,0.92)',
              color: 'var(--color-text)',
              fontSize: '0.62rem',
              padding: '0.2rem 0.65rem',
            }}
          >
            Caso clínico
          </span>
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.5625rem',
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(253,250,246,0.95)',
              background: 'rgba(61,53,48,0.55)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              padding: '0.35rem 0.7rem',
              borderRadius: 'var(--radius-pill)',
              border: '1px solid rgba(255,255,255,0.2)',
              maxWidth: '100%',
              lineHeight: 1.35,
            }}
          >
            {slide.procedureTag}
          </span>
        </div>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.8125rem',
            fontWeight: 300,
            color: 'rgba(253,250,246,0.7)',
            fontStyle: 'italic',
            lineHeight: 1.5,
            maxWidth: '36ch',
          }}
        >
          Resultado real, pós-operatório. Use as setas ou deslize para o lado.
        </p>
      </div>
    </div>
  )
}

const navBtn = (side) => ({
  position: 'absolute',
  top: 'calc(50% - 20px)', // compensa a altura da legenda abaixo
  transform: 'translateY(-50%)',
  zIndex: 3,
  width: '44px',
  height: '44px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  border: '1px solid var(--color-border)',
  boxShadow: 'var(--shadow-soft)',
  transition: 'transform 0.2s var(--ease-elegant), opacity 0.2s, background 0.2s',
  [side === 'left' ? 'left' : 'right']: 'clamp(4px, 1.5vw, 12px)',
})

export default function CasosClinicosSection() {
  const scrollRef = useRef(null)
  const slideRefs = useRef([])
  const [active, setActive] = useState(0)
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' })
  const scrollRaf = useRef(null)

  const setSlideRef = useCallback((index, el) => {
    slideRefs.current[index] = el
  }, [])

  const updateActiveFromScroll = useCallback(() => {
    const root = scrollRef.current
    if (!root) return
    const r = root.getBoundingClientRect()
    const mid = r.left + r.width / 2
    let best = 0
    let bestDist = Infinity
    slideRefs.current.forEach((el, i) => {
      if (!el) return
      const e = el.getBoundingClientRect()
      const c = e.left + e.width / 2
      const d = Math.abs(c - mid)
      if (d < bestDist) {
        bestDist = d
        best = i
      }
    })
    setActive(best)
  }, [])

  const onScroll = useCallback(() => {
    if (scrollRaf.current != null) cancelAnimationFrame(scrollRaf.current)
    scrollRaf.current = requestAnimationFrame(() => {
      scrollRaf.current = null
      updateActiveFromScroll()
    })
  }, [updateActiveFromScroll])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return undefined
    el.addEventListener('scroll', onScroll, { passive: true })
    updateActiveFromScroll()
    return () => {
      el.removeEventListener('scroll', onScroll)
      if (scrollRaf.current != null) cancelAnimationFrame(scrollRaf.current)
    }
  }, [onScroll, updateActiveFromScroll])

  const scrollToIndex = useCallback((index) => {
    const el = slideRefs.current[index]
    el?.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest',
    })
    setActive(index)
  }, [])

  const scrollBySlide = (dir) => {
    const next = Math.min(Math.max(active + dir, 0), SLIDES.length - 1)
    scrollToIndex(next)
  }

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      scrollBySlide(1)
    }
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      scrollBySlide(-1)
    }
  }

  return (
    <section id="casos" className="section" style={{ background: 'var(--color-bg-muted)' }}>
      <div className="container">
        <div ref={titleRef} style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="eyebrow-pill"
          >
            Casos clínicos
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="display-lg"
            style={{ marginTop: '1rem' }}
          >
            Resultados que<br />
            <em style={{ fontStyle: 'italic', color: 'var(--color-mocha)' }}>falam por si</em>
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
              marginTop: '0.75rem',
              maxWidth: '44ch',
              lineHeight: 1.65,
            }}
          >
            Deslize horizontalmente ou use as setas para ver mais casos.
          </motion.p>
        </div>

        <div
          style={{
            background: 'var(--color-bg-card)',
            border: '1px solid var(--color-border-soft)',
            borderRadius: 'var(--radius-card)',
            padding: 'clamp(0.75rem, 2vw, 1.25rem)',
            boxShadow: 'var(--shadow-soft)',
            position: 'relative',
          }}
        >
          <button
            type="button"
            onClick={() => scrollBySlide(-1)}
            disabled={active === 0}
            aria-label="Foto anterior"
            style={{
              ...navBtn('left'),
              background: 'var(--color-bg-card)',
              color: 'var(--color-text)',
              opacity: active === 0 ? 0.35 : 1,
              pointerEvents: active === 0 ? 'none' : 'auto',
            }}
          >
            <CaretLeft size={22} weight="light" />
          </button>
          <button
            type="button"
            onClick={() => scrollBySlide(1)}
            disabled={active === SLIDES.length - 1}
            aria-label="Próxima foto"
            style={{
              ...navBtn('right'),
              background: 'var(--color-text)',
              color: 'var(--color-white)',
              border: '1px solid transparent',
              opacity: active === SLIDES.length - 1 ? 0.35 : 1,
              pointerEvents: active === SLIDES.length - 1 ? 'none' : 'auto',
            }}
          >
            <CaretRight size={22} weight="light" />
          </button>

          <div
            ref={scrollRef}
            className="casos-scroll"
            tabIndex={0}
            role="region"
            aria-roledescription="carrossel"
            aria-label="Depoimentos, deslize para os lados ou use as setas"
            onKeyDown={onKeyDown}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'stretch',
              gap: 'clamp(0.75rem, 3vw, 1.25rem)',
              overflowX: 'auto',
              overflowY: 'hidden',
              scrollSnapType: 'x mandatory',
              scrollBehavior: 'smooth',
              WebkitOverflowScrolling: 'touch',
              overscrollBehaviorX: 'contain',
              scrollbarWidth: 'none',
              paddingTop: '4px',
              paddingBottom: '0px',
              paddingLeft: 'max(12px, calc(50% - min(43vw, 260px)))',
              paddingRight: 'max(12px, calc(50% - min(43vw, 260px)))',
              outline: 'none',
              borderRadius: 'calc(var(--radius-card) - 8px)',
              msOverflowStyle: 'none', /* IE */
            }}
          >
            {SLIDES.map((slide, i) => (
              <ReelSlide
                key={slide.id}
                slide={slide}
                isActive={i === active}
                slideRef={(el) => setSlideRef(i, el)}
              />
            ))}
          </div>

          <div style={{ marginTop: '1rem', padding: '0 0.25rem' }}>
            <div
              style={{
                height: '4px',
                borderRadius: '2px',
                background: 'var(--color-bege)',
                overflow: 'hidden',
              }}
              aria-hidden="true"
            >
              <div
                style={{
                  height: '100%',
                  width: `${((active + 1) / SLIDES.length) * 100}%`,
                  background: 'var(--color-mocha)',
                  borderRadius: '2px',
                  transition: 'width 0.35s var(--ease-elegant)',
                }}
              />
            </div>
          </div>
        </div>

        <style>{`
          .casos-scroll::-webkit-scrollbar { display: none; }
          @media (max-width: 767px) {
            .slide-overlay { display: none !important; }
          }
        `}</style>

        <p
          style={{
            textAlign: 'center',
            fontFamily: 'var(--font-body)',
            fontSize: '0.75rem',
            color: 'var(--color-text-soft)',
            fontWeight: 300,
            maxWidth: '60ch',
            margin: '1.5rem auto 0',
            lineHeight: 1.5,
          }}
        >
          Fotos reais de pacientes com autorização. Resultados individuais podem variar conforme a anatomia de cada paciente e o planejamento cirúrgico realizado.
        </p>
      </div>
    </section>
  )
}
