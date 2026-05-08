export default function ManitasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-dvh bg-gray-50">{children}</div>
  );
}
