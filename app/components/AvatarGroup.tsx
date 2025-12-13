import Image from "next/image";
function AvatarGroup() {
  const avatarArr = [
    "https://img.daisyui.com/images/profile/demo/batperson@192.webp",
    "https://img.daisyui.com/images/profile/demo/batperson@192.webp",
    "https://img.daisyui.com/images/profile/demo/spiderperson@192.webp",
  ];

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
