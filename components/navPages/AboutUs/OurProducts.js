import React from "react";
import { motion } from "framer-motion";

const OurProducts = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col gap-10 lg:gap-15 text-end"
    >
      {/* part one */}
      <div>
        <div className="py-6 font-cairo flex flex-col gap-4">
          <p className="text-sm text-blueColor tracking-[4px]">2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">منتجاتنا</h2>
        </div>
        <div className="mt-6 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 ">
        </div>
      </div>
    </motion.div>
  );
};

export default OurProducts;
