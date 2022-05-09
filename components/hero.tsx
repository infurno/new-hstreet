import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex items-center justify-center h-screen m-auto mb-12 bg-fixed bg-center bg-cover custom-img">
      <Link href="#contact" passHref>
        <div className="p-5 text-2xl text-swm-oxford bg-swm-baby-blue-eyes  rounded-xl">
          <a>Connect With Us</a>
        </div>
      </Link>
    </section>
  );
};

export default Hero;
