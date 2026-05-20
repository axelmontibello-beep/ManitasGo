import Link from "next/link";
import { PajaroManitas } from "@/components/shared/PajaroManitas";

function Dot({ active }: { active: boolean }) {
  return (
    <div
      className="h-2 rounded-full transition-all duration-300"
      style={{
        width: active ? 24 : 8,
        background: active ? "#13C296" : "#DEE2E6",
      }}
    />
  );
}

function Bullet({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-[0_1px_3px_rgba(0,0,0,0.08)] border border-[#E5E8EB]">
      <div className="w-11 h-11 rounded-xl bg-[#E6F9F4] flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <p className="text-[#373737] text-sm leading-relaxed font-medium">{text}</p>
    </div>
  );
}

export default function Onboarding1() {
  return (
    <div className="min-h-dvh flex flex-col bg-[#F2F2F2]">

      {/* Área superior — pájaro centrado */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pt-12 pb-4 gap-3">
        <PajaroManitas className="w-36 h-44 drop-shadow-lg" />

        <div className="text-center">
          <h1 className="font-display font-bold text-3xl text-[#1A1A2E] tracking-tight">
            ManitasGo
          </h1>
          <p className="text-[#7B7B7B] text-sm leading-relaxed mt-1 max-w-[260px] mx-auto">
            La app donde publicas tareas del hogar y los mejores manitas las resuelven.
          </p>
        </div>
      </div>

      {/* Card blanca inferior */}
      <div className="bg-white rounded-t-3xl px-5 pt-6 pb-8 shadow-[0_-4px_16px_rgba(0,0,0,0.08)]">

        <div className="flex flex-col gap-3 mb-6">
          <Bullet
            icon={
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M3 12L12 3l9 9" stroke="#13C296" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5 10v9a1 1 0 001 1h4v-5h4v5h4a1 1 0 001-1v-9" stroke="#13C296" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
            text="Publica lo que necesitas en tu casa"
          />
          <Bullet
            icon={
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="#13C296" strokeWidth="2"/>
                <path d="M12 7v5l3 3" stroke="#13C296" strokeWidth="2" strokeLinecap="round"/>
                <path d="M9 6.5C9 5.12 10.34 4 12 4s3 1.12 3 2.5" stroke="#13C296" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            }
            text="Fija el precio que quieres pagar"
          />
          <Bullet
            icon={
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="#13C296" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
            text="Elige el manitas con mejores valoraciones"
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
          className="flex items-center justify-center gap-2 w-full bg-[#13C296] hover:bg-[#0FA37D] active:bg-[#0B7A5E] active:scale-[0.98] transition-all text-white py-3.5 rounded-full font-semibold text-base shadow-[0_4px_12px_rgba(19,194,150,0.35)]"
        >
          Siguiente
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>

        <Link href="/login" className="block text-center text-[#9CA3AF] text-sm mt-3 py-1">
          Omitir
        </Link>
      </div>
    </div>
  );
}
