import { useEffect, useState } from "react";
import SingleBlog from "../SIngleBlog/SingleBlog";
import Loader from "../../shared/loader/Loader";


const AllBlogs = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [allBlogs, setAllBlogs]=useState([])
    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then((res) => res.json())
            .then((data) => {
                setAllBlogs(data);
                setIsLoading(false); 
            })
    }, []);
    

    return (
        <div>
            <p className="title-style">Check Out All of our Blogs</p>
            {isLoading ? (
              <div className="mb-28">
                  <Loader></Loader>
                  <Loader></Loader>
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
                }
    

export default AllBlogs;


