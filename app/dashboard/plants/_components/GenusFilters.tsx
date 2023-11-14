"use client";

import { GenusPage } from "@prisma/client";

interface Props {
  genera: GenusPage[];
}

const GenusFilters = ({ genera }: Props) => {
  return (
    <form>
      <select>
        <option value="">Filter by genus</option>
        {genera.map((genus) => (
          <option key={genus.id} value={genus.slug}>
            {genus.title}
          </option>
        ))}
      </select>
    </form>
  );
};

export default GenusFilters;
