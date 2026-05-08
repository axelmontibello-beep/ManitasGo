import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  }).format(amount);
}

export function formatPriceRange(min: number, max: number): string {
  return `${formatPrice(min)} – ${formatPrice(max)}`;
}

export function formatDate(date: Date | string): string {
  return new Intl.DateTimeFormat("es-ES", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

export function timeAgo(date: Date | string): string {
  const now = new Date();
  const then = new Date(date);
  const diff = now.getTime() - then.getTime();

  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);

  if (minutes < 1) return "ahora";
  if (minutes < 60) return `hace ${minutes}m`;
  if (hours < 24) return `hace ${hours}h`;
  if (days < 7) return `hace ${days}d`;
  return formatDate(date);
}
