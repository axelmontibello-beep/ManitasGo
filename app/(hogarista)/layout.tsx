export default function HogaristaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-dvh bg-gray-50 pb-20">{children}</div>
  );
}
