import React from 'react';
import Nav2 from "../../../components/landing_page/Nav2.jsx";
import { FiSearch } from "react-icons/fi";
import Hero from "./container/Hero.jsx";
import Articles from "./container/Articles.jsx";
import CTA from "./container/CTA.jsx"

const Blog = () => {
    return (
        <>
            <Nav2 />
            <Hero />
            <Articles />
            <CTA />
        </>
    );
};

export default Blog;