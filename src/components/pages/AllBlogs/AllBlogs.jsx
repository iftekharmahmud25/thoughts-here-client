import { useEffect, useState } from "react";
import SingleBlog from "../SingleBlog/SingleBlog";
import Loader from "../../shared/loader/Loader";

const AllBlogs = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [allBlogs, setAllBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]); 
  const [categoryFilter, setCategoryFilter] = useState(""); 
  const [searchQuery, setSearchQuery] = useState(""); 

  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((res) => res.json())
      .then((data) => {
        setAllBlogs(data);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    const filtered = allBlogs.filter((blog) => {
      const categoryMatch =
        categoryFilter === "" || blog.category === categoryFilter;
  

      const titleMatch =
        searchQuery === "" ||
        blog.title.toLowerCase().includes(searchQuery.toLowerCase());
  
      return categoryMatch && titleMatch;
    });
  
    setFilteredBlogs(filtered);
  }, [allBlogs, categoryFilter, searchQuery]);

  return (
    <div>
      <p className="title-style">Check Out All of our Blogs</p>

     <div className="flex justify-center gap-2 mb-12">
     <select
        value={categoryFilter}
        className=""
        onChange={(e) => setCategoryFilter(e.target.value)}
      >
        <option value="">All Categories</option>
        {Array.from(new Set(allBlogs.map((blog) => blog.category))).map(
          (category) => (
            <option key={category} value={category}>
              {category}
            </option>
          )
        )}
      </select>

      <input
        type="text"
        placeholder="Search by title"
        className="h-10 outline-pink-300 rounded-md ps-2  outline"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
     </div>

      {isLoading ? (
        <div className="mb-28">
          <Loader></Loader>
          <Loader></Loader>
          <Loader></Loader>
          <Loader></Loader>
        </div>
      ) : (
        filteredBlogs.map((singleBlog) => (
          <SingleBlog key={singleBlog._id} singleBlog={singleBlog} />
        ))
      )}
    </div>
  );
};

export default AllBlogs;



