import Image from "next/image"
const Comments = () => {
  return (
      <div className="">
          {/* write */}
          <div className="flex items-center gap-4">
              <img src="/tree.png" alt=""
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full" />
              <div className="flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
                  <input type="text" placeholder="write a comment...." className="bg-transparent outline-none flex-1" />
                  <img src="/emoji.png"
                      alt=""
                      width={16}
                      height={16} className="cursor-pointer" />
                  
              </div>
          </div>
          {/* comments */}
          <div className="">
              {/* comment */}
              <div className="">
                  {/* avatar */}
                  <div className=""></div>
                  {/* desc */}
                  <div className=""></div>
                  {/* icon */}
                  <Image src="/more.png" alt=" " width={16} height={16} className="cursor-pointer"></Image>
          </div>
          </div>
    </div>
  )
}

export default Comments