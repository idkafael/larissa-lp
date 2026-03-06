export function Footer() {
  return (
    <footer className="relative py-8 bg-background border-t border-surface-light/30 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-sm font-bold tracking-wider">
              <span className="text-white">ESQUADRIA</span>{' '}
              <span className="gradient-text-gold">MILIONÁRIA</span>
            </span>
          </div>
          <p className="text-muted text-xs text-center">© 2026 Sérgio Lima. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-muted text-xs hover:text-gold transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="text-muted text-xs hover:text-gold transition-colors">
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
