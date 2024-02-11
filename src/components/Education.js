import React from "react";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  const Details = ({ type, time, place, info }) => {
    const ref = useRef(null);
    return (
      <li
        ref={ref}
        className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
      >
        <LiIcon reference={ref} />
        <motion.div
          className=""
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 100,
            damping: 10,
          }}
        >
          <h3 className="capitalize font-bold text-2xl">{type}</h3>
          <span className="capitalize font-medium text-dark/75">
            {time} | {place}
          </span>
          <p className="font-medium w-full">{info}</p>
        </motion.div>
      </li>
    );
  };
  return (
    <div className="my-64 ">
      <h2 className="font-bold text-8xl mb-32 w-full text-center ">
        Education
      </h2>
      <div className="w-[75%] mx-auto  relative  " ref={ref}>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4  ">
          <Details
            type={"High School and Intermediate"}
            time={"2012-2020"}
            place={"Dehradun, UK"}
            info={
              "Completed High School and Intermediate from Dehradun, Uttarakhand. Learned and explored new things."
            }
          />
          <Details
            type={"B.Tech In Information Technology"}
            time={"2021-Present"}
            place={"Noida, UP"}
            info={
              "Pursuing B.Tech in Information Technology from JSS, Noida. Learning and exploring new technologies."
            }
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
