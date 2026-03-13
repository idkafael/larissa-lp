import { useRef, useState } from 'react'

const isFinePointer = typeof window !== 'undefined' && window.matchMedia?.('(pointer: fine)').matches

export function TiltCard({ children, className = '', maxRotate = 8, scale = 1.02, transition = 'transform 220ms ease-out' }) {
  const ref = useRef(null)
  const [style, setStyle] = useState({})

  function handleMouseMove(event) {
    if (!isFinePointer) return
    const el = ref.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const midX = rect.width / 2
    const midY = rect.height / 2

    const rotateX = ((y - midY) / midY) * -maxRotate
    const rotateY = ((x - midX) / midX) * maxRotate

    setStyle({
      transform: `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale(${scale})`,
      transition,
      transformStyle: 'preserve-3d',
    })
  }

  function handleMouseLeave() {
    setStyle({
      transform: 'perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)',
      transition,
      transformStyle: 'preserve-3d',
    })
  }

  return (
    <div
      ref={ref}
      className={className}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  )
}

