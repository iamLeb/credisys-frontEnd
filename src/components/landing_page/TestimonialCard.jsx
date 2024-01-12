// TestimonialCard.js
import React from "react";
import img1 from "../../assets/TestmonialStar.svg";
import { Typography } from "@material-tailwind/react";

const TestimonialCard = ({ name, testimonial , designation , rating , address}) => {
  return (
    <div className=" pt-2 mt-4 rounded-none flex flex-col justify-start text-start items-start border-slate-500 border-2 w-[300px] h-40 shadow-md p-4">
      <div className="flex flex-row">
        <div>&#9733;</div>
        <div>&#9733;</div>
        <div>&#9733;</div>
        <div>&#9733;</div>
        <div>&#9733;</div>
      </div>
      <Typography className="text-gray-600 mt-2">{testimonial}</Typography>

      <div className="flex flex-row ">
        <img
          src="https://docs.material-tailwind.com/img/face-2.jpg"
          alt="avatar"
          class="relative inline-block h-12 w-12 !rounded-full object-cover object-center"
        />
        <div className="flex ml-3 flex-col">
          <div>
            <Typography>
              {name}

            </Typography>
          </div>
          <div>
            <Typography>
             {designation}

            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
