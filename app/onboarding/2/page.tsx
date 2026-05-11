import Link from "next/link";
import { HogarIlustracion } from "@/components/shared/HogarIlustracion";

function Bullet({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 w-5 h-5 rounded-full bg-[#1D9E75]/20 flex items-center justify-center flex-shrink-0">
        <svg className="w-3 h-3 text-[#1D9E75]" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        </svg>
      </div>
      <p className="text-gray-300 text-sm leading-relaxed">{text}</p>
    </div>
  );
}

function Dot({ active }: { active: boolean }) {
  return (
    <div
      className={`rounded-full transition-all ${
        active ? "w-6 h-2.5 bg-[#1D9E75]" : "w-2.5 h-2.5 bg-white/30"
      }`}
    />
  );
}

export default function Onboarding2() {
  return (
    <div className="min-h-dvh flex flex-col">
      {/* Área de ilustración */}
      <div className="flex-1 flex flex-col items-center justify-center gap-4 px-6 pt-12 pb-6">
        {/* Badge */}
        <div className="px-4 py-1.5 rounded-full bg-[#1D9E75]/20 border border-[#1D9E75]/30">
          <span className="text-[#1D9E75] text-xs font-semibold uppercase tracking-widest">Hogarista</span>
        </div>

        {/* Ilustración */}
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-[#1D9E75]/10 blur-2xl scale-150" />
          <HogarIlustracion className="w-52 h-52 relative drop-shadow-2xl" />
        </div>
      </div>

      {/* Card inferior */}
      <div className="bg-[#252538] rounded-t-3xl px-6 pt-7 pb-8 shadow-2xl">
        <h2 className="text-xl font-bold text-white mb-1">Para Hogaristas</h2>
        <p className="text-gray-400 text-sm mb-6 leading-relaxed">
          ¿Necesitás que te hagan algo en casa? Vos ponés las condiciones.
        </p>

        <div className="space-y-4 mb-8">
          <Bullet text="Publicá lo que necesitás en segundos" />
          <Bullet text="Fijás el precio — no al revés" />
          <Bullet text="Accedés a Manitas cercanos con buenas valoraciones" />
        </div>

        {/* Dots de progreso */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <Dot active={false} />
          <Dot active={true} />
          <Dot active={false} />
        </div>

        {/* Botones */}
        <div className="flex gap-3">
          <Link
            href="/onboarding/1"
            className="flex items-center justify-center gap-2 flex-1 border border-white/20 hover:border-white/40 active:scale-95 transition-all text-white py-4 rounded-2xl font-semibold text-base"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Volver
          </Link>
          <Link
            href="/onboarding/3"
            className="flex items-center justify-center gap-2 flex-[2] bg-[#1D9E75] hover:bg-[#178563] active:scale-95 transition-all text-white py-4 rounded-2xl font-semibold text-base"
          >
            Siguiente
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
