import { Button, Typography } from "@material-tailwind/react";
import { MotionConfig, motion } from "framer-motion";
import React from "react";
import img1 from "../../assets/section1-1.jpg";

export default function Section1() {
  return (
    <>
      <div className=" w-screen flex   h-max  flex-col bg-gray-100 mt-6 p-6">
        <div className=" flex items-start justify-between flex-row h-64 ">
          {/* // left container  */}

        
          <div className="  text-left w-2/4 h-1/2 flex-col lg:pl-[300px] md:pl-[160px] justify-start  ">
            
            <Typography className=" font-sans text-md opacity-60">Simplify</Typography>
            <div >
              <Typography  className= " sm:text-2xl lg:text-5xl text-blue-500">
                Convenient Online Rent Payment for Renters
              </Typography>
            </div>
            
          </div>
         

          {/* // right container */}

         
            <div className="h-1/2 w-max flex flex-col lg:pr-[260px] md:pr-[110px]">
              <div className=" text-start max-w-96 ">
                <Typography>
                  With our platform, renters can easily pay their rent online,
                  saving time and hassle. Say goodbye to writing checks or
                  making trips to the bank. Our secure and user-friendly system
                  allows you to make payments from the comfort of your own home.
                  Experience the convenience of online rent payment today!
                </Typography>
              </div>

              {/* // learn more + signup */}
              <div className="flex flex-row mt-4">
                <Button variant="outlined" className=" w-1/4  h-[20px] rounded text-blue-500 hover:bg-blue-500 hover:text-white">
                  {" "}
                  Learn More
                </Button>
                <Button variant="text" className=" text-left ml-2 w-3/4 rounded-lg"> Sign up</Button>
              </div>
            </div>
          
          </div>

          {/* Image container            */}
          <div className=" flex w-screen justify-center mt-7">
            <div >
            <img  className=" w-[950px]  object-fill  h-3/2"src={img1} alt="Building"></img>
            </div>
          </div>
        </div>
      
    </>
  );
}
