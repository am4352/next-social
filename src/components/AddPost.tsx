import Image from "next/image";
const AddPost = () => {
  return (
      <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
          {/* AVATR */}
          <Image
              src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRhqsMmdNgDvPtYccvkEVrr7hcB_MBeFOj464tqTVSHKx-q8T5-Wo23Jrn8_XHR2-OLMGZu8XTLOtoSeSU0gimmp6lf0--Ub5a9fRvpp6psoA"
              alt=""
              width={48}
              height={48}
              className="w-12 h-12 object-cover rounded-full"
            />
          {/* {post} */}
          <div className="flex-1"> 
            {/* inputarea */}
              <div className="flex gap-4">
                  <textarea placeholder="whats on your mind??" className="bg-slate-100 rounded-lg p-2" id=""></textarea> 
                  <Image
                      src="/emoji.png"
                      alt=""
                      width={20}
                      height={20}
                      className="w-5 h-5 cursor-pointer self-end"
                  />                 
              </div>
              {/* postoption */}
              <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
                  <div className="flex items-center gap-2 cursor-pointer">
                      <Image
                          src="/addimage.png"
                          alt=""
                          width={20}
                          height={20}
                          className="w-5 h-5 cursor-pointer self-end"
                      /> 
                    Photo
                  </div>
              </div>
        </div>         
     </div>
  )
}

export default AddPost










