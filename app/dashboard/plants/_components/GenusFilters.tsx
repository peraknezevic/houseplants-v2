"use client";

import { GenusPage } from "@prisma/client";
import { useRouter } from "next/navigation";

interface Props {
  genera: GenusPage[];
}

const GenusFilters = ({ genera }: Props) => {
  const router = useRouter();

  return (
    <select
      onChange={(event) => {
        const query = event.target.value ? `?genus=${event.target.value}` : "";
        router.push("plants" + query);
      }}
    >
      <option value="">Filter by genus</option>
      {genera.map((genus) => (
        <option key={genus.id} value={genus.slug}>
          {genus.title}
        </option>
      ))}
    </select>
  );
};

export default GenusFilters;
