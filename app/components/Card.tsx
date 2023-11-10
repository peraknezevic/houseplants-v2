import Link from "next/link";
import Image from "next/image";

interface Props {
  item: {
    id: string;
    slug: string;
    title: string;
  };
  imgFolder: string;
  pageFolder: string;
}

const Card = ({ item, imgFolder, pageFolder }: Props) => {
  return (
    <li className="h-fit overflow-hidden rounded-xl bg-white text-center shadow-md">
      <Link href={`/${pageFolder}/${item.slug}/`}>
        <Image
          src={`/images/${imgFolder}/${item.slug}/${item.slug}.jpg`}
          width={400}
          height={500}
          alt={item.title}
        />
        <h3 className="mb-2 px-4 py-4 text-xl font-bold leading-8">
          {item.title}
        </h3>
      </Link>
    </li>
  );
};
export default Card;
