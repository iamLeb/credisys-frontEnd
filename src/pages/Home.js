import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import Button from "../components/Button";
import axios from "axios";

function Home() {
    return (
        <>

            <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
                <div className="bg-white p-3 rounded w-25">
                    <h2 id='show'>Welcome to Credisys</h2> <hr/>
                    <div className="p-3">
                        Landlords and Property Managers incentivize on time payments with rent reporting
                        rewards, while Renters are empowered with credit building opportunities.
                    </div> <hr/>
                    <div className="row">
                        <div className="col-md-6">
                            <Link to={'/login'}><Button text={'Login'} color='red' /></Link>
                        </div>
                        <div className="col-md-6">
                            <Link to={'/register'}><Button text={'Register'} color={'green'}/></Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Home;