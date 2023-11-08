import { useContext } from 'react';
import './SingleBlog.css'
import { Link } from "react-router-dom";
import { AuthContext } from '../../../provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';

const SingleBlog = ({ singleBlog }) => {


    const { _id, title, imageUrl, shortDescription, category, longDescription, ownerName, OwnerPhoto, timestamp } = singleBlog;
    // console.log(singleBlog)
    const { user } = useContext(AuthContext)


    const handleAddToWishlist = async () => {

        if (!user) {
            toast.error('Please log in to add this blog to your wishlist.');
            return;
        }
        try {
            const blogToAdd = {
                title: title,
                imageUrl: imageUrl,
                shortDescription: shortDescription,
                category: category,
                longDescription: longDescription,
                ownerName: ownerName,
                OwnerPhoto: OwnerPhoto,
                timestamp: timestamp,
                user: user.email,

            }
            const response = await fetch('https://thoughts-here-server.vercel.app/wishlist', {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(blogToAdd),
            })
            console.log(response)
            if (response.ok) {
                toast.success('This Blog successfully added to your wishlist!')
            }
        }
        catch (error) {
            console.error("Error adding blog to wishlist:", error);
            toast.error("n error occurred while adding the blog to the wishlist")
        }
    }

    return (
        <div className="w-[80%] mx-auto my-10">

            <div className=" md:flex gap-12">
                <div className="w-[100%]">
                    <img className="md:w-[500px] w-[100%] mx-auto md:mx-0 h-[120px] flex justify-center md:h-[250px] rounded-sm shadow-md" src={imageUrl} alt={title} />
                </div>
                <div className="w-[100%] title">
                    <h2 className="md:text-3xl text-xl font-semibold mb-2 hover:text-pink-700 transition-transform duration-200 ease-in-out hover:scale-110  text-black">{title}</h2>
                    <p className='text-sm text-gray-400'>{shortDescription}</p>
                    <p className='btn btn-xs bg-white text-pink-700 hover:bg-pink-700 hover:text-white text-xs mt-3 rounded-md'>Category: {category}</p>
                    <div className='flex gap-4 items-center mt-7'>
                        {/* details btn */}
                        <Link to={`/blogs/${_id}`}>
                            <img width="20" height="20" src="https://img.icons8.com/ios-filled/50/F25081/bulleted-list.png"  title='Details' alt="details" />
                        </Link>
                    


                        <button onClick={handleAddToWishlist}>
                            <img width="25" height="25" src="https://img.icons8.com/ios-filled/50/F25081/love-circled.png" title='Add this blog to your wishlist' alt="add to wishlist" />
                        </button>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default SingleBlog;
