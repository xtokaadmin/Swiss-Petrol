import React from "react";
import Layout from "../layout/Layout";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <Layout>
      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative py-24 bg-gray-900">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src=""
              alt="Kontaktieren Sie uns"
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
              Kontaktieren Sie uns
            </motion.h1>
            <motion.p
              className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Nehmen Sie Kontakt mit unserem Team auf, um zu besprechen, wie wir
              Ihnen helfen können
            </motion.p>
          </div>
        </div>

        {/* Contact Form and Info */}
        <div className="py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
          <div className="relative max-w-xl mx-auto">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Kontakt aufnehmen
              </h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto my-6" />
              <p className="mt-4 text-lg leading-6 text-gray-500">
                Haben Sie Fragen zu unseren Kraftstoffen oder Dienstleistungen?
                Füllen Sie das untenstehende Formular aus, und einer unserer
                Kraftstoffspezialisten wird sich in Kürze mit Ihnen in
                Verbindung setzen.
              </p>
            </motion.div>

            <div className="mt-12">
              <motion.form
                action="#"
                method="POST"
                className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Vorname
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      autoComplete="given-name"
                      className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Nachname
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      autoComplete="family-name"
                      className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Unternehmen
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="company"
                      id="company"
                      autoComplete="organization"
                      className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    E-Mail
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Telefon
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Nachricht
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    ></textarea>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Absenden
                  </button>
                </div>
              </motion.form>
            </div>
          </div>

          {/* Contact Information */}
          <motion.div
            className="mt-16 bg-white py-12 lg:mt-20 lg:py-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    Besuchen Sie uns
                  </h3>
                  <div className="mt-3 text-base text-gray-500">
                    <p>Im Steiaher 22</p>
                    <p className="mt-1">5406 Rütiho</p>
                    <p className="mt-1">Schweiz</p>
                  </div>
                </div>
                <div className="mt-8 lg:mt-0">
                  <h3 className="text-lg font-medium text-gray-900">
                    Rufen Sie uns an
                  </h3>
                  <div className="mt-3 text-base text-gray-500">
                    <p>Telefon: +41 123 456 789</p>
                    <p className="mt-1">Fax: +41 123 456 788</p>
                  </div>
                </div>
                <div className="mt-8 lg:mt-0">
                  <h3 className="text-lg font-medium text-gray-900">E-Mail</h3>
                  <div className="mt-3 text-base text-gray-500">
                    <p>info@swisstankstelle.ch</p>
                    <p className="mt-1">support@swisstankstelle.ch</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <div className="bg-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-extrabold text-gray-900">
                Unser Standort
              </h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto my-6" />
            </motion.div>
            <motion.div
              className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Placeholder for map - in a real implementation, you would use Google Maps or similar */}
              <div className="bg-gray-300 w-full h-96 flex items-center justify-center">
                <p className="text-gray-600 text-lg">
                  Hier würde eine Karte angezeigt werden
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
