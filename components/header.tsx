import Link from "next/link";
import { mainNavItems } from "@/lib/constants";

export default function Header() {
  return (
    <header className="mt-4">
      <div className="my-8 text-center font-sans text-4xl font-bold uppercase md:my-12 md:text-6xl lg:my-16 lg:text-8xl">
        Houseplants
      </div>
      <nav>
        <ul className="m-4 flex justify-center gap-6 font-sans font-light md:m-8 md:gap-8 md:text-2xl">
          {mainNavItems.map((item) => (
            <li key={item.id}>
              <Link href={item.url} className="underline underline-offset-8">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
