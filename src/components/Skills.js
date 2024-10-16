import React from "react";
import { motion } from "framer-motion";
import { LinearProgress } from "@mui/material";
import "./Skills.css"; // Custom styles for Skills section

const Skills = () => {
  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 95 },
    { name: "AWS", level: 85 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="skills"
    >
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <p>{skill.name}</p>
            <LinearProgress variant="determinate" value={skill.level} />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
