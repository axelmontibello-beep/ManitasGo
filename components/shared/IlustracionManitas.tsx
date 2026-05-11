/* Ilustración pantalla 3: trabajador manitas con herramientas */
export function IlustracionManitas({ className = "w-full h-64" }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Fondo círculo suave */}
      <circle cx="160" cy="120" r="100" fill="#FFF7ED" />

      {/* ---- CAJA DE HERRAMIENTAS ---- */}
      <rect x="96" y="185" width="60" height="36" rx="6" fill="#D97706" />
      <rect x="96" y="185" width="60" height="12" rx="6" fill="#F59E0B" />
      <rect x="118" y="178" width="16" height="12" rx="4" fill="#B45309" />
      {/* Remaches */}
      <circle cx="104" cy="196" r="3" fill="#B45309" />
      <circle cx="148" cy="196" r="3" fill="#B45309" />
      {/* Herramientas visibles */}
      <rect x="100" y="195" width="4" height="20" rx="2" fill="#6B7280" />
      <rect x="108" y="192" width="4" height="23" rx="2" fill="#9CA3AF" />
      <rect x="116" y="197" width="4" height="16" rx="2" fill="#6B7280" />

      {/* ---- PERSONA (trabajador de pie) ---- */}
      {/* Botas */}
      <rect x="134" y="195" width="22" height="18" rx="5" fill="#1F2937" />
      <rect x="164" y="195" width="22" height="18" rx="5" fill="#1F2937" />
      <rect x="131" y="205" width="28" height="8" rx="4" fill="#111827" />
      <rect x="161" y="205" width="28" height="8" rx="4" fill="#111827" />
      {/* Pantalón */}
      <rect x="136" y="160" width="22" height="42" rx="6" fill="#374151" />
      <rect x="162" y="160" width="22" height="42" rx="6" fill="#374151" />
      {/* Cuerpo (chaleco naranja) */}
      <rect x="130" y="108" width="60" height="60" rx="12" fill="#F97316" />
      {/* Bolsillo */}
      <rect x="135" y="118" width="22" height="18" rx="4" fill="#EA6C0A" />
      <rect x="138" y="115" width="4" height="8" rx="2" fill="#FCD34D" />
      {/* Raya central chaleco */}
      <rect x="158" y="108" width="4" height="60" fill="#EA6C0A" />

      {/* Brazo izq (con llave) */}
      <path d="M 130 120 Q 105 115 92 125" stroke="#F97316" strokeWidth="16" strokeLinecap="round" fill="none" />
      {/* Mano izq */}
      <circle cx="92" cy="126" r="8" fill="#FBBF24" />
      {/* Llave inglesa */}
      <rect x="72" y="119" width="24" height="8" rx="4" fill="#6B7280" />
      <circle cx="74" cy="123" r="8" fill="none" stroke="#9CA3AF" strokeWidth="5" />
      <circle cx="93" cy="123" r="6" fill="none" stroke="#6B7280" strokeWidth="4" />

      {/* Brazo der (con martillo) */}
      <path d="M 190 115 Q 215 108 228 120" stroke="#F97316" strokeWidth="16" strokeLinecap="round" fill="none" />
      {/* Mano der */}
      <circle cx="228" cy="121" r="8" fill="#FBBF24" />
      {/* Martillo */}
      <rect x="230" y="104" width="7" height="32" rx="3" fill="#92400E" />
      <rect x="222" y="100" width="22" height="12" rx="4" fill="#6B7280" />
      <rect x="222" y="100" width="22" height="6" rx="3" fill="#9CA3AF" />

      {/* Cuello */}
      <rect x="152" y="98" width="16" height="14" rx="4" fill="#FBBF24" />

      {/* Cabeza */}
      <circle cx="160" cy="82" r="24" fill="#FBBF24" />
      {/* Cara */}
      <circle cx="152" cy="80" r="3" fill="#1F2937" />
      <circle cx="168" cy="80" r="3" fill="#1F2937" />
      <path d="M 151 91 Q 160 97 169 91" stroke="#1F2937" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Bigote */}
      <path d="M 153 87 Q 160 85 167 87" stroke="#92400E" strokeWidth="2" fill="none" />

      {/* CASCO */}
      <ellipse cx="160" cy="64" rx="32" ry="8" fill="#D97706" />
      <path d="M 130 64 Q 160 38 190 64 Z" fill="#F59E0B" />
      <rect x="128" y="58" width="64" height="12" rx="4" fill="#D97706" />
      <rect x="132" y="63" width="56" height="5" rx="2" fill="rgba(255,255,255,0.15)" />

      {/* ---- ICONOS FLOTANTES ---- */}
      {/* Pin mapa izq */}
      <circle cx="68" cy="72" r="18" fill="#FEE2E2" />
      <path d="M 68 58 C 62 58 57 63 57 69 C 57 76 68 86 68 86 C 68 86 79 76 79 69 C 79 63 74 58 68 58Z" fill="#EF4444" />
      <circle cx="68" cy="69" r="4" fill="white" />

      {/* Estrella der */}
      <circle cx="254" cy="70" r="18" fill="#FEF3C7" />
      <path d="M 254 58 L 256.5 66 L 265 66 L 258.5 71 L 261 79 L 254 74.5 L 247 79 L 249.5 71 L 243 66 L 251.5 66 Z" fill="#F59E0B" />
    </svg>
  );
}
