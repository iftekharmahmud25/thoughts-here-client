import { useLoaderData } from "react-router-dom";

const BlogDetails = () => {
    const blogDetailsInfo = useLoaderData();
    console.log(blogDetailsInfo)
    return (
        <div className="w-[80%] mx-auto">
            <p className="mb-8 whitespace-normal mt-16 md:mt-20 font-bold text-center text-xl md:text-4xl">{blogDetailsInfo?.title}</p>
            <img className="w-[90%] md:w-[70%] h-[130px] md:h-[300px] mx-auto mb-12 rounded-sm shadow-xl" src={blogDetailsInfo?.imageUrl} alt="" />
            <p className="capitalize my-4 font-semibold text-lg md:text-2xl">{blogDetailsInfo?.shortDescription}</p>
            <p className="indent-12 text-base text-justify mb-6 text-gray-700">{blogDetailsInfo?.longDescription}</p>
            <div className="divider mb-12"></div>
        </div>
    );
};

export default BlogDetails;