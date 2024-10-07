import Logo from "./ui/logo";
import NavMain from "./nav-main";
import ThemeSwitch from "./ui/theme-swtch";

const Header = () => {
  return (
    <header className="mt-4">
      <ThemeSwitch />
      <Logo />
      <NavMain />
    </header>
  );
};

export default Header;
