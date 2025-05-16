import React from "react";
import { motion } from "framer-motion";

// Define the props for the ServiceCard component since we're not importing it
interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  link: string;
}

// Create a local ServiceCard component
const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  link,
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

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  link: string;
}

interface ServicesSectionProps {
  services?: Service[];
}

const ServicesSection = ({
  services = [
    {
      id: "petrol",
      title: "B79 Tankstellen Netzwerk",
      description:
        "Unser umfangreiches Netzwerk von Tankstellen in der ganzen Schweiz bietet Qualitätskraftstoffe und erstklassigen Service.",
      icon: "/icons/petrol-icon.svg",
      link: "/services/petrol",
    },
    {
      id: "asset",
      title: "B79 Tankstellenverwaltung",
      description:
        "Professionelle Verwaltungsdienste für Tankstellenbetreiber, um Effizienz und Rentabilität zu maximieren.",
      icon: "/icons/asset-icon.svg",
      link: "/services/asset-management",
    },
    {
      id: "immobilien",
      title: "B79 Tankstellen-Immobilien",
      description:
        "Erstklassige Standorte für neue Tankstellen mit hohem Verkehrsaufkommen und optimaler Sichtbarkeit.",
      icon: "/icons/real-estate-icon.svg",
      link: "/services/immobilien",
    },
    {
      id: "ai",
      title: "B79 Tankstellen-Technologie",
      description:
        "Innovative Technologielösungen für moderne Tankstellen, einschließlich Selbstbedienungssysteme und digitale Zahlungsmethoden.",
      icon: "/icons/ai-icon.svg",
      link: "/services/ai",
    },
  ],
}: ServicesSectionProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Unsere Dienstleistungen
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-blue-600 mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          />
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Swiss Tankstelle bietet ein umfassendes Angebot an Kraftstoffen und
            spezialisierten Dienstleistungen für Schweizer Unternehmen und
            Privatpersonen.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              link={service.link}
            />
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            href="/services"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-300"
          >
            Alle Dienstleistungen anzeigen
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
