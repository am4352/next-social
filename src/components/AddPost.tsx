"use server";

import Image from "next/image";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/client";
import { redirect } from "next/navigation";

// Define the server action outside the component
// async function testAction(formData: FormData) {
//   const { userId } = await auth();
  
//   if (!userId) return;
  
//   const desc = formData.get("desc") as string;
  
//   try {
//    const res =  await prisma.post.create({
//       data: {
//        desc : desc,
//         userId: userId,
//       },
//    });
//     console.log("Post created:", res);
//   } catch (error) {
//     console.error("Error:", error);
//     throw error; // Optionally rethrow to handle in the UI
//   }
  
//   redirect("/");
// }

const AddPost = async () => {
  const { userId } = await auth();
  
  if (!userId) {
    // Handle unauthenticated user
    return <div>Please log in</div>;
  }
  
  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
      <Image
        src="/tree.png"
        alt=""
        width={48}
        height={48}
        className="w-12 h-12 object-cover rounded-full"
      />
      <div className="flex-1">
        <form  className="flex gap-4">
          <textarea
            placeholder="what's on your mind?"
            className="bg-slate-100 rounded-lg p-2"
            name="desc"
          ></textarea>
          <Image
            src="/emoji.png"
            alt=""
            width={20}
            height={20}
            className="w-5 h-5 cursor-pointer self-end"
          />
          <button type="submit">Send</button>
        </form>
        
        {/* Options */}
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          {/* Optional other buttons */}
        </div>
      </div>
    </div>
  );
};

export default AddPost;