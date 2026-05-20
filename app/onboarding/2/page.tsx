import Link from "next/link";
import { LogoManitasGo } from "@/components/shared/LogoManitasGo";
import { IlustracionHogarista } from "@/components/shared/IlustracionHogarista";

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

function CheckBullet({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-5 h-5 rounded-full bg-[#13C296] flex items-center justify-center flex-shrink-0 mt-0.5">
        <svg width="10" height="10" fill="none" stroke="white" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        </svg>
      </div>
      <p className="text-[#373737] text-sm leading-relaxed">{text}</p>
    </div>
  );
}

export default function Onboarding2() {
  return (
    <div className="min-h-dvh flex flex-col bg-white">

      {/* Header */}
      <div className="px-6 pt-10 pb-2">
        <LogoManitasGo className="h-9 w-auto" />
      </div>

      {/* Ilustración */}
      <div className="px-4 py-2">
        <IlustracionHogarista className="w-full h-52" />
      </div>

      {/* Contenido */}
      <div className="flex-1 px-6 pt-2 pb-8 flex flex-col">

        <div className="mb-5">
          <h2 className="font-display font-bold text-2xl text-[#1A1A2E] mb-1">Hogarista</h2>
          <p className="text-[#7B7B7B] text-sm leading-relaxed">
            Necesitas ayuda con alguna tarea en tu casa.
          </p>
        </div>

        <div className="flex flex-col gap-3.5 flex-1">
          <CheckBullet text="Publica lo que necesitas" />
          <CheckBullet text="Fija el precio" />
          <CheckBullet text="Accede a manitas cerca de ti con buenas valoraciones" />
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-6 mb-5">
          <Dot active={false} />
          <Dot active={true} />
          <Dot active={false} />
        </div>

        {/* Botones */}
        <div className="flex gap-3">
          <Link
            href="/onboarding/1"
            className="flex items-center justify-center gap-2 flex-1 border border-[#DEE2E6] hover:border-[#13C296] hover:text-[#13C296] active:scale-[0.98] transition-all text-[#373737] py-3.5 rounded-full font-semibold text-sm"
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Volver
          </Link>
          <Link
            href="/onboarding/3"
            className="flex items-center justify-center gap-2 flex-[2] bg-[#13C296] hover:bg-[#0FA37D] active:bg-[#0B7A5E] active:scale-[0.98] transition-all text-white py-3.5 rounded-full font-semibold text-sm shadow-[0_4px_12px_rgba(19,194,150,0.35)]"
          >
            Siguiente
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        <Link href="/login" className="block text-center text-[#9CA3AF] text-sm mt-3 py-1">
          Cerrar
        </Link>
      </div>
    </div>
  );
}
