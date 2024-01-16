import React from 'react';
import Nav2 from "../../../components/landing_page/Nav2.jsx";
import { useState } from 'react'
import bannerImg from "../../../assets/posts/calculate-removebg-preview.png";

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
]

const Tenant = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <>
        
            <section className="container mx-auto flex justify-between align-items-center p-5">
                {/*Left side with register buttons */}
                <div className="w-2/4 my-auto">
                    <h2 className="text-5xl text-gray-600 font-semibold mb-4">
                        Pay Rent<br/>
                        Report Payment <br/>
                        Build Credit History <br/>
                        Boost Your Credit Scores
                    </h2>
                    <p className="text-gray-600">Join Credisys and boost your credit scores by reporting rental
                        payments.</p>
                </div>

                {/* Right side with a big image */}
                <div className="w-2/4">
                    <img src={bannerImg} alt="Big Image" className="w-full h-auto rounded-2xl"/>
                </div>
            </section>
        </>
    );
};

export default Tenant;