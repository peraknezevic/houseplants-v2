"use client";

import { CldImage } from "next-cloudinary";
import ReactMarkdown from "react-markdown";

const Figure = ({
  imgUrl,
  alt,
  caption,
  credit,
}: {
  imgUrl: string;
  alt: string;
  caption: string;
  credit: string;
}) => {
  return (
    <figure className="relative mt-4 overflow-hidden rounded-bl-xl rounded-br-xl">
      <CldImage
        className="block w-full"
        src={imgUrl}
        width={800}
        height={1000}
        alt={alt}
      />
      {/* Dark gradient behind the caption keeps white text readable on any photo. */}
      <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent px-4 pb-2 pt-10 text-right text-white [&_a]:underline">
        <p>{caption}</p>
        <ReactMarkdown>{credit}</ReactMarkdown>
      </figcaption>
    </figure>
  );
};

export default Figure;
