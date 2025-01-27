'use client'

import { motion } from "framer-motion";
import Image from 'next/image';

const Photo = () => {
  return (
    <div className="w-full h-full relative xl:bottom-12 sm:bottom-2">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeIn" }}
        className="flex items-center justify-center w-full h-full relative"
      >
        {/* Circle (SVG) Positioned Behind */}
        <div className="absolute top-8 right-1 w-full h-full">
          <motion.svg
            className="absolute top-[30%] left-[30%] transform -translate-x-[20%] -translate-y-[30%] w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
            fill="transparent"
            viewBox="0 0 506 506"
            xmlns="http://www.w3.org/2000/svg"
          >
           {/* Mask for the bottom half */}
          <defs>
            <mask id="circle-mask">
              {/* Full Circle */}
              <circle cx="253" cy="253" r="290" fill="white" />
              {/* Bottom Rectangular Mask (static south part) */}
              <rect x="120" y="450" width="506" height="253" fill="black" />
            </mask>
          </defs>
            <motion.circle
              cx="253"
              cy="253"
              r="250"
              stroke="#ffee00"
              strokeWidth="8"
              strokeLinejoin="round"
              strokeLinecap="round"
              mask="url(#circle-mask)"
              initial={{ strokeDasharray: "24 20 20 0" }}
              animate={{
                strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                // rotate: [120, 350],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
              }}
            />
          </motion.svg>
        </div>

        {/* Image Positioned in Front */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.4, delay: 0.4, ease: "easeInOut" }}
          className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] xl:w-[750px] xl:h-[750px] mix-blend-lighten"
        >
          <Image
            src="/assets/photo1.png"
            priority
            fill
            quality={100}
            alt="Photo"
            className="object-contain"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Photo;
