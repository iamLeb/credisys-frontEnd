import { Button, Typography } from "@material-tailwind/react";
import React from "react";
import img from "../../assets/hero_img_1.png";
import services from "../../assets/services.png";

import { ourservices } from "./data";
import ServiceCard from "./ServiceCard";
import { Footer } from "./Footer";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Testimonials from "./Testimonials";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section0 from "./Section0";

function Hero() {
  return (
    <div className="flex  justify-center  items-center mt-10">
      <div className="flex   align-middle flex-col  items-center">
        <div
          style={{ width: "700px" }}
          className="mt-3  mb-12   "
        >
          <Typography  className="text-5xl font-mono"> 
            Smart Rentals, Smarter Lives: Pay Rent, Build Credit
          </Typography>
        </div>

        <div className="flex flex-row justify-center gap-9 items-center pb-3 ">
          <Button className=" w-[120px] bg-rose-500 text-white">Renters</Button>
          <Button  className=" w-[120px] bg-rose-500 text-white" >Landlords</Button>
        </div>

        <div className="w-screen  flex justify-center flex-col items-center">
          <div>
            <img src={img} />
          </div>

          <hr className="border border-blue-500 border-t-2 w-1/4 my-6" />
          {/* <Typography variant="h1" className=" text-primary">
            It Starts with a great Plan
          </Typography> */}

          <div className="mt-10">
            {/* <div className='max-w-lg  mt-20  bg-opacity-0 '>
                            <Typography variant='lead' className='text-black' >
                                Credisys is a financial technology (Fintech) start-up which captures rental payments data and reports it to credit bureaus so that it can be included in their credit algorithms. Credisys was founded to change the renting experience and help tenants earn something back on their largest monthly expense, rent. Reporting rental payment data to credit bureaus enables tenants to build credit histories and boost credit scores without having to assume debt
                            </Typography>
                        </div> */}
          </div>

          {/* <div
                        style={{
                            backgroundImage: 'url("../../../src/assets/wave.svg")',
                            backgroundSize: 'cover',
                        }}
                        className='  flex items-center justify-center w-full h-60'
                    >
                    </div> */}
          {/* 
                    <div className='flex  justify-center w-screen'>
                        <div className=' mt-28 relative '>

                            <img src={services} className=' scale-150'/>
                            <div className='absolute  top-10  left-64   bg-tex bg-opacity-0 text-black  text-4xl  font-sans  p-2'>

                                <Typography variant='title'>

                                    OUR SERVICES
                                </Typography>
                            </div>



                            <div className='flex gap-11 flex-row w-full  mt-28 justify-center items-center  flex-wrap sm:flex-row'>


                                {ourservices.map((service) => {
                                    return <ServiceCard img={service.img} heading={service.heading} />
                                })}
                            </div>

                        </div>



                    </div> */}
          <Section0/>
          <Section1 />
          <Section2 />

          <Testimonials />

          <Section3 />
          <Section4 />
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
