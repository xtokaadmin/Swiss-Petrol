import React from "react";
import Layout from "../../layout/Layout";
import { motion } from "framer-motion";
import pompaImage from "../../../assets/pompa.png";

const Immobilien = () => {
  return (
    <Layout>
      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative py-24 bg-gray-900">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80"
              alt="B79 Tankstellen-Immobilien"
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
              B79 Tankstellen-Immobilien
            </motion.h1>
            <motion.div
              className="w-24 h-1 bg-blue-600 mx-auto my-6"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            <motion.p
              className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Erstklassige Standorte für neue Tankstellen mit hohem
              Verkehrsaufkommen und optimaler Sichtbarkeit
            </motion.p>
          </div>
        </div>

        {/* Overview Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  Strategische Immobilieninvestitionen
                </h2>
                <div className="w-20 h-1 bg-blue-600 my-6" />
                <p className="mt-4 text-lg text-gray-600">
                  B79 Tankstellen-Immobilien bietet erstklassige
                  Immobilieninvestitionen im Tankstellensektor. Wir
                  identifizieren und entwickeln strategisch günstige Standorte
                  mit hohem Verkehrsaufkommen und optimaler Sichtbarkeit, um
                  maximale Renditen zu erzielen.
                </p>
                <p className="mt-4 text-lg text-gray-600">
                  Unser Expertenteam verfügt über umfangreiche Erfahrung in der
                  Identifizierung, Bewertung und Entwicklung von
                  Tankstellenimmobilien in der gesamten Schweiz. Wir bieten
                  sowohl Investitionsmöglichkeiten für bestehende Tankstellen
                  als auch Entwicklungsprojekte für neue Standorte.
                </p>
              </motion.div>
              <motion.div
                className="mt-10 lg:mt-0"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <img
                  className="rounded-lg shadow-lg"
                  src={pompaImage}
                  alt="Tankstellenimmobilien"
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Investment Opportunities Section */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.h2
                className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Investitionsmöglichkeiten
              </motion.h2>
              <motion.div
                className="w-20 h-1 bg-blue-600 mx-auto my-6"
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              />
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Tankstellenstandorte an Hauptverkehrsadern",
                  description:
                    "Strategisch platzierte Standorte an stark befahrenen Straßen und Autobahnen für maximale Sichtbarkeit und Kundenzugang.",
                  icon: (
                    <svg
                      className="h-8 w-8 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Entwicklungsprojekte",
                  description:
                    "Neue Tankstellenprojekte in Gebieten mit hoher Nachfrage und Wachstumspotenzial für langfristige Renditen.",
                  icon: (
                    <svg
                      className="h-8 w-8 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Immobilienverwaltungsdienste",
                  description:
                    "Umfassende Verwaltungsdienste für Tankstellenimmobilien, einschließlich Instandhaltung, Mieterbetreuung und Finanzmanagement.",
                  icon: (
                    <svg
                      className="h-8 w-8 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Pachteinnahmen",
                  description:
                    "Stabile und regelmäßige Einnahmen durch langfristige Pachtverträge mit etablierten Tankstellenbetreibern.",
                  icon: (
                    <svg
                      className="h-8 w-8 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Modernisierungsprojekte",
                  description:
                    "Investitionen in die Modernisierung bestehender Tankstellen zur Wertsteigerung und Attraktivitätssteigerung.",
                  icon: (
                    <svg
                      className="h-8 w-8 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Portfolio-Diversifizierung",
                  description:
                    "Möglichkeiten zur Diversifizierung Ihres Investitionsportfolios durch Tankstellenimmobilien mit stabilen Renditen.",
                  icon: (
                    <svg
                      className="h-8 w-8 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                      />
                    </svg>
                  ),
                },
              ].map((opportunity, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    {opportunity.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {opportunity.title}
                  </h3>
                  <p className="text-gray-600">{opportunity.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Properties Section */}
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
                Ausgewählte Immobilien
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
                Entdecken Sie unsere aktuellen Investitionsmöglichkeiten
              </motion.p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Autobahn A1 Standort",
                  location: "Nähe Zürich",
                  price: "CHF 2.5 Mio.",
                  features: [
                    "Hochfrequentierte Lage",
                    "10.000 m² Grundstück",
                    "Bestehende Tankstelle mit Shop",
                    "Langfristiger Pachtvertrag",
                  ],
                  image:
                    "https://images.unsplash.com/photo-1605849871494-a46f4234abcb?w=800&q=80",
                },
                {
                  title: "Stadtrandlage",
                  location: "Basel",
                  price: "CHF 1.8 Mio.",
                  features: [
                    "Entwicklungsprojekt",
                    "5.000 m² Grundstück",
                    "Genehmigungen vorhanden",
                    "Hohe Verkehrsdichte",
                  ],
                  image:
                    "https://images.unsplash.com/photo-1527018601619-a508a2be00cd?w=800&q=80",
                },
                {
                  title: "Hauptstraßenlage",
                  location: "Bern",
                  price: "CHF 3.2 Mio.",
                  features: [
                    "Premium-Standort",
                    "15.000 m² Grundstück",
                    "Moderne Tankstelle mit Waschanlage",
                    "Zusätzliche Einzelhandelsflächen",
                  ],
                  image:
                    "https://images.unsplash.com/photo-1622633721958-78d7c682c3f9?w=800&q=80",
                },
              ].map((property, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <img
                    className="w-full h-48 object-cover"
                    src={property.image}
                    alt={property.title}
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-gray-900">
                        {property.title}
                      </h3>
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                        {property.price}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{property.location}</p>
                    <ul className="space-y-2">
                      {property.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <svg
                            className="h-4 w-4 text-blue-600 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-gray-600 text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <a
                        href="/contact"
                        className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                      >
                        Weitere Informationen
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
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Alle Immobilien anzeigen
              </a>
            </div>
          </div>
        </div>

        {/* Investment Benefits Section */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  Vorteile von Tankstellenimmobilien
                </h2>
                <div className="w-20 h-1 bg-blue-600 my-6" />
                <p className="mt-4 text-lg text-gray-600">
                  Tankstellenimmobilien bieten einzigartige Vorteile als
                  Investitionsmöglichkeit. Sie kombinieren stabile, langfristige
                  Renditen mit dem Potenzial für Wertsteigerung und
                  diversifizieren Ihr Anlageportfolio.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    "Stabile Cashflows durch langfristige Pachtverträge",
                    "Strategische Standorte mit hohem Verkehrsaufkommen",
                    "Wertsteigerungspotenzial durch Modernisierung und Erweiterung",
                    "Diversifizierung Ihres Investitionsportfolios",
                    "Inflationsschutz durch indexierte Pachtverträge",
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start">
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
                      <p className="ml-3 text-base text-gray-600">{benefit}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                className="mt-10 lg:mt-0"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <img
                  className="rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
                  alt="Immobilieninvestition"
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-700">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block">Interessiert an einer Investition?</span>
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

export default Immobilien;
