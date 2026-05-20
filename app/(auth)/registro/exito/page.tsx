import Link from "next/link";

export default function RegistroExito() {
  return (
    <div className="min-h-dvh flex flex-col items-center justify-between px-5 pt-16 pb-10 text-center">

      {/* Icono check */}
      <div className="flex-1 flex flex-col items-center justify-center gap-6">
        <div className="w-24 h-24 rounded-full bg-[#E6F9F4] flex items-center justify-center"
             style={{ boxShadow: "0 0 0 16px rgba(19,194,150,0.1)" }}>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="24" fill="#13C296" />
            <path d="M14 24l8 8 12-16" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <div>
          <h1 className="font-display font-bold text-3xl text-white mb-3">
            Gracias por registrarte
          </h1>
          <p className="text-[#9CA3AF] text-base leading-relaxed max-w-[280px] mx-auto">
            Ahora puedes explorar nuestra plataforma.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="w-full">
        <Link
          href="/home"
          className="flex items-center justify-center gap-2 w-full py-4 rounded-full bg-[#13C296] hover:bg-[#0FA37D] active:bg-[#0B7A5E] text-white font-semibold text-base transition-all active:scale-[0.98] shadow-[0_4px_12px_rgba(19,194,150,0.35)]"
        >
          Ir al Home
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
          </svg>
        </Link>

        <p className="text-[#6B6B7B] text-xs mt-5">
          © 2025 ManitasGO. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
