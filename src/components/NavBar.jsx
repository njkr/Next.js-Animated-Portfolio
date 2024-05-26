"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { motion } from "framer-motion";

let links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

let socialIcons = [
  "behance.png",
  "facebook.png",
  "instagram.png",
  "linkedin.png",
  "twitter.png",
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottonViants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="h-full items-center flex justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-black text-xl">
      <div className=" hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <NavLink link={link} key={link.url} />
        ))}
      </div>

      {/* LOGO  */}
      <div className="md:hidden lg:flex  xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className=" text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1"> Jenkins</span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
            Raj
          </span>
        </Link>
      </div>
      {/* social icons */}
      <div className="hidden md:flex gap-4  w-1/3">
        {socialIcons.map((name) => (
          <Link href="/" key={name}>
            <Image src={`/socialIcons/${name}`} alt="" width={24} height={24} />
          </Link>
        ))}
      </div>
      {/* menu  */}
      <div className="md:hidden">
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative "
          onClick={toggleOpen}
        >
          {/* menu Button  */}
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottonViants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {/* menu list  */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 z-40 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl"
          >
            {links.map((link) => (
              <motion.div
                variants={listItemVariants}
                initial="closed"
                animate="opened"
                key={link.url}
              >
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
