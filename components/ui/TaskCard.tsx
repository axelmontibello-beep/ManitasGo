"use client";

import { cn, formatPrice, formatPriceRange } from "@/lib/utils";
import { StatusBadge } from "./StatusBadge";

interface TaskCardProps {
  id:          string;
  titulo:      string;
  estado:      "pendiente" | "en_progreso" | "completada" | "cancelada";
  tipo_precio: "fijo" | "rango";
  precio_fijo?: number | null;
  precio_min?:  number | null;
  precio_max?:  number | null;
  solicitudes:  number;
  onEdit?:   () => void;
  onDelete?: () => void;
  onClick?:  () => void;
  className?: string;
}

export function TaskCard({
  titulo, estado, tipo_precio, precio_fijo, precio_min, precio_max,
  solicitudes, onEdit, onDelete, onClick, className,
}: TaskCardProps) {
  const precio =
    tipo_precio === "fijo" && precio_fijo != null
      ? formatPrice(precio_fijo)
      : precio_min != null && precio_max != null
        ? formatPriceRange(precio_min, precio_max)
        : "—";

  const canEdit = estado === "pendiente";

  return (
    <div
      className={cn(
        "border border-[#E5E8EB] rounded-lg p-3 bg-white flex flex-col gap-2",
        "shadow-[0_1px_3px_rgba(0,0,0,0.10)]",
        onClick && "cursor-pointer active:scale-[0.99] transition-transform",
        className
      )}
      onClick={onClick}
    >
      {/* Header: badge + actions */}
      <div className="flex items-center justify-between">
        <StatusBadge estado={estado} />
        {canEdit && (
          <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
            {onEdit && (
              <button
                onClick={onEdit}
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#7B7B7B] hover:bg-[#F3F4F6] transition-colors"
                aria-label="Editar tarea"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            )}
            {onDelete && (
              <button
                onClick={onDelete}
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#F23030] hover:bg-[#FEF3F3] transition-colors"
                aria-label="Eliminar tarea"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <polyline points="3 6 5 6 21 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10 11v6M14 11v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            )}
          </div>
        )}
      </div>

      {/* Title */}
      <p className="font-display font-bold text-base text-[#000000] leading-snug line-clamp-2">
        {titulo}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between mt-1">
        <span className="font-display font-semibold text-sm text-[#373737]">{precio}</span>
        <span className="text-xs text-[#7B7B7B]">
          {solicitudes === 0
            ? "Sin solicitudes"
            : solicitudes === 1
              ? "1 solicitud"
              : `${solicitudes} solicitudes`}
        </span>
      </div>
    </div>
  );
}
