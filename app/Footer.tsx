import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-8 px-6 py-12">
      <div className="flex gap-8">
        <span>Follow us on:</span>
        <a href="https://www.facebook.com/houseplants.xyz">Facebook</a>
        <a href="https://www.instagram.com/houseplants.xyz">Instagram</a>
        <a href="https://www.pinterest.com/houseplantsxyz">Pinterest</a>
        <a href="https://www.patreon.com/houseplants">Patreon</a>
      </div>
      <nav>
        <ul className="flex gap-8">
          <li>
            <Link href="/pages/privacy-policy">Privacy policy</Link>
          </li>
          <li>
            <a href="mailto:houseplants.xyz@gmail.com">Contact via email</a>
          </li>
        </ul>
      </nav>
      <p className="mx-auto text-center">
        &copy; 2021-2003 Pera Knezevic. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
