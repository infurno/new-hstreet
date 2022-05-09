import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" bg-swm-oxford text-white">
      <div className="text-left columns-2 gap-8 py-7">
        <ul className="px-10">
          <li>Victor Armstrong D.O.</li>
          <li>Investment Advisor Representative</li>
          <li className="text-white underline hover:decoration-red-600  ">
            <a href="mailto://victor.armstrong@trutoro.com">
              victor.armstrong@trutoro.com
            </a>
          </li>
          <li className="text-white underline hover:decoration-red-600 ">
            <a href="tel:870-204-5170">870-204-5170</a> Phone/Fax
          </li>
        </ul>
        <ul className="px-10 text-right">
          <li>Advisory Services</li>
          <li>Offered through Trutoro</li>
          <li>Member SIPC/FINRA</li>
        </ul>
      </div>

      <div className="text-center p-4 bg-swm-oxford">
        © 2022 :
        <Link href="/">
          <a className="text-white underline hover:decoration-red-600 ">
            {" "}
            Strong Wealth Management
          </a>
        </Link>
        <p className="py-4">
          Made by&nbsp;
          <Link href="https://hstreet.co/">
            <a className="text-white hover:decoration-red-600 underline">
              H-Street Media
            </a>
          </Link>
          &nbsp;in the ❤️ of the Ozark Mountains.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
