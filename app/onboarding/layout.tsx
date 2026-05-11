export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-dvh bg-white text-gray-900">{children}</div>
  );
}
