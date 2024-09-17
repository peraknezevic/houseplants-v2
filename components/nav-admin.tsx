import NavItem from "./ui/item-nav";
import { adminNavItems } from "@/lib/constants";

const NavAdmin = () => {
    return <nav>
        <ul className="flex gap-4 py-4 px-4 bg-white border-b-[1px] border-zinc-100">
            {adminNavItems.map((item) => (
                <NavItem key={item.id} title={item.title} href={item.url} />
            ))}
      </ul>
  </nav>;
};

export default NavAdmin;