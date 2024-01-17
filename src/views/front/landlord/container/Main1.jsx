import { Typography } from "@material-tailwind/react";
import React from "react";
import img1 from "../../../../assets/fianancial.png";

export default function Main1() {
  return (
    <div className="w-screen flex  flex-col gap-1  justify-center  items-center p-20 py-6 ">
      <div className=" flex flex-col items-center gap-3 justify-center">
        <Typography className=" text-1xl ">Seamless</Typography>
        <Typography className=" font-medium  text-3xl ">
          Integrate with Ease for Effortless Use
        </Typography>
        <Typography className=" w-96 py-4">
          Credisys offers seamless API integration, making it easy for property
          managers to incorporate our services into their systems. With our
          user-friendly APIs, you can effortlessly utilize our credit-building
          solutions for your tenants.
        </Typography>
      </div>

      {/* <div className="flex   flex-col justify-evenly  items-start">
        <Typography className=" font-normal opacity-45  text-left  pl-1">
          Unlock
        </Typography>
        <Typography className=" text-4xl items-start font-mono text-left">
          Attract Better Tenants with Credisys
        </Typography>
        <Typography className=" font-normal text-left  h-max py-6">
          Partner with Credisys to enable your tenants to start building their
          Canadian credit today. With rent reporting to Equifax and TransUnion,
          financial literacy tools, and debt-to-income analysis, Credisys helps
          your tenants improve their credit and achieve financial freedom.
        </Typography>
        <div className=" flex flex-row gap-2 items-start w-full">
          <button className=" rounded-lg w-[120px] h-12 text-xl bg-blue-600 text-white hover:bg-blue-950 hover:text-yellow-50">
            Learn More
          </button>
          <button className=" rounded-lg w-[120px]  h-12 text-xl bg-white text-black ">
            Sign Up
          </button>
        </div>
      </div> */}
    </div>
  );
}
