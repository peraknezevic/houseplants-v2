import CldImage from "@/components/cloudinary";
import Link from "next/link";

type CardProps = {
  item: {
    id: string;
    slug: string;
    title: string;
  };
  imgFolder: string;
  pageFolder: string;
};

export default function Card({ item, imgFolder, pageFolder }: CardProps) {
  return (
    <li className="h-fit overflow-hidden rounded-xl bg-white text-center shadow-md dark:bg-zinc-900">
      <Link href={`/${pageFolder}/${item.slug}/`}>
        <CldImage
          src={`/images/${imgFolder}/${item.slug}/${item.slug}.jpg`}
          width={400}
          height={500}
          alt={item.title}
        />
        <h3 className="font-regular mb-2 px-4 py-4 text-xl leading-8 hover:underline">
          {item.title}
        </h3>
      </Link>
    </li>
  );
}
