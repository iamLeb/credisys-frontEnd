import React from 'react'
import Hero from '../components/landing_page/Hero'
import Nav from '../components/landing_page/Nav'

import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import Nav2 from '../components/landing_page/Nav2'

function Home() {
    return (
        <>
            {/* <Nav /> */}
            <Nav2/>
            <Hero />
        </>
    )
}

export default Home