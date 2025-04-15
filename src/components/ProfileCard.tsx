import React from 'react'
import Image from 'next/image'
const ProfileCard = () => {
  return (
      <div className='p-4 bg-white rounded-lg shadow-md text-sm gap-6'>
          <div className='h-20 relative'>
        <Image src="/tree.png" alt='' fill className=' rounded-md object-cover' />   
        <Image src="/tree.png" alt='' width={48} height={48} className=' rounded-full w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 object-cover ring-white z-10' />   

         </div>
    </div>
  )
}

export default ProfileCard