import React, { useState } from "react";
import { motion } from "framer-motion";

const Box1 = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  return (
    <div className="box-container">
      <motion.div
        className="box"
        animate={{
          x: isAnimated ? 500 : 0,
          rotate: isAnimated ? 45 : 0,
          borderRadius: isAnimated ? "100%" : "1rem",
          backgroundColor: isAnimated ? "#ff2994" : "aquamarine",
          transition: {
            duration: 1,
            type: "spring",
            stiffness: 100,
          },
        }}
        onClick={() => setIsAnimated(!isAnimated)}
      >
        <h2>Click me</h2>
      </motion.div>
    </div>
  );
};

export default Box1;
