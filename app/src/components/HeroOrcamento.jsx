export function HeroOrcamento({ onSubmit }) {
  const WHATSAPP_URL = 'https://api.whatsapp.com/send?phone=557181959330'

  const headline = (
    <>
      Seu consultório merece um site que{' '}
      <span className="text-bronze shimmer-bronze">transmita seu valor</span>
    </>
  )
  const bodyCopy = (
    <>
      Sua atuação em Blefaroplastia merece um espaço online que apresente sua trajetória, seus procedimentos e um canal direto para agendamento e dúvidas.
    </>
  )
  const destaquesDesktop = [
    'Sua trajetória',
    'Seus procedimentos',
    'Agendamento e dúvidas',
  ]

  return (
    <section className="relative w-full lg:min-h-screen flex flex-col overflow-hidden bg-background pb-10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,var(--color-bronze)/8%,transparent)] pointer-events-none" />

      {/* Mobile: imagem full-width + card sobreposto */}
      <div className="lg:hidden w-full">
        <div className="w-full aspect-[4/5] overflow-hidden">
          <img
            src="/images/banner.png"
            alt=""
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="relative z-10 -mt-30 px-4">
          <div className="mx-auto max-w-sm rounded-t-2xl bg-gradient-to-b from-bronze via-bronze-light/80 to-transparent p-[1px]">
            <div className="rounded-t-2xl bg-surface border border-b-0 border-surface-light/40 pt-5 px-4 pb-7 shadow-[0_0_30px_rgba(184,149,107,0.4)]">
              <h1 className="text-2xl font-bold text-foreground text-center leading-tight mb-3">
                {headline}
              </h1>
              <p className="text-muted text-sm leading-relaxed">
                {bodyCopy}
              </p>
              <a
                href="#beneficio-autoridade"
                className="mt-5 inline-flex w-full justify-center rounded-full bg-bronze px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-background shadow-[0_0_24px_rgba(184,149,107,0.45)] transition-colors hover:bg-bronze-light"
              >
                Quero transmitir valor
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop: imagem e card ocupam grande parte da tela, mesmo tamanho */}
      <div className="hidden lg:flex relative z-10 w-full px-4 sm:px-6 py-8 items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center w-full max-w-7xl mx-auto h-[78vh] min-h-[520px]">
          <div className="rounded-2xl overflow-hidden h-full">
            <img
              src="/images/banner2.png"
              alt=""
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="flex">
            <div className="w-full rounded-2xl bg-gradient-to-b from-bronze via-bronze-light/80 to-transparent p-[1px]">
              <div className="rounded-2xl bg-surface border border-surface-light/40 p-6 md:p-8 shadow-[0_0_30px_rgba(184,149,107,0.4)]">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">
                  {headline}
                </h1>
                <p className="text-muted text-base md:text-lg leading-relaxed mb-6">
                  {bodyCopy}
                </p>
                <ul className="flex flex-wrap gap-x-6 gap-y-2 mt-2 mb-6 text-muted">
                  {destaquesDesktop.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-bronze/80" aria-hidden />
                      <span className="text-sm md:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#beneficios"
                  className="mt-4 inline-flex w-full justify-center rounded-full bg-bronze px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-background shadow-[0_0_35px_rgba(184,149,107,0.45)] transition-colors hover:bg-bronze-light"
                >
                  Quero transmitir valor
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
