"use client";

import { useRef, useState } from "react";

interface AvatarUploadProps {
  currentUrl?: string | null;
  nombre?: string;
  onFileSelected: (file: File) => void;
}

export function AvatarUpload({ currentUrl, nombre, onFileSelected }: AvatarUploadProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [preview, setPreview] = useState<string | null>(currentUrl ?? null);
  const fileRef = useRef<HTMLInputElement>(null);

  const initials = nombre
    ? nombre.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase()
    : "?";

  function handleFile(file: File) {
    const url = URL.createObjectURL(file);
    setPreview(url);
    onFileSelected(file);
    setModalOpen(false);
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  }

  return (
    <>
      {/* Avatar con overlay cámara */}
      <button
        type="button"
        onClick={() => setModalOpen(true)}
        className="relative w-24 h-24 rounded-full overflow-hidden group"
        aria-label="Cambiar foto de perfil"
      >
        {preview ? (
          <img src={preview} alt="Foto de perfil" className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-[#E6F9F4] flex items-center justify-center text-[#13C296] font-display font-bold text-2xl">
            {initials}
          </div>
        )}
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="12" cy="13" r="4" stroke="white" strokeWidth="1.8" />
          </svg>
        </div>
        {/* Badge cámara siempre visible */}
        <div className="absolute bottom-0 right-0 w-7 h-7 rounded-full bg-[#13C296] border-2 border-white flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="12" cy="13" r="3" stroke="white" strokeWidth="2" />
          </svg>
        </div>
      </button>

      {/* Input oculto */}
      <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleInputChange} />

      {/* Modal de selección */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center"
          style={{ background: "rgba(17,25,40,0.55)" }}
          onClick={() => setModalOpen(false)}
        >
          <div
            className="bg-white w-full max-w-[390px] rounded-t-2xl p-6 flex flex-col gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Handle */}
            <div className="w-10 h-1 bg-[#DEE2E6] rounded-full mx-auto" />

            <h3 className="font-display font-bold text-lg text-[#373737] text-center">Cambiar foto</h3>

            {/* Drop zone */}
            <label className="border-2 border-dashed border-[#13C296] rounded-xl p-8 flex flex-col items-center gap-2 cursor-pointer hover:bg-[#E6F9F4] transition-colors">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" stroke="#13C296" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <polyline points="17 8 12 3 7 8" stroke="#13C296" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="12" y1="3" x2="12" y2="15" stroke="#13C296" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              <span className="text-sm text-[#7B7B7B] text-center">
                Toque aquí para subir desde la galería
              </span>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) handleFile(file);
                }}
              />
            </label>

            <button
              onClick={() => setModalOpen(false)}
              className="h-12 border border-[#DEE2E6] rounded-lg text-sm text-[#373737] font-medium hover:bg-[#F3F4F6] transition-colors"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
