import React from "react";
import { motion } from "framer-motion";

const Box4 = () => {
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div>
      <div className="reload-container">
        <h2 style={{ marginBottom: "2rem" }}>
          Refresh the page and watch the keyframe animation :)
          <button onClick={refreshPage}>Click to reload!</button>
        </h2>
      </div>
      <div className="box-container">
        <motion.div
          className="box"
          animate={{
            scale: [1, 1.5, 0.5, 1.2, 1],
            borderRadius: ["1rem", "20%", "100%", "50%", "1rem"],
            rotate: [0, 0, 270, 270, 0],
          }}
          transition={{
            duration: 2,
          }}
        ></motion.div>
      </div>
    </div>
  );
};

export default Box4;
