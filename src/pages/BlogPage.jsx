import { useEffect, useRef, useState } from 'react';
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { FiUser } from 'react-icons/fi';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BlogPage = () => {
    const editorRef = useRef(null);
    const [editorInstance, setEditorInstance] = useState(null);
    const [thumbnail, setThumbnail] = useState(null);
    const [title, setTitle] = useState('');
    const maxTitleLength = 250;

    const handleThumbnailChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setThumbnail(URL.createObjectURL(file));
        }
    };

    const handlePost = () => {
        const content = editorInstance.getData();
        const postData = {
            title,
            thumbnail,
            content,
        };
        localStorage.setItem('blogPost', JSON.stringify(postData));

        // Display toast notification
        toast.success('Post saved successfully!', {
            position: "top-right",
            autoClose: 3000,
            onClose: () => window.location.reload(), // Reload page after the toast disappears
        });
    };

    useEffect(() => {
        if (editorRef.current) {
            DecoupledEditor.create(document.querySelector('#content'), {
                toolbar: ['bold', 'italic', '|', 'undo', 'redo'],
                language: 'en',
            })
                .then((editor) => {
                    setEditorInstance(editor);
                    const toolbar = editor.ui.view.toolbar.element;
                    editorRef.current.before(toolbar); // Insert toolbar above the editor
                })
                .catch((error) => console.error('Editor init error:', error));
        }

        return () => {
            editorInstance?.destroy().catch((error) => console.error('Editor destroy error:', error));
        };
    }, [editorInstance]);

    return (
        <div className="flex flex-col items-center w-2/3 mx-auto mt-10 space-y-6 text-white">
            {/* Toast container for notifications */}
            <ToastContainer />

            <div className="relative w-1/4">
                <select className="w-full p-2 bg-gray-900 text-white rounded-md border border-gray-700 appearance-none">
                    <option>Select Squad</option>
                    <option>Squad 1</option>
                    <option>Squad 2</option>
                </select>
                <FiUser className="absolute top-3 right-3 text-gray-400" />
            </div>

            <div className="w-full">
                <label className="block bg-gray-900 p-4 rounded-md flex items-center justify-center border border-dashed border-gray-700 cursor-pointer">
                    {thumbnail ? (
                        <img
                            src={thumbnail}
                            alt="Thumbnail Preview"
                            className="object-contain h-40 w-full rounded-md"
                        />
                    ) : (
                        <span className="text-white">📷 Click to upload thumbnail</span>
                    )}
                    <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleThumbnailChange}
                    />
                </label>
            </div>

            <div className="w-full relative">
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Post Title*"
                    maxLength={maxTitleLength}
                    className="w-full p-2 text-lg bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                <span className="absolute right-2 top-2 text-sm text-gray-400">
                    {title.length}/{maxTitleLength}
                </span>
            </div>

            <div className="w-full bg-gray-800 rounded-md">
                <div className="flex items-center justify-between p-2 bg-gray-900 rounded-t-md">
                    <div className="flex space-x-4">
                        <button className="px-3 py-1 text-sm bg-gray-700 rounded-md">Write</button>
                        <button className="px-3 py-1 text-sm">Preview</button>
                    </div>
                    <span className="text-sm text-gray-400">Saved</span>
                </div>
                <div ref={editorRef} className="p-4">
                    <div
                        id="content"
                        className="min-h-[150px] bg-gray-900 p-3 rounded-md text-white"
                        contentEditable
                    >
                        <p>Write your content here...</p>
                    </div>
                </div>
                <div className="p-2 text-sm text-gray-500 border-t border-gray-700">
                    📎 Attach images by dragging & dropping
                </div>
            </div>
            <button
                onClick={handlePost}
                className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-6 rounded-md transition duration-300"
            >
                Post
            </button>
        </div>
    );
};

export default BlogPage;
