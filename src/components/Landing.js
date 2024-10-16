import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Landing.css"; // Custom styles for landing

const Landing = () => {
  return (
    <div className="landing">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="landing-content"
      >
        <h1>Jay Buranpuri</h1>
        <p>Lead UI Developer | React | AWS | Java</p>
        <div className="landing-links">
          <Link to="/about">About Me</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Landing;
