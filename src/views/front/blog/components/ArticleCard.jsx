import React from "react";
import ArticleCardSkeleton from "./ArticleCardSkeleton.jsx";

const posts = [
    {
        key: 0,
        title: 'Building Credit for a Better Future',
        body: 'At Credisys, we are on a mission to address credit inequality by helping tenants build Canadian credit history and boost their credit scores. Our founders, inspired by their own experiences as newcomers to Canada, understand the challenges of accessing credit without a Canadian credit history. Join us today and start building your credit for a better future.',
    },
    {
        key: 1,
        title: 'Unlocking ßCredit Opportunities for Tenants and Property Managers',
        body: 'Credisys helps tenants build Canadian credit history and boost their credit scores. Property managers and landlords benefit from increased net operating income and punctual rental payments.',
    },
    {
        key: 2,
        title: 'Build Credit History and Boost Scores with Credisys',
        body: 'Credisys helps tenants in Canada build their credit history and boost their credit scores. By reporting rental payments to Credit Bureaus, tenants can improve their creditworthiness and gain access to better financial opportunities.',
    },
]
const ArticleCard = () => {
    return (
        <>
            {posts.map((post) => (
                <div key={post.key}
                    className="relative flex max-w-[20rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
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
                        <p className="block mt-3 font-sans text-sm truncate antialiased font-normal leading-relaxed text-gray-700">
                            {post.body}
                        </p>
                    </div>
                    <div className="flex items-center justify-center p-6">
                        <button type="button"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                            Continue reading
                        </button>
                    </div>
                </div>
            ))}
        </>

    );
};

export default ArticleCard;