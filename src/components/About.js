import React from "react";
import { motion } from "framer-motion";
import "./About.css"; // Custom styles for About section

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="about"
    >
      <h2>About Me</h2>
      <p>
        I am a passionate Lead UI Developer with experience in cloud-native
        solutions, React, AWS, and serverless architecture. I focus on creating
        scalable, impactful solutions for businesses.
      </p>
    </motion.div>
  );
};

export default About;
