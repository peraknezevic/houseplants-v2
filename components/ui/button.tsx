import Link from "next/link";

const Button = ({
  link,
  title,
  type,
  onClick,
}: {
  link?: string;
  title: string;
  type?: "external" | "submit";
  onClick?: () => void;
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
        <button type="submit" onClick={onClick}>
          {title}
        </button>
      );
    default:
      if (link) return <Link href={link} className="text-base uppercase tracking-wider font-semibold bg-zinc-900 border text-zinc-50 border-zinc-900 px-4 py-2 block hover:bg-zinc-500 hover:text-zinc-900">{title}</Link>;
      else return null;
  }
};

export default Button;
