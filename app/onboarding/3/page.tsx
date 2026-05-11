import Link from "next/link";
import { ManitasIlustracion } from "@/components/shared/ManitasIlustracion";

function Bullet({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 w-5 h-5 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
        <svg className="w-3 h-3 text-orange-400" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
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
        active ? "w-6 h-2.5 bg-orange-400" : "w-2.5 h-2.5 bg-white/30"
      }`}
    />
  );
}

export default function Onboarding3() {
  return (
    <div className="min-h-dvh flex flex-col">
      {/* Área de ilustración */}
      <div className="flex-1 flex flex-col items-center justify-center gap-4 px-6 pt-12 pb-6">
        {/* Badge */}
        <div className="px-4 py-1.5 rounded-full bg-orange-500/20 border border-orange-500/30">
          <span className="text-orange-400 text-xs font-semibold uppercase tracking-widest">Manitas</span>
        </div>

        {/* Ilustración */}
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-orange-500/10 blur-2xl scale-150" />
          <ManitasIlustracion className="w-52 h-52 relative drop-shadow-2xl" />
        </div>
      </div>

      {/* Card inferior */}
      <div className="bg-[#252538] rounded-t-3xl px-6 pt-7 pb-8 shadow-2xl">
        <h2 className="text-xl font-bold text-white mb-1">Para Manitas</h2>
        <p className="text-gray-400 text-sm mb-5 leading-relaxed">
          Trabajá cuando quieras, en lo que sabés hacer y cerca de vos.
        </p>

        <div className="space-y-3.5 mb-7">
          <Bullet text="Buscá tareas cerca de tu ubicación" />
          <Bullet text="Evaluá los presupuestos que ofrecen" />
          <Bullet text="Elegís las tareas que querés hacer" />
          <Bullet text="Realizás la tarea y cobrás" />
        </div>

        {/* Dots de progreso */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <Dot active={false} />
          <Dot active={false} />
          <Dot active={true} />
        </div>

        {/* Botones */}
        <div className="flex gap-3">
          <Link
            href="/onboarding/2"
            className="flex items-center justify-center gap-2 flex-1 border border-white/20 hover:border-white/40 active:scale-95 transition-all text-white py-4 rounded-2xl font-semibold text-base"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Volver
          </Link>
          <Link
            href="/rol"
            className="flex items-center justify-center gap-2 flex-[2] bg-orange-500 hover:bg-orange-600 active:scale-95 transition-all text-white py-4 rounded-2xl font-semibold text-base"
          >
            Comenzar
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
