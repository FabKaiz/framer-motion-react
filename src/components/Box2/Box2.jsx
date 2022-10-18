import React, { useState } from "react";
import { motion } from "framer-motion";

const Box2 = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  return (
    <div className="box-container">
      <div className="drag-area">
        <motion.div
          className="box"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          whileDrag={{ scale: 0.8 }}
          borderradius="1rem"
          drag
          dragend={{ transition: { type: "spring", stiffness: 100 } }}
          dragConstraints={{
            top: -50,
            left: -50,
            right: 50,
            bottom: 50,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          onClick={() => setIsAnimated(!isAnimated)}
        >
          <h2>Hover, click and drag me :) </h2>
        </motion.div>
        <p>drag constraints: 100px</p>
      </div>
    </div>
  );
};

export default Box2;
