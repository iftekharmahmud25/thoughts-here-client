import { useEffect, useState } from "react";

const TopContributors = () => {
  const [topContributors, setTopContributors] = useState([]);

  useEffect(() => {
    fetch("https://thoughts-here-server.vercel.app/blogs")
      .then((res) => res.json())
      .then((blogs) => {
        const blogCountMap = new Map();
        blogs.forEach((blog) => {
          const userEmail = blog.email;
          if (blogCountMap.has(userEmail)) {
            blogCountMap.set(userEmail, blogCountMap.get(userEmail) + 1);
          } else {
            blogCountMap.set(userEmail, 1);
          }
        });

        const contributorsArray = Array.from(blogCountMap, ([email, count]) => {
          const userBlogs = blogs.filter((blog) => blog.email === email);
          const topBlog = userBlogs.reduce((prev, current) =>
            prev.timestamp > current.timestamp ? prev : current
          );

          return {
            email,
            blogCount: count,
            OwnerName: topBlog.OwnerName,
            ownerPhoto: topBlog.ownerPhoto,
          };
        });
        contributorsArray.sort((a, b) => b.blogCount - a.blogCount);

        // Slice the contributorsArray to show only the top 3 contributors
        const top3Contributors = contributorsArray.slice(0, 3);

        setTopContributors(top3Contributors);
      });
  }, []);

  return (
    <div className="w-[80%] mx-auto mb-20">
      <h1 className="md:text-3xl text-base font-bold flex items-center mb-4">
        Here is our Top 3 Contributors{" "}
        <img
          className="ms-3"
          width="30"
          height="30"
          src="https://img.icons8.com/external-smashingstocks-hand-drawn-black-smashing-stocks/99/external-Clap-international-dance-day-smashingstocks-hand-drawn-black-smashing-stocks.png"
          alt="external-Clap-international-dance-day-smashingstocks-hand-drawn-black-smashing-stocks"
        />
      </h1>

      <ul className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-y-6">
        {topContributors.map((contributor, index) => (
          <li key={index}>
            <img
              src={contributor.ownerPhoto}
              alt={contributor.OwnerName}
              className="rounded-full w-12 h-12 shadow-2xl"
            />
            <span className="font-bold">{contributor.OwnerName}</span>
            <p>Email: {contributor.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopContributors;
