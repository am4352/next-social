import Link from "next/link";
import Image from "next/image";
const UserInfoCard = ({ userId }: { userId: string }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/*TOP*/}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Information</span>
        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>
      {/* bottom */}
      <div className="flex flex-col gap-4 text-grey-500">
        <div className="flex items-center gap-2">
          <span className="texy-xl tesrt-black">LLoya fleming</span>
          <span className="text-sm">@jonathan</span>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, velit. Soluta et itaque laudantium qui nesciunt magnam, rerum eum? Magnam!</p>
        <div className="flex items-center gap-2">
          <Image src="/map.png" alt="" width={16} height={16} />
          <span>Living in denver </span>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/map.png" alt="" width={16} height={16} />
          <span>Went to Edgar high school </span>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/map.png" alt="" width={16} height={16} />
          <span>works at apple  </span>
        </div>
      </div>
    </div>
  );
};

export default UserInfoCard;
