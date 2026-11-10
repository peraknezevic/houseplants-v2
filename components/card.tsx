import CldImage from "@/components/cloudinary";
import Link from "next/link";

const Card = ({
  item,
  imgFolder,
  pageFolder,
  headingLevel = "h2",
}: {
  item: {
    id: string;
    slug: string;
    title: string;
  };
  imgFolder: string;
  pageFolder: string;
  // h2 on listing pages (directly under the page h1), h3 inside homepage sections.
  headingLevel?: "h2" | "h3";
}) => {
  const Heading = headingLevel;

  return (
    <li className="h-fit overflow-hidden rounded-xl bg-white text-center shadow-md transition-shadow hover:shadow-xl dark:bg-zinc-900">
      <Link href={`/${pageFolder}/${item.slug}/`}>
        <CldImage
          src={`/images/${imgFolder}/${item.slug}/${item.slug}.jpg`}
          width={400}
          height={500}
          // The heading below already names the link; a duplicate alt would be read twice.
          alt=""
        />
        <Heading className="font-regular mb-2 px-4 py-4 text-xl leading-8">
          {item.title}
        </Heading>
      </Link>
    </li>
  );
};

export default Card;
