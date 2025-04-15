"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { gsap } from "gsap";

// Premium anime genres with enhanced descriptions
const genreImages = [
  {
    id: 1,
    title: "Shonen",
    image: "/image6.jpg",
    description:
      "Epic battles and heroic journeys that test the limits of courage and friendship.",
  },
  {
    id: 2,
    title: "Isekai",
    image: "/image7.jpg",
    description:
      "Step through portals to fantastical worlds where anything is possible.",
    color: "#ff8fa3",
  },
  {
    id: 3,
    title: "Mecha",
    image: "/image8.jpg",
    description:
      "Command powerful machines in conflicts that determine the fate of civilizations.",
    color: "#6fa3ff",
  },
  {
    id: 4,
    title: "Slice of Life",
    image: "/image9.jpg",
    description:
      "Discover profound meaning in everyday moments and heartfelt connections.",
    color: "#91ff6f",
  },
];

const Content: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement[]>([]);
  const glowRef = useRef<HTMLDivElement>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Mouse-based tilt effect for cards
  const xTilt = useMotionValue(0);
  const yTilt = useMotionValue(0);
  const rotateX = useTransform(yTilt, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(xTilt, [-0.5, 0.5], [-10, 10]);

  // Handle mouse movement for tilt
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, id: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    xTilt.set(x);
    yTilt.set(y);
    setHoveredCard(id);
  };

  // Reset tilt on mouse leave
  const handleMouseLeave = () => {
    xTilt.set(0);
    yTilt.set(0);
    setHoveredCard(null);
  };

  // Follow mouse with glow effect
  useEffect(() => {
    const handleMouseMoveGlow = (e: MouseEvent) => {
      if (glowRef.current) {
        gsap.to(glowRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.8,
          ease: "power1.out",
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMoveGlow);
    return () => {
      window.removeEventListener("mousemove", handleMouseMoveGlow);
    };
  }, []);

  // GSAP Animations
  useEffect(() => {
    // Main Animation Timeline
    const tl = gsap.timeline();

    // Section Fade-In with elegant easing
    tl.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5, ease: "power2.inOut" }
    );

    // New heading animation: Fade-in and scale-up
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1.2, ease: "power2.out", delay: 0.5 }
    );

    // Tagline animation
    gsap.fromTo(
      taglineRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 1.5 }
    );

    // Premium button animation
    gsap.fromTo(
      buttonRef.current,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "elastic.out(1, 0.5)",
        delay: 2,
      }
    );

    // Enhanced sakura petals animation
    particlesRef.current.forEach((particle, index) => {
      // Initial random position
      gsap.set(particle, {
        x: `random(-200, 200)`,
        y: `random(-200, 200)`,
        rotation: `random(-90, 90)`,
        scale: `random(0.6, 1.4)`,
        opacity: 0,
      });

      // Floating animation
      gsap.to(particle, {
        x: `random(-250, 250)`,
        y: `random(-250, 250)`,
        rotation: `random(-180, 180)`,
        scale: `random(0.3, 1.2)`,
        opacity: `random(0.15, 0.65)`,
        duration: `random(8, 20)`,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.2,
      });
    });

    // Create a subtle pulsing effect on the background
    gsap.to(".bg-gradient", {
      opacity: 0.6,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  // Card animation variants with enhanced animations
  const cardVariants = {
    hidden: { opacity: 0, y: 80, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: i * 0.2 + 1,
        ease: "backOut",
      },
    }),
    hover: {
      scale: 1.05,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  // Background shapes animation variants
  const shapeVariants = {
    animate: {
      rotate: 360,
      transition: { duration: 60, repeat: Infinity, ease: "linear" },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Premium Gradient Background */}
      <div className="absolute inset-0 bg-black z-0" />

      {/* Top border as a decorative element */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ff6f91] via-[#ff8fa3] to-[#ff6f91] z-50 shadow-lg shadow-pink-500/30" />

      {/* Animated background patterns with reduced intensity */}
      <div className="absolute inset-0 opacity-20 z-0">
        <motion.div
          className="absolute h-[800px] w-[800px] rounded-full border border-indigo-500/10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          variants={shapeVariants}
          animate="animate"
        />
        <motion.div
          className="absolute h-[600px] w-[600px] rounded-full border border-pink-500/10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          variants={shapeVariants}
          animate="animate"
          style={{ animationDuration: "40s" }}
        />
      </div>

      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[url('/sakura-bg.png')] bg-cover opacity-10 mix-blend-screen z-1" />

      {/* Animated gradient overlay */}
      <div className="bg-gradient absolute inset-0 bg-gradient-to-t from-transparent to-indigo-900/20 opacity-40 z-1" />

      {/* Mouse following glow effect - reduced intensity */}
      <div
        ref={glowRef}
        className="absolute w-[200px] h-[200px] rounded-full bg-pink-500/5 blur-[100px] pointer-events-none z-1"
        style={{ transform: "translate(-50%, -50%)" }}
      />

      {/* Floating Sakura Petals with reduced quantity and opacity */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) particlesRef.current[i] = el;
          }}
          className={`absolute text-${
            i % 3 === 0 ? "3xl" : i % 3 === 1 ? "2xl" : "xl"
          } pointer-events-none z-10`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            color: "#ff8fa3",
            filter: "drop-shadow(0 0 4px rgba(255,111,145,0.2))",
            opacity: 0,
          }}
        >
          🌸
        </div>
      ))}

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-8 py-20 text-center">
        {/* Premium Title with Animated Underline */}
        <div className="mb-16 relative">
          <h2
            ref={headingRef}
            className="text-6xl md:text-7xl font-bold text-white tracking-wide uppercase relative inline-block"
            style={{ fontFamily: "'Mochiy Pop P One', sans-serif" }}
          >
            Explore Anime Worlds Now
          </h2>

          {/* Animated underline */}
          <motion.div
            className="h-0.5 bg-gradient-to-r from-[#ff6f91] via-[#ff8fa3] to-[#ff6f91] mt-4"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            transition={{ delay: 2, duration: 1.5, ease: "easeOut" }}
          />
        </div>

        {/* Tagline with Premium Styling */}
        <motion.div
          ref={taglineRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-16"
        >
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
            Immerse yourself in captivating stories, breathtaking worlds, and
            unforgettable characters.
            <span className="block mt-3 text-[#b0a8d3] font-light">
              Where will your imagination take you today?
            </span>
          </p>
        </motion.div>

        {/* Premium Portal Cards with hover effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {genreImages.map((genre, index) => (
            <motion.div
              key={genre.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              onMouseMove={(e) => handleMouseMove(e, genre.id)}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                perspective: 1500,
                z: hoveredCard === genre.id ? 50 : 0,
              }}
              className="relative rounded-2xl overflow-hidden shadow-lg group"
            >
              {/* Premium card background gradient overlay without blur */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20 z-10" />

              {/* Card image with enhanced effects */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={genre.image}
                  alt={genre.title}
                  width={400}
                  height={600}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />

                {/* Premium overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#000815]/90 via-transparent to-transparent" />

                {/* Glowing border effect on hover */}
                <motion.div
                  className="absolute inset-0 border-2 border-transparent z-20"
                  animate={{
                    borderColor:
                      hoveredCard === genre.id ? genre.color : "transparent",
                    boxShadow:
                      hoveredCard === genre.id
                        ? `0 0 20px ${genre.color}40`
                        : "none",
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Premium Card Content with Better Typography */}
              <div className="relative p-6 z-20">
                <motion.div
                  animate={{
                    y: hoveredCard === genre.id ? -5 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <h3
                    className="text-2xl font-bold text-white mb-2"
                    style={{ fontFamily: "'Mochiy Pop P One', sans-serif" }}
                  >
                    {genre.title}
                  </h3>

                  <div className="h-0.5 w-12 bg-[#ff6f91] mb-3" />

                  <p className="text-[#b0a8d3] text-sm mt-2 leading-relaxed">
                    {genre.description}
                  </p>
                </motion.div>

                {/* Animated premium icon on hover - simplified */}
                <motion.div
                  className="absolute bottom-6 right-6 text-xl opacity-0 transform translate-y-2"
                  animate={{
                    opacity: hoveredCard === genre.id ? 0.7 : 0,
                    translateY: hoveredCard === genre.id ? 0 : 10,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  →
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Removed the CTA Button as requested */}
      </div>
    </section>
  );
};

export default Content;
