import React from "react";
import { motion, useAnimation } from "framer-motion";

const Box5 = () => {
  const control = useAnimation();

  return (
    <>
      <h2 className="useAnimation_title">useAnimation hook</h2>
      <div className="box-container">
        {/* Move left */}
        <button
          onClick={() => {
            control.start({
              x: 0,
              transition: {
                duration: 2,
                type: "spring",
                stiffness: 100,
              },
            });
          }}
          className="useAnimate_btn"
        >
          Move Left
        </button>
        {/* Move right */}
        <button
          onClick={() => {
            control.start({
              x: 500,
              transition: {
                duration: 2,
                type: "spring",
                stiffness: 100,
              },
            });
          }}
          className="useAnimate_btn"
        >
          Move Right
        </button>
        {/* transform in circle */}
        <button
          onClick={() => {
            control.start({
              borderRadius: "100%",
              transition: {
                duration: 2,
                type: "spring",
                stiffness: 100,
              },
            });
          }}
          className="useAnimate_btn"
        >
          Circle
        </button>
        {/* transform in square */}
        <button
          onClick={() => {
            control.start({
              borderRadius: "1rem",
              transition: {
                duration: 2,
                type: "spring",
                stiffness: 100,
              },
            });
          }}
          className="useAnimate_btn"
        >
          Square
        </button>
        {/* Stop all animation */}
        <button
          onClick={() => {
            control.stop();
          }}
          className="useAnimate_btn"
        >
          Stop
        </button>
        <motion.div className="box" animate={control} />
      </div>
    </>
  );
};

export default Box5;
