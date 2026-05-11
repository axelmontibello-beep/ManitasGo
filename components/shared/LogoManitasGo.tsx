export function LogoManitasGo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Pájaro ManitasGo */}
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Cuerpo */}
        <ellipse cx="18" cy="22" rx="11" ry="10" fill="#1D9E75" />
        {/* Ala */}
        <path d="M 8 22 C 4 18 4 28 10 26" fill="#178563" />
        {/* Cabeza */}
        <circle cx="24" cy="13" r="9" fill="#1D9E75" />
        {/* Cresta */}
        <path d="M 20 6 L 18 1 L 22 5 L 23 0 L 25 5 L 27 2 L 26 7" fill="#F97316" />
        {/* Pico superior */}
        <path d="M 31 13 L 38 11 L 38 14 L 31 15 Z" fill="#F6C026" />
        {/* Pico inferior */}
        <path d="M 31 15 L 37 14 L 36 17 L 31 16 Z" fill="#E5A007" />
        {/* Ojo */}
        <circle cx="26" cy="11" r="3" fill="white" />
        <circle cx="27" cy="11" r="1.5" fill="#1A1A2E" />
        <circle cx="27.5" cy="10" r="0.6" fill="white" />
        {/* Cola */}
        <path d="M 8 28 L 3 34 L 7 30 L 5 36 L 10 31" fill="#178563" />
        {/* Patas */}
        <path d="M 15 31 L 13 36 M 13 36 L 10 37 M 13 36 L 13 38" stroke="#E5A007" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M 20 31 L 20 36 M 20 36 L 17 37 M 20 36 L 22 38" stroke="#E5A007" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
      {/* Texto */}
      <span className="text-[22px] font-black tracking-tight text-gray-900">
        Manitas<span className="text-[#1D9E75]">Go</span>
      </span>
    </div>
  );
}
