import './SingleBlog.css'
import { Link } from "react-router-dom";

const SingleBlog = ({ singleBlog }) => {
    const { _id, title, imageUrl, shortDescription, category,longDescription } = singleBlog;
    // console.log(singleBlog)

    return (
        <div className="w-[80%] mx-auto my-10">
            
            <div className="flex gap-12">
               
                <div className="w-[100%]">
                <img className="w-[500px] h-[250px] rounded-sm shadow-md" src={imageUrl} alt={title} />
                </div>
                <div className="w-[100%] title">
                <h2 className="text-3xl font-semibold mb-2 hover:text-pink-700 transition-transform duration-200 ease-in-out hover:scale-110  text-black">{title}</h2>
                <p className='text-sm text-gray-400'>{shortDescription}</p>
                <p className='btn btn-xs bg-white text-pink-700 hover:bg-pink-700 hover:text-white text-xs mt-3 rounded-md'>Category: {category}</p>
                <div className='flex gap-4 items-center mt-7'>
                <Link to={`/blogs/${_id}`}>
                <img width="32" height="32" src="https://img.icons8.com/pastel-glyph/64/F25081/view-file--v2.png" alt="details"/>
                </Link>
                <img width="32" height="32" src="https://img.icons8.com/external-anggara-glyph-anggara-putra/32/F25081/external-wishlist-ecommerce-interface-anggara-glyph-anggara-putra-2.png" alt="wishlist"/>
                </div>
                </div>
                
            </div>
       
        </div>
    );
};

export default SingleBlog;
