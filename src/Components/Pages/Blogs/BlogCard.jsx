import React from 'react';

const BlogCard = ({ blog }) => {
    // Destructuring the blog object or defaulting to an empty object
    const { date, author_name, image, title, description } = blog || {};

    return (
        <div className="mx-auto w-[300px] md:w-[400px] rounded-md shadow-md shadow-gray-500 overflow-hidden">
            <div>
                <div className="group">
                    {/* Blog Image */}
                    <img
                        className="cursor-pointer shadow shadow-gray-400 w-full h-[250px] md:h-[300px] rounded-md group-hover:scale-[1.05] object-cover transform transition-transform duration-300"
                        src={image}
                        alt=""
                    />
                </div>

                <div className="flex justify-between text-sm font-semibold text-gray-500 px-4">
                    {/* Blog Date */}
                    <h1>{date}</h1>
                    {/* Blog Author */}
                    <h1>{author_name}</h1>
                </div>

                <div className="mt-2 px-2 pb-4">
                    {/* Blog Title */}
                    <h1 className="font-bold">{title}</h1>
                    {/* Blog Description */}
                    <p className="font-semibold text-gray-400">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
