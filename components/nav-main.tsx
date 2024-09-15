import Link from "next/link";
import { mainNavItems } from "@/lib/constants";

const NavMain = () => {
  return (
    <nav>
      <ul className="m-4 flex justify-center gap-6 font-sans font-light md:m-8 md:gap-8 md:text-2xl">
        {mainNavItems.map((item) => (
          <li key={item.id}>
            <Link
              href={item.url}
              className="tracking-wide decoration-2 underline-offset-8 transition-all hover:underline"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMain;
