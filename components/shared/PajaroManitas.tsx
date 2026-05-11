/* Pájaro Manitas — woodpecker mascot, estilo flat cartoon */
export function PajaroManitas({ className = "w-40 h-48" }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 190" xmlns="http://www.w3.org/2000/svg" className={className}>

      {/* ---- CRESTA (detrás de la cabeza) ---- */}
      <path d="M 62 42 L 56 24 L 64 38 L 66 18 L 70 36 L 75 14 L 78 36 L 84 22 L 82 40" fill="#F97316" />

      {/* ---- COLA ---- */}
      <path d="M 52 148 L 36 172 L 46 158 L 40 178 L 54 162 L 52 180 L 64 165" fill="#1A2E3A" />

      {/* ---- CUERPO ---- */}
      <ellipse cx="82" cy="130" rx="38" ry="46" fill="#1A2E3A" />

      {/* Panza blanca */}
      <ellipse cx="90" cy="138" rx="22" ry="32" fill="#FFFFFF" />

      {/* ---- ALA izquierda ---- */}
      <path d="M 46 108 C 30 118 26 148 48 155 C 56 138 58 120 68 110 Z" fill="#0F1F2A" />

      {/* ---- CABEZA ---- */}
      <circle cx="88" cy="70" r="36" fill="#1A2E3A" />

      {/* Mejilla blanca */}
      <ellipse cx="102" cy="78" rx="14" ry="12" fill="#FFFFFF" />

      {/* ---- OJO ---- */}
      <circle cx="104" cy="66" r="14" fill="#FFFFFF" />
      <circle cx="106" cy="67" r="8" fill="#1A2E3A" />
      <circle cx="109" cy="64" r="3" fill="#FFFFFF" />

      {/* ---- PICO ---- */}
      {/* Pico superior */}
      <path d="M 118 70 L 140 65 L 118 76 Z" fill="#F59E0B" />
      {/* Pico inferior */}
      <path d="M 118 76 L 136 74 L 118 82 Z" fill="#D97706" />

      {/* ---- DETALLE ALA (plumas) ---- */}
      <path d="M 52 130 Q 60 120 72 125" stroke="#2D4A5A" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M 50 140 Q 58 130 70 135" stroke="#2D4A5A" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M 50 150 Q 58 140 70 145" stroke="#2D4A5A" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* ---- PATAS ---- */}
      <path d="M 76 172 L 72 185 M 72 185 L 62 188 M 72 185 L 70 192" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 90 172 L 90 185 M 90 185 L 80 188 M 90 185 L 96 192" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />

    </svg>
  );
}
