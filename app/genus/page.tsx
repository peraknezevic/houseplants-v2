import Card from "@/components/card";
import CardGrid from "@/components/cards-grid";
import { DAILY } from "@/lib/constants";
import { Metadata } from "next";
import PageHead from "@/components/page-head";
import { getGeneras } from "@/lib/server-utils";

export const revalidate = DAILY;

export default async function GenerasPage() {
  const data = await getGeneras();

  return (
    <div>
      <PageHead title="Genera Pages" />
      <CardGrid>
        {data.map((item) => (
          <Card
            key={item.id}
            item={item}
            imgFolder="genus"
            pageFolder="genus"
          />
        ))}
      </CardGrid>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Genera Pages - Houseplants",
  description:
    "Pages dedicated to various Plant genera, listing all the species, cultivars and hybrids",
};
