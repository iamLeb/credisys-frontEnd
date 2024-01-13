// TestimonialCarousel.js
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TestimonialCard from "./TestimonialCard";

const testimonialsData = [
  {
    name: "Alice",
    rating: 4,
    testimonial: "Great service! Really satisfied with the product.",
    address: {
      city: "Toronto",
      province: "Ontario",
    },
    designation: "Renter",
  },
  {
    name: "Bob",
    rating: 5,
    testimonial: "Absolutely fantastic experience. Highly recommended!",
    address: {
      city: "Vancouver",
      province: "British Columbia",
    },
    designation: "Landlord",
  },
  {
    name: "Charlie",
    rating: 3,
    testimonial: "Good service, but could be improved in some areas.",
    address: {
      city: "Montreal",
      province: "Quebec",
    },
    designation: "Property Manager",
  },
  // Add more testimonials as needed
];

const TestimonialCarousel = () => {
  // const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentTestimonial((prevIndex) =>
  //       prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
  //     );
  //   }, 5000); // Change testimonial every 5 seconds (adjust as needed)

  //   return () => clearInterval(interval);
  // }, [currentTestimonial]);

  return (
    <div className="max-w-full mx-auto  h-max">
      <motion.div
       
        className="flex justify-center gap-4  w-screen"
      >
        {testimonialsData.map((testimonial) => {
          return (
            <TestimonialCard
              name={testimonial.name}
              testimonial={testimonial.testimonial}
              address={testimonial.address.city}
              designation={testimonial.designation}
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export default TestimonialCarousel;
