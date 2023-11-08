import { useEffect, useState } from "react";
import Loader from "../../../shared/loader/Loader";
import SingleBlog from "../../../pages/SingleBlog/SingleBlog";

const RecentBlogs = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [allBlogs, setAllBlogs] = useState([]);

    useEffect(() => {
        fetch('https://thoughts-here-server.vercel.app/blogs')
            .then((res) => res.json())
            .then((data) => {
                data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
                const recentBlogs = data.slice(0, 6);
                setAllBlogs(recentBlogs);
                setIsLoading(false);
            });
    }, []);

    return (
        <div className="my-24">
            <div className="w-[80%] mx-auto">
            <h1 className="text-3xl font-semibold ">Discover Our Latest Blog Posts</h1>
            <p className="text-gray-700">Stay Informed and Inspired with Our Fresh Content</p>
            </div>
            {isLoading ? (
                <div className="mb-28">
                    <Loader></Loader>
                    <Loader></Loader>
                </div>
            ) : (
                allBlogs.map((singleBlog) => (
                    <SingleBlog key={singleBlog._id} singleBlog={singleBlog} />
                ))
            )}
        </div>
    );
};

export default RecentBlogs;
