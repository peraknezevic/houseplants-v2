import Link from "next/link";

const Button = ({
  link,
  title,
  type,
}: {
  link?: string;
  title: string;
  type?: "external" | "submit";
}) => {
  switch (type) {
    case "external":
      return (
        <a href={link} rel="noreferrer">
          {title}
        </a>
      );
    case "submit":
      return (
        <button
          type="submit"
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        >
          {title}
        </button>
      );
    default:
      if (link)
        return (
          <Link
            href={link}
            className="rounded bg-white px-4 py-2 text-base uppercase text-emerald-950 no-underline shadow-md transition hover:shadow-xl"
          >
            {title}
          </Link>
        );
      else return null;
  }
};

export default Button;
