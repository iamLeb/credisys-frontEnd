import React from "react";
import ArticleCardSkeleton from "./ArticleCardSkeleton.jsx";

const posts = [
    {
        title: 'Post One',
        body: 'Because it\'s about motivating the doers. Because I\'m here to follow my dreams and inspire others.',
    },
    {
        title: 'Post Two',
        body: 'Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows.',
    },
    {
        title: 'Post Three',
        body: 'Because it\'s about motivating the doers. Because I\'m here to follow my dreams and inspire others.',
    },
]
const ArticleCard = () => {
    return (
        <>
            {posts.map((post) => (
                <div
                    className="relative flex max-w-[24rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div
                        className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
                        <img
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                            alt="ui/ux review check"/>
                    </div>
                    <div className="p-6">
                        <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            {post.title}
                        </h4>
                        <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
                            {post.body}
                        </p>
                    </div>
                    <div className="flex items-center justify-between p-6">
                        <div className="flex items-center -space-x-3">
                            <img alt="natali craig"
                                 src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
                                 className="relative inline-block h-9 w-9 !rounded-full  border-2 border-white object-cover object-center hover:z-10"/>
                        </div>
                        <button type="button"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                            Read more
                        </button>
                    </div>
                </div>
            ))}
        </>

    );
};

export default ArticleCard;