import { motion } from "framer-motion";
const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};
const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};
const AnimatedText = ({ text, className = "" }) => {
  return (
    <div
      className="w-full mx-auto py-2 items-center justify-center text-center
    overflow-hidden
    dark:text-light
    "
    >
      <motion.h1
        variants={quote}
        initial="initial"
        animate="animate"
        className={`inline-block 
        dark:text-light

        w-full text-dark font-bold capitalize 
      text-8xl ${className}`}
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            variants={singleWord}
            className="inline-block"
            key={word + "-" + index}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
