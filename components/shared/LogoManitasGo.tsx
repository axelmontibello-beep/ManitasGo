import Image from "next/image";

export function LogoManitasGo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/logo-manitas-go.png"
      alt="ManitasGo"
      width={120}
      height={40}
      priority
      className={`object-contain ${className}`}
    />
  );
}
