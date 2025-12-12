import Logo from "@/public/images/couch/logo.png";
import Image from "next/image";
import MenuIcon from "@/public/images/couch/hamburger.svg";

function Header() {
  return (
    <header className="sticky top-0">
      <div className="py-4">
        <div className="container">
          <div className="flex items-center justify-between px-6 border border-red-400">
            <Image alt="Logo" src={Logo} width={40} height={40} />
            <Image
              className="md:hidden"
              alt="Icon menu"
              src={MenuIcon}
              width={24}
              height={24}
            />
            <nav className="hidden md:flex gap-6 items-center font-blauerSemibold text-couchDarkBlue/60">
              <a href="#">Home</a>
              <a href="#">Prices</a>
              <a href="#">Contacts</a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
export { Header };
