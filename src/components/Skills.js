import React from "react";
import { motion } from "framer-motion";
const Skills = () => {
  const Skill = ({ name, x, y }) => {
    return (
      <motion.div
        initial={{ x: 0, y: 0 }}
        whileInView={{ x: x, y: y }}
        transition={{ duration: 1.5 }}
        whileHover={{ scale: 1.1 }}
        viewport={{ once: true }}
        className="absolute cursor-pointer py-3 px-6 shadow-dark flex items-center justify-center rounded-full font-semibold bg-dark text-light"
      >
        {name}
      </motion.div>
    );
  };
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
      <div
        className="w-full h-screen relative flex items-center 
      justify-center rounded-full bg-circularLight"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="cursor-pointer p-8 shadow-dark flex items-center justify-center rounded-full font-semibold bg-dark text-light"
        >
          Web
        </motion.div>
        <Skill name={"HTML"} x={"-20vw"} y={"2vw"}></Skill>
        <Skill name={"CSS"} x={"-5vw"} y={"-10vw"}></Skill>
        <Skill name={"JavaScript"} x={"20vw"} y={"6vw"}></Skill>
        <Skill name={"ReactJS"} x={"0vw"} y={"10vw"}></Skill>
        <Skill name={"NextJS"} x={"-20vw"} y={"-15vw"}></Skill>
        <Skill name={"NodeJS"} x={"15vw"} y={"-12vw"}></Skill>
        <Skill name={"ExpressJS"} x={"32vw"} y={"-5vw"}></Skill>
        <Skill name={"MongoDB"} x={"0vw"} y={"-20vw"}></Skill>
        <Skill name={"Firebase"} x={"-25vw"} y={"18vw"}></Skill>
        <Skill name={"Java"} x={"18vw"} y={"16vw"}></Skill>
      </div>
    </>
  );
};

export default Skills;
