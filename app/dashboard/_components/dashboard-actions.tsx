import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import ViewButton from "./ViewButton";

type DashboardActionsProps = {
  cat: string;
  slug: string;
};

export default function DashboardActions({ cat, slug }: DashboardActionsProps) {
  return (
    <td className="space-x-2 lg:w-1/4">
      <ViewButton cat={cat} slug={slug} />
      <EditButton cat={cat} slug={slug} />
      <DeleteButton cat={cat} slug={slug} />
    </td>
  );
}
