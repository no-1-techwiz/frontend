const Modal = ({ isOpen, onClose, post }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-5 rounded-lg max-w-lg w-full relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-xl text-gray-600 hover:text-gray-900"
                    aria-label="Close"
                >
                    &times;
                </button>
                <h2 className="text-xl font-bold mb-4">{post.title}</h2>
                {post.thumbnail && (
                    <img
                        src={post.thumbnail}
                        alt="Blog Thumbnail"
                        className="object-contain w-full h-[300px] rounded-md mb-4"
                    />

                )}
                <div
                    className="mb-4"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </div>
        </div>
    );
};
export default Modal;