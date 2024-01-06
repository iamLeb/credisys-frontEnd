import React from 'react'
import Hero from '../components/landing_page/Hero'
import Nav from '../components/landing_page/Nav'

import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'

function Home() {
    return (
        <>
            <Nav />
            <Hero />
        </>
    )
}

export default Home