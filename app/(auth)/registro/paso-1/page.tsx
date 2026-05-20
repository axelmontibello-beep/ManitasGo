"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

function StepBar({ step }: { step: 1 | 2 | 3 }) {
  return (
    <div className="flex items-center gap-2 mb-6">
      {[1, 2, 3].map((s) => (
        <div key={s} className="flex items-center gap-2">
          <div
            className={`flex items-center justify-center w-7 h-7 rounded-full text-xs font-semibold transition-colors ${
              s < step ? "bg-[#22AD5C] text-white" :
              s === step ? "bg-[#13C296] text-white" :
              "bg-[#3A3A52] text-[#6B6B7B]"
            }`}
          >
            {s < step ? (
              <svg width="12" height="10" fill="none" stroke="white" strokeWidth={2.5} viewBox="0 0 12 10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M1 5l3 3.5L11 1"/>
              </svg>
            ) : s}
          </div>
          {s < 3 && (
            <div className={`h-px w-10 ${s < step ? "bg-[#22AD5C]" : "bg-[#3A3A52]"}`} />
          )}
        </div>
      ))}
    </div>
  );
}

function PasswordStrength({ password }: { password: string }) {
  const length    = password.length >= 8;
  const uppercase = /[A-Z]/.test(password);
  const number    = /[0-9]/.test(password);
  const score     = [length, uppercase, number].filter(Boolean).length;
  if (!password) return null;
  const colors  = ["#F23030", "#FBBF24", "#22AD5C"];
  const labels  = ["Débil", "Regular", "Fuerte"];
  return (
    <div className="mt-1.5">
      <div className="flex gap-1 mb-1">
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-1 flex-1 rounded-full transition-colors"
               style={{ background: i < score ? colors[score - 1] : "#3A3A52" }} />
        ))}
      </div>
      <p className="text-xs" style={{ color: colors[score - 1] ?? "#6B6B7B" }}>
        {password.length > 0 ? labels[score - 1] ?? "Muy débil" : ""}
      </p>
    </div>
  );
}

export default function RegistroPaso1() {
  const router = useRouter();
  const [email, setEmail]       = useState("");
  const [pass, setPass]         = useState("");
  const [confirm, setConfirm]   = useState("");
  const [showPass, setShowPass] = useState(false);
  const [errors, setErrors]     = useState<Record<string, string>>({});

  function validate() {
    const e: Record<string, string> = {};
    if (!email)                   e.email = "El email es obligatorio.";
    else if (!/\S+@\S+\.\S+/.test(email)) e.email = "Introduce un email válido.";
    if (!pass)                    e.pass = "La contraseña es obligatoria.";
    else if (pass.length < 8)     e.pass = "Mínimo 8 caracteres.";
    if (pass !== confirm)         e.confirm = "Las contraseñas no coinciden.";
    return e;
  }

  function siguiente() {
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;
    sessionStorage.setItem("registro_email", email);
    sessionStorage.setItem("registro_pass",  pass);
    router.push("/registro/paso-2");
  }

  return (
    <div className="min-h-dvh flex flex-col px-5 pt-10 pb-10">

      {/* Título + step */}
      <div className="mb-6">
        <Link href="/rol" className="inline-flex items-center gap-2 text-[#9CA3AF] text-sm mb-4 hover:text-white transition-colors">
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"/>
          </svg>
          Volver
        </Link>
        <StepBar step={1} />
        <h1 className="font-display font-bold text-2xl text-white">Registro de Hogarista</h1>
        <p className="text-[#9CA3AF] text-sm mt-1">Ingresar email y contraseña</p>
      </div>

      {/* Icono */}
      <div className="w-14 h-14 rounded-2xl bg-[#252538] flex items-center justify-center mb-6">
        <svg width="28" height="28" fill="none" stroke="#13C296" strokeWidth={1.8} viewBox="0 0 24 24">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 11V7a5 5 0 0110 0v4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      <div className="flex flex-col gap-4 flex-1">
        {/* Email */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-[#D1D5DB]">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@email.com"
            className={`h-12 px-4 rounded-lg bg-[#252538] border text-white placeholder-[#6B6B7B] focus:outline-none transition-colors text-sm ${errors.email ? "border-[#F23030]" : "border-[#3A3A52] focus:border-[#13C296]"}`}
          />
          {errors.email && <p className="text-xs text-[#F23030]">{errors.email}</p>}
        </div>

        {/* Contraseña */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-[#D1D5DB]">Contraseña</label>
          <div className="relative">
            <input
              type={showPass ? "text" : "password"}
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              placeholder="Mínimo 8 caracteres"
              className={`w-full h-12 px-4 pr-12 rounded-lg bg-[#252538] border text-white placeholder-[#6B6B7B] focus:outline-none transition-colors text-sm ${errors.pass ? "border-[#F23030]" : "border-[#3A3A52] focus:border-[#13C296]"}`}
            />
            <button type="button" onClick={() => setShowPass(!showPass)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B6B7B] hover:text-[#9CA3AF]">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                {showPass
                  ? <><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" strokeLinecap="round" strokeLinejoin="round"/><line x1="1" y1="1" x2="23" y2="23" strokeLinecap="round"/></>
                  : <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="3"/></>
                }
              </svg>
            </button>
          </div>
          <PasswordStrength password={pass} />
          {errors.pass && <p className="text-xs text-[#F23030]">{errors.pass}</p>}
        </div>

        {/* Confirmar */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-[#D1D5DB]">Confirmar contraseña</label>
          <input
            type="password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            placeholder="Repite tu contraseña"
            className={`h-12 px-4 rounded-lg bg-[#252538] border text-white placeholder-[#6B6B7B] focus:outline-none transition-colors text-sm ${errors.confirm ? "border-[#F23030]" : confirm && confirm === pass ? "border-[#22AD5C]" : "border-[#3A3A52] focus:border-[#13C296]"}`}
          />
          {confirm && confirm === pass && (
            <p className="text-xs text-[#22AD5C] flex items-center gap-1">
              <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg>
              Las contraseñas coinciden
            </p>
          )}
          {errors.confirm && <p className="text-xs text-[#F23030]">{errors.confirm}</p>}
        </div>
      </div>

      {/* Botones */}
      <div className="flex gap-3 mt-8">
        <Link href="/rol"
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
