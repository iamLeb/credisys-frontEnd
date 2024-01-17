import { Typography } from "@material-tailwind/react";
import React from "react";

export default function Head() {
  return (
    <div className=" flex flex-col  justify-center w-screen h-max p-20">
      <Typography className=" text-7xl mt-2 font-semibold text-left  ">
        Empower Your Tenants
      </Typography>
      <Typography className=" font-normal mt-2 text-left  ">
        Build credit, improve financial literacy, and provide money management
        tools for your tenants.
      </Typography>
    </div>
  );
}
