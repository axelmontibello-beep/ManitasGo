"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

function StepBar({ step }: { step: 1 | 2 | 3 }) {
  return (
    <div className="flex items-center gap-2 mb-6">
      {[1, 2, 3].map((s) => (
        <div key={s} className="flex items-center gap-2">
          <div className={`flex items-center justify-center w-7 h-7 rounded-full text-xs font-semibold transition-colors ${
            s < step ? "bg-[#22AD5C] text-white" :
            s === step ? "bg-[#13C296] text-white" :
            "bg-[#3A3A52] text-[#6B6B7B]"
          }`}>
            {s < step ? (
              <svg width="12" height="10" fill="none" stroke="white" strokeWidth={2.5} viewBox="0 0 12 10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M1 5l3 3.5L11 1"/>
              </svg>
            ) : s}
          </div>
          {s < 3 && <div className={`h-px w-10 ${s < step ? "bg-[#22AD5C]" : "bg-[#3A3A52]"}`} />}
        </div>
      ))}
    </div>
  );
}

export default function RegistroPaso2() {
  const router = useRouter();
  const [nombre, setNombre]       = useState("");
  const [apellidos, setApellidos] = useState("");
  const [direccion, setDireccion] = useState("");
  const [errors, setErrors]       = useState<Record<string, string>>({});

  function validate() {
    const e: Record<string, string> = {};
    if (!nombre.trim())    e.nombre    = "El nombre es obligatorio.";
    if (!apellidos.trim()) e.apellidos = "Los apellidos son obligatorios.";
    if (!direccion.trim()) e.direccion = "La dirección es obligatoria.";
    return e;
  }

  function siguiente() {
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;
    sessionStorage.setItem("registro_nombre",    nombre);
    sessionStorage.setItem("registro_apellidos", apellidos);
    sessionStorage.setItem("registro_direccion", direccion);
    router.push("/registro/paso-3");
  }

  return (
    <div className="min-h-dvh flex flex-col px-5 pt-10 pb-10">
      <div className="mb-6">
        <StepBar step={2} />
        <h1 className="font-display font-bold text-2xl text-white">Registro de Hogarista</h1>
        <p className="text-[#9CA3AF] text-sm mt-1">Información personal</p>
      </div>

      {/* Icono */}
      <div className="w-14 h-14 rounded-2xl bg-[#252538] flex items-center justify-center mb-6">
        <svg width="28" height="28" fill="none" stroke="#13C296" strokeWidth={1.8} viewBox="0 0 24 24">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" strokeLinecap="round" strokeLinejoin="round"/>
          <polyline points="14 2 14 8 20 8" stroke="#13C296" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="16" y1="13" x2="8" y2="13" stroke="#13C296" strokeWidth={1.8} strokeLinecap="round"/>
          <line x1="16" y1="17" x2="8" y2="17" stroke="#13C296" strokeWidth={1.8} strokeLinecap="round"/>
          <polyline points="10 9 9 9 8 9" stroke="#13C296" strokeWidth={1.8} strokeLinecap="round"/>
        </svg>
      </div>

      <div className="flex flex-col gap-4 flex-1">
        {/* Nombre */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-[#D1D5DB]">Nombre</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Tu nombre"
            className={`h-12 px-4 rounded-lg bg-[#252538] border text-white placeholder-[#6B6B7B] focus:outline-none transition-colors text-sm ${errors.nombre ? "border-[#F23030]" : "border-[#3A3A52] focus:border-[#13C296]"}`}
          />
          {errors.nombre && <p className="text-xs text-[#F23030]">{errors.nombre}</p>}
        </div>

        {/* Apellidos */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-[#D1D5DB]">Apellidos</label>
          <input
            type="text"
            value={apellidos}
            onChange={(e) => setApellidos(e.target.value)}
            placeholder="Tus apellidos"
            className={`h-12 px-4 rounded-lg bg-[#252538] border text-white placeholder-[#6B6B7B] focus:outline-none transition-colors text-sm ${errors.apellidos ? "border-[#F23030]" : "border-[#3A3A52] focus:border-[#13C296]"}`}
          />
          {errors.apellidos && <p className="text-xs text-[#F23030]">{errors.apellidos}</p>}
        </div>

        {/* Dirección */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-[#D1D5DB]">Dirección</label>
          <input
            type="text"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            placeholder="Calle, número, ciudad"
            className={`h-12 px-4 rounded-lg bg-[#252538] border text-white placeholder-[#6B6B7B] focus:outline-none transition-colors text-sm ${errors.direccion ? "border-[#F23030]" : "border-[#3A3A52] focus:border-[#13C296]"}`}
          />
          {errors.direccion && <p className="text-xs text-[#F23030]">{errors.direccion}</p>}
        </div>
      </div>

      <div className="flex gap-3 mt-8">
        <Link href="/registro/paso-1"
          className="flex items-center justify-center gap-2 flex-1 border border-[#3A3A52] hover:border-[#6B6B7B] text-[#9CA3AF] py-3.5 rounded-full font-semibold text-sm transition-all active:scale-[0.98]">
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"/>
          </svg>
          Volver
        </Link>
        <button onClick={siguiente}
          className="flex items-center justify-center gap-2 flex-[2] bg-[#13C296] hover:bg-[#0FA37D] active:bg-[#0B7A5E] text-white py-3.5 rounded-full font-semibold text-sm transition-all active:scale-[0.98] shadow-[0_4px_12px_rgba(19,194,150,0.35)]">
          Siguiente
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
