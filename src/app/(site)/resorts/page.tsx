import { ResortsPage } from "@/components/site/pages/ResortsPage";
import { getActiveResorts } from "@/lib/resorts";

export const revalidate = 60;

export default async function Page() {
  const resorts = await getActiveResorts();
  return <ResortsPage resorts={resorts} />;
}
