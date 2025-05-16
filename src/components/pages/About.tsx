import React from "react";
import Layout from "../layout/Layout";
import { motion } from "framer-motion";
import pompaImage from "../../assets/pompa.png";
import pompa2Image from "../../assets/pompa2.jpg";
import pompa3Image from "../../assets/pompa3.jpeg";

const About = () => {
  return (
    <Layout>
      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative py-24 bg-gray-900">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1621905251189-08b45249ff78?w=1200&q=80"
              alt="Über Uns"
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
              Über Swiss Tankstelle
            </motion.h1>
            <motion.p
              className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Führend bei nachhaltigen Tankstellenlösungen und strategischen
              Investitionen
            </motion.p>
          </div>
        </div>

        {/* Company Overview */}
        <div className="py-16 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
              <div>
                <motion.h2
                  className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  Unser Unternehmen
                </motion.h2>
                <motion.div
                  className="w-20 h-1 bg-blue-600 my-6"
                  initial={{ width: 0 }}
                  whileInView={{ width: 80 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                />
                <motion.p
                  className="mt-4 text-lg text-gray-600"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Swiss Tankstelle ist ein führendes Unternehmen im Bereich
                  Tankstellen in der Schweiz, das sich der Bereitstellung
                  hochwertiger Kraftstoffe und innovativer Tankstellendienste
                  widmet. Mit einem starken Engagement für Nachhaltigkeit und
                  Exzellenz haben wir uns als vertrauenswürdiger Partner im
                  Tankstellensektor etabliert.
                </motion.p>
                <motion.p
                  className="mt-4 text-lg text-gray-600"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Unser vielfältiges Portfolio umfasst Tankstellenbetrieb,
                  Tankstellenverwaltung, Immobilieninvestitionen für Tankstellen
                  und modernste Technologielösungen für Tankstellen, die es uns
                  ermöglichen, die sich entwickelnden Bedürfnisse unserer Kunden
                  zu erfüllen und zu einer nachhaltigen Zukunft beizutragen.
                </motion.p>
              </div>
              <motion.div
                className="mt-10 lg:mt-0"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <img
                  className="rounded-lg shadow-lg"
                  src={pompaImage}
                  alt="Swiss Tankstelle Hauptsitz"
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
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
                Unsere Mission & Vision
              </motion.h2>
              <motion.div
                className="w-20 h-1 bg-blue-600 mx-auto my-6"
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              />
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              <motion.div
                className="bg-white rounded-lg shadow-lg p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Unsere Mission
                </h3>
                <p className="text-gray-600">
                  Außergewöhnliche Tankstellenlösungen zu liefern, die den
                  Fortschritt vorantreiben und gleichzeitig Nachhaltigkeit,
                  Innovation und Kundenzufriedenheit priorisieren. Wir sind
                  verantwortungsvollen Geschäftspraktiken verpflichtet, die
                  unseren Kunden, Gemeinden und der Umwelt zugutekommen.
                </p>
              </motion.div>

              <motion.div
                className="bg-white rounded-lg shadow-lg p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Unsere Vision
                </h3>
                <p className="text-gray-600">
                  Der führende Anbieter von integrierten Tankstellen- und
                  Investitionslösungen in der Schweiz zu sein, anerkannt für
                  unser Engagement für Exzellenz, Innovation und Nachhaltigkeit.
                  Wir streben eine Zukunft an, in der saubere Energie und
                  strategische Investitionen wirtschaftliches Wachstum und
                  Umweltschutz vorantreiben.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.h2
                className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Unser Führungsteam
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
                Lernen Sie die erfahrenen Fachleute kennen, die Swiss Tankstelle
                in eine nachhaltige Zukunft führen
              </motion.p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Alex Müller",
                  role: "Geschäftsführer",
                  image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
                },
                {
                  name: "Sarah Keller",
                  role: "Finanzvorstand",
                  image:
                    "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
                },
                {
                  name: "Thomas Weber",
                  role: "Leiter Tankstellenbetrieb",
                  image:
                    "https://api.dicebear.com/7.x/avataaars/svg?seed=Thomas",
                },
                {
                  name: "Markus Schneider",
                  role: "Leiter Tankstellennetzwerk",
                  image:
                    "https://api.dicebear.com/7.x/avataaars/svg?seed=Markus",
                },
                {
                  name: "Claudia Zimmermann",
                  role: "Direktorin für Kraftstoffprodukte",
                  image:
                    "https://api.dicebear.com/7.x/avataaars/svg?seed=Claudia",
                },
                {
                  name: "Hans Brunner",
                  role: "Leiter Nachhaltigkeit",
                  image: "",
                },
              ].map((person, index) => (
                <motion.div
                  key={person.name}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 * index }}
                >
                  <img
                    className="w-full h-64 object-cover"
                    src={person.image}
                    alt={person.name}
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900">
                      {person.name}
                    </h3>
                    <p className="text-gray-600">{person.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
