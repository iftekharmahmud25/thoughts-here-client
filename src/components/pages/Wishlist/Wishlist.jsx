// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../../provider/AuthProvider";
// import { Link } from "react-router-dom";
// import { toast } from "react-toastify";

// const Wishlist = () => {
//     const [wishlistBlogs, setWishlistBlogs] = useState([]);

//     const { user } = useContext(AuthContext);


//     useEffect(() => {
//         fetch(`http://localhost:5000/wishlist?user=${user?.email}`)
//             .then((response) => response.json())
//             .then((data) => {
//                 setWishlistBlogs(data);
//             })
//             .catch((error) => {
//                 console.error("Error fetching blogs from the wishlist:", error);
//             });
//     }, [user?.email]);

//     const handleRemoveBlog = (blogTitle) => {
//         fetch(`http://localhost:5000/wishlist/${blogTitle}`, {
//             method: 'DELETE',
//         })
//             .then((response) => response.json())
//             .then((data) => {

//                 console.log(data.message);

//                 setWishlistBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.title !== blogTitle));
//                 window.location.reload();
//                 toast.success('deleted successfully')

//             })
//             .catch((error) => {
//                 console.error("Error removing the blog from the wishlist:", error);
//                 toast.error("Error removing the blog from the wishlist:", error)

//             });
//     };







//     return (
//         <div>



//             {
//                 wishlistBlogs.length > 0 ?
//                     (<div>
//                         <p className="title-style">Read All Of Your Favourite Blogs</p>
//                         {
//                             wishlistBlogs?.map((blog, index) => (
//                                 <div key={index}>

//                                     <div className="md:flex w-[80%] gap-10 mx-auto mt-3 mb-10">

//                                         <div className="w-[100%]">
//                                             <p className="text-xl font-bold ">{blog.title}</p>
//                                             <p className="text-base text-gray-500">{blog.shortDescription}</p>
//                                             <p className="text-base">Category : {blog.category}</p>
//                                             <div className="flex justify-end items-center gap-4 mt-4">


//                                                 <button onClick={() => handleRemoveBlog(blog.title)}>
//                                                     <img width="20" height="20" title="remove" src="https://img.icons8.com/ios-filled/50/F25081/cancel.png" alt="cancel" />
//                                                 </button>
//                                                 <Link to={`/wishlist/${blog._id}`}><img width="20" height="20" src="https://img.icons8.com/ios-filled/50/F25081/bulleted-list.png" title="details" alt="details" /></Link>
//                                             </div>
//                                         </div>
//                                         <div className="w-[100%] mt-12 md:mt-0">
//                                             <img className="w-[350px] h-[190px] " src={blog.imageUrl} alt="" />
//                                         </div>
//                                     </div>
//                                     <div className="divider"></div> 


//                                 </div>
//                             ))
//                         }
//                     </div>)
//                     :
//                     (<div className="flex justify-center items-center h-[80vh]">
//                         <div className="justify-center">
//                             <p className="text-center">You did not add any</p>
//                             <img className="flex justify-center w-24 mx-auto" height="64" src="https://img.icons8.com/pastel-glyph/64/F25081/sad.png" alt="sad" />
//                         </div>
//                     </div>)
//             }
//         </div>
//     );
// };

// export default Wishlist;













import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Wishlist = () => {
    const [wishlistBlogs, setWishlistBlogs] = useState([]);

    const { user } = useContext(AuthContext);


    useEffect(() => {
        fetch(`http://localhost:5000/wishlist?user=${user?.email}`)
            .then((response) => response.json())
            .then((data) => {
                setWishlistBlogs(data);
            })
            .catch((error) => {
                console.error("Error fetching blogs from the wishlist:", error);
            });
    }, [user?.email]);

    const handleRemoveBlog = (blogTitle) => {
        fetch(`http://localhost:5000/wishlist/${blogTitle}`, {
            method: 'DELETE',
        })
            .then((response) => response.json())
            .then((data) => {

                console.log(data.message);

                setWishlistBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.title !== blogTitle));
                window.location.reload();
                toast.success('deleted successfully')

            })
            .catch((error) => {
                console.error("Error removing the blog from the wishlist:", error);
                toast.error("Error removing the blog from the wishlist:", error)

            });
    };







    return (
        <div>



            {
                wishlistBlogs.length > 0 ?
                    (<div>
                        <p className="title-style">Read All Of Your Favourite Blogs</p>
                        {
                            wishlistBlogs?.map((blog, index) => (
                                <div key={index}>

                                    <div className="md:flex w-[80%] gap-10 mx-auto mt-3 mb-10">

                                        <div className="w-[100%]">
                                            <p className="text-xl font-bold ">{blog.title}</p>
                                            <p className="text-base text-gray-500">{blog.shortDescription}</p>
                                            <p className="text-base">Category : {blog.category}</p>
                                            <div className="flex justify-end items-center gap-4 mt-4">


                                                <button onClick={() => handleRemoveBlog(blog.title)}>
                                                    <img width="20" height="20" title="remove" src="https://img.icons8.com/ios-filled/50/F25081/cancel.png" alt="cancel" />
                                                </button>
                                                <Link to={`/wishlist/${blog._id}`}><img width="20" height="20" src="https://img.icons8.com/ios-filled/50/F25081/bulleted-list.png" title="details" alt="details" /></Link>
                                          

                                            </div>
                                        </div>
                                        <div className="w-[100%] mt-12 md:mt-0">
                                            <img className="w-[350px] h-[190px] " src={blog.imageUrl} alt="" />
                                        </div>
                                    </div>
                                    <div className="divider"></div>


                                </div>
                            ))
                        }
                    </div>)
                    :
                    (<div className="flex justify-center items-center h-[80vh]">
                        <div className="justify-center">
                            <p className="text-center">You did not add any</p>
                            <img className="flex justify-center w-24 mx-auto" height="64" src="https://img.icons8.com/pastel-glyph/64/F25081/sad.png" alt="sad" />
                        </div>
                    </div>)
            }
        </div>
    );
};

export default Wishlist;