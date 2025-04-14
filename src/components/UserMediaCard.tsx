import Feed from "./Feed"
import LeftMenu from "./leftMenu/LeftMenu"
import RightMenu from "./rightMenu/RightMenu"
import Link from "next/link"
import Image from "next/image" // hello 

const UserMediaCard = ({userId}:{userId:string}) => {
  return (
    
    <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
        {/*TOP*/}
        <div className="flex justify-between items-center font-medium">
            <span className="text-gray-500">User Media</span>
            <Link href="/" className="text-blue-500 text-xs">See all</Link>
        </div>
        {/*BOTTOM*/}
        <div className="flex flex-col gap-4 text-gray-500">
            <div className="flex items-center gap-2">
              <span className="text-xl text-black">Shashwat Mishra</span>
              <span className="text-sm">@soul</span>
            </div>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt excepturi, distinctio cum fugiat hic nobis officia
            </p>    
                <div className="flex items-center gap-2">
                    <Image src="/map.png" alt="" width={16} height={16}/>
                    <span>Living in <b>Denver</b></span>
                </div>
            
        </div>
        </div>
     
    
  )
}

export default UserMediaCard