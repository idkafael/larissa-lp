export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--color-text)',
        color: 'rgba(253,250,246,0.55)',
        padding: '3rem 0 2.5rem',
      }}
    >
      <div className="container">
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.5rem',
          paddingBottom: '2rem',
          borderBottom: '1px solid rgba(253,250,246,0.08)',
        }}>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 400, color: 'rgba(253,250,246,0.9)', letterSpacing: '-0.01em' }}>
              Dra. Larissa Vasconcelos
            </div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.6875rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-nude)', fontWeight: 500, marginTop: '2px' }}>
              Especialista em Blefaroplastia, CRM-SP
            </div>
          </div>

          <nav style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            {[
              ['Procedimento', '#tecnica'],
              ['Jornada', '#jornada'],
              ['Sobre', '#autoridade'],
              ['FAQ', '#faq'],
              ['Agendar', '#captacao'],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.8125rem',
                  fontWeight: 300,
                  color: 'rgba(253,250,246,0.55)',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'rgba(253,250,246,0.9)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(253,250,246,0.55)'}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: '1.5rem',
          flexWrap: 'wrap',
          gap: '0.75rem',
        }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 300 }}>
            © {new Date().getFullYear()} Dra. Larissa Vasconcelos. Todos os direitos reservados.
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 300 }}>
            CFM, SBCP, membro titular de cirurgia plástica
          </p>
        </div>
      </div>
    </footer>
  )
}
