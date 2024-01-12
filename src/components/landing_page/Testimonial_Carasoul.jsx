// TestimonialCarousel.js
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TestimonialCard from './TestimonialCard';

const testimonialsData = [
    {
      name: 'Alice',
      rating: 4,
      testimonial: 'Great service! Really satisfied with the product.',
      address: {
        city: 'Toronto',
        province: 'Ontario',
      },
      designation: 'Renter',
    },
    {
      name: 'Bob',
      rating: 5,
      testimonial: 'Absolutely fantastic experience. Highly recommended!',
      address: {
        city: 'Vancouver',
        province: 'British Columbia',
      },
      designation: 'Landlord',
    },
    {
      name: 'Charlie',
      rating: 3,
      testimonial: 'Good service, but could be improved in some areas.',
      address: {
        city: 'Montreal',
        province: 'Quebec',
      },
      designation: 'Property Manager',
    },
    // Add more testimonials as needed
  ];
  

const TestimonialCarousel = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prevIndex) =>
        prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change testimonial every 5 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, [currentTestimonial]);

  return (
    <div className="max-w-lg mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentTestimonial}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <TestimonialCard
            name={testimonialsData[currentTestimonial].name}
            testimonial={testimonialsData[currentTestimonial].testimonial}
            address={testimonialsData[currentTestimonial].address.city}
            designation={testimonialsData[currentTestimonial].designation}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TestimonialCarousel;
