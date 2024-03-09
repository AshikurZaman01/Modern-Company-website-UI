import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data.blogs))
    }, [])

    return (
        <div className="container my-20 space-y-20">

            <div >
                <h1 className="text-center text-4xl font-bold">Our Latest Blog</h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {
                    blogs.map((blog, indx) => <BlogCard key={indx} blog={blog}></BlogCard>)
                }
            </div>

        </div>
    );
};

export default Blogs;