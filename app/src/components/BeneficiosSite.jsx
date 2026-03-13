import { TiltCard } from './TiltCard'

export function BeneficiosSite() {
  const itens = [
    {
      titulo: 'Autoridade e resultados',
      texto: 'Destaque sua experiência e seus resultados para transmitir confiança aos pacientes.',
      icone: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
          <path d="M4 22h16" />
          <path d="M10 14c.5-2.5 2.5-4 5-4" />
          <path d="M14 14v6" />
          <path d="M10 20v-6" />
          <path d="M12 14v6" />
          <path d="M12 14l-2 3" />
          <path d="m10 17 2 3" />
        </svg>
      ),
    },
    {
      titulo: 'Procedimentos e especialidade',
      texto: 'Apresente sua especialidade: Blefaroplastia, lifting de supercílios e outros procedimentos de forma clara.',
      icone: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <circle cx="12" cy="12" r="10" />
          <path d="M8 14s1.5 2 4 2 4-2 4-2" />
          <path d="M9 9h.01" />
          <path d="M15 9h.01" />
        </svg>
      ),
    },
    {
      titulo: 'Contato e agendamento',
      texto: 'WhatsApp, formulário e redes integrados para seus pacientes agendarem e tirarem dúvidas com facilidade.',
      icone: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          <path d="M8 10h.01" />
          <path d="M12 10h.01" />
          <path d="M16 10h.01" />
        </svg>
      ),
    },
  ]

  return (
    <section className="relative w-full py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-4">
          O site que sua prática merece
        </h2>
        <p className="text-muted text-center max-w-xl mx-auto mb-12 md:mb-16">
          Profissional, elegante e focado em converter visitantes em pacientes. Feito para a sua atuação em Blefaroplastia.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {itens.map((item, i) => (
            <div key={i} className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-bronze/45 via-bronze-light/30 to-transparent blur-[16px] opacity-90 pointer-events-none" />
              <TiltCard className="relative flex flex-col items-center text-center p-6 md:p-8 rounded-2xl bg-surface border border-surface-light/50 hover:border-bronze/60 shadow-[0_0_22px_rgba(184,149,107,0.25)] hover:shadow-[0_0_36px_rgba(184,149,107,0.5)] transition-all duration-300 will-change-transform">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center text-bronze border-2 border-bronze/50 bg-bronze/5 mb-5">
                    {item.icone}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.titulo}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {item.texto}
                  </p>
              </TiltCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
