import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Logo from "./logo";

const Navbar = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "#about" },
    { name: "CONTACT", link: "#contact" },
  ];
  return (
    <nav className="shadow-2xl w-full fixed top-0 left-0 right-0 z-50">
      <div className="md:flex items-center justify-between bg-swm-oxford py-4 font-[Poppins]">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-white pl-10">
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
        </div>
        <div className="font-bold text-2xl text-white">
          <ul className="md:flex md:items-center">
            {Links.map((link) => (
              <li
                key={link.name}
                className="md:ml-8 text-xl pr-6 hover:decoration-indigo-600 hover:underline "
              >
                <a
                  href={link.link}
                  className="text-white hover:decoration-swm-persian duration-500"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
