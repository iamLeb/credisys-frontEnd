import React from "react";
import img1 from "../../assets/paperwork.svg";
import {  Button, Checkbox, Input, Typography } from "@material-tailwind/react";
import { Form } from "react-router-dom";

export default function Section4() {
  return (
    <div className=" w-screen text-black flex justify-evenly mt-36 items-start ">
      <div className="flex flex-row items-start">
        {/* image container */}

        <img src={img1} className=" w-1/2 mx-12  " />

        <div className="flex w-1/2 max-w-1/2 flex-col justify-center  items-start  text-left">
          <Typography className="text-sm font-normal " >Connect</Typography>
          <Typography className=" py-3  font-normal text-4xl ">
            Get in Touch
          </Typography>
          <Typography className="pt-6 font-normal text-1xl">
            Have questions or need support? Contact us now.
          </Typography>
          <GetInTouchForm />
        </div>
      </div>
    </div>
  );
}

function GetInTouchForm() {
  return (
    <div className="w-full">
      <form className="mt-8 mb-2 g sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray">
            Your Name
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray">
            Your Email
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
         
          
        </div>
        <div class="flex flex-row items-center my-2 ">
          <Checkbox label="  I agree to terms " />
           
         
        </div>
                <div>

                    <Button className=" bg-black text-white rounded-none h-18 w-32 "> Send </Button>
                </div>
        
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <a href="#" className="font-medium text-gray-900">
            Sign In
          </a>
        </Typography>
      </form>
    </div>
  );
}
