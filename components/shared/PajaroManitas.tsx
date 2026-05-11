export function PajaroManitas({ className = "w-36 h-44" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 138" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Pájaro ManitasGo">

      {/* ── CRESTA: acento teal detrás ── */}
      <path d="M 34 22 C 24 8 32 -2 40 6 C 32 12 34 18 36 22 Z" fill="#25B8B8" />

      {/* ── CRESTA: forma naranja principal ── */}
      <path
        d="M 38 26
           C 26 14 18 0  28  4
           C 20 14 26 18 32 22
           C 22  8 30  2 40 10
           C 32  6 36 12 40 20
           C 34  8 42  6 46 18
           Z"
        fill="#F4633A"
      />

      {/* ── CUERPO principal (oscuro) ── */}
      <path
        d="M 28 58
           C  8 58  4 80  8 102
           C 12 122 24 138 44 138
           C 58 138 64 128 60 115
           C 56 102 48  84 52  70
           C 56  58 44 56 28 58 Z"
        fill="#2D4A57"
      />

      {/* ── CABEZA (círculo oscuro) ── */}
      <circle cx="52" cy="44" r="28" fill="#2D4A57" />

      {/* ── PANZA blanca ── */}
      <ellipse cx="56" cy="102" rx="22" ry="30" fill="#FFFFFF" />

      {/* ── ZONA BLANCA cara / mejilla ── */}
      <ellipse cx="64" cy="52" rx="16" ry="20" fill="#FFFFFF" />

      {/* ── PICO superior ── */}
      <path d="M 74 46 L 100 38 L 74 54 Z" fill="#F5A823" />
      {/* ── PICO inferior (sombra) ── */}
      <path d="M 74 54 L 96 51 L 74 60 Z" fill="#D4901A" />

      {/* ── OJO: fondo blanco ── */}
      <circle cx="66" cy="40" r="12" fill="#FFFFFF" />
      {/* ── OJO: pupila ── */}
      <circle cx="66" cy="41" r="5.5" fill="#1A2B34" />
      {/* ── OJO: brillo ── */}
      <circle cx="69" cy="38" r="2" fill="#FFFFFF" />

      {/* ── LÍNEAS ALA (teal) ── */}
      <path d="M 16 88  Q 30 82 40 78" stroke="#25B8B8" strokeWidth="3.8" fill="none" strokeLinecap="round" />
      <path d="M 14 102 Q 28 96 38 92" stroke="#25B8B8" strokeWidth="3.8" fill="none" strokeLinecap="round" />
      <path d="M 14 116 Q 28 110 38 106" stroke="#25B8B8" strokeWidth="3.8" fill="none" strokeLinecap="round" />

    </svg>
  );
}

export function LogoManitasGo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <PajaroManitas className="w-9 h-11" />
      <span
        className="text-[22px] font-black tracking-tight leading-none"
        style={{ color: "#2D4A57", fontFamily: "Inter, system-ui, sans-serif" }}
      >
        ManitasGo
      </span>
    </div>
  );
}
