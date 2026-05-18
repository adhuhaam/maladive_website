export function AdminCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`bg-white rounded-xl border border-slate-200/80 shadow-sm ${className}`}>
      {children}
    </div>
  );
}
