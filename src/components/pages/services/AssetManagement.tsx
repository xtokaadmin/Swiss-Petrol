import React from "react";
import Layout from "../../layout/Layout";
import { motion } from "framer-motion";
import pompa2Image from "../../../assets/pompa2.jpg";

const AssetManagement = () => {
  return (
    <Layout>
      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative py-24 bg-gray-900">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={pompa2Image}
              alt="B79 Tankstellenverwaltung"
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
              B79 Tankstellenverwaltung
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
              Professionelle Verwaltungsdienste für Tankstellenbetreiber, um
              Effizienz und Rentabilität zu maximieren
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
                  Optimieren Sie Ihren Tankstellenbetrieb
                </h2>
                <div className="w-20 h-1 bg-blue-600 my-6" />
                <p className="mt-4 text-lg text-gray-600">
                  B79 Tankstellenverwaltung bietet umfassende
                  Verwaltungsdienste, die speziell auf die Bedürfnisse von
                  Tankstellenbetreibern zugeschnitten sind. Unser erfahrenes
                  Team unterstützt Sie bei der Optimierung Ihrer Abläufe, der
                  Maximierung Ihrer Rentabilität und der Gewährleistung eines
                  reibungslosen Betriebs.
                </p>
                <p className="mt-4 text-lg text-gray-600">
                  Von der täglichen Betriebsführung bis hin zur strategischen
                  Planung bieten wir maßgeschneiderte Lösungen, die auf die
                  spezifischen Anforderungen Ihrer Tankstelle abgestimmt sind.
                  Unser Ziel ist es, Ihnen zu helfen, Ihre Geschäftsziele zu
                  erreichen und gleichzeitig einen erstklassigen Service für
                  Ihre Kunden zu gewährleisten.
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
                  src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&q=80"
                  alt="Tankstellenverwaltung"
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Services Section */}
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
                Unsere Verwaltungsdienste
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
                  title: "Personalisierte Betriebsstrategien",
                  description:
                    "Maßgeschneiderte Strategien zur Optimierung des Betriebs und zur Steigerung der Rentabilität Ihrer Tankstelle.",
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
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Bestandsmanagement und Logistik",
                  description:
                    "Effiziente Verwaltung von Kraftstoffbeständen und Optimierung der Lieferkette für maximale Effizienz.",
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
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Regelmäßige Leistungsüberprüfungen",
                  description:
                    "Detaillierte Analysen und Berichte zur Überwachung der Leistung und Identifizierung von Verbesserungsmöglichkeiten.",
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
                        d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Personalmanagement",
                  description:
                    "Umfassende Personalverwaltungsdienste, einschließlich Schulung, Planung und Leistungsüberwachung.",
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
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Lieferantenverträge",
                  description:
                    "Zugang zu exklusiven Lieferantenverträgen und Verhandlung günstiger Konditionen für Ihre Tankstelle.",
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
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Finanzmanagement",
                  description:
                    "Umfassende Finanzdienstleistungen, einschließlich Buchhaltung, Budgetierung und Finanzplanung.",
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
              ].map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Section */}
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
                Unser Verwaltungsprozess
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
                Ein strukturierter Ansatz für eine effiziente
                Tankstellenverwaltung
              </motion.p>
            </div>

            <div className="mt-12">
              {[
                {
                  step: "1",
                  title: "Erste Bewertung",
                  description:
                    "Wir führen eine gründliche Bewertung Ihrer aktuellen Betriebsabläufe durch, um Stärken und Verbesserungspotenziale zu identifizieren.",
                },
                {
                  step: "2",
                  title: "Strategieentwicklung",
                  description:
                    "Basierend auf der Bewertung entwickeln wir eine maßgeschneiderte Verwaltungsstrategie, die auf Ihre spezifischen Bedürfnisse und Ziele zugeschnitten ist.",
                },
                {
                  step: "3",
                  title: "Implementierung",
                  description:
                    "Wir setzen die vereinbarte Strategie um und implementieren effiziente Prozesse und Systeme für einen optimierten Betrieb.",
                },
                {
                  step: "4",
                  title: "Kontinuierliche Überwachung",
                  description:
                    "Unser Team überwacht kontinuierlich die Leistung und passt Strategien nach Bedarf an, um optimale Ergebnisse zu gewährleisten.",
                },
                {
                  step: "5",
                  title: "Regelmäßige Berichte",
                  description:
                    "Sie erhalten detaillierte Berichte über die Leistung Ihrer Tankstelle, einschließlich Finanzkennzahlen, Bestandsanalysen und Kundenrückmeldungen.",
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className={`flex items-start mb-12 ${index % 2 === 1 ? "flex-row-reverse" : ""}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div
                    className={`flex-shrink-0 w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold ${index % 2 === 1 ? "ml-8" : "mr-8"}`}
                  >
                    {step.step}
                  </div>
                  <div
                    className={`flex-grow ${index % 2 === 1 ? "text-right" : ""}`}
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Case Studies Section */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2
                className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Erfolgsgeschichten
              </motion.h2>
              <motion.div
                className="w-20 h-1 bg-blue-600 mx-auto my-6"
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              />
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {[
                {
                  title: "Effizienzsteigerung um 30%",
                  description:
                    "Eine Tankstellenkette mit 15 Standorten konnte durch unsere Verwaltungsdienste ihre betriebliche Effizienz um 30% steigern und gleichzeitig die Kundenzufriedenheit verbessern.",
                  image:
                    "https://images.unsplash.com/photo-1527018601619-a508a2be00cd?w=800&q=80",
                },
                {
                  title: "Umsatzsteigerung um 25%",
                  description:
                    "Eine unabhängige Tankstelle konnte durch unsere maßgeschneiderten Strategien und optimierten Betriebsabläufe ihren Umsatz innerhalb eines Jahres um 25% steigern.",
                  image:
                    "https://images.unsplash.com/photo-1622633721958-78d7c682c3f9?w=800&q=80",
                },
              ].map((caseStudy, index) => (
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
                    src={caseStudy.image}
                    alt={caseStudy.title}
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {caseStudy.title}
                    </h3>
                    <p className="text-gray-600">{caseStudy.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-700">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block">
                Bereit, Ihre Tankstelle zu optimieren?
              </span>
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

export default AssetManagement;
