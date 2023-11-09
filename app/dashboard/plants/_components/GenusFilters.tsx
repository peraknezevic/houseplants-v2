"use client";

interface Props {
  genera: string[];
}

const GenusFilters = ({ genera }: Props) => {
  return (
    <form>
      <select>
        <option value="">Filter by genus</option>
        {genera.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>
    </form>
  );
};

export default GenusFilters;