export function HeroOrcamento({ onSubmit }) {
  const WHATSAPP_URL = 'https://api.whatsapp.com/send?phone=SEU_NUMERO_AQUI'

  const headline = (
    <>
      Seu consultório merece um site que{' '}
      <span className="text-bronze shimmer-bronze">transmite confiança</span>
    </>
  )
  const bodyCopy = (
    <>
      Sua atuação em Blefaroplastia merece um espaço online que apresente sua trajetória, seus procedimentos e um canal direto para agendamento e dúvidas. Solicite um orçamento sem compromisso.
    </>
  )

  return (
    <section className="relative w-full min-h-screen flex flex-col overflow-hidden bg-background">
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
            <p className="text-muted text-sm leading-relaxed mb-6">
              {bodyCopy}
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex w-full items-center justify-center rounded-xl bg-bronze px-6 py-3 text-sm font-semibold uppercase tracking-wide text-background transition-colors hover:bg-bronze-light"
            >
              Falar no WhatsApp
            </a>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop: grid imagem + texto | formulário */}
      <div className="hidden lg:flex relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full max-w-6xl mx-auto">
          <div>
            <img
              src="/images/banner.png"
              alt=""
              className="w-full mb-6 rounded-xl object-cover"
            />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              {headline}
            </h1>
            <p className="text-muted text-base md:text-lg leading-relaxed max-w-lg mb-8">
              {bodyCopy}
            </p>
            <p className="text-foreground/90 text-sm md:text-base font-medium">
              Entramos em contato em breve.
            </p>
          </div>
          <div className="lg:pl-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full justify-center rounded-full bg-bronze px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-background shadow-[0_0_35px_rgba(184,149,107,0.45)] transition-colors hover:bg-bronze-light max-w-xs"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
