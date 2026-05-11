/* Ilustración pantalla 2: hogarista en sillón */
export function IlustracionHogarista({ className = "w-full h-64" }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Fondo círculo suave */}
      <circle cx="160" cy="120" r="100" fill="#F0FDF9" />

      {/* ---- SILLÓN ---- */}
      {/* Respaldo */}
      <rect x="80" y="110" width="160" height="60" rx="16" fill="#1D9E75" />
      {/* Asiento */}
      <rect x="90" y="148" width="140" height="38" rx="10" fill="#178563" />
      {/* Brazo izquierdo */}
      <rect x="68" y="125" width="22" height="58" rx="10" fill="#178563" />
      {/* Brazo derecho */}
      <rect x="230" y="125" width="22" height="58" rx="10" fill="#178563" />
      {/* Cojín respaldo */}
      <rect x="88" y="114" width="144" height="48" rx="12" fill="#25B589" />
      {/* Pata izq */}
      <rect x="92" y="183" width="14" height="16" rx="4" fill="#0E6B4A" />
      {/* Pata der */}
      <rect x="214" y="183" width="14" height="16" rx="4" fill="#0E6B4A" />

      {/* ---- PERSONA ---- */}
      {/* Cuerpo */}
      <rect x="138" y="108" width="44" height="50" rx="10" fill="#FCA5A5" />
      {/* Piernas cruzadas */}
      <path d="M 138 155 Q 130 165 125 170 Q 135 175 145 168" fill="#374151" />
      <path d="M 182 155 Q 190 162 195 158 Q 200 168 185 172 Q 172 175 165 165" fill="#374151" />
      {/* Zapatos */}
      <ellipse cx="125" cy="172" rx="13" ry="7" fill="#1F2937" />
      <ellipse cx="185" cy="170" rx="13" ry="7" fill="#1F2937" />
      {/* Cabeza */}
      <circle cx="160" cy="92" r="22" fill="#FBBF24" />
      {/* Pelo largo */}
      <path d="M 140 84 Q 138 72 160 70 Q 182 72 180 84 Q 182 90 183 100 Q 178 96 178 88 Q 160 85 142 88 Q 140 96 138 100 Q 138 90 140 84" fill="#1F2937" />
      {/* Ojos */}
      <circle cx="153" cy="90" r="2.5" fill="#1F2937" />
      <circle cx="167" cy="90" r="2.5" fill="#1F2937" />
      {/* Sonrisa */}
      <path d="M 153 100 Q 160 106 167 100" stroke="#1F2937" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Brazo izq (apoyado) */}
      <path d="M 138 120 Q 118 118 108 125" stroke="#FCA5A5" strokeWidth="12" strokeLinecap="round" fill="none" />
      {/* Brazo der (sosteniendo tablet) */}
      <path d="M 182 118 Q 202 112 212 120" stroke="#FCA5A5" strokeWidth="12" strokeLinecap="round" fill="none" />
      {/* Tablet */}
      <rect x="206" y="108" width="22" height="30" rx="4" fill="#374151" />
      <rect x="208" y="111" width="18" height="22" rx="2" fill="#1D9E75" />
      {/* Icono app en tablet */}
      <rect x="211" y="114" width="6" height="6" rx="1" fill="white" opacity="0.8" />
      <rect x="219" y="114" width="5" height="6" rx="1" fill="white" opacity="0.8" />
      <rect x="211" y="122" width="13" height="2" rx="1" fill="white" opacity="0.6" />
      <rect x="211" y="126" width="10" height="2" rx="1" fill="white" opacity="0.5" />

      {/* ---- ICONOS FLOTANTES ---- */}
      {/* Lista izq */}
      <circle cx="72" cy="75" r="18" fill="#FEF9C3" />
      <rect x="63" y="67" width="18" height="3" rx="1.5" fill="#F59E0B" />
      <rect x="63" y="73" width="14" height="3" rx="1.5" fill="#F59E0B" />
      <rect x="63" y="79" width="16" height="3" rx="1.5" fill="#F59E0B" />

      {/* Estrella der */}
      <circle cx="252" cy="72" r="18" fill="#D1FAE5" />
      <path d="M 252 60 L 254.5 68 L 263 68 L 256.5 73 L 259 81 L 252 76.5 L 245 81 L 247.5 73 L 241 68 L 249.5 68 Z" fill="#1D9E75" />

      {/* Herramienta sup */}
      <circle cx="160" cy="26" r="16" fill="#E0E7FF" />
      <rect x="153" y="22" width="14" height="5" rx="2" fill="#4F46E5" />
      <rect x="158" y="27" width="4" height="12" rx="2" fill="#6366F1" />
    </svg>
  );
}
