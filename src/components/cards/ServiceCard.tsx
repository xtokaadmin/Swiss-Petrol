import React from "react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title = "Dienstleistungstitel",
  description = "Dienstleistungsbeschreibung. Dies ist ein Platzhalter für die tatsächliche Dienstleistungsbeschreibung.",
  icon = "https://api.dicebear.com/7.x/avataaars/svg?seed=service",
  link = "/services",
}) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg p-6 flex flex-col h-full"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-4">
        <img src={icon} alt={title} className="w-16 h-16" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      <a
        href={link}
        className="text-blue-600 font-medium flex items-center hover:text-blue-800 transition-colors"
      >
        Mehr erfahren
        <svg
          className="w-4 h-4 ml-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </a>
    </motion.div>
  );
};

export default ServiceCard;
