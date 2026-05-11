/* Ilustración pantalla 1: persona relajada en sofá */
export function IlustracionSofa({ className = "w-full h-64" }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Fondo círculo suave */}
      <circle cx="160" cy="120" r="100" fill="#F0FDF9" />

      {/* ---- SOFÁ ---- */}
      {/* Respaldo */}
      <rect x="50" y="115" width="220" height="55" rx="12" fill="#3B82F6" />
      {/* Asiento */}
      <rect x="60" y="148" width="200" height="35" rx="8" fill="#2563EB" />
      {/* Cojín izquierdo */}
      <rect x="62" y="118" width="85" height="45" rx="8" fill="#60A5FA" />
      {/* Cojín derecho */}
      <rect x="173" y="118" width="85" height="45" rx="8" fill="#60A5FA" />
      {/* Línea divisoria cojines */}
      <line x1="160" y1="118" x2="160" y2="163" stroke="#3B82F6" strokeWidth="2" />
      {/* Brazo izquierdo */}
      <rect x="42" y="128" width="24" height="55" rx="8" fill="#2563EB" />
      {/* Brazo derecho */}
      <rect x="254" y="128" width="24" height="55" rx="8" fill="#2563EB" />
      {/* Pata izq */}
      <rect x="58" y="180" width="12" height="18" rx="4" fill="#1D4ED8" />
      {/* Pata der */}
      <rect x="250" y="180" width="12" height="18" rx="4" fill="#1D4ED8" />

      {/* ---- PERSONA (sentada) ---- */}
      {/* Cuerpo */}
      <rect x="148" y="110" width="44" height="50" rx="10" fill="#6EE7B7" />
      {/* Piernas */}
      <rect x="148" y="150" width="18" height="30" rx="6" fill="#374151" />
      <rect x="174" y="150" width="18" height="30" rx="6" fill="#374151" />
      {/* Zapatos */}
      <ellipse cx="157" cy="182" rx="12" ry="6" fill="#1F2937" />
      <ellipse cx="183" cy="182" rx="12" ry="6" fill="#1F2937" />
      {/* Cabeza */}
      <circle cx="170" cy="95" r="22" fill="#FBBF24" />
      {/* Pelo */}
      <path d="M 150 88 Q 155 68 170 72 Q 185 68 190 88 Q 185 75 170 76 Q 155 75 150 88" fill="#1F2937" />
      {/* Ojos */}
      <circle cx="163" cy="93" r="2.5" fill="#1F2937" />
      <circle cx="177" cy="93" r="2.5" fill="#1F2937" />
      {/* Sonrisa */}
      <path d="M 163 102 Q 170 108 177 102" stroke="#1F2937" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Brazo izq (apoyado en respaldo) */}
      <path d="M 148 120 Q 130 115 118 120" stroke="#6EE7B7" strokeWidth="12" strokeLinecap="round" fill="none" />
      {/* Brazo der (sosteniendo teléfono) */}
      <path d="M 192 120 Q 210 110 218 118" stroke="#6EE7B7" strokeWidth="12" strokeLinecap="round" fill="none" />
      {/* Teléfono */}
      <rect x="212" y="108" width="16" height="26" rx="4" fill="#1F2937" />
      <rect x="214" y="111" width="12" height="18" rx="2" fill="#60A5FA" />

      {/* ---- ICONOS FLOTANTES ---- */}
      {/* Check flotante izq */}
      <circle cx="72" cy="80" r="16" fill="#D1FAE5" />
      <path d="M 64 80 L 70 86 L 80 74" stroke="#1D9E75" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />

      {/* Estrella flotante der */}
      <circle cx="252" cy="70" r="16" fill="#FEF3C7" />
      <path d="M 252 58 L 254 65 L 262 65 L 256 70 L 258 77 L 252 73 L 246 77 L 248 70 L 242 65 L 250 65 Z" fill="#F59E0B" />

      {/* Casa flotante sup */}
      <circle cx="160" cy="28" r="16" fill="#EDE9FE" />
      <polygon points="160,18 150,26 170,26" fill="#7C3AED" />
      <rect x="153" y="26" width="14" height="10" fill="#8B5CF6" />
      <rect x="157" y="29" width="6" height="7" fill="#EDE9FE" />
    </svg>
  );
}
