export function ManitasIlustracion({ className = "w-48 h-48" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Sombra */}
      <ellipse cx="100" cy="214" rx="42" ry="7" fill="rgba(0,0,0,0.22)" />

      {/* Cuerpo — overol azul */}
      <rect x="70" y="118" width="60" height="78" rx="8" fill="#2E86AB" />

      {/* Cuello */}
      <rect x="88" y="108" width="24" height="16" rx="4" fill="#FAD7A0" />

      {/* Cabeza */}
      <circle cx="100" cy="88" r="32" fill="#FAD7A0" />

      {/* Casco naranja */}
      <ellipse cx="100" cy="68" rx="40" ry="9" fill="#E67E22" />
      <path d="M 64 68 Q 100 36 136 68 Z" fill="#F39C12" />
      <rect x="62" y="62" width="76" height="12" rx="4" fill="#E67E22" />
      <rect x="66" y="68" width="68" height="5" rx="2" fill="rgba(255,255,255,0.2)" />

      {/* Cara */}
      {/* Cejas */}
      <path d="M 84 83 Q 90 79 96 83" stroke="#8B5E3C" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M 104 83 Q 110 79 116 83" stroke="#8B5E3C" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Ojos */}
      <circle cx="90" cy="90" r="5" fill="white" />
      <circle cx="91" cy="90" r="2.5" fill="#2C3E50" />
      <circle cx="110" cy="90" r="5" fill="white" />
      <circle cx="111" cy="90" r="2.5" fill="#2C3E50" />
      {/* Brillos ojos */}
      <circle cx="92" cy="88" r="1.2" fill="white" />
      <circle cx="112" cy="88" r="1.2" fill="white" />
      {/* Sonrisa */}
      <path d="M 90 101 Q 100 108 110 101" stroke="#8B5E3C" strokeWidth="2.5" fill="none" strokeLinecap="round" />

      {/* Bigote */}
      <path d="M 90 98 Q 95 96 100 98 Q 105 96 110 98" stroke="#8B5E3C" strokeWidth="1.8" fill="none" />

      {/* Brazos */}
      {/* Brazo izquierdo (con llave inglesa) */}
      <rect x="44" y="120" width="28" height="16" rx="8" fill="#2E86AB" />
      <rect x="32" y="126" width="18" height="10" rx="5" fill="#FAD7A0" />
      {/* Llave inglesa */}
      <rect x="10" y="122" width="28" height="8" rx="4" fill="#7F8C8D" />
      <circle cx="12" cy="126" r="8" fill="none" stroke="#7F8C8D" strokeWidth="5" />
      <circle cx="36" cy="126" r="6" fill="none" stroke="#95A5A6" strokeWidth="4" />

      {/* Brazo derecho (con martillo) */}
      <rect x="128" y="120" width="28" height="16" rx="8" fill="#2E86AB" />
      <rect x="150" y="126" width="18" height="10" rx="5" fill="#FAD7A0" />
      {/* Martillo */}
      <rect x="162" y="118" width="6" height="30" rx="3" fill="#8B5E3C" />
      <rect x="156" y="114" width="18" height="10" rx="3" fill="#95A5A6" />
      <rect x="156" y="114" width="18" height="5" rx="2" fill="#BDC3C7" />

      {/* Bolsillo del overol */}
      <rect x="80" y="130" width="20" height="16" rx="3" fill="#1A6E8E" />
      <line x1="80" y1="138" x2="100" y2="138" stroke="#145A72" strokeWidth="1.5" />

      {/* Destornillador en bolsillo */}
      <rect x="86" y="124" width="4" height="14" rx="2" fill="#F39C12" />

      {/* Pantalon rayas */}
      <line x1="100" y1="140" x2="100" y2="196" stroke="#1A6E8E" strokeWidth="2" />

      {/* Botas */}
      <rect x="72" y="188" width="28" height="18" rx="5" fill="#2C3E50" />
      <rect x="100" y="188" width="28" height="18" rx="5" fill="#2C3E50" />
      <rect x="70" y="198" width="32" height="8" rx="4" fill="#1A252F" />
      <rect x="98" y="198" width="32" height="8" rx="4" fill="#1A252F" />
    </svg>
  );
}
