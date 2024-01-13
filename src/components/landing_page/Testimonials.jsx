import { Typography } from "@material-tailwind/react";
import React from "react";
import TestimonialCarousel from "./Testimonial_Carasoul";

export default function Testimonials() {
  return (
    <div className="flex flex-col w-screen h-max  font-normal  my-24 justify-center items-center">
      <div className=" text-center">
        <div className="flex flex-row justify-center">
          <Typography className="text-4xl font-medium text-blue-500 mb-5 ">H</Typography>
          <Typography className="text-4xl  font-medium mb-5 ">appy Customers</Typography>
        </div>
        <Typography className="pt-2 font-normal ">
          Read what our satisfied renters and landlords have to say about us.
        </Typography>
      </div>

      <div className="pt-4">
        <TestimonialCarousel />
      </div>
    </div>
  );
}

function TestimonialCard() {}
