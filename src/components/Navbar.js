import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  PinterestIcon,
  SunIcon,
  TwitterIcon,
} from "./Icons";
const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const router = useRouter();
  const CustomLink = ({ href, title, className = "" }) => {
    return (
      <Link className={`${className} relative group`} href={href}>
        {title}

        <span
          className={`h-[1px] inline-block bg-dark 
          absolute left-0 -bottom-0.5 
          group-hover:w-full 
          transition-[width] ease duration-300 
          dark:bg-light
          ${router.asPath === href ? "w-full" : "w-0"}`}
        >
          &nbsp;
        </span>
      </Link>
    );
  };

  return (
    <header className="dark:text-light w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="mx-4" />
        <CustomLink href="/articles" title="Articles" className="ml-4" />
      </nav>
      <nav className="flex items-center justify-center flex-wrap">
        <motion.a
          href="https://twitter.com/"
          target="_blank"
          className="w-6 mx-3"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <TwitterIcon />
        </motion.a>
        <motion.a
          href="https://github.com"
          target="_blank"
          className="w-6 mx-3"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/"
          target="_blank"
          className="w-6 mx-3"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          href="https://www.pinterest.com/"
          target="_blank"
          className="w-6 mx-3 bg-light rounded-full "
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <PinterestIcon />
        </motion.a>
        <motion.a
          href="https://dribbble.com/"
          target="_blank"
          className="w-6 ml-3"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <DribbbleIcon />
        </motion.a>
        <button
          onClick={() => setMode(mode === "dark" ? "light" : "dark")}
          className={`dark: w-8 h-8 flex items-center justify-center rounded-full bg-dark text-white ml-3 p-1
          ${mode === "light" ? "bg-dark text-dark" : "bg-dark text-light"}
          `}
        >
          {mode === "dark" ? (
            <SunIcon className={"fill-dark"} />
          ) : (
            <MoonIcon className={"fill-dark"} />
          )}
        </button>
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
