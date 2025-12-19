import Logo from "@/public/images/couch/logo.png";
import Image from "next/image";

function Header() {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between px-6">
          <div className="inline-flex gap-0 items-center">
            <Image alt="Logo" src={Logo} width={64} height={64} />

            <p className="hidden md:block text-xl font-blauerRegular">
              Angara
              <span className="font-blauerSemibold text-couchBlue/80">
                Steamers
              </span>
            </p>
            <p className="text-xs md:hidden">
              <span className="font-blauerRegular text-couchBlue">Angara</span>{" "}
              Steamers
            </p>
          </div>
          <nav className="hidden md:flex gap-6 items-center font-blauerSemibold text-couchDarkBlue/60">
            <a href="#">Home</a>
            <a href="#">Prices</a>
            <a href="#">Contacts</a>
          </nav>
          <div>
            <p className="font-blauerMedium text-couchShadow">
              <a href="tel:+12135987763">(213) 598 7763</a>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
export { Header };
