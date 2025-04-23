import Image from "next/image";
import Comments from "./Comments";
import {Post as PostType, User} from "@prisma/client";

type FeedPostType = PostType & { user: User } & {
  likes: [{ userId: string }];
} & {
  _count: { comments: number };

} 

const Post = ({post}:{post:FeedPostType}) => {
  return (
    <div className="flex flex-col gap-4 p-4 border rounded-lg shadow-sm bg-white">
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={post.user.avatar || "/noAvatar.png"}
            width={40}
            height={40}
            alt="User Avatar"
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">{
          (post.user.name && post.user.surname) ? post.user.name + " " + post.user.surname : post.user.username}
          </span>
        </div>
      </div>

      {/* DESC */}
      <div className="flex flex-col gap-4">
       {post.img && (
          <div className="w-full min-h-96 relative">
            <Image
              src={post.img}
              fill
              className="object-cover rounded-md"
              alt=""
            />
          </div>
        )}
         <p>{post.desc}</p>
      </div>

      {/* INTERACTIONS */}
      <div className="flex items-center justify-between text-sm my-4">
        <div className="flex gap-8">
          <div className="flex items-center gap-2 bg-slate-100 p-2 rounded-xl">
            <Image
              src="/like.png"
              width={20}
              height={20}
              className="cursor-pointer"
              alt="Like"
            />
            <span className="text-gray-300">1</span>
            <span className="text-gray-500">123
              <span className="hidden md:inline"> Likes</span>
            </span>
          </div>
          <div className="flex items-center gap-2 bg-slate-100 p-2 rounded-xl">
            <Image
              src="/comment.png"
              width={20}
              height={20}
              className="cursor-pointer"
              alt="Like"
            />
            <span className="text-gray-300">1</span>
            <span className="text-gray-500">123
              <span className="hidden md:inline"> comments</span>
            </span>
          </div>
        </div>
        <div className="">
          <div className="flex items-center gap-2 bg-slate-100 p-2 rounded-xl">
            <Image
              src="/share.png"
              width={20}
              height={20}
              className="cursor-pointer"
              alt="Like"
            />
            <span className="text-gray-300">1</span>
            <span className="text-gray-500">
              <span className="hidden md:inline"> Share</span>
            </span>
          </div>
        </div>
      </div>
      <Comments/>
    </div>
  );
};

export default Post;






