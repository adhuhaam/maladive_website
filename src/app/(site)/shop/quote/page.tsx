import { Suspense } from "react";
import { QuoteRequestForm } from "@/components/shop/QuoteRequestForm";

export default function QuotePage() {
  return (
    <Suspense fallback={<div className="py-16 text-center text-gray-500">Loading…</div>}>
      <QuoteRequestForm />
    </Suspense>
  );
}
