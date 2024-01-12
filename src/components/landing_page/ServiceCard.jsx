import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import { motion } from "framer-motion";

function ServiceCard(Props) {
  return (
    <motion.div
      className="flex justify-center items-center flex-col  h-44"
      whileHover={{
        scale: 1.5,

        transition: { duration: 0.7 },
      }}
      // Adjust the transition duration

      style={{
        perspective: "1000px", // Define perspective for 3D effect
      }}
    >
      <motion.img src={Props.img.property} className=" max-w-20" />
      <Typography className=" text-blue-400">{Props.heading}</Typography>
    </motion.div>
    //   <Card className="mt-6 w-96">
    //     <CardHeader color="blue-gray" className=" max-w-44 max-h-40 h-56">
    //       <img
    //         src= {Props.img.property}
    //         alt="card-image"

    //         className=" max-w-20"
    //       />
    //     </CardHeader>
    //     <CardBody>
    //       <Typography variant="h5" color="blue-gray" className="mb-2">
    //        {Props.heading}
    //       </Typography>
    //       <Typography>
    //         {Props.description}
    //       </Typography>
    //     </CardBody>
    //     <CardFooter className="pt-0">
    //       <Button>Read More</Button>
    //     </CardFooter>
    //   </Card>
  );
}
export default ServiceCard;
