import { useLoaderData } from "react-router-dom";

const DetailsBlogInWishlist = () => {
    const blogDetailsInwishlist = useLoaderData();
    console.log(blogDetailsInwishlist)
    const timestamp = new Date(blogDetailsInwishlist.timestamp).toLocaleString();
    return (
        <div className="w-[80%] mx-auto">
        <p className="mb-8 whitespace-normal mt-16 md:mt-20 font-bold text-center text-xl md:text-4xl">{blogDetailsInwishlist?.title}</p>
        <img className="w-[90%] md:w-[70%] h-[130px] md:h-[300px] mx-auto mb-12 rounded-sm shadow-xl" src={blogDetailsInwishlist?.imageUrl} alt="blog photo" />
        <div className="flex gap-2 items-center">
            <img className="w-12 h-12 rounded-full" src={blogDetailsInwishlist?.ownerPhoto} alt="blog owner" />
            <div>
                <p className="font-semibold">{blogDetailsInwishlist?.OwnerName}</p>
                <p>{timestamp}</p>
            </div>
        </div>
        <p className="capitalize my-4 font-semibold text-lg md:text-2xl">{blogDetailsInwishlist?.shortDescription}</p>
        <p className="indent-12 text-base text-justify mb-6 text-gray-700">{blogDetailsInwishlist?.longDescription}</p>
        <div className="divider mb-12"></div>
    </div>
    );
};

export default DetailsBlogInWishlist;