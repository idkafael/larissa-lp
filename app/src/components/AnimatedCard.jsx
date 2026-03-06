export function AnimatedCard({ children, className = '', innerBg = 'bg-background/90' }) {
  return (
    <div className={`relative rounded-2xl overflow-hidden ${className}`}>
      <div className="absolute inset-0 rounded-2xl">
        <div className="absolute inset-0 rounded-2xl border border-gold/15" />
        <div className="absolute -inset-[1px] rounded-2xl overflow-hidden">
          <div
            className="absolute inset-[-150%] animate-border-spin"
            style={{
              background: 'conic-gradient(from 0deg, transparent 0%, transparent 70%, #D4A520 78%, #F5D060 82%, #D4A520 86%, transparent 94%, transparent 100%)',
            }}
          />
        </div>
        <div className={`absolute inset-[1px] rounded-[14px] ${innerBg} backdrop-blur-md`} />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  )
}
