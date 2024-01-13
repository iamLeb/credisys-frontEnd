import { Button, Typography } from "@material-tailwind/react";
import { MotionConfig, motion } from "framer-motion";
import React from "react";
import img1 from "../../assets/section1-2.png";


export default function Section1() {
  return (
    <>
      <div className=" w-screen flex  text-black text-md h-max  flex-col bg-gray-100 my-5 py-4 ">
        <div className=" flex items-start justify-between flex-row h-64 ">
          {/* // left container  */}

        
          <div className="  text-left w-2/4 h-1/2 flex-col mt-5  lg:pl-[300px] md:pl-[160px] justify-start  ">
            
            <Typography className=" font-semibold text-md opacity-60">Simplify</Typography>
            <div >
              <Typography  className= " font-mono sm:text-2xl lg:text-5xl text-blue-500">
                Convenient Online Rent Payment for Renters
              </Typography>
            </div>
            
          </div>
         

          {/* // right container */}

         
            <div className="h-1/2 w-max flex mt-5 flex-col lg:pr-[260px] md:pr-[110px]">
              <div className=" text-start max-w-96 ">
                <Typography className=" font-normal">
                  With our platform, renters can easily pay their rent online,
                  saving time and hassle. Say goodbye to writing checks or
                  making trips to the bank. Our secure and user-friendly system
                  allows you to make payments from the comfort of your own home.
                  Experience the convenience of online rent payment today!
                </Typography>
              </div>

              {/* // learn more + signup */}
              <div className="flex flex-row w-full pt-4 ">
                <Button variant="outlined" className=" w-1/2  h-max rounded text-blue-500 hover:bg-blue-500 hover:text-white">
                  {" "}
                  Learn More
                </Button>
                <Button variant="text" className=" text-left ml-2 w-1/2 rounded-lg"> Sign up</Button>
              </div>
            </div>
          
          </div>

          {/* Image container            */}
          <div className=" flex w-screen justify-center mt-7">
            <div >
            <img  className=" w-96  h-3/2"src={img1} alt="Building"></img>
            </div>
          </div>
        </div>
      
    </>
  );
}
