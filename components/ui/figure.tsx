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
    <figure className="mt-4 overflow-hidden rounded-bl-xl rounded-br-xl">
      <CldImage
        className="w-full"
        src={imgUrl}
        width={800}
        height={1000}
        alt={alt}
      />
      <figcaption className="z-10 -mt-20 block px-4 pb-2 text-right text-white">
        <p>{caption}</p>
        <ReactMarkdown>{credit}</ReactMarkdown>
      </figcaption>
    </figure>
  );
};

export default Figure;
