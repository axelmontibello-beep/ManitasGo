import Link from "next/link";

function IconoDinero() {
  return (
    <svg viewBox="0 0 52 52" className="w-12 h-12" xmlns="http://www.w3.org/2000/svg">
      {/* Billete */}
      <rect x="4" y="14" width="44" height="18" rx="3" fill="#22C55E" />
      <rect x="4" y="14" width="44" height="4" rx="3" fill="#16A34A" />
      <circle cx="26" cy="23" r="5" fill="#16A34A" />
      <circle cx="26" cy="23" r="3" fill="#DCFCE7" />
      <rect x="7" y="19" width="4" height="8" rx="1" fill="#15803D" />
      <rect x="41" y="19" width="4" height="8" rx="1" fill="#15803D" />
      {/* Mano */}
      <path d="M 10 30 Q 10 42 26 42 Q 42 42 44 32 L 38 30 Q 36 36 26 36 Q 16 36 14 30 Z" fill="#FBBF24" />
      <path d="M 10 30 L 14 30 L 14 34 L 10 34 Z" fill="#F59E0B" />
      {/* Dedos */}
      <path d="M 14 28 Q 14 24 18 24 Q 20 24 20 27 L 20 30 L 14 30" fill="#FBBF24" />
      <path d="M 20 26 Q 20 22 24 22 Q 26 22 26 25 L 26 30 L 20 30" fill="#FCD34D" />
    </svg>
  );
}

function IconoTrabajador() {
  return (
    <svg viewBox="0 0 52 52" className="w-12 h-12" xmlns="http://www.w3.org/2000/svg">
      {/* Casco */}
      <path d="M 16 22 Q 16 10 26 10 Q 36 10 36 22 Z" fill="#F59E0B" />
      <ellipse cx="26" cy="22" rx="14" ry="4" fill="#D97706" />
      {/* Cara */}
      <circle cx="26" cy="28" r="10" fill="#FBBF24" />
      {/* Ojos */}
      <circle cx="22" cy="27" r="2" fill="#1F2937" />
      <circle cx="30" cy="27" r="2" fill="#1F2937" />
      {/* Sonrisa */}
      <path d="M 22 32 Q 26 35 30 32" stroke="#1F2937" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Cuerpo */}
      <rect x="18" y="38" width="16" height="10" rx="4" fill="#F97316" />
      {/* Cuello */}
      <rect x="23" y="36" width="6" height="5" rx="2" fill="#FBBF24" />
    </svg>
  );
}

function BulletCard({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-4 bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
      <div className="flex-shrink-0">{icon}</div>
      <p className="text-gray-700 text-sm leading-relaxed">{text}</p>
    </div>
  );
}

function Dot({ active }: { active: boolean }) {
  return active ? (
    <div className="w-3 h-3 rounded-full bg-gray-800" />
  ) : (
    <div className="w-3 h-3 rounded-full border-2 border-gray-300" />
  );
}

export default function Onboarding1() {
  return (
    <div className="min-h-dvh flex flex-col bg-gray-100">

      {/* Área superior — pájaro + texto */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pt-14 pb-6">
        <h1 className="text-5xl font-black tracking-tight text-gray-900">
          Manitas<span className="text-[#25B8B8]">Go</span>
        </h1>

        <p className="text-gray-600 text-center text-sm leading-relaxed mt-3 max-w-xs">
          Es la app donde publicas tareas del hogar y un manitas habilidoso las hace por ti.
        </p>
      </div>

      {/* Card blanca inferior */}
      <div className="bg-white rounded-t-3xl px-5 pt-6 pb-8 shadow-2xl">
        <div className="space-y-3 mb-6">
          <BulletCard
            icon={<IconoDinero />}
            text="Tú propones el precio y un experto se postula para ayudarte."
          />
          <BulletCard
            icon={<IconoTrabajador />}
            text="Accede a tareas cerca de ti y postúlate según tu experiencia."
          />
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mb-5">
          <Dot active={true} />
          <Dot active={false} />
          <Dot active={false} />
        </div>

        {/* Botón Siguiente */}
        <Link
          href="/onboarding/2"
          className="flex items-center justify-center gap-2 w-full bg-gray-900 hover:bg-gray-800 active:scale-95 transition-all text-white py-4 rounded-full font-semibold text-base"
        >
          Siguiente
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </Link>

        {/* Omitir */}
        <Link href="/login" className="block text-center text-gray-400 text-sm mt-4 py-1">
          Omitir
        </Link>
      </div>
    </div>
  );
}
