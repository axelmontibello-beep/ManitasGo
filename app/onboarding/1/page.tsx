import Link from "next/link";
import { LogoManitasGo } from "@/components/shared/LogoManitasGo";
import { IlustracionSofa } from "@/components/shared/IlustracionSofa";

function BulletIcon() {
  return (
    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
      <svg className="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
      </svg>
    </div>
  );
}

function Bullet({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <BulletIcon />
      <p className="text-gray-600 text-sm leading-relaxed pt-1">{text}</p>
    </div>
  );
}

function Dot({ active }: { active: boolean }) {
  return (
    <div className={`rounded-full transition-all duration-300 ${active ? "w-6 h-2 bg-gray-800" : "w-2 h-2 bg-gray-300"}`} />
  );
}

export default function Onboarding1() {
  return (
    <div className="min-h-dvh flex flex-col bg-white">
      {/* Header */}
      <div className="px-6 pt-12 pb-4">
        <LogoManitasGo />
      </div>

      {/* Ilustración */}
      <div className="px-4">
        <IlustracionSofa className="w-full h-56" />
      </div>

      {/* Contenido */}
      <div className="flex-1 px-6 pt-2 pb-8 flex flex-col">
        <p className="text-gray-700 text-sm leading-relaxed mb-6">
          Es la app donde publicas tareas del hogar y un manitas habilidoso las hace por ti.
        </p>

        <div className="space-y-4 flex-1">
          <Bullet text="Tú propones el precio y un experto se postula para ajustarse." />
          <Bullet text="Publica lo que necesitas cerca de ti y encuentra manitas disponibles." />
          <Bullet text="Accede a manitas cerca de ti y contrátalos según su experiencia." />
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-6 mb-5">
          <Dot active={true} />
          <Dot active={false} />
          <Dot active={false} />
        </div>

        {/* Botón */}
        <Link
          href="/onboarding/2"
          className="flex items-center justify-center gap-2 w-full bg-gray-900 hover:bg-gray-800 active:scale-95 transition-all text-white py-4 rounded-2xl font-semibold text-base"
        >
          Siguiente
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </Link>

        {/* Cerrar */}
        <Link href="/login" className="block text-center text-gray-400 text-sm mt-4 py-1">
          Cerrar
        </Link>
      </div>
    </div>
  );
}
