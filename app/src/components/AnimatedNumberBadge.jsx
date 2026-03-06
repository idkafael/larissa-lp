export function AnimatedNumberBadge({ number }) {
  return (
    <span className="relative w-9 h-9 flex-shrink-0">
      <span className="absolute inset-0 rounded-full overflow-hidden">
        <span
          className="absolute inset-[-150%] animate-border-spin block"
          style={{
            background: 'conic-gradient(from 0deg, transparent 0%, transparent 70%, #D4A520 78%, #F5D060 82%, #D4A520 86%, transparent 94%, transparent 100%)',
          }}
        />
      </span>
      <span className="absolute inset-[2px] rounded-full bg-background block" />
      <span className="relative z-10 w-full h-full flex items-center justify-center text-gold text-sm font-bold">
        {number}
      </span>
    </span>
  )
}
