import React from "react";
import Layout from "../layout/Layout";
import { motion } from "framer-motion";
import ServiceCard from "../cards/ServiceCard";

const Services = () => {
  const services = [
    {
      id: "petrol",
      title: "B79 Tankstellen Netzwerk",
      description:
        "Unser umfangreiches Netzwerk von Tankstellen in der ganzen Schweiz bietet Qualitätskraftstoffe und erstklassigen Service.",
      icon: "/icons/petrol-icon.svg",
      link: "/services/petrol-powers",
      details: [
        "Premium-Qualitätskraftstoffe für Fahrzeuge",
        "Moderne Selbstbedienungszapfsäulen",
        "Landesweites Tankstellennetz",
        "Wettbewerbsfähige Preise und flexible Zahlungsmöglichkeiten",
      ],
    },
    {
      id: "asset",
      title: "B79 Tankstellenverwaltung",
      description:
        "Professionelle Verwaltungsdienste für Tankstellenbetreiber, um Effizienz und Rentabilität zu maximieren.",
      icon: "/icons/asset-icon.svg",
      link: "/services/asset-management",
      details: [
        "Personalisierte Betriebsstrategien",
        "Bestandsmanagement und Logistik",
        "Regelmäßige Leistungsüberprüfungen",
        "Zugang zu exklusiven Lieferantenverträgen",
      ],
    },
    {
      id: "immobilien",
      title: "B79 Tankstellen-Immobilien",
      description:
        "Erstklassige Standorte für neue Tankstellen mit hohem Verkehrsaufkommen und optimaler Sichtbarkeit.",
      icon: "/icons/real-estate-icon.svg",
      link: "/services/immobilien",
      details: [
        "Tankstellenstandorte an Hauptverkehrsadern",
        "Entwicklungsprojekte in Gebieten mit hoher Nachfrage",
        "Immobilienverwaltungsdienste",
        "Regelmäßiges Einkommen durch Pachteinnahmen",
      ],
    },
    {
      id: "ai",
      title: "B79 Tankstellen-Technologie",
      description:
        "Innovative Technologielösungen für moderne Tankstellen, einschließlich Selbstbedienungssysteme und digitale Zahlungsmethoden.",
      icon: "/icons/ai-icon.svg",
      link: "/services/ai",
      details: [
        "KI-gestützte Bestandsanalyse und Einsichten",
        "Automatisierung von Tankstellenprozessen",
        "Prädiktive Analysen für Geschäftsprognosen",
        "Maßgeschneiderte Technologielösungen für Tankstellen",
      ],
    },
  ];

  return (
    <Layout>
      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative py-24 bg-gray-900">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1605849871494-a46f4234abcb?w=1200&q=80"
              alt="Dienstleistungen"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-70"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Unsere Dienstleistungen
            </motion.h1>
            <motion.p
              className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Umfassende Lösungen, die auf Ihre Tankstellen- und
              Investitionsbedürfnisse zugeschnitten sind
            </motion.p>
          </div>
        </div>

        {/* Services Overview */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2
                className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Was wir anbieten
              </motion.h2>
              <motion.div
                className="w-20 h-1 bg-blue-600 mx-auto my-6"
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              />
              <motion.p
                className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Umfassende Tankstellenlösungen, maßgeschneidert für Schweizer
                Unternehmen und Verbraucher
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service) => (
                <ServiceCard
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  link={service.link}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Detailed Services */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                className={`py-12 ${index !== 0 ? "border-t border-gray-200" : ""}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div
                  className={`lg:grid lg:grid-cols-2 lg:gap-8 items-center ${index % 2 === 1 ? "lg:grid-flow-row-dense" : ""}`}
                >
                  <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                    <h2 className="text-3xl font-extrabold text-gray-900">
                      {service.title}
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 my-6" />
                    <p className="mt-3 text-lg text-gray-600">
                      {service.description}
                    </p>
                    <ul className="mt-6 space-y-4">
                      {service.details.map((detail, i) => (
                        <li key={i} className="flex items-start">
                          <div className="flex-shrink-0">
                            <svg
                              className="h-6 w-6 text-blue-600"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <p className="ml-3 text-base text-gray-600">
                            {detail}
                          </p>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <a
                        href={service.link}
                        className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                      >
                        Mehr über {service.title} erfahren
                      </a>
                    </div>
                  </div>
                  <div
                    className={`mt-10 lg:mt-0 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                  >
                    <img
                      className="mx-auto rounded-lg shadow-lg"
                      src={""}
                      alt={service.title}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-700">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block">Bereit loszulegen?</span>
              <span className="block text-blue-300">
                Kontaktieren Sie uns noch heute für eine Beratung.
              </span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50"
                >
                  Kontaktieren Sie uns
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
