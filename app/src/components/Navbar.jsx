import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { List, X } from '@phosphor-icons/react'

const navLinks = [
  { label: 'Procedimento', href: '#tecnica' },
  { label: 'Jornada', href: '#jornada' },
  { label: 'Resultados', href: '#casos' },
  { label: 'Sobre', href: '#autoridade' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }, 300)
  }

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: '1.25rem var(--container-px)',
          display: 'flex',
          justifyContent: 'center',
          pointerEvents: 'none',
        }}
      >
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            background: scrolled ? 'rgba(253,250,246,0.88)' : 'rgba(253,250,246,0.65)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-pill)',
            padding: '0.625rem 0.75rem 0.625rem 1.5rem',
            boxShadow: scrolled ? 'var(--shadow-card)' : 'var(--shadow-soft)',
            transition: 'all 0.4s var(--ease-elegant)',
            pointerEvents: 'auto',
            width: '100%',
            maxWidth: '920px',
          }}
        >
          {/* Logo */}
          <a href="#" style={{ display: 'flex', flexDirection: 'column', gap: '1px', flexShrink: 0 }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.125rem', fontWeight: 500, color: 'var(--color-text)', letterSpacing: '-0.01em', lineHeight: 1 }}>
              Dra. Larissa Vasconcelos
            </span>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.625rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-mocha)', fontWeight: 500 }}>
              Blefaroplastia
            </span>
          </a>

          {/* Desktop links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }} className="nav-desktop-links">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.8125rem',
                  fontWeight: 400,
                  color: 'var(--color-text-muted)',
                  padding: '0.375rem 0.75rem',
                  borderRadius: 'var(--radius-pill)',
                  transition: 'all 0.25s var(--ease-elegant)',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-bege-light)'; e.currentTarget.style.color = 'var(--color-text)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--color-text-muted)' }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
            <a
              href="#captacao"
              className="btn-primary nav-cta-desktop"
              style={{ fontSize: '0.8125rem', padding: '0.625rem 1.25rem' }}
            >
              Agendar Avaliação
            </a>
            <button
              onClick={() => setMenuOpen(v => !v)}
              className="nav-hamburger"
              aria-label="Menu"
              style={{
                width: '2.5rem',
                height: '2.5rem',
                borderRadius: 'var(--radius-pill)',
                background: 'var(--color-bege-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-text)',
                transition: 'background 0.2s',
              }}
            >
              {menuOpen ? <X size={18} weight="regular" /> : <List size={18} weight="regular" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 99,
              background: 'rgba(253,250,246,0.97)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
            }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 24 }}
                transition={{ duration: 0.35, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => handleNavClick(link.href)}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2rem, 5vw, 3rem)',
                  fontWeight: 400,
                  color: 'var(--color-text)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  letterSpacing: '-0.01em',
                  padding: '0.25rem 1rem',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--color-mocha)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text)'}
              >
                {link.label}
              </motion.button>
            ))}
            <motion.a
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, delay: navLinks.length * 0.07 + 0.05, ease: [0.16, 1, 0.3, 1] }}
              href="#captacao"
              className="btn-primary"
              style={{ marginTop: '1.5rem' }}
              onClick={() => setMenuOpen(false)}
            >
              Agendar Avaliação
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop-links { display: none !important; }
          .nav-cta-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
        @media (min-width: 769px) {
          .nav-hamburger { display: none !important; }
          .nav-cta-desktop { display: inline-flex !important; }
        }
      `}</style>
    </>
  )
}
