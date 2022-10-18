import React from "react";
import { motion } from "framer-motion";

const Box3 = () => {
  function refreshPage() {
    window.location.reload(false);
  }

  const boxVariant = {
    hidden: {
      x: "-100vw",
    },
    show: {
      x: 0,
      transition: {
        delay: 0.25,
        when: "beforeChildren",
        staggerChildren: .5,
      },
    },
  };

  const listVariant = {
    hidden: {
      x: -10,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div>
      <div className="reload-container">
        <h2 style={{ marginBottom: "2rem" }}>
          Refresh the page and watch the staggered animation :)
          <button onClick={refreshPage}>Click to reload!</button>
        </h2>
      </div>
      <div className="box-container">
        <motion.div
          className="box"
          variants={boxVariant}
          animate="show"
          initial="hidden"
        >
          {[1, 2, 3].map((box) => {
            return (
              <motion.li
                key={box}
                variants={listVariant}
                className="box-item"
              ></motion.li>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Box3;
