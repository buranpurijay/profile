import React from "react";
import { motion } from "framer-motion";
import { Timeline, TimelineItem } from "@mui/lab";
import "./Experience.css"; // Custom styles for Experience section

const Experience = () => {
  const experienceData = [
    {
      title: "Lead UI Developer, Cloudnova Technologies",
      duration: "Dec 2022 - Present",
      description:
        "Led a team to integrate cloud-native security modules, reducing infrastructure costs by 90%.",
    },
    {
      title: "Senior Software Engineer, Veracity Solutions",
      duration: "Jun 2022 - Dec 2022",
      description:
        "Developed a healthcare app, improving patient engagement by 30% and reducing hospital visits by 25%.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="experience"
    >
      <h2>Experience</h2>
      <Timeline position="alternate">
        {experienceData.map((item, index) => (
          <TimelineItem key={index}>
            <h3>{item.title}</h3>
            <p>{item.duration}</p>
            <p>{item.description}</p>
          </TimelineItem>
        ))}
      </Timeline>
    </motion.div>
  );
};

export default Experience;
