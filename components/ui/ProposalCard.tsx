"use client";

import { formatPrice } from "@/lib/utils";
import { StarRating } from "./StarRating";

interface ProposalCardProps {
  id:              string;
  nombre:          string;
  foto_url?:       string | null;
  rating:          number;
  especialidad?:   string;
  mensaje:         string;
  precio_propuesto: number;
  estado:          "pendiente" | "aceptada" | "rechazada";
  onAceptar?: () => void;
}

export function ProposalCard({
  nombre, foto_url, rating, especialidad, mensaje,
  precio_propuesto, estado, onAceptar,
}: ProposalCardProps) {
  const initials = nombre.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();

  return (
    <div className="border border-[#E5E8EB] rounded-lg p-4 bg-white flex flex-col gap-3 shadow-[0_1px_3px_rgba(0,0,0,0.10)]">
      {/* Header */}
      <div className="flex items-center gap-3">
        {/* Avatar */}
        <div className="w-11 h-11 rounded-full bg-[#E6F9F4] flex items-center justify-center flex-shrink-0 text-[#13C296] font-display font-bold text-sm overflow-hidden">
          {foto_url ? (
            <img src={foto_url} alt={nombre} className="w-full h-full object-cover" />
          ) : (
            initials
          )}
        </div>

        {/* Name + rating */}
        <div className="flex-1 min-w-0">
          <p className="font-display font-bold text-sm text-[#373737] truncate">{nombre}</p>
          {especialidad && (
            <p className="text-xs text-[#7B7B7B]">{especialidad}</p>
          )}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 flex-shrink-0">
          <StarRating value={rating} readonly size="sm" />
          <span className="text-xs font-semibold text-[#373737]">{rating.toFixed(1)}</span>
        </div>
      </div>

      {/* Mensaje */}
      <p className="text-sm text-[#7B7B7B] leading-relaxed line-clamp-3">{mensaje}</p>

      {/* Footer: precio + acción */}
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs text-[#7B7B7B]">Precio propuesto</span>
          <p className="font-display font-bold text-base text-[#13C296]">{formatPrice(precio_propuesto)}</p>
        </div>

        {estado === "pendiente" && onAceptar && (
          <button
            onClick={onAceptar}
            className="h-10 px-5 bg-[#13C296] hover:bg-[#0FA37D] active:bg-[#0B7A5E] text-white text-sm font-medium rounded-lg transition-colors"
          >
            Aceptar
          </button>
        )}
        {estado === "aceptada" && (
          <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#DAF8E6] text-[#1A8E48] text-xs font-medium">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="7" fill="#22AD5C" />
              <path d="M4 7l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Oferta aceptada
          </span>
        )}
      </div>
    </div>
  );
}
