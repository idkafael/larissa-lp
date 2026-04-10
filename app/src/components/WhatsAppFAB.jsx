import { motion } from 'framer-motion'
import { WhatsappLogo } from '@phosphor-icons/react'

const WA_NUMBER = '5511999999999'
const WA_MESSAGE = 'Olá, Dra. Larissa Vasconcelos! Gostaria de agendar uma avaliação para blefaroplastia.'
const waLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`

export default function WhatsAppFAB() {
  return (
    <motion.a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar pelo WhatsApp"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed',
        bottom: '1.75rem',
        right: '1.75rem',
        zIndex: 90,
        width: '56px',
        height: '56px',
        borderRadius: '50%',
        background: '#25D366',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 20px rgba(37,211,102,0.35), 0 2px 8px rgba(0,0,0,0.12)',
        transition: 'transform 0.3s var(--ease-elegant), box-shadow 0.3s var(--ease-elegant)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'scale(1.1)'
        e.currentTarget.style.boxShadow = '0 6px 28px rgba(37,211,102,0.5), 0 4px 12px rgba(0,0,0,0.15)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'scale(1)'
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,211,102,0.35), 0 2px 8px rgba(0,0,0,0.12)'
      }}
    >
      {/* Pulse ring */}
      <span
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          border: '2px solid rgba(37,211,102,0.4)',
          animation: 'wa-pulse 2.5s ease-out infinite',
        }}
        aria-hidden="true"
      />
      <WhatsappLogo size={26} weight="fill" />

      <style>{`
        @keyframes wa-pulse {
          0% { transform: scale(1); opacity: 0.6; }
          80% { transform: scale(1.6); opacity: 0; }
          100% { transform: scale(1.6); opacity: 0; }
        }
      `}</style>
    </motion.a>
  )
}
