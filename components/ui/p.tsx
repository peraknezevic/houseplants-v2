import Link from "next/link";
import { removeChars } from "@/lib/utils";

const P = ({
  title,
  content,
  list,
  external,
}: {
  title: string;
  content?: string;
  list?: string;
  external?: boolean;
}) => {
  return (
    <p className="px-8 pb-4">
      <span className="font-semibold">{title}: </span>
      {content && content}
      {list &&
        list.split(", ").map((parent, i) => (
          <span key={i}>
            {i > 0 && ", "}
            {external ? (
              <Link href={removeChars(parent)}>
                {parent.replaceAll('"', "")}
              </Link>
            ) : (
              <a key={parent} href={"#" + removeChars(parent)}>
                {parent.replaceAll('"', "")}
              </a>
            )}
          </span>
        ))}
    </p>
  );
};

export default P;
