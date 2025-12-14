import Image from "next/image";
import InstagramIcon from "@/public/images/couch/social_icons/instagram-negative.svg";
import YoutubeIcon from "@/public/images/couch/social_icons/youtube-negative.svg";
import FacebookIcon from "@/public/images/couch/social_icons/facebook-negative.svg";
import TikTokIcon from "@/public/images/couch/social_icons/tiktok-negative.svg";
import Logo from "@/public/images/couch/logo-text-white.png";
export const Footer = () => {
  return (
    <section className="bg-couchDarkBlue">
      <div className="container px-6 py-4 mx-auto">
        <div className="flex flex-col items-center gap-4">
          <Image src={Logo} alt="bottom logo" />
          <p className="text-couchLightBlue">
            <a href="tel:2135987763">(213) 598-77-63</a>
          </p>
          <div className="flex gap-8 justify-center">
            <a href="https://www.instagram.com/angara_steamers/">
              <Image
                src={InstagramIcon}
                height={24}
                width={24}
                alt="Instagram Icon"
              />
            </a>
            <a href="https://www.youtube.com/@PlayaCleaningUS">
              <Image
                src={YoutubeIcon}
                height={24}
                width={24}
                alt="Youtube Icon"
              />
            </a>
            <a href="https://www.facebook.com/angarasteamers">
              <Image
                src={FacebookIcon}
                height={24}
                width={24}
                alt="Facebook Icon"
              />
            </a>
            <a href="https://www.tiktok.com/">
              <Image
                src={TikTokIcon}
                height={24}
                width={24}
                alt="TikTok Icon"
              />
            </a>
          </div>
          <p className="text-couchLightBlue/60 text-sm">
            © 2026 Angara Steamers. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};
