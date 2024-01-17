import { Typography } from "@material-tailwind/react";
import React from "react";
import img1 from "../../assets/section2-1.svg";
import img2 from "../../assets/section2-2.svg";
import img3 from "../../assets/section2-2.jpg";
import { motion } from "framer-motion";

export default function Section2() {
  return (
    <div className=" w-screen font-mono text-black flex mt-14 justify-center">
      <div className=" w-screen h-max flex flex-row justify-center items-center">
        {/* 1st container  */}
        <div className=" flex flex-col justify-center items-center">
          <div className=" w-3/2 p-10 text-left">
            <Typography  className="sm:text-2xl md:text-3xl font-mono  text-left">
              Efficient Rent Collection and Property Management for Renters and
              Landlords
            </Typography>
            <Typography className=" font-medium text-left mt-5 opacity-80">
              Our platform offers a seamless solution for renters and landlords
              to manage rent collection and property management efficiently.
            </Typography>

            <div className="flex h-max flex-row mt-7">
              <SectionComponent1
                img={img1}
                heading="Renters"
                description="Pay rent hassle-free and stay organized with our user-friendly platform."
              />
              <SectionComponent1
                img={img2}
                heading="Landlords"
                description="Streamline property management tasks and maximize rental income with ease."
              />
            </div>
          </div>
        </div>
        {/* 
            2nd container */}
        <div className="   flex flex-col justify-center p-7">
          <img src={img3} />
        </div>
      </div>
    </div>
  );
}

export function SectionComponent1(props) {
  return (
    <motion.div  
    whileHover={{
        borderColor: '#FFEB3B',
        transition: { duration: 0.5, ease: 'easeInOut' },
      }}
    
    
    className="flex border m-2 pb-9 pl-7 justify-start items-center flex-col button  hover:shadow-lg bg-gray-200 hover:shadow-blue-500/50 hover:transition duration-500 ease-in-out  py-2 px-4 rounded">
      <div className="p-3">
        <div className=" justify-center items-center pb-4 flex  flex-col">
          <img className=" w-10 h-8" src={props.img} />

          <Typography className="text-1xl font-medium  text-left">
            {props.heading}
          </Typography>
        </div>
        <Typography className="text-1xl font-normal  text-left opacity-75">
          {props.description}
        </Typography>
      </div>
    </motion.div>
  );
}
