import React from "react";
import ViewButton from "./ViewButton";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";

type Props = {
  cat: string;
  slug: string;
};

const Actions = ({ cat, slug }: Props) => {
  return (
    <td className="space-x-2 lg:w-1/4">
      <ViewButton cat={cat} slug={slug} />
      <EditButton cat={cat} slug={slug} />
      <DeleteButton cat={cat} slug={slug} />
    </td>
  );
};

export default Actions;
