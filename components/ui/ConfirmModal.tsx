"use client";

import { cn } from "@/lib/utils";

interface ConfirmModalProps {
  open: boolean;
  title: string;
  body: string;
  confirmLabel?: string;
  cancelLabel?: string;
  confirmVariant?: "danger" | "primary";
  icon?: "danger" | "warning" | "info";
  onConfirm: () => void;
  onCancel: () => void;
}

export function ConfirmModal({
  open,
  title,
  body,
  confirmLabel = "Confirmar",
  cancelLabel = "Cancelar",
  confirmVariant = "danger",
  icon = "danger",
  onConfirm,
  onCancel,
}: ConfirmModalProps) {
  if (!open) return null;

  const iconColors = {
    danger:  "bg-[#FEF3F3] text-[#F23030]",
    warning: "bg-[#FFFBEB] text-[#D97706]",
    info:    "bg-[#E9F9FF] text-[#01A9DB]",
  };

  const confirmColors = {
    danger:  "bg-[#F23030] hover:bg-[#E10E0E] text-white",
    primary: "bg-[#13C296] hover:bg-[#0FA37D] text-white",
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center" style={{ background: "rgba(17,25,40,0.55)" }}>
      <div
        className="bg-white w-full max-w-[390px] rounded-t-2xl p-6 flex flex-col gap-5"
        style={{ boxShadow: "0 -4px 16px rgba(0,0,0,0.08)" }}
      >
        {/* Handle */}
        <div className="w-10 h-1 bg-[#DEE2E6] rounded-full mx-auto -mt-1" />

        {/* Icon */}
        <div className={cn("w-12 h-12 rounded-full flex items-center justify-center mx-auto", iconColors[icon])}>
          {icon === "danger" || icon === "warning" ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 9v5M12 16.5v.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
              <path d="M12 8v5M12 15.5v.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </div>

        {/* Content */}
        <div className="text-center">
          <h3 className="font-display font-bold text-xl text-[#373737] mb-2">{title}</h3>
          <p className="text-sm text-[#7B7B7B] leading-relaxed">{body}</p>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 h-12 rounded-lg border border-[#DEE2E6] text-[#373737] text-sm font-medium hover:bg-[#F3F4F6] transition-colors"
          >
            {cancelLabel}
          </button>
          <button
            onClick={onConfirm}
            className={cn("flex-1 h-12 rounded-lg text-sm font-medium transition-colors", confirmColors[confirmVariant])}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
