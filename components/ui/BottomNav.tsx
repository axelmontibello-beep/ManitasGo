"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const tabs = [
  {
    href:  "/home",
    label: "Inicio",
    icon: (active: boolean) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M3 12L12 3l9 9" stroke={active ? "white" : "rgba(255,255,255,0.5)"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 10v9a1 1 0 001 1h4v-4h4v4h4a1 1 0 001-1v-9" stroke={active ? "white" : "rgba(255,255,255,0.5)"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    href:  "/tareas",
    label: "Tareas",
    icon: (active: boolean) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="3" stroke={active ? "white" : "rgba(255,255,255,0.5)"} strokeWidth="1.8" />
        <path d="M8 12l2.5 2.5L16 9" stroke={active ? "white" : "rgba(255,255,255,0.5)"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    href:  "/mensajes",
    label: "Mensajes",
    icon: (active: boolean) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke={active ? "white" : "rgba(255,255,255,0.5)"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    href:  "/cuenta",
    label: "Cuenta",
    icon: (active: boolean) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="4" stroke={active ? "white" : "rgba(255,255,255,0.5)"} strokeWidth="1.8" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke={active ? "white" : "rgba(255,255,255,0.5)"} strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
];

interface BottomNavProps {
  onPublish?: () => void;
}

export function BottomNav({ onPublish }: BottomNavProps) {
  const pathname = usePathname();

  const leftTabs  = tabs.slice(0, 2);
  const rightTabs = tabs.slice(2);

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[390px] z-40">
      {/* FAB central */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
        <Link
          href="/tareas/nueva"
          className="w-[72px] h-[72px] rounded-full bg-[#13C296] flex items-center justify-center shadow-[0_8px_24px_rgba(36,16,167,0.15)] border-4 border-white"
          aria-label="Publicar nueva tarea"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14M5 12h14" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </Link>
      </div>

      {/* Bar */}
      <div className="w-full h-14 bg-[#292929] flex items-center px-8 safe-bottom">
        <div className="flex items-center justify-between w-full">
          {/* Left tabs */}
          <div className="flex items-center gap-8">
            {leftTabs.map((tab) => {
              const active = pathname === tab.href || pathname.startsWith(tab.href + "/");
              return (
                <Link key={tab.href} href={tab.href} className="flex flex-col items-center gap-0.5">
                  {tab.icon(active)}
                  <span className={cn("text-[10px]", active ? "text-white" : "text-white/50")}>
                    {tab.label}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Spacer for FAB */}
          <div className="w-[72px]" />

          {/* Right tabs */}
          <div className="flex items-center gap-8">
            {rightTabs.map((tab) => {
              const active = pathname === tab.href || pathname.startsWith(tab.href + "/");
              return (
                <Link key={tab.href} href={tab.href} className="flex flex-col items-center gap-0.5">
                  {tab.icon(active)}
                  <span className={cn("text-[10px]", active ? "text-white" : "text-white/50")}>
                    {tab.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
