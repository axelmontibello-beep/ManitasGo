"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LogoManitasGo } from "@/components/shared/LogoManitasGo";

function RolCard({
  tipo,
  selected,
  onSelect,
}: {
  tipo: "hogarista" | "manitas";
  selected: boolean;
  onSelect: () => void;
}) {
  const isHogarista = tipo === "hogarista";

  return (
    <button
      type="button"
      onClick={onSelect}
      className={`w-full rounded-2xl border-2 p-5 flex items-center gap-4 transition-all duration-200 active:scale-[0.98] text-left ${
        selected
          ? isHogarista
            ? "border-[#13C296] bg-[#E6F9F4]"
            : "border-[#FF5C04] bg-[#FFF1E8]"
          : "border-[#DEE2E6] bg-white hover:border-[#9CA3AF]"
      }`}
    >
      {/* Icono */}
      <div
        className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
          selected
            ? isHogarista ? "bg-[#13C296]" : "bg-[#FF5C04]"
            : "bg-[#F3F4F6]"
        }`}
      >
        {isHogarista ? (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M3 12L12 3l9 9" stroke={selected ? "white" : "#7B7B7B"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5 10v9a1 1 0 001 1h4v-5h4v5h4a1 1 0 001-1v-9" stroke={selected ? "white" : "#7B7B7B"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" stroke={selected ? "white" : "#7B7B7B"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>

      {/* Texto */}
      <div className="flex-1">
        <p className={`font-display font-bold text-lg ${selected ? (isHogarista ? "text-[#0B7A5E]" : "text-[#BF4200]") : "text-[#373737]"}`}>
          {isHogarista ? "Hogarista" : "Manitas"}
        </p>
        <p className="text-[#7B7B7B] text-sm mt-0.5">
          {isHogarista
            ? "Publico tareas y fijo el precio"
            : "Busco tareas y elijo cuáles hacer"}
        </p>
      </div>

      {/* Radio indicator */}
      <div
        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
          selected
            ? isHogarista ? "border-[#13C296]" : "border-[#FF5C04]"
            : "border-[#DEE2E6]"
        }`}
      >
        {selected && (
          <div className={`w-2.5 h-2.5 rounded-full ${isHogarista ? "bg-[#13C296]" : "bg-[#FF5C04]"}`} />
        )}
      </div>
    </button>
  );
}

export default function SeleccionRol() {
  const router = useRouter();
  const [rol, setRol] = useState<"hogarista" | "manitas" | null>(null);

  function continuar() {
    if (!rol) return;
    sessionStorage.setItem("registro_rol", rol);
    router.push("/registro/paso-1");
  }

  return (
    <div className="min-h-dvh flex flex-col px-5 pt-12 pb-10">

      {/* Logo */}
      <div className="mb-8">
        <LogoManitasGo className="h-9 w-auto" />
      </div>

      {/* Título */}
      <div className="mb-8">
        <h1 className="font-display font-bold text-2xl text-white leading-tight">
          Iniciar mi registro
        </h1>
        <p className="text-[#9CA3AF] text-sm mt-2 leading-relaxed">
          Selecciona el rol que desempeñarás dentro de la plataforma.
        </p>
      </div>

      {/* Cards de rol */}
      <div className="flex flex-col gap-3 flex-1">
        <RolCard tipo="hogarista" selected={rol === "hogarista"} onSelect={() => setRol("hogarista")} />
        <RolCard tipo="manitas"   selected={rol === "manitas"}   onSelect={() => setRol("manitas")} />
      </div>

      {/* CTA */}
      <div className="mt-8">
        <button
          onClick={continuar}
          disabled={!rol}
          className="w-full py-3.5 rounded-full font-semibold text-base transition-all duration-200 active:scale-[0.98]"
          style={{
            background: rol ? "#13C296" : "#3A3A4C",
            color: rol ? "white" : "#6B6B7B",
            boxShadow: rol ? "0 4px 12px rgba(19,194,150,0.35)" : "none",
            cursor: rol ? "pointer" : "not-allowed",
          }}
        >
          Continuar →
        </button>

        <p className="text-center text-[#6B6B7B] text-xs mt-6">
          © 2025 ManitasGO. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
