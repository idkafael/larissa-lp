import {
  HeroSection,
  VideoSection,
  ParaQuemSection,
  ParaQuemQuerSection,
  AvisoSection,
  OfertaSection,
  SergioLimaSection,
  FAQSection,
  CTASection,
  Footer,
} from './components'

function App() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <HeroSection />
      <VideoSection />
      <ParaQuemSection />
      <ParaQuemQuerSection />
      <AvisoSection />
      <OfertaSection />
      <SergioLimaSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}

export default App
