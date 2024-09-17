import NavItem from "./ui/item-nav";
import { mainNavItems } from "@/lib/constants";

const NavMain = () => {
  return (
    <nav>
      <ul className="m-4 flex justify-center gap-6 font-sans font-light md:m-8 md:gap-8 md:text-2xl">
        {mainNavItems.map((item) => (
          <NavItem key={item.id} title={item.title} href={item.url} />
        ))}
      </ul>
    </nav>
  );
};

export default NavMain;
