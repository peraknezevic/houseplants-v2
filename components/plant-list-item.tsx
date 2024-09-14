import { removeChars } from "@/lib/utils";

const PlantListItem = ({ title }: { title: string }) => {
  return (
    <li className="flex px-8 pb-2 before:mr-2 before:content-['▸']">
      <a href={"#" + removeChars(title)}>{title}</a>
    </li>
  );
};

export default PlantListItem;
