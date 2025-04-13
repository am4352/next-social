import Image from "next/image"

const Post = () => {
  return (
    <div className='flex flex-col gap-4'>
        {/*USER*/}
        <div className=''>
            <div className='flex item-center gap-4'>
                <Image src='https://picjumbo.com/free-photos/ocean/' width={40} height={40} alt="" className=' w-10 h-10 rounded-full' />
            <span className="font-medium">Shashwat Mishra</span>    
            </div>
        </div>
        {/*DESC*/}
        <div className=''></div>
        {/*INTERACTION*/}
        <div className=''></div>
    </div>
    
  )
}

export default Post









