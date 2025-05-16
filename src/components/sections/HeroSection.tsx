import React from "react";
import { motion } from "framer-motion";
import heroBackground from "../../assets/pompa3.jpg";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  videoUrl?: string;
  imageUrl?: string;
}

const HeroSection = ({
  title = "Führend bei Tankstellen in der Schweiz",
  subtitle = "Premium Kraftstoffe und innovative Tankstellendienste für Industrie und Verbraucher",
  videoUrl = "",
  imageUrl = heroBackground,
}: HeroSectionProps) => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-gray-900">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-gray-900">
        {videoUrl ? (
          <video
            className="absolute min-w-full min-h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            poster={imageUrl}
          >
            <source src={videoUrl} type="video/mp4" />
            Ihr Browser unterstützt das Video-Tag nicht.
          </video>
        ) : (
          <img
            src={imageUrl}
            alt="Hero Hintergrund"
            className="absolute min-w-full min-h-full object-cover"
          />
        )}
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {title}
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition duration-300"
            >
              Kontaktieren Sie uns
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10 ml-4 transition duration-300"
            >
              Unsere Dienstleistungen
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
};

export default HeroSection;
