export function MascotaBird({ className = "w-48 h-48" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 220"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Pájaro Manitas"
    >
      {/* Sombra */}
      <ellipse cx="100" cy="214" rx="38" ry="7" fill="rgba(0,0,0,0.25)" />

      {/* Cola */}
      <path d="M 65 178 L 48 208 L 60 194 L 70 208 L 80 192" fill="#9B2335" strokeLinejoin="round" />

      {/* Ala izquierda */}
      <path d="M 60 118 C 28 132 22 165 46 178 C 56 158 62 138 72 124 Z" fill="#9B2335" />

      {/* Cuerpo */}
      <ellipse cx="102" cy="148" rx="44" ry="52" fill="#D93025" />

      {/* Panza blanca */}
      <ellipse cx="112" cy="158" rx="24" ry="34" fill="#FFF0E6" />

      {/* Cabeza */}
      <circle cx="108" cy="84" r="37" fill="#D93025" />

      {/* Cresta roja */}
      <path d="M 88 50 L 82 30 L 92 48 L 97 24 L 102 46 L 110 20 L 113 46 L 120 32 L 116 50" fill="#E74C3C" />

      {/* Casco — ala del casco */}
      <ellipse cx="108" cy="66" rx="50" ry="10" fill="#E5A007" />
      {/* Casco — copa */}
      <path d="M 68 66 Q 108 28 148 66 Z" fill="#F6C026" />
      {/* Casco — franja */}
      <rect x="62" y="60" width="92" height="13" rx="4" fill="#E5A007" />
      {/* Casco — línea ventilación */}
      <rect x="95" y="36" width="6" height="28" rx="3" fill="rgba(255,255,255,0.2)" />

      {/* Ojo blanco */}
      <circle cx="124" cy="82" r="12" fill="white" />
      {/* Pupila */}
      <circle cx="126" cy="83" r="6.5" fill="#1A1A2E" />
      {/* Brillo ojo */}
      <circle cx="129" cy="80" r="2.5" fill="white" />

      {/* Pico superior */}
      <path d="M 142 84 L 172 88 L 142 92 Z" fill="#E5A007" />
      {/* Pico inferior (sombra) */}
      <path d="M 142 90 L 165 92 L 142 93 Z" fill="#C98B00" />

      {/* Franja negra en cabeza */}
      <path
        d="M 74 72 Q 108 67 142 76 Q 140 62 108 60 Q 76 58 74 72"
        fill="#1A1A2E"
        opacity="0.5"
      />

      {/* Cinturón de herramientas */}
      <rect x="72" y="168" width="54" height="10" rx="5" fill="#8B6914" />
      <rect x="96" y="165" width="12" height="16" rx="3" fill="#A07820" />

      {/* Martillo en cinturón */}
      <rect x="82" y="162" width="4" height="14" rx="2" fill="#7F8C8D" />
      <rect x="78" y="162" width="12" height="6" rx="2" fill="#95A5A6" />

      {/* Patas */}
      <rect x="88" y="193" width="7" height="20" rx="3" fill="#E5A007" />
      <rect x="108" y="193" width="7" height="20" rx="3" fill="#E5A007" />

      {/* Pies izquierdo */}
      <path d="M 66 213 L 88 213" stroke="#E5A007" strokeWidth="4" strokeLinecap="round" />
      <path d="M 72 213 L 68 220" stroke="#E5A007" strokeWidth="3" strokeLinecap="round" />
      <path d="M 88 213 L 88 220" stroke="#E5A007" strokeWidth="3" strokeLinecap="round" />

      {/* Pies derecho */}
      <path d="M 115 213 L 137 213" stroke="#E5A007" strokeWidth="4" strokeLinecap="round" />
      <path d="M 115 213 L 115 220" stroke="#E5A007" strokeWidth="3" strokeLinecap="round" />
      <path d="M 133 213 L 137 220" stroke="#E5A007" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
