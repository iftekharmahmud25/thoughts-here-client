import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";

const BlogDetails = () => {
    const blogDetailsInfo = useLoaderData();
    const { user } = useContext(AuthContext)
    const timestamp = new Date(blogDetailsInfo.timestamp).toLocaleString();

    return (
        <div className="w-[80%] mx-auto">
            <p className="mb-8 whitespace-normal mt-16 md:mt-20 font-bold text-center text-xl md:text-4xl">{blogDetailsInfo?.title}</p>
            <img className="w-[90%] md:w-[70%] h-[130px] md:h-[300px] mx-auto mb-12 rounded-sm shadow-xl" src={blogDetailsInfo?.imageUrl} alt="blog photo" />
            <div className="flex gap-2 items-center">
                <img className="w-12 h-12 rounded-full" src={blogDetailsInfo?.ownerPhoto} alt="blog owner" />
                <div>
                    <p className="font-semibold">{blogDetailsInfo.OwnerName}</p>
                    <p>{timestamp}</p>
                </div>
            </div>
            <p className="capitalize my-4 font-semibold text-lg md:text-2xl">{blogDetailsInfo?.shortDescription}</p>
            <p className="indent-12 text-base text-justify mb-6 text-gray-700">{blogDetailsInfo?.longDescription}</p>
            <div className="divider mb-12"></div>

            
              
            

            <div className="mb-20 mt-6">
                <h2>Comments</h2>
                <div className="">
                    <textarea
                       className="w-[100%] outline p-3"
                        
                    ></textarea>
                   <div className=""> <button className="btn btn-sm bg-black text-white hover:bg-black hover:text-white">Add Comment</button></div>
                </div>
                <div>
                    {/* {comments.map((comment) => (
                        <div key={comment._id}>
                            <p>{comment.text}</p>
                        </div>
                    ))} */}
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;