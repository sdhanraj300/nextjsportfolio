import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import AnimatedText from "@/components/AnimatedText";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
export default function Home() {
  return (
    <>
      <main
        className="flex items-center
        text-dark w-full min-h-screen
        dark:text-light
        "
      >
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <Image
                src={profilePic}
                alt="dhanraj"
                className="w-full h-auto"
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw,33vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText
                className="!text-6xl !text-left"
                text="Turning Vision Into Reality With Code And Design."
              />

              <p className="my-4 text-base font-medium">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
              <div className="flex items-center self-start mt-2">
                <Link
                  href="/dummy.pdf"
                  target={"_blank"}
                  className="bg-dark flex items-center text-light p-2.5 px-6
                rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                border-2 border-solid border-transparent transition duration-300 ease-in-out
                hover:border-dark hover:shadow-lg
                dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light
                hover:dark:border-light dark:hover:border-dark
                "
                  download={true}
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  className="ml-4 text-lg font-medium capitalize text-dark transition duration-300 ease-in-out
                  underline dark:text-light hover:text-dark hover:underline
                  "
                  href="mailto:dhanraj02025@gmail.com"
                  target={"_blank"}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-24">
          <Image src={lightBulb} alt={"dhanraj"} className="w-full h-auto" />
        </div>
      </main>
    </>
  );
}
