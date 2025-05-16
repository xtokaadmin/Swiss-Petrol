import React from "react";
import Layout from "../../layout/Layout";
import { motion } from "framer-motion";
import pompa3Image from "../../../assets/pompa3.jpeg";

const AI = () => {
  return (
    <Layout>
      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative py-24 bg-gray-900">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80"
              alt="B79 Tankstellen-Technologie"
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
              B79 Tankstellen-Technologie
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
              Innovative KI-gestützte Lösungen für die Tankstellen der Zukunft
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
                  Die Zukunft der Tankstellen ist intelligent
                </h2>
                <div className="w-20 h-1 bg-blue-600 my-6" />
                <p className="mt-4 text-lg text-gray-600">
                  B79 Tankstellen-Technologie revolutioniert die Branche mit
                  fortschrittlichen KI-Lösungen und intelligenten Systemen.
                  Unsere Technologieplattform integriert künstliche Intelligenz,
                  maschinelles Lernen und IoT-Geräte, um Tankstellenbetreibern
                  beispiellose Effizienz und Kundenerlebnisse zu ermöglichen.
                </p>
                <p className="mt-4 text-lg text-gray-600">
                  Von der automatisierten Bestandsverwaltung bis hin zu
                  personalisierten Kundenerlebnissen - unsere
                  Technologielösungen transformieren jede Facette des
                  Tankstellenbetriebs und bereiten Sie auf die Anforderungen der
                  Zukunft vor.
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
                  src="https://images.unsplash.com/photo-1581092335397-9fa341108e1e?w=800&q=80"
                  alt="Tankstellentechnologie"
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Key Features Section */}
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
                Unsere KI-Technologielösungen
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
                Entdecken Sie die Zukunft des Tankstellenbetriebs mit unseren
                innovativen Technologien
              </motion.p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Intelligente Bestandsverwaltung",
                  description:
                    "KI-gestützte Systeme zur Echtzeitüberwachung von Kraftstoffbeständen, automatische Nachbestellungen und Optimierung der Lieferkette.",
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
                  title: "Prädiktive Wartung",
                  description:
                    "Vorhersage von Ausfällen und Wartungsbedarf bei Zapfsäulen und Anlagen, bevor sie auftreten, um Ausfallzeiten zu minimieren und Kosten zu senken.",
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
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Dynamische Preisgestaltung",
                  description:
                    "KI-Algorithmen zur Optimierung der Kraftstoffpreise basierend auf Marktbedingungen, Wettbewerb, Nachfrage und Gewinnmargen in Echtzeit.",
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
                  title: "Personalisierte Kundenerlebnisse",
                  description:
                    "Erkennung von Stammkunden, personalisierte Angebote und maßgeschneiderte Marketingkampagnen basierend auf individuellen Präferenzen und Kaufhistorie.",
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
                  title: "Autonome Zapfsäulen",
                  description:
                    "Selbstbedienungssysteme der nächsten Generation mit Gesichtserkennung, kontaktlosen Zahlungen und automatisierter Fahrzeugerkennung.",
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
                        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Sicherheits- und Überwachungssysteme",
                  description:
                    "KI-gestützte Videoüberwachung zur Erkennung von Diebstahl, Betrug und ungewöhnlichen Aktivitäten mit automatischen Warnmeldungen.",
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
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  ),
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 hover:border-blue-200 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)",
                  }}
                >
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Data Analytics Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  Datengestützte Entscheidungsfindung
                </h2>
                <div className="w-20 h-1 bg-blue-600 my-6" />
                <p className="mt-4 text-lg text-gray-600">
                  Unsere fortschrittliche Datenanalyseplattform sammelt und
                  verarbeitet Informationen aus allen Aspekten Ihres
                  Tankstellenbetriebs, um verwertbare Erkenntnisse zu liefern,
                  die Ihre Geschäftsentscheidungen unterstützen.
                </p>

                <div className="mt-8 space-y-6">
                  {[
                    {
                      title: "Verkaufsanalyse",
                      description:
                        "Detaillierte Aufschlüsselung der Verkaufstrends nach Kraftstofftyp, Tageszeit und Saison.",
                    },
                    {
                      title: "Kundenverhaltensmuster",
                      description:
                        "Einblicke in Kundenpräferenzen, Besuchshäufigkeit und Kaufgewohnheiten.",
                    },
                    {
                      title: "Wettbewerbsanalyse",
                      description:
                        "Überwachung der Wettbewerbspreise und -strategien in Echtzeit.",
                    },
                    {
                      title: "Leistungs-Dashboard",
                      description:
                        "Benutzerfreundliche Visualisierungen aller wichtigen Leistungsindikatoren auf einen Blick.",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    >
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                          <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium text-gray-900">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="mt-10 lg:mt-0"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <img
                  className="rounded-lg shadow-xl"
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                  alt="Datenanalyse-Dashboard"
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Case Study Section */}
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
                  title: "30% Umsatzsteigerung durch KI-Preisoptimierung",
                  description:
                    "Eine Kette von 12 Tankstellen implementierte unsere dynamische Preisgestaltungslösung und erzielte innerhalb von 6 Monaten eine Umsatzsteigerung von 30% bei gleichzeitiger Verbesserung der Kundenzufriedenheit.",
                  image:
                    "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80",
                },
                {
                  title: "50% weniger Ausfallzeiten durch prädiktive Wartung",
                  description:
                    "Ein großer Tankstellenbetreiber reduzierte ungeplante Ausfallzeiten um 50% und Wartungskosten um 35% durch den Einsatz unserer KI-gestützten prädiktiven Wartungslösung.",
                  image:
                    "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
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
                    <div className="mt-4">
                      <a
                        href="/contact"
                        className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
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
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Future Technology Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
              <motion.div
                className="mt-10 lg:mt-0 order-last lg:order-first"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <img
                  className="rounded-lg shadow-lg"
                  src={pompa3Image}
                  alt="Zukunftstechnologie"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  Die Tankstelle der Zukunft
                </h2>
                <div className="w-20 h-1 bg-blue-600 my-6" />
                <p className="mt-4 text-lg text-gray-600">
                  Wir arbeiten kontinuierlich an der Entwicklung neuer
                  Technologien, die die Zukunft des Tankstellenbetriebs
                  gestalten werden. Unsere Forschungs- und Entwicklungsteams
                  konzentrieren sich auf innovative Lösungen, die den sich
                  wandelnden Anforderungen der Branche gerecht werden.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    "Integration mit Elektrofahrzeug-Ladestationen und erneuerbaren Energiequellen",
                    "Blockchain-basierte Transaktionen für erhöhte Sicherheit und Transparenz",
                    "Erweiterte Realität (AR) für Wartungs- und Schulungszwecke",
                    "Vollständig autonome, unbemannte Tankstellenbetriebe",
                    "KI-gestützte Energieeffizienzoptimierung und CO₂-Fußabdruck-Reduzierung",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    >
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
                      <p className="ml-3 text-base text-gray-600">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-700">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block">
                Bereit für die digitale Transformation?
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

export default AI;
