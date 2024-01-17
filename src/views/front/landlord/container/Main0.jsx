import { Typography } from "@material-tailwind/react";
import React from "react";
import img1 from "../../../../assets/demo.png";

export default function Main0() {
  return (
    <div className=" w-screen p-20 flex flex-row justify-center items-center  ">
      <div className=" w-max h-max  flex flex-row  gap-2 items-center   ">
        <div className="flex py-8 flex-col w-full justify-evenly items-start">
          <Typography className=" text-4xl items-start font-mono text-left">
            Boost Your Tenants' Credit Scores with Rent Reporting to Credit
            Bureaus
          </Typography>
          <Typography className=" font-normal text-left w-full h-max py-6">
            With Credisys, you can provide your tenants with the opportunity to
            build and improve their credit by reporting their rent payments to
            Equifax and TransUnion. This helps them establish a positive credit
            history and achieve financial freedom.
          </Typography>

          <button className=" rounded-lg w-[180px]  h-10 text-xl bg-rose-500 text-white hover:bg-blue-950 hover:text-yellow-50">
            {" "}
            Sechedule Demo
          </button>
        </div>
      </div>

      <section className=" ">
        <img className=" object-cover   w-max h-max" src={img1} />
      </section>
    </div>
  );
}
