import React from 'react';
import {Link} from "react-router-dom";

function Home() {
    return (
        <>
            <div className="cover">
                <div className="bg"></div>

                <div className="title">
                    <div className="logo">
                    </div>
                    <div className="text">
                        Credisys
                    </div>
                    <div className="desc">
                        Landlords and Property Managers incentivize on time payments with rent reporting rewards, <br/> while Renters are empowered with credit building opportunities.
                    </div>
                </div>
            </div>

            <div className="social">
                <Link to={'/'}>HomePage</Link>
                <Link to={'/login'}>Login</Link>
                <Link to={'/register'}>Register</Link>
            </div>
        </>
    )
        ;
}

export default Home;