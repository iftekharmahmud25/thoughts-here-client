import { useEffect, useState } from "react";
import SingleBlog from "../SIngleBlog/SingleBlog";


const AllBlogs = () => {
    const [allBlogs, setAllBlogs]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/blogs')
        .then((res)=>res.json())
        .then(data=>{
            setAllBlogs(data)
        })
    })

    return (
        <div>
            {allBlogs.length}
            {allBlogs.map(singleBlog => (
    <SingleBlog key={singleBlog._id} singleBlog={singleBlog} />
))}

        </div>
    );
};

export default AllBlogs;