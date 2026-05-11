import Link from "next/link";
import { LogoManitasGo } from "@/components/shared/LogoManitasGo";
import { IlustracionManitas } from "@/components/shared/IlustracionManitas";

function CheckBullet({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-5 h-5 rounded bg-gray-800 flex items-center justify-center flex-shrink-0">
        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        </svg>
      </div>
      <p className="text-gray-700 text-sm">{text}</p>
    </div>
  );
}

function Dot({ active }: { active: boolean }) {
  return (
    <div className={`rounded-full transition-all duration-300 ${active ? "w-6 h-2 bg-gray-800" : "w-2 h-2 bg-gray-300"}`} />
  );
}

export default function Onboarding3() {
  return (
    <div className="min-h-dvh flex flex-col bg-white">
      {/* Header */}
      <div className="px-6 pt-12 pb-4">
        <LogoManitasGo />
      </div>

      {/* Ilustración */}
      <div className="px-4">
        <IlustracionManitas className="w-full h-56" />
      </div>

      {/* Contenido */}
      <div className="flex-1 px-6 pt-2 pb-8 flex flex-col">
        <h2 className="text-xl font-bold text-gray-900 mb-1">Manitas</h2>
        <p className="text-gray-500 text-sm mb-5 leading-relaxed">
          Puedes ayudar a algún vecino con lo que le haga falta.
        </p>

        <div className="space-y-3.5 flex-1">
          <CheckBullet text="Busca tareas cerca de ti" />
          <CheckBullet text="Evalúa los presupuestos" />
          <CheckBullet text="Elige las tareas que quieres hacer" />
          <CheckBullet text="Realiza la tarea" />
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-6 mb-5">
          <Dot active={false} />
          <Dot active={false} />
          <Dot active={true} />
        </div>

        {/* Botones */}
        <div className="flex gap-3">
          <Link
            href="/onboarding/2"
            className="flex items-center justify-center gap-2 flex-1 border border-gray-300 hover:border-gray-400 active:scale-95 transition-all text-gray-700 py-4 rounded-2xl font-semibold text-base"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Volver
          </Link>
          <Link
            href="/rol"
            className="flex items-center justify-center gap-2 flex-[2] bg-gray-900 hover:bg-gray-800 active:scale-95 transition-all text-white py-4 rounded-2xl font-semibold text-base"
          >
            Siguiente
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        {/* Cerrar */}
        <Link href="/login" className="block text-center text-gray-400 text-sm mt-4 py-1">
          Cerrar
        </Link>
      </div>
    </div>
  );
}
