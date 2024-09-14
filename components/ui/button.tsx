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
      if (link) return <Link href={link}>{title}</Link>;
      else return null;
  }
};

export default Button;
