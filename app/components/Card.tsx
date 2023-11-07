import Link from "next/link";
import Image from "next/image";

interface Props {
  item: {
    id: string;
    slug: string;
    title: string;
  };
}

const Card = ({ item }: Props) => {
  return (
    <li className="overflow-hidden rounded-xl bg-white text-center shadow-md">
      <Link href={`/plant-profiles/${item.slug}/`}>
        <Image
          src={`/images/plants/${item.slug}/${item.slug}-01.jpg`}
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
