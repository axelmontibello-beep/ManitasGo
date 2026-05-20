"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
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

const terminos = [
  "Soy mayor de 18 años.",
  "ManitasGo actúa únicamente como intermediario entre usuarios.",
  "Los acuerdos y la correcta realización de las tareas son responsabilidad de los usuarios.",
  "El uso de la plataforma es gratuito en esta fase y cualquier comisión futura será comunicada previamente.",
  "Los pagos se gestionan a través de la plataforma para mayor seguridad.",
  "Mis datos personales se tratan conforme a la normativa vigente, incluida la normativa fiscal DAC7.",
];

export default function RegistroPaso3() {
  const router  = useRouter();
  const [checks, setChecks] = useState(new Array(terminos.length).fill(false));
  const [loading, setLoading] = useState(false);
  const todosAceptados = checks.every(Boolean);

  function toggle(i: number) {
    setChecks((prev) => prev.map((v, idx) => idx === i ? !v : v));
  }

  async function registrar() {
    if (!todosAceptados) return;
    setLoading(true);
    const email = sessionStorage.getItem("registro_email") ?? "";
    const pass  = sessionStorage.getItem("registro_pass")  ?? "";
    // Fase 1 (mock): simplemente iniciamos sesión con los datos introducidos
    // Fase 2: llamar POST /api/auth/registro para crear el usuario en Vercel Postgres
    const result = await signIn("credentials", { email, password: pass, redirect: false });
    setLoading(false);
    if (result?.ok) {
      sessionStorage.removeItem("registro_email");
      sessionStorage.removeItem("registro_pass");
      sessionStorage.removeItem("registro_nombre");
      sessionStorage.removeItem("registro_apellidos");
      sessionStorage.removeItem("registro_direccion");
      sessionStorage.removeItem("registro_rol");
      router.push("/registro/exito");
    }
  }

  return (
    <div className="min-h-dvh flex flex-col px-5 pt-10 pb-10">
      <div className="mb-6">
        <StepBar step={3} />
        <h1 className="font-display font-bold text-2xl text-white">Registro de Hogarista</h1>
        <p className="text-[#9CA3AF] text-sm mt-1">Términos y condiciones de uso</p>
      </div>

      {/* Icono */}
      <div className="w-14 h-14 rounded-2xl bg-[#252538] flex items-center justify-center mb-5">
        <svg width="28" height="28" fill="none" stroke="#13C296" strokeWidth={1.8} viewBox="0 0 24 24">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" strokeLinecap="round" strokeLinejoin="round"/>
          <polyline points="14 2 14 8 20 8" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 15l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Checkboxes */}
      <div className="flex flex-col gap-3 flex-1 overflow-y-auto">
        {terminos.map((texto, i) => (
          <button
            key={i}
            type="button"
            onClick={() => toggle(i)}
            className="flex items-start gap-3 text-left p-3 rounded-xl border transition-colors active:scale-[0.99]"
            style={{
              borderColor: checks[i] ? "#13C296" : "#3A3A52",
              background:  checks[i] ? "rgba(19,194,150,0.08)" : "transparent",
            }}
          >
            <div className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
              checks[i] ? "bg-[#13C296] border-[#13C296]" : "border-[#4B5563]"
            }`}>
              {checks[i] && (
                <svg width="10" height="8" fill="none" stroke="white" strokeWidth={2.5} viewBox="0 0 10 8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M1 4l3 3.5L9 1"/>
                </svg>
              )}
            </div>
            <span className="text-sm text-[#D1D5DB] leading-relaxed">{texto}</span>
          </button>
        ))}

        {/* Link TC completos */}
        <Link
          href="/terminos"
          className="text-[#13C296] text-sm hover:text-[#0FA37D] transition-colors py-1 flex items-center gap-1"
        >
          Ver Términos y Condiciones completos →
        </Link>
      </div>

      <div className="flex gap-3 mt-6">
        <Link href="/registro/paso-2"
          className="flex items-center justify-center gap-2 flex-1 border border-[#3A3A52] hover:border-[#6B6B7B] text-[#9CA3AF] py-3.5 rounded-full font-semibold text-sm transition-all active:scale-[0.98]">
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"/>
          </svg>
          Volver
        </Link>
        <button
          onClick={registrar}
          disabled={!todosAceptados || loading}
          className="flex items-center justify-center gap-2 flex-[2] py-3.5 rounded-full font-semibold text-sm transition-all active:scale-[0.98]"
          style={{
            background:  todosAceptados ? "#13C296" : "#3A3A52",
            color:       todosAceptados ? "white"   : "#6B6B7B",
            boxShadow:   todosAceptados ? "0 4px 12px rgba(19,194,150,0.35)" : "none",
            cursor:      todosAceptados ? "pointer" : "not-allowed",
          }}
        >
          {loading ? "Creando cuenta..." : "Siguiente"}
          {!loading && (
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
