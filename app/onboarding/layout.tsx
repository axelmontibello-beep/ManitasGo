export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-dvh bg-[#1C1C2E] text-white">{children}</div>
  );
}
