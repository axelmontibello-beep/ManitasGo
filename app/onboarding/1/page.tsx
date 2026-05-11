import Link from "next/link";
import { MascotaBird } from "@/components/shared/MascotaBird";

function Bullet({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="text-2xl leading-none mt-0.5">{icon}</span>
      <p className="text-gray-300 text-sm leading-relaxed">{text}</p>
    </div>
  );
}

function Dot({ active }: { active: boolean }) {
  return (
    <div
      className={`rounded-full transition-all ${
        active ? "w-6 h-2.5 bg-white" : "w-2.5 h-2.5 bg-white/30"
      }`}
    />
  );
}

export default function Onboarding1() {
  return (
    <div className="min-h-dvh flex flex-col">
      {/* Área de ilustración */}
      <div className="flex-1 flex flex-col items-center justify-center gap-4 px-6 pt-12 pb-6">
        {/* Logo */}
        <div className="text-center mb-2">
          <h1 className="text-3xl font-black tracking-tight text-white">
            Manitas<span className="text-[#1D9E75]">Go</span>
          </h1>
          <p className="text-gray-400 text-sm mt-1">Tu casa, tus reglas.</p>
        </div>

        {/* Mascota */}
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-[#1D9E75]/10 blur-2xl scale-150" />
          <MascotaBird className="w-52 h-52 relative drop-shadow-2xl" />
        </div>
      </div>

      {/* Card inferior */}
      <div className="bg-[#252538] rounded-t-3xl px-6 pt-7 pb-8 shadow-2xl">
        <h2 className="text-xl font-bold text-white mb-1">¡Bienvenido!</h2>
        <p className="text-gray-400 text-sm mb-6 leading-relaxed">
          La plataforma donde <span className="text-white font-medium">vos decidís el precio</span> de los servicios para tu hogar.
        </p>

        <div className="space-y-4 mb-8">
          <Bullet icon="📋" text="Publicá lo que necesitás con el precio que querés pagar" />
          <Bullet icon="👷" text="Manitas cercanos te hacen propuestas" />
          <Bullet icon="✅" text="Elegís al mejor y listo — sin sorpresas" />
        </div>

        {/* Dots de progreso */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <Dot active={true} />
          <Dot active={false} />
          <Dot active={false} />
        </div>

        {/* Botón */}
        <Link
          href="/onboarding/2"
          className="flex items-center justify-center gap-2 w-full bg-[#1A237E] hover:bg-[#283593] active:scale-95 transition-all text-white py-4 rounded-2xl font-semibold text-base"
        >
          Siguiente
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
