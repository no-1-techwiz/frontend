import { useEffect, useState } from "react";
import Modal from "./DetailBlog";

const ShowBlog = () => {
    const [blogData, setBlogData] = useState([]);
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);

    useEffect(() => {
        const storedBlogPosts = localStorage.getItem('blogPosts');
        if (storedBlogPosts) {
            const parsedData = JSON.parse(storedBlogPosts);
            console.log("Parsed blog data:", parsedData);
            setBlogData(parsedData);
        }
    }, []);

    const handlePostClick = (post) => {
        setSelectedPost(post);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setSelectedPost(null);
    };

    if (blogData.length === 0) {
        return <div className="text-black">No blog posts found</div>;
    }

    return (
        <div className="w-[90%] mx-auto flex flex-wrap justify-between">
            {blogData.map((post, index) => (
                <div
                    key={index}
                    className="mb-6 w-[18%] bg-gray-100 mx-2 rounded-b-lg cursor-pointer"
                    onClick={() => handlePostClick(post)}
                >
                    {post.thumbnail && (
                        <div className="w-full h-100 overflow-hidden rounded-t-lg">
                            <img
                                src={post.thumbnail}
                                alt="Blog Thumbnail"
                                className="object-cover w-full h-full"
                            />
                        </div>
                    )}
                    <div className="flex flex-col items-center w-full">
                        <div className="w-[80%] p-2">
                            <h2 className="text-lg font-bold text-black truncate">{post.title}</h2>
                        </div>
                        <div
                            className="p-2 rounded-md text-black w-[80%] overflow-hidden text-ellipsis line-clamp-2"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        ></div>
                    </div>
                </div>
            ))}
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} post={selectedPost} /> {/* Modal */}
        </div>
    );
};

export default ShowBlog;
