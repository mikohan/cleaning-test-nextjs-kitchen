import Image from "next/image";
import Ava1 from "@/public/images/couch/ava1.png";
import Ava2 from "@/public/images/couch/ava2.png";
import Ava3 from "@/public/images/couch/ava3.png";
function AvatarGroup() {
  const avatarArr = [Ava1, Ava2, Ava3];

  return (
    <div className="avatar-group -space-x-4 -md:space-x-6 h-8 md:h-auto">
      {avatarArr.map((src, i) => (
        <div key={i} className="avatar border-2">
          <div className="w-auto md:w-12">
            <Image alt="Avatar" width={40} height={40} src={src} />
          </div>
        </div>
      ))}
      <div className="avatar avatar-placeholder border-2">
        <div className="bg-couchDarkBlue text-neutral-content w-auto md:w-12 text-xs md:text-base">
          <span>+99</span>
        </div>
      </div>
    </div>
  );
}
export { AvatarGroup };
