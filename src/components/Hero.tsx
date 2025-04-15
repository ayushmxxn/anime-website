"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";

// Unsplash images for anime-inspired assets
const animeCharacter = "/image1.jpg"; // Anime-style character
const inkSplatter1 = "/image2.jpg"; // Ink splatter
const inkSplatter2 = "/image3.jpg"; // Another ink splatter
const backgroundTexture = "/image4.jpg"; // Subtle paper texture

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const splatterRef1 = useRef<HTMLDivElement>(null);
  const splatterRef2 = useRef<HTMLDivElement>(null);

  // Parallax effect using Framer Motion
  const { scrollY } = useScroll();
  const yCharacter = useTransform(scrollY, [0, 300], [0, -50]);
  const ySplatter1 = useTransform(scrollY, [0, 300], [0, 30]);
  const ySplatter2 = useTransform(scrollY, [0, 300], [0, -20]);

  // GSAP Animations (original)
  useEffect(() => {
    // Hero Section Fade-In
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 1.5, ease: "power3.out" }
    );

    // Text Slide-Up
    gsap.fromTo(
      textRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: "power3.out" }
    );

    // Buttons Elastic Pop-In
    gsap.fromTo(
      buttonRef.current,
      { scale: 0 },
      { scale: 1, duration: 0.8, delay: 1, ease: "elastic.out(1, 0.5)" }
    );

    // Ink Splatters Animation
    gsap.fromTo(
      splatterRef1.current,
      { scale: 0, rotate: -45 },
      { scale: 1, rotate: 0, duration: 1.2, delay: 0.8, ease: "power3.out" }
    );
    gsap.fromTo(
      splatterRef2.current,
      { scale: 0, rotate: 45 },
      { scale: 1, rotate: 0, duration: 1.2, delay: 1, ease: "power3.out" }
    );
  }, []);

  // Framer Motion Variants for Character Animation (original)
  const characterVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  // Japanese text animation (original)
  const textVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, delay: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={heroRef}
      className="relative h-screen flex flex-col bg-white overflow-hidden"
    >
      {/* Navbar */}
      <nav className="relative z-20 flex items-center justify-end w-full px-8 py-4">
        {/* Navigation Links and Buttons */}
        <div className="flex items-center space-x-8">
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {["EVENT", "PROMO", "ABOUT US", "DESIGN"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm font-medium text-black uppercase tracking-wider hover:text-red-600 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Sign In and Sign Up Buttons */}
          <div className="flex space-x-4">
            <button className="px-4 py-2 text-sm font-medium text-black uppercase border border-black rounded-full hover:bg-black hover:text-white transition-all cursor-pointer">
              Sign In
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white uppercase bg-black rounded-full hover:bg-red-600 transition-all cursor-pointer">
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* Background Texture (original) */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${backgroundTexture})` }}
      ></div>

      {/* Ink Splatters with Parallax (original) */}
      <motion.div
        ref={splatterRef1}
        style={{
          y: ySplatter1,
          backgroundImage: `url(${inkSplatter1})`,
        }}
        className="absolute top-10 left-10 w-48 h-48 md:w-64 md:h-64 bg-cover opacity-60"
      ></motion.div>
      <motion.div
        ref={splatterRef2}
        style={{
          y: ySplatter2,
          backgroundImage: `url(${inkSplatter2})`,
        }}
        className="absolute bottom-20 right-20 w-56 h-56 md:w-72 md:h-72 bg-cover opacity-60"
      ></motion.div>

      {/* Diagonal Red Accent Line (bottom-right only) */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1 bg-red-600 transform -rotate-45 origin-bottom-right"></div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-between w-full max-w-7xl mx-auto px-8 flex-1">
        {/* Left Side - Text and CTA */}
        <div className="flex flex-col space-y-6">
          <motion.div
            ref={textRef}
            className="space-y-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Enhanced Heading (from revised version) */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-black tracking-tighter uppercase leading-none drop-shadow-[4px_4px_0_rgba(255,0,0,0.7)]">
              Anime Odyssey Hub
            </h1>
            <motion.h2
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-3xl md:text-5xl font-bold text-red-600 tracking-wide"
            >
              冒険が始まる！
            </motion.h2>
            <p className="text-lg text-gray-600 max-w-md">
              Dive into the ultimate anime design experience—create, explore,
              and unleash your inner otaku.
            </p>
          </motion.div>

          {/* Enhanced Buttons (from revised version) */}
          <div ref={buttonRef} className="flex space-x-6">
            <motion.button
              whileHover={{
                backgroundColor: "rgba(255,0,0,0.7)",
                color: "#FFFFFF",
              }}
              whileTap={{ scale: 0.9 }}
              className="px-8 py-4 bg-black text-white font-bold text-lg rounded-full uppercase tracking-wider shadow-[3px_3px_0_rgba(255,0,0,0.7)] cursor-pointer"
            >
              Start Journey
            </motion.button>
            <motion.button
              whileHover={{
                backgroundColor: "#000000",
                color: "#FFFFFF",
              }}
              whileTap={{ scale: 0.9 }}
              className="px-8 py-4 bg-[#D2D2D2] text-black font-bold text-lg rounded-full uppercase tracking-wider shadow-[3px_3px_0_rgba(0,0,0,0.7)] cursor-pointer"
            >
              Learn More
            </motion.button>
          </div>
        </div>

        {/* Right Side - Anime Character with Parallax (original) */}
        <motion.div
          style={{ y: yCharacter }}
          initial="hidden"
          animate="visible"
          variants={characterVariants}
          className="hidden md:block relative"
        >
          <Image
            src={animeCharacter}
            alt="Anime Character"
            width={450}
            height={650}
            className="object-contain drop-shadow-2xl"
          />
          {/* Glowing Red Accent Behind Character (original) */}
          <div className="absolute -top-5 -right-5 w-32 h-32 bg-red-600 rounded-full opacity-30 blur-3xl"></div>
        </motion.div>
      </div>

      {/* Animated Japanese Text Overlay (original) */}
      <motion.div
        className="absolute bottom-20 left-20 text-6xl font-bold text-black opacity-20"
        initial={{ opacity: 0, rotate: -10 }}
        animate={{
          opacity: 0.2,
          rotate: 0,
          transition: { duration: 1.5, delay: 1.2 },
        }}
      >
        オタク魂
      </motion.div>

      {/* Checkered Pattern Accent (original) */}
      <div className="absolute bottom-0 left-0 w-32 h-10 bg-[linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000),linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000)] bg-[length:20px_20px] bg-[position:0_0,10px_10px]"></div>
    </section>
  );
};

export default Hero;
