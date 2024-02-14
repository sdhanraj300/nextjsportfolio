import React, { useRef } from "react";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import { Head } from "next/document";
import Link from "next/link";
import Image from "next/image";
import articleImg from "../../public/images/articles/smooth scrolling in reactjs.png";
import article2Img from "../../public/images/articles/form validation in reactjs using custom react hook.png";
import { motion, useMotionValue } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);
const FeaturedArticle = ({ img, title, link, time, summary }) => {
  return (
    <li
      className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark
    rounded-2xl
    dark:bg-dark dark:border-light
    "
    >
      <div
        className="absolute top-0 -right-3 -z-10
          w-[98%] h-[104%] rounded-[2rem] bg-dark
          rounded-br-3xl
          "
      />
      <Link
        href={link}
        target={"_blank"}
        className="w-full cursor-pointer overflow-hidden rounded-lg
        inline-block 
        "
      >
        <FramerImage
          src={img}
          alt={title}
          priority={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw,33vw"
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 hover:underline mt-4 xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary font-semibold dark:text-primaryDark">
        {time}
      </span>
    </li>
  );
};

const MovingImage = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  const handleMouse = (e) => {
    imgRef.current.style.display = "inline-block";
    x.set(e.pageX);
    y.set(-10);
  };

  const handleMouseLeave = () => {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  };

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
       priority={true}
       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw,33vw"  
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
        style={{ x, y }}
        ref={imgRef}
        src={img}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
      />
    </Link>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center
    justify-between bg-light text-dark first:mt-0 border border-solid border-dark
    border-r-4 border-b-4 sm:flex-col
    dark:bg-dark dark:border-light
    dark:text-light dark:border-r-4 dark:border-b-4
    "
    >
      <MovingImage
        title={title}
        img={img}
        link={link}
        priority={true}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw,33vw"
      />
      <span className="text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};

const articles = () => {
  return (
    <>
      {/* <Head>
        <title>
          Dhanraj | Articles Page
          <meta name="description" content="Articles page of Dhanraj" />
        </title>
      </Head>  */}
      <TransitionEffect/>
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="Words Can Change the Word!" className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl" />
          <ul className="grid grid-cols-2 gap-16 md:grid-cols-1 lg:gap-8 md:gap-y-16">
            <FeaturedArticle
              img={articleImg}
              link={"/"}
              title={
                "Build A Custom Pagination Component In Reactjs From Scratch"
              }
              summary={
                "Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              }
              time={"9 min read"}
            />
            <FeaturedArticle
              img={articleImg}
              link={"/"}
              title={
                "Build A Custom Pagination Component In Reactjs From Scratch"
              }
              summary={
                "Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              }
              time={"9 min read"}
            />
            <FeaturedArticle
              img={articleImg}
              link={"/"}
              title={
                "Build A Custom Pagination Component In Reactjs From Scratch"
              }
              summary={
                "Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              }
              time={"9 min read"}
            />
            <FeaturedArticle
              img={articleImg}
              link={"/"}
              title={
                "Build A Custom Pagination Component In Reactjs From Scratch"
              }
              summary={
                "Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              }
              time={"9 min read"}
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Articles
          </h2>
          <ul>
            <Article
              title={
                "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              }
              date="12 February 2023"
              link={"/"}
              img={article2Img}
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
