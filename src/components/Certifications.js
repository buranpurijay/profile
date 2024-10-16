import React from "react";
import { motion } from "framer-motion";
import "./Certifications.css"; // Custom styles for Certifications section

const Certifications = () => {
  const certifications = [
    "React - The Complete Guide (incl. React Router & Redux)",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="certifications"
    >
      <h2>Certifications</h2>
      <ul>
        {certifications.map((cert, index) => (
          <li key={index}>{cert}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Certifications;
