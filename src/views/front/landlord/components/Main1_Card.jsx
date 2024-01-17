import { Typography } from "@material-tailwind/react";
import React from "react";

export default function Main1_Card(props) {

    console.log(props)
  return (
    <div className=" flex flex-col  justify-evenly items-center  p-10 w-[320px]">
      <img  className = " h-11 w-9 mt-2 "src={ props.img}></img>
      <Typography className=" text-center  text-3xl font-thin">{props.tagline}</Typography>

      <Typography className="pt-4 opacity-70">{props.desc}</Typography>
    </div>
  );
}
