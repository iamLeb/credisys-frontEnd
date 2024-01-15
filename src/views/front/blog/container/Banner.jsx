import React from 'react';
import bannerImg from "../../../../assets/posts/StackRanking-1.png";

const Banner = () => {
    return (
        <section className="container mx-auto flex justify-center p-5">
            {/*Left side with register buttons */}
            <div className="w-2/4 my-auto">
                <h2 className="text-5xl text-gray-600 font-semibold mb-4">Start Building Your <br/> Credit Today
                </h2>
                <p className="text-gray-600">Join Credisys and boost your credit scores by reporting rental payments.</p>

                <div className="flex p-3 justify-center gap-5">
                    <div>
                        <button type="button"
                                className="cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Create an Account
                        </button>
                    </div>
                    <div className="mb-4">
                        <button
                            className="cursor-pointer py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                            Login
                        </button>
                    </div>
                </div>
            </div>

            {/* Right side with a big image */}
            <div className="w-2/4">
                <img src={bannerImg} alt="Big Image" className="w-full h-auto"/>
            </div>
        </section>
    );
};

export default Banner;