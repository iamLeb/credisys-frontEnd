import { Button, Typography } from "@material-tailwind/react";

import React from "react";

export default function Section3() {
  return (
    <div className=" w-full h-56 flex items-center justify-center">
      <div className=" w-10/12 h-56  items-center gap-6 justify-center border-4 flex flex-col">
        <div className=" items-start">
          <Typography className=" text-3xl">
            Rent Made Easy for Everyone
          </Typography>
        </div>
        <div>
          <Typography>
            Sign up now and experience hassle-free rent payments and property
            management.
          </Typography>
        </div>

        <div className="flex gap-3 justify-center items-center flex-row">
        <Button className="w-32  shadow-sm shadow-slate-900 p-4 border-2 rounded-none bg-black text-white" >
            SignUP
          </Button>
          <Button className="w-32 p-4 shadow-sm shadow-slate-900   border-2 rounded-none" variant="outlined">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}
