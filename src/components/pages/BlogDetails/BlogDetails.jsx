import { useLoaderData } from "react-router-dom";

const BlogDetails = () => {
    const blogDetailsInfo = useLoaderData();
    console.log(blogDetailsInfo)
    return (
        <div>
            
        </div>
    );
};

export default BlogDetails;