import { removeChars } from "@/lib/utils";

const PlantListItem = ({ title }: { title: string }) => {
  return (
    <li className="flex px-8 pb-2">
      <span className="mr-2" aria-hidden="true">
        ▸
      </span>
      <a
        href={"#" + removeChars(title)}
        className="underline-offset-4 hover:underline"
      >
        {title}
      </a>
    </li>
  );
};

export default PlantListItem;
