import { useEffect, useState } from "react";
import Loader from "../../../shared/loader/Loader";
import SingleBlog from "../../../pages/SingleBlog/SingleBlog";

const RecentBlogs = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [allBlogs, setAllBlogs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/blogs')
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
