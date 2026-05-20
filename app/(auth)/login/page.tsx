"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { LogoManitasGo } from "@/components/shared/LogoManitasGo";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail]         = useState("");
  const [password, setPassword]   = useState("");
  const [showPass, setShowPass]   = useState(false);
  const [remember, setRemember]   = useState(false);
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !password) { setError("Por favor rellena todos los campos."); return; }
    setLoading(true);
    setError("");
    const result = await signIn("credentials", { email, password, redirect: false });
    setLoading(false);
    if (result?.ok) {
      router.push("/home");
    } else {
      setError("Email o contraseña incorrectos. Inténtalo de nuevo.");
    }
  }

  return (
    <div className="min-h-dvh flex flex-col px-5 pt-12 pb-10">

      {/* Logo */}
      <div className="flex justify-center mb-10">
        <LogoManitasGo className="h-12 w-auto" />
      </div>

      {/* Título */}
      <div className="mb-7">
        <h1 className="font-display font-bold text-2xl text-white text-center">Iniciar sesión</h1>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Email */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-[#D1D5DB]">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@email.com"
            autoComplete="email"
            className="h-12 px-4 rounded-lg bg-[#252538] border border-[#3A3A52] text-white placeholder-[#6B6B7B] focus:outline-none focus:border-[#13C296] transition-colors text-sm"
          />
        </div>

        {/* Contraseña */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-[#D1D5DB]">Contraseña</label>
          <div className="relative">
            <input
              type={showPass ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              autoComplete="current-password"
              className="w-full h-12 px-4 pr-12 rounded-lg bg-[#252538] border border-[#3A3A52] text-white placeholder-[#6B6B7B] focus:outline-none focus:border-[#13C296] transition-colors text-sm"
            />
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B6B7B] hover:text-[#9CA3AF] transition-colors"
            >
              {showPass ? (
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="1" y1="1" x2="23" y2="23" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round"/>
                </svg>
              ) : (
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Recordar + olvidé */}
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 cursor-pointer">
            <div
              onClick={() => setRemember(!remember)}
              className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${remember ? "bg-[#13C296] border-[#13C296]" : "border-[#4B5563]"}`}
            >
              {remember && (
                <svg width="10" height="8" fill="none" stroke="white" strokeWidth={2.5} viewBox="0 0 10 8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M1 4l3 3 5-6"/>
                </svg>
              )}
            </div>
            <span className="text-sm text-[#9CA3AF]">Recordar contraseña</span>
          </label>
          <Link href="/recuperar" className="text-sm text-[#13C296] hover:text-[#0FA37D] transition-colors">
            ¿Olvidaste tu contraseña?
          </Link>
        </div>

        {/* Error */}
        {error && (
          <div className="px-4 py-3 rounded-lg bg-[#FEF3F3] border border-[#F23030] text-[#F23030] text-sm">
            {error}
          </div>
        )}

        {/* Botón principal */}
        <button
          type="submit"
          disabled={loading}
          className="w-full h-12 rounded-full bg-[#1A237E] hover:bg-[#283593] active:bg-[#0D1257] text-white font-semibold text-base transition-all duration-200 active:scale-[0.98] disabled:opacity-60 mt-1"
        >
          {loading ? "Iniciando sesión..." : "Iniciar sesión"}
        </button>
      </form>

      {/* Separador */}
      <div className="flex items-center gap-3 my-5">
        <div className="flex-1 h-px bg-[#3A3A52]" />
        <span className="text-[#6B6B7B] text-xs font-medium">o</span>
        <div className="flex-1 h-px bg-[#3A3A52]" />
      </div>

      {/* Social buttons */}
      <div className="flex flex-col gap-3">
        <button
          onClick={() => signIn("apple", { callbackUrl: "/home" })}
          className="w-full h-12 rounded-full bg-[#1C1C1C] hover:bg-black border border-[#3A3A52] text-white font-semibold text-sm flex items-center justify-center gap-3 transition-all active:scale-[0.98]"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          Continuar con Apple
        </button>

        <button
          onClick={() => signIn("google", { callbackUrl: "/home" })}
          className="w-full h-12 rounded-full bg-transparent hover:bg-[#252538] border border-[#3A3A52] text-white font-semibold text-sm flex items-center justify-center gap-3 transition-all active:scale-[0.98]"
        >
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          Continuar con Google
        </button>
      </div>

      {/* Registro link */}
      <p className="text-center text-[#9CA3AF] text-sm mt-7">
        ¿No tienes una cuenta?{" "}
        <Link href="/rol" className="text-[#13C296] font-semibold hover:text-[#0FA37D] transition-colors">
          Regístrate aquí
        </Link>
      </p>
    </div>
  );
}
