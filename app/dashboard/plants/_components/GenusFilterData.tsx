import GenusFilters from "./GenusFilters";
import { genusPagesData } from "@/app/hooks/useData";

const GenusFilterData = async () => {
  const genera = await genusPagesData();
  return <GenusFilters genera={genera} />;
};

export default GenusFilterData;
