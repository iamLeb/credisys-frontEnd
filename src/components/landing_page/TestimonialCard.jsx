// TestimonialCard.js
import React from "react";
import img1 from "../../assets/TestmonialStar.svg";
import { Typography } from "@material-tailwind/react";

const TestimonialCard = ({ name, testimonial , designation , rating , address}) => {
  return (
    <div className=" pt-2 mt-4   h-[300px] w-96 rounded-md flex flex-col justify-evenly text-start gap-3  items-start  opacity-85 text-[#fff] bg-blue-400 border-2 mb-5 shadow-md p-4">
      <div className="flex flex-row">
        <div>&#9733;</div>
        <div>&#9733;</div>
        <div>&#9733;</div>
        <div>&#9733;</div>
        <div>&#9733;</div>
      </div>
      <Typography className=" mt-2 font-medium ">{testimonial}</Typography>

      <div className="flex flex-row ">
        <img
          src="https://docs.material-tailwind.com/img/face-2.jpg"
          alt="avatar"
          class="relative inline-block h-12 w-12 !rounded-full object-cover object-center"
        />
        <div className="flex text-left ml-3 items-start flex-col">
          <div>
            <Typography className="font-normal">
              {name}

            </Typography>
          </div>
          <div>
            <Typography className=" font-normal">
             {designation}

            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
