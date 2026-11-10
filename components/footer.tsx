import Link from "next/link";
import { socialNavItems } from "@/lib/constants";

const Footer = () => {
  return (
    <footer className="mt-auto flex flex-col items-center justify-center gap-6 bg-pink-950 px-4 py-6 text-white dark:bg-emerald-950 md:gap-8 md:px-6 md:py-12">
      <div className="flex flex-wrap gap-4 md:flex-nowrap md:gap-8">
        <span className="w-full md:w-auto">Follow us on:</span>
        <ul className="list-unstyled flex justify-between gap-x-8">
          {socialNavItems.map((item) => (
            <li key={item.id}>
              <a href={item.url} className="underline underline-offset-4">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <nav aria-label="Footer">
        <ul className="flex gap-4 md:gap-8">
          <li>
            <Link
              href="/pages/privacy-policy"
              className="underline underline-offset-4"
            >
              Privacy policy
            </Link>
          </li>
          <li>
            <a
              href="mailto:houseplants.xyz@gmail.com"
              className="underline underline-offset-4"
            >
              Contact via email
            </a>
          </li>
        </ul>
      </nav>
      <p className="mx-auto text-center">
        &copy; 2021.-{new Date().getFullYear()}. Designed and developed by{" "}
        <a
          href="https://peraknezevic.com"
          className="underline underline-offset-4"
        >
          Pera Knezevic
        </a>
        . All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
