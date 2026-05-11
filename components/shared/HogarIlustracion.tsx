export function HogarIlustracion({ className = "w-48 h-48" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Sombra */}
      <ellipse cx="100" cy="196" rx="55" ry="7" fill="rgba(0,0,0,0.2)" />

      {/* Casa — techo */}
      <polygon points="100,18 22,82 178,82" fill="#1D9E75" />
      <polygon points="100,18 22,82 30,82 100,30 170,82 178,82" fill="#25B589" />

      {/* Chimenea */}
      <rect x="130" y="34" width="18" height="32" rx="2" fill="#B7560A" />
      <rect x="126" y="30" width="26" height="8" rx="2" fill="#C96010" />
      {/* Humo */}
      <circle cx="139" cy="22" r="6" fill="rgba(255,255,255,0.25)" />
      <circle cx="144" cy="14" r="4" fill="rgba(255,255,255,0.18)" />

      {/* Casa — paredes */}
      <rect x="30" y="80" width="140" height="110" rx="4" fill="#1D9E75" />
      <rect x="32" y="82" width="136" height="106" rx="3" fill="#16816050" />

      {/* Ventana izquierda */}
      <rect x="42" y="98" width="40" height="34" rx="5" fill="#A8E6CF" />
      <line x1="62" y1="98" x2="62" y2="132" stroke="#1D9E75" strokeWidth="2" />
      <line x1="42" y1="115" x2="82" y2="115" stroke="#1D9E75" strokeWidth="2" />

      {/* Ventana derecha */}
      <rect x="118" y="98" width="40" height="34" rx="5" fill="#A8E6CF" />
      <line x1="138" y1="98" x2="138" y2="132" stroke="#1D9E75" strokeWidth="2" />
      <line x1="118" y1="115" x2="158" y2="115" stroke="#1D9E75" strokeWidth="2" />

      {/* Puerta */}
      <rect x="78" y="138" width="44" height="52" rx="6" fill="#0E6B4A" />
      <circle cx="116" cy="165" r="3" fill="#F6C026" />

      {/* Persona dentro de la casa (visible por la puerta) */}
      <circle cx="100" cy="148" r="9" fill="#FAD7A0" />
      <ellipse cx="100" cy="164" rx="8" ry="10" fill="#2E86AB" />

      {/* Maceta */}
      <rect x="155" y="170" width="16" height="14" rx="3" fill="#C0392B" />
      <path d="M 163 170 Q 163 155 170 148" stroke="#27AE60" strokeWidth="3" fill="none" strokeLinecap="round" />
      <circle cx="172" cy="146" r="6" fill="#27AE60" />

      {/* Camino de entrada */}
      <path d="M 78 190 L 30 190 Q 30 196 100 196 Q 170 196 170 190 L 122 190 L 120 184 L 100 184 L 80 184 Z" fill="#0E6B4A" opacity="0.6" />
    </svg>
  );
}
