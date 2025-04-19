
import Link from "next/link"
import Image from "next/image" // hello 
import { User } from "@prisma/client"

const UserMediaCard = ({user}:{user: User}) => {
  return (
    
    <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
        {/*TOP*/}
        <div className="flex justify-between items-center font-medium">
            <span className="text-gray-500">User Media</span>
        <Link href="/" className="text-blue-500 text-xs">See all
        </Link>
        </div>
        {/*BOTTOM*/}
      <div className="flex gap-4 justify-between flex-wrap">
        <div className="relative w-1/4 h-24">
          <Image src="/tree.png"
            alt=""
            fill className="object-cover rounded-lg" />
          
        </div>
        <div className="relative w-1/4 h-24">
          <Image src="/tree.png"
            alt=""
            fill className="object-cover rounded-lg" />
          
        </div>
        <div className="relative w-1/4 h-24">
          <Image src="/tree.png"
            alt=""
            fill className="object-cover rounded-lg" />
          
        </div>
        <div className="relative w-1/4 h-24">
          <Image src="/tree.png"
            alt=""
            fill className="object-cover rounded-lg" />
          
        </div>
            
              
            
        </div>
        </div>
     
    
  )
}

export default UserMediaCard