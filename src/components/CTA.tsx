"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

// Unsplash-inspired placeholders for assets (same style as Hero)
const inkSplatter3 = "/image5.jpg"; // New ink splatter for CTA
const backgroundTexture = "/image4.jpg"; // Reused subtle paper texture

const CTA: React.FC = () => {
  const ctaRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const splatterRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  // GSAP Animations (aligned with Hero's animation style)
  useEffect(() => {
    // CTA Section Fade-In
    gsap.fromTo(
      ctaRef.current,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 1.5, ease: "power3.out" }
    );

    // Text Slide-Up
    gsap.fromTo(
      textRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: "power3.out" }
    );

    // Button Elastic Pop-In
    gsap.fromTo(
      buttonRef.current,
      { scale: 0 },
      { scale: 1, duration: 0.8, delay: 1, ease: "elastic.out(1, 0.5)" }
    );

    // Ink Splatter Animation
    gsap.fromTo(
      splatterRef.current,
      { scale: 0, rotate: 30 },
      { scale: 1, rotate: 0, duration: 1.2, delay: 0.8, ease: "power3.out" }
    );

    // Footer Fade-In
    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, delay: 1.5, ease: "power3.out" }
    );
  }, []);

  // Framer Motion Variants for Text Animation
  const textVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, delay: 0.7, ease: "easeOut" },
    },
  };

  return (
    <div className="relative h-screen flex flex-col">
      {/* Main CTA Section */}
      <section
        ref={ctaRef}
        className="relative py-16 md:py-20 flex flex-col items-center bg-white overflow-hidden flex-grow"
      >
        {/* Background Texture (consistent with Hero) */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${backgroundTexture})` }}
        ></div>

        {/* Ink Splatter (aligned with Hero's aesthetic) */}
        <motion.div
          ref={splatterRef}
          style={{
            backgroundImage: `url(${inkSplatter3})`,
          }}
          className="absolute top-5 right-5 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-cover opacity-60"
        ></motion.div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center space-y-6 md:space-y-8 max-w-4xl mx-auto px-4 md:px-8 text-center">
          {/* Text Content */}
          <motion.div
            ref={textRef}
            className="space-y-3 md:space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-black tracking-tighter uppercase leading-none drop-shadow-[3px_3px_0_rgba(255,0,0,0.7)]">
              Join the Anime Revolution!
            </h2>
            <motion.h3
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-red-600 tracking-wide"
            >
              仲間になれ！
            </motion.h3>
            <p className="text-base sm:text-lg md:text-lg text-gray-600 max-w-md md:max-w-xl mx-auto">
              Unleash your creativity and become part of the ultimate anime
              community. Start designing, sharing, and exploring today!
            </p>
          </motion.div>

          {/* Buttons (styled like Hero) */}
          <div
            ref={buttonRef}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-6"
          >
            <motion.button
              whileHover={{
                backgroundColor: "rgba(255,0,0,0.7)",
                color: "#FFFFFF",
              }}
              whileTap={{ scale: 0.9 }}
              className="px-6 py-3 md:px-8 md:py-4 bg-black text-white font-bold text-base md:text-lg rounded-full uppercase tracking-wider shadow-[3px_3px_0_rgba(255,0,0,0.7)] cursor-pointer"
            >
              Join Now
            </motion.button>
            <motion.button
              whileHover={{
                backgroundColor: "#000000",
                color: "#FFFFFF",
              }}
              whileTap={{ scale: 0.9 }}
              className="px-6 py-3 md:px-8 md:py-4 bg-[#D2D2D2] text-black font-bold text-base md:text-lg rounded-full uppercase tracking-wider shadow-[3px_3px_0_rgba(0,0,0,0.7)] cursor-pointer"
            >
              Explore More
            </motion.button>
          </div>
        </div>

        {/* Animated Japanese Text Overlay (consistent with Hero) */}
        <motion.div
          className="absolute bottom-8 left-4 md:bottom-10 md:left-10 text-3xl md:text-5xl font-bold text-black opacity-20"
          initial={{ opacity: 0, rotate: 10 }}
          animate={{
            opacity: 0.2,
            rotate: 0,
            transition: { duration: 1.5, delay: 1.2 },
          }}
        >
          創造魂
        </motion.div>

        {/* Checkered Pattern Accent (bottom-right for variation) */}
        <div className="absolute bottom-0 right-0 w-24 h-8 md:w-32 md:h-10 bg-[linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000),linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000)] bg-[length:20px_20px] bg-[position:0_0,10px_10px]"></div>
      </section>

      {/* Footer */}
      <footer
        ref={footerRef}
        className="w-full py-6 md:py-8 bg-black bg-opacity-90 text-white"
      >
        <div className="max-w-4xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright and Branding */}
          <div className="text-center md:text-left">
            <p className="text-base md:text-lg font-bold uppercase tracking-wider">
              Anime Odyssey Hub
            </p>
            <p className="text-xs md:text-sm opacity-70">
              © {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4 md:space-x-6">
            <motion.a
              href="#"
              whileHover={{ scale: 1.2, color: "#FF0000" }}
              className="text-sm md:text-lg font-bold"
            >
              Twitter
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2, color: "#FF0000" }}
              className="text-sm md:text-lg font-bold"
            >
              Discord
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2, color: "#FF0000" }}
              className="text-sm md:text-lg font-bold"
            >
              Instagram
            </motion.a>
          </div>
        </div>

        {/* Footer Ink Splatter Accent */}
        <motion.div
          className="absolute top-0 left-0 w-24 h-24 md:w-32 md:h-32 bg-cover opacity-50"
          style={{ backgroundImage: `url(${inkSplatter3})` }}
          initial={{ scale: 0, rotate: 45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
        ></motion.div>
      </footer>
    </div>
  );
};

export default CTA;
