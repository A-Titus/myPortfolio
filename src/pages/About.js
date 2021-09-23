import React from "react";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "black",
      }}
    >
      <motion.div animate={{ scale: 2 }} transition={{ duration: 0.5 }} />
      <h1
        style={{
          height: "100vh",
          color: "white",
        }}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Exercitationem, totam.
      </h1>
    </div>
  );
};

export default About;
