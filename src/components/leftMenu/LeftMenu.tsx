import React from 'react';
import ProfileCard from '../ProfileCard';
import Image from 'next/image';
import Ad from '../Ad';
const LeftMenu = ({ type }: {type:"home"| "profile"}) => {
    return (
        <div className='flex flex-col gap-6'>
            {type === "home"  && <ProfileCard />}
            <div className='p-4 bg-white rounded-lg shadow-md text-sm text-gray-500 flex flex-col gap-2 '>
                <link href='/' className='flex items-center gap-4 p-2 rounded-lg hover:bg-gray-100'/>
                <Image src="/posts.png" alt='' width={20} height={20} />
                <span>My Posts</span>
                 <hr className='border-t-1 border-gray-50 w-36 self-center'/>
                <link href='/' className='flex items-center gap-4 p-2 rounded-lg hover:bg-gray-100'/>
                <Image src="/market.png" alt='' width={20} height={20} />
                <span>Activity</span>
                 <hr className='border-t-1 border-gray-50 w-36 self-center'/>
                <link href='/' className='flex items-center gap-4 p-2 rounded-lg hover:bg-gray-100'/>
                <Image src="/market.png" alt='' width={20} height={20} />
                <span>Market Place</span>
                 <hr className='border-t-1 border-gray-50 w-36 self-center'/>
                <link href='/' className='flex items-center gap-4 p-2 rounded-lg hover:bg-gray-100'/>
                <Image src="/events.png" alt='' width={20} height={20} />
                <span>Events</span>
                 <hr className='border-t-1 border-gray-50 w-36 self-center'/>
                <link href='/' className='flex items-center gap-4 p-2 rounded-lg hover:bg-gray-100'/>
                <Image src="/albums.png" alt='' width={20} height={20} />
                <span>Albums</span>
                 <hr className='border-t-1 border-gray-50 w-36 self-center'/>
                <link href='/' className='flex items-center gap-4 p-2 rounded-lg hover:bg-gray-100'/>
                <Image src="/videos.png" alt='' width={20} height={20} />
                <span>Videos</span>
                <hr className='border-t-1 border-gray-50 w-36 self-center' />
                 <link href='/' className='flex items-center gap-4 p-2 rounded-lg hover:bg-gray-100'/>
                <Image src="/news.png" alt='' width={20} height={20} />
                <span>News</span>
                <hr className='border-t-1 border-gray-50 w-36 self-center' />
                 <link href='/' className='flex items-center gap-4 p-2 rounded-lg hover:bg-gray-100'/>
                <Image src="/courses.png" alt='' width={20} height={20} />
                <span>Courses</span>
                <hr className='border-t-1 border-gray-50 w-36 self-center' />
                 <link href='/' className='flex items-center gap-4 p-2 rounded-lg hover:bg-gray-100'/>
                <Image src="/lists.png" alt='' width={20} height={20} />
                <span>Lists</span>
                <hr className='border-t-1 border-gray-50 w-36 self-center' />
                 <link href='/' className='flex items-center gap-4 p-2 rounded-lg hover:bg-gray-100'/>
                <Image src="/settings.png" alt='' width={20} height={20} />
                <span>Settings</span>
                 <hr className='border-t-1 border-gray-50 w-36 self-center'/>
            </div>
            <Ad size='sm' />
      </div>
    );
};

export default LeftMenu;
