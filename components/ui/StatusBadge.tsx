import { cn } from "@/lib/utils";

type Estado = "pendiente" | "en_progreso" | "completada" | "cancelada";

const config: Record<Estado, { label: string; classes: string }> = {
  pendiente:    { label: "Pendiente",    classes: "bg-[#FFFBEB] text-[#D97706] border border-[#FBBF24]" },
  en_progreso:  { label: "En progreso",  classes: "bg-[#E6F9F4] text-[#0FA37D] border border-[#13C296]" },
  completada:   { label: "Completada",   classes: "bg-[#DAF8E6] text-[#1A8E48] border border-[#22AD5C]" },
  cancelada:    { label: "Cancelada",    classes: "bg-[#F3F4F6] text-[#6B7280] border border-[#DEE2E6]" },
};

interface StatusBadgeProps {
  estado: Estado;
  className?: string;
}

export function StatusBadge({ estado, className }: StatusBadgeProps) {
  const { label, classes } = config[estado];
  return (
    <span className={cn("inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium", classes, className)}>
      {label}
    </span>
  );
}
