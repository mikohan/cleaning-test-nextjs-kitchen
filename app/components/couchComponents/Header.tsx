import Logo from "@/public/images/couch/logo.png";
import Image from "next/image";
import MenuIcon from "@/public/images/couch/hamburger.svg";

function Header() {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between px-6">
          <div className="inline-flex gap-0 items-center">
            <Image alt="Logo" src={Logo} width={64} height={64} />
            <p className="text-2xl font-blauerRegular">
              Angara
              <span className="font-blauerSemibold text-couchBlue/80">
                Steamers
              </span>
            </p>
          </div>
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
    </header>
  );
}
export { Header };
