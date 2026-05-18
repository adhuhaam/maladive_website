import { notFound } from "next/navigation";
import { ResortDetailPage } from "@/components/site/ResortDetailPage";
import { getResortBySlug } from "@/lib/resorts";

export const dynamic = "force-dynamic";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const resort = await getResortBySlug(slug);
  if (!resort) notFound();
  return <ResortDetailPage resort={resort} />;
}
