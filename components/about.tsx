import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="bg-swm-cornflower font-[Poppins] flex py-5 px-5 ">
      <div className="lg:w-full md:container md:mx-auto bg-white p-5 rounded-sm">
        <h1 className="text-3xl text-swm-oxford">
          The Strong Wealth Management Approach
        </h1>
        <span className="float-left box-border h-64 w-42 p-4 m-4 border-4">
          <Image
            src="/OurApproach.png"
            alt="Our Approach"
            width={300}
            height={200}
          />
        </span>

        <p>
          Strong Wealth Management is a locally-owned advisory service offered
          through Trutoro – Member SIPC/FINRA. My firm specializes in investment
          advice for private individuals and health care workers in both English
          and Spanish.
        </p>
        <p>
          I am currently registered in Arkansas and with the SEC and am partnered
          with Trutoro, a regulatory agency from Conway, AR. TD Ameritrade is the
          firm’s custodian.
        </p>
        <p>
          My mission is to help others on their wealth journey, using fee-only
          planning. I help clients clarify their goals, develop a plan of attack,
          manage obstacles, and mitigate risk- exposure on the way to reaching
          their financial goals.
        </p>
      </div>
      <div className="md:container md:mx-auto bg-white p-5 rounded-sm">
        <h1 className="text-3xl text-swm-oxford"> About Me</h1>
        <span className="float-right box-border h-64 w-42 p-4 m-4 border-4">
          <Image
            src="/pexels-andrea-piacquadio-3777570.jpg"
            alt="Victor Armstrong"
            width={300}
            height={200}
          />
        </span>
        <p>
          I am currently the only Financial Advisor Representative at Strong
          Wealth Management.

        </p>
        <p>
          Prior to establishing SWM (as a sole proprietorship in November 2021), I
          was a Family Practice Physician for eighteen years.
        </p>
        <p>
          I enjoyed treating patients and co-workers, but gradually I became
          captivated by investing and finance. In 2021 I decided to pursue
          investment advising as a full-time career.
        </p>
        <p>
          I have lived in Harrison, Arkansas with my wife (also a Family Practice
          physician) and two children since 2005 and have enjoyed getting to
          explore the Natural State. We both love to hike and cycle and spend a
          lot of time outdoors.
        </p>
      </div>
    </section>
  );
};

export default About;
