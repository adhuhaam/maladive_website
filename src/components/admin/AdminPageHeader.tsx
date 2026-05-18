import Link from "next/link";

export function AdminPageHeader({
  title,
  description,
  action,
}: {
  title: string;
  description?: string;
  action?: { label: string; href: string };
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">{title}</h1>
        {description && <p className="text-slate-500 text-sm mt-1 max-w-xl">{description}</p>}
      </div>
      {action && (
        <Link
          href={action.href}
          className="inline-flex items-center justify-center px-4 py-2.5 bg-cyan-600 text-white text-sm font-semibold rounded-lg shadow-sm hover:bg-cyan-700 transition-colors shrink-0"
        >
          {action.label}
        </Link>
      )}
    </div>
  );
}
