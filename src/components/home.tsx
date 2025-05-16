import React from "react";
import Layout from "./layout/Layout";
import HeroSection from "./sections/HeroSection";
import ServicesSection from "./sections/ServicesSection";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Über Swiss Tankstelle
              </h2>
              <div className="w-20 h-1 bg-blue-600 my-6" />
              <p className="mt-4 text-lg text-gray-600">
                Swiss Tankstelle ist ein führendes Unternehmen im Bereich
                Tankstellen in der Schweiz, das sich der Bereitstellung
                hochwertiger Kraftstoffe und innovativer Tankstellendienste
                widmet. Mit einem starken Engagement für Nachhaltigkeit und
                Exzellenz haben wir uns als vertrauenswürdiger Partner im
                Tankstellensektor etabliert.
              </p>
              <div className="mt-8">
                <a
                  href="/about"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Mehr über uns erfahren
                </a>
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
                className="rounded-lg shadow-lg"
                src="/pompa.png"
                alt="Swiss Tankstelle Hauptsitz"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl font-extrabold text-white sm:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Unsere Wirkung
            </motion.h2>
            <motion.div
              className="w-20 h-1 bg-white mx-auto my-6"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "25+", label: "Jahre in der Tankstellenbranche" },
              { value: "150+", label: "Tankstellen landesweit" },
              { value: "2M+", label: "Liter Kraftstoff täglich" },
              { value: "30+", label: "Selbstbedienungsstationen" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
              >
                <p className="text-5xl font-extrabold text-white">
                  {stat.value}
                </p>
                <p className="mt-2 text-xl text-blue-100">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-blue-600 rounded-lg shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="px-6 py-12 md:p-12 text-center md:text-left md:flex md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                  <span className="block">Bereit loszulegen?</span>
                  <span className="block text-blue-200">
                    Kontaktieren Sie uns noch heute.
                  </span>
                </h2>
                <p className="mt-3 max-w-3xl text-lg leading-6 text-blue-100">
                  Unser Team steht bereit, um Ihnen bei der Suche nach den
                  richtigen Lösungen für Ihre Kraftstoff- und
                  Tankstellenbedürfnisse zu helfen.
                </p>
              </div>
              <div className="mt-8 md:mt-0">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50"
                >
                  Kontaktieren Sie uns
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
