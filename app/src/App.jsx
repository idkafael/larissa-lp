import { useRouter } from './router'
import { PROCEDURES_DATA, PROCEDURE_SLUGS } from './data/procedures'
import ProcedurePage from './pages/ProcedurePage'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Beneficios from './components/Beneficios'
import Tecnica from './components/Tecnica'
import Jornada from './components/Jornada'
import ProcedimentosSection from './components/ProcedimentosSection'
import CasosClinicosSection from './components/CasosClinicosSection'
import DepoimentosGoogleSection from './components/DepoimentosGoogleSection'
import AutoridadeMedica from './components/AutoridadeMedica'
import FAQ from './components/FAQ'
import Captacao from './components/Captacao'
import Footer from './components/Footer'
import WhatsAppFAB from './components/WhatsAppFAB'

export default function App() {
  const { path, navigate } = useRouter()

  // Detecta se o caminho corresponde a uma página de procedimento
  const slug = PROCEDURE_SLUGS.find(s => path === `/${s}`)
  if (slug) {
    return (
      <ProcedurePage
        proc={PROCEDURES_DATA[slug]}
        onBack={() => navigate('/')}
      />
    )
  }

  // Página principal (landing page)
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Beneficios />
        <Tecnica />
        <Jornada />
        <ProcedimentosSection navigate={navigate} />
        <CasosClinicosSection />
        <DepoimentosGoogleSection />
        <AutoridadeMedica />
        <FAQ />
        <Captacao />
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  )
}
