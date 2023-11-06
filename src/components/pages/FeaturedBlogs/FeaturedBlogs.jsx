import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";


const FeaturedBlogs = () => {
    const [allBlogs, setAllBlogs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then((res) => res.json())
            .then(data => {
                setAllBlogs(data);
            });
    }, []);


    const topPosts = allBlogs
        .slice()
        .sort((a, b) => b.longDescription.split(" ").length - a.longDescription.split(" ").length) // 
        .slice(0, 10);


    const columns = [
        {
            name: "serialNumber",
            selector: "serialNumber",
            sortable: false,
            cell: (row) => <div>{row.serialNumber}</div>,
        },
        {
            name: "blogTitle",
            selector: "blogTitle",
            sortable: false,
        },
        {
            name: "blogOwner",
            selector: "blogOwner",
            sortable: false,
        },
        {
            name: "blogOwnerProfilePicture",
            selector: "blogOwnerProfilePicture",
            sortable: false,
            cell: (row) => <img className="w-12 h-12 rounded-3xl" src={row.blogOwnerProfilePicture} alt="Profile" />,
        },
    ];


    const data = topPosts.map((blog, index) => ({
        serialNumber: index + 1,
        blogTitle: blog?.title,
        blogOwner: blog?.OwnerName,
        blogOwnerProfilePicture: blog?.ownerPhoto,
    }));

    return (
        <div>
            <DataTable
                title="Top 10 Posts"
                columns={columns}
                data={data}
            />
        </div>
    );
};

export default FeaturedBlogs;
