// app/city/[slug]/page.tsx

import CityPageContent from "@/components/city/CityPageContent";



type CityPageParams = {
  slug: string;
};

function formatCityName(slug: string | undefined) {
  if (!slug) return "";
  return decodeURIComponent(slug)
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

// ✅ SERVER component – params is a Promise in Next 16
export default async function CityPage({
  params,
}: {
  params: Promise<CityPageParams>;
}) {
  const { slug } = await params;
  const cityName = formatCityName(slug);

  return <CityPageContent cityName={cityName} slug={slug} />;
}
