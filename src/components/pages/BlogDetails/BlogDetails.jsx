import { useContext, useState } from "react";
import { Navigate, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { toast } from "react-toastify";

const BlogDetails = () => {
    const blogDetailsInfo = useLoaderData();
    const { user } = useContext(AuthContext)
    const [commentText, setCommentText] = useState('');
    const [comments, setComments] = useState(blogDetailsInfo.comments || []);
    const isCurrentUserBlogOwner = user && user.email === blogDetailsInfo.email;

    // console.log("User:", user);
    if (!user) {
      return <Navigate to="/login" />;
    }
    const timestamp = new Date(blogDetailsInfo.timestamp).toLocaleString();

    const addComment = (e) => {
        e.preventDefault();
    
        const newComment = {
          text: commentText,
          name: user.displayName,
          photoUrl: user.photoURL,
        };
    
        fetch(`http://localhost:5000/blogs/${blogDetailsInfo._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newComment),
        })
          .then((response) => {
            if (response.ok) {
              setComments([...comments, newComment]);
              toast.success('Successfully added comment');
              console.log('Successfully added comment');
            } else {
              toast.error('Error adding comment');
              console.error('Error adding comment');
            }
          })
          .catch((error) => {
            console.error('Network error:', error);
          });
    
        setCommentText('');
      };







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

            
              
            

            <div className="mt-8 mb-20 border p-5">
        <h2 className="text-xl font-semibold mb-4">Comments</h2>

      {isCurrentUserBlogOwner ? (
          <p>You cannot comment on your own blog.</p>
        ) : (
          <form className="mb-4" onSubmit={addComment}>
            <textarea
              rows="2"
              name="comments"
              placeholder="Add a comment..."
              className="w-full px-3 py-2 border rounded-md resize-none focus:outline-[#197685] focus:border-[#197685]"
              style={{ border: "1px solid #ccc" }}
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            ></textarea>
            <button
              type="submit"
              className="bg-[#197685]  btn btn-sm hover:bg-white hover:text-[#197685] hover:border-[#197685]  hover:shadow-xl text-white h-10 px-4 rounded"
            >
              Post
            </button>
          </form>
        )}
        
        
        <div className="rounded-lg">
          {comments?.map((comment, index) => (
            <div key={index} className="mb-3 p-3 bg-gray-50 rounded-xl">
              <div className="chat chat-start">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img src={comment.photoUrl} alt={comment.name} />
                  </div>
                </div>
                <div className="chat-header">{comment.name}</div>
                <div className="chat-bubble bg-white text-black shadow-md">{comment.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>


        </div>
    );
};

export default BlogDetails;