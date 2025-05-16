import React from "react";
import Layout from "../../layout/Layout";
import { motion } from "framer-motion";
import pompa3Image from "../../../assets/pompa3.jpeg";

const PetrolPowers = () => {
  return (
    <Layout>
      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative py-24 bg-gray-900">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={pompa3Image}
              alt="B79 Tankstellen Netzwerk"
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
              B79 Tankstellen Netzwerk
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
              Unser umfangreiches Netzwerk von Tankstellen in der ganzen Schweiz
              bietet Qualitätskraftstoffe und erstklassigen Service
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
                  Qualitätskraftstoffe für die Schweiz
                </h2>
                <div className="w-20 h-1 bg-blue-600 my-6" />
                <p className="mt-4 text-lg text-gray-600">
                  Das B79 Tankstellen Netzwerk ist stolz darauf, ein umfassendes
                  Netzwerk von Tankstellen in der gesamten Schweiz zu betreiben.
                  Unsere strategisch platzierten Standorte bieten bequemen
                  Zugang zu hochwertigen Kraftstoffen und erstklassigem Service
                  für Privat- und Geschäftskunden.
                </p>
                <p className="mt-4 text-lg text-gray-600">
                  Mit modernster Technologie und einem Fokus auf
                  Kundenzufriedenheit bieten wir ein nahtloses Tankerlebnis mit
                  wettbewerbsfähigen Preisen und flexiblen Zahlungsoptionen.
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
                  src="https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&q=80"
                  alt="Tankstelle"
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Features Section */}
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
                Unsere Netzwerkvorteile
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
                  title: "Premium-Qualitätskraftstoffe",
                  description:
                    "Hochwertige Kraftstoffe, die für optimale Motorleistung und Effizienz entwickelt wurden.",
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
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Moderne Selbstbedienungszapfsäulen",
                  description:
                    "Benutzerfreundliche, hochmoderne Zapfsäulen für ein schnelles und effizientes Tankerlebnis.",
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
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Landesweites Tankstellennetz",
                  description:
                    "Strategisch platzierte Standorte in der gesamten Schweiz für maximale Bequemlichkeit.",
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
                        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Wettbewerbsfähige Preise",
                  description:
                    "Faire und transparente Preisgestaltung für alle unsere Kraftstoffprodukte.",
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
                  title: "Flexible Zahlungsmöglichkeiten",
                  description:
                    "Mehrere Zahlungsoptionen, einschließlich Bargeld, Kredit-/Debitkarten und mobile Zahlungen.",
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
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Kundenbindungsprogramm",
                  description:
                    "Verdienen Sie Punkte und Belohnungen mit jedem Besuch an unseren Tankstellen.",
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
                        d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                      />
                    </svg>
                  ),
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
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

        {/* Map Section */}
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
                Unser Tankstellennetz
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
                Finden Sie die nächste B79 Tankstelle in Ihrer Nähe
              </motion.p>
            </div>

            <motion.div
              className="rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2724.698927333143!2d7.4442!3d46.9479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDA1JzUyLjQiTiA3wrAyNicyNy4xIkU!5e0!3m2!1sen!2sch!4v1620000000000!5m2!1sen!2sch"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  title="Tankstellennetz"
                  className="w-full h-96"
                ></iframe>
              </div>
            </motion.div>

            <div className="mt-8 text-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Standorte anfragen
              </a>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
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
                Was unsere Kunden sagen
              </motion.h2>
              <motion.div
                className="w-20 h-1 bg-blue-600 mx-auto my-6"
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              />
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  quote:
                    "Die B79 Tankstellen bieten immer einen ausgezeichneten Service und hochwertige Kraftstoffe. Ich tanke nirgendwo anders.",
                  author: "Michael Brunner",
                  role: "Flottenmanager, Logistik AG",
                  image:
                    "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
                },
                {
                  quote:
                    "Das landesweite Netzwerk ist unglaublich praktisch für mein Unternehmen. Wir können überall in der Schweiz tanken und erhalten konsistente Qualität.",
                  author: "Laura Meier",
                  role: "Geschäftsführerin, Transport GmbH",
                  image:
                    "https://api.dicebear.com/7.x/avataaars/svg?seed=Laura",
                },
                {
                  quote:
                    "Die Kundenkarte und das Bonusprogramm bieten einen echten Mehrwert für unser Unternehmen. Die Einsparungen summieren sich schnell.",
                  author: "Thomas Huber",
                  role: "Finanzleiter, Bau AG",
                  image:
                    "https://api.dicebear.com/7.x/avataaars/svg?seed=Thomas",
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      <img
                        className="h-12 w-12 rounded-full"
                        src={testimonial.image}
                        alt={testimonial.author}
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">
                        {testimonial.author}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.quote}"</p>
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
                Bereit, Teil unseres Netzwerks zu werden?
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

export default PetrolPowers;
