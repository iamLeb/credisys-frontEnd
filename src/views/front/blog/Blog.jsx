import React from 'react';
import Nav2 from "../../../components/landing_page/Nav2.jsx";
import Hero from "./container/Hero.jsx";
import Articles from "./container/Articles.jsx";
import CTA from "./container/CTA.jsx"
import Banner from "./container/Banner.jsx";
import Faq from "./container/Faq.jsx";



const Blog = () => {
    return (
        <>
        
            <Hero/>
            <Articles/>
            <Banner />
            <Faq />
            {/* <CTA/> */}
        </>
    );
};

export default Blog;