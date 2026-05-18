export function AdminTable({
  headers,
  children,
  emptyMessage = "No records yet.",
  isEmpty,
}: {
  headers: string[];
  children: React.ReactNode;
  emptyMessage?: string;
  isEmpty?: boolean;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              {headers.map((h) => (
                <th
                  key={h}
                  className="text-left px-5 py-3.5 font-semibold text-slate-600 text-xs uppercase tracking-wider"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">{children}</tbody>
        </table>
      </div>
      {isEmpty && (
        <p className="text-center text-slate-400 py-12 text-sm">{emptyMessage}</p>
      )}
    </div>
  );
}

export function AdminTableRow({
  children,
}: {
  children: React.ReactNode;
}) {
  return <tr className="hover:bg-slate-50/80 transition-colors">{children}</tr>;
}

export function AdminTableCell({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <td className={`px-5 py-4 text-slate-700 ${className}`}>{children}</td>;
}
