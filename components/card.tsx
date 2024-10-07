import CldImage from "./cloudinary";
import Link from "next/link";

const Card = ({
  item,
  imgFolder,
  pageFolder,
}: {
  item: {
    id: string;
    slug: string;
    title: string;
  };
  imgFolder: string;
  pageFolder: string;
}) => {
  return (
    <li className="h-fit overflow-hidden rounded-xl bg-white text-center shadow-md transition-shadow hover:shadow-xl dark:bg-zinc-900">
      <Link href={`/${pageFolder}/${item.slug}/`}>
        <CldImage
          src={`/images/${imgFolder}/${item.slug}/${item.slug}.jpg`}
          width={400}
          height={500}
          alt={item.title}
        />
        <h3 className="mb-2 px-4 py-4 text-xl leading-8">{item.title}</h3>
      </Link>
    </li>
  );
};

export default Card;
