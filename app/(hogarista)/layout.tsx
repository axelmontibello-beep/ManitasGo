import { ToastProvider } from "@/components/ui/Toast";

export default function HogaristaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ToastProvider>
      <div className="min-h-dvh bg-[#FAFAFA] pb-24">{children}</div>
    </ToastProvider>
  );
}
