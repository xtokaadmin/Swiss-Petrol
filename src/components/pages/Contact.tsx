import React, { useState } from "react";
import Layout from "../layout/Layout";
import { motion, AnimatePresence } from "framer-motion";
import pompa3Image from "../../assets/pompa3.jpeg";
import { Check, Copy, Mail, MapPin, Phone, Send } from "lucide-react";

const Contact = () => {
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [activeTab, setActiveTab] = useState<"form" | "visit" | "call">("form");
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formValues.firstName) errors.firstName = "Vorname ist erforderlich";
    if (!formValues.lastName) errors.lastName = "Nachname ist erforderlich";
    if (!formValues.email) {
      errors.email = "E-Mail ist erforderlich";
    } else if (!/^\S+@\S+\.\S+$/.test(formValues.email)) {
      errors.email = "Ungültige E-Mail-Adresse";
    }
    if (!formValues.message) errors.message = "Nachricht ist erforderlich";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setFormStatus("submitting");

    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormStatus("idle");
        setFormValues({
          firstName: "",
          lastName: "",
          company: "",
          email: "",
          phone: "",
          message: "",
        });
      }, 3000);
    }, 1500);
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const contactMethods = [
    {
      id: "form",
      label: "Formular",
      icon: <Send className="w-5 h-5" />,
    },
    {
      id: "visit",
      label: "Besuchen",
      icon: <MapPin className="w-5 h-5" />,
    },
    {
      id: "call",
      label: "Anrufen",
      icon: <Phone className="w-5 h-5" />,
    },
  ];

  const faqs = [
    {
      question: "Wie schnell erhalte ich eine Antwort?",
      answer:
        "Wir bemühen uns, alle Anfragen innerhalb von 24 Stunden zu beantworten. Bei dringenden Angelegenheiten empfehlen wir, uns direkt telefonisch zu kontaktieren.",
    },
    {
      question:
        "Kann ich einen Termin für eine persönliche Beratung vereinbaren?",
      answer:
        "Ja, Sie können gerne einen Termin für eine persönliche Beratung in unserem Büro vereinbaren. Bitte kontaktieren Sie uns telefonisch oder über das Kontaktformular, um einen passenden Termin zu finden.",
    },
    {
      question: "Bieten Sie auch Beratungen für Großkunden an?",
      answer:
        "Ja, wir bieten spezielle Beratungen und maßgeschneiderte Lösungen für Großkunden an. Unser Expertenteam steht Ihnen gerne zur Verfügung, um Ihre spezifischen Anforderungen zu besprechen.",
    },
  ];

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <Layout>
      <div className="bg-white">
        {/* Hero Section with Parallax Effect */}
        <div className="relative py-32 bg-gray-900 overflow-hidden">
          <motion.div
            className="absolute inset-0 overflow-hidden"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
          >
            <img
              src={pompa3Image}
              alt="Kontaktieren Sie uns"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
          </motion.div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
            <motion.h1
              className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Kontaktieren Sie uns
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
              Nehmen Sie Kontakt mit unserem Team auf, um zu besprechen, wie wir
              Ihnen helfen können
            </motion.p>

            {/* Floating cards with contact info */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  icon: <Mail className="w-8 h-8 text-blue-500" />,
                  title: "E-Mail",
                  info: "info@swisstankstelle.ch",
                  action: () =>
                    copyToClipboard("info@swisstankstelle.ch", "email"),
                },
                {
                  icon: <Phone className="w-8 h-8 text-blue-500" />,
                  title: "Telefon",
                  info: "+41 123 456 789",
                  action: () => copyToClipboard("+41 123 456 789", "phone"),
                },
                {
                  icon: <MapPin className="w-8 h-8 text-blue-500" />,
                  title: "Adresse",
                  info: "Im Steiaher 22, 5406 Rütiho",
                  action: () =>
                    copyToClipboard("Im Steiaher 22, 5406 Rütiho", "address"),
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-6 flex flex-col items-center text-white border border-white/20 hover:bg-white/20 transition-all cursor-pointer group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  onClick={item.action}
                  whileHover={{ y: -5 }}
                >
                  <motion.div
                    className="mb-4 p-3 bg-white/10 rounded-full"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(255,255,255,0.2)",
                    }}
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-200">{item.info}</p>
                  <div className="mt-3 text-sm text-blue-300 flex items-center">
                    {copiedText === item.title.toLowerCase() ? (
                      <span className="flex items-center">
                        <Check className="w-4 h-4 mr-1" /> Kopiert!
                      </span>
                    ) : (
                      <span className="flex items-center group-hover:text-blue-200">
                        <Copy className="w-4 h-4 mr-1" /> Klicken zum Kopieren
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Scroll Down Indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </div>

        {/* Contact Tabs and Form */}
        <div className="py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
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
                Wir sind für Sie da.
              </p>
            </motion.div>

            {/* Contact Method Tabs */}
            <div className="mt-12">
              <div className="flex justify-center mb-8 border-b border-gray-200">
                {contactMethods.map((method) => (
                  <button
                    key={method.id}
                    className={`flex items-center px-6 py-3 font-medium text-sm focus:outline-none ${activeTab === method.id ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-gray-700"}`}
                    onClick={() => setActiveTab(method.id as any)}
                  >
                    <span className="mr-2">{method.icon}</span>
                    {method.label}
                  </button>
                ))}
              </div>

              <div className="mt-8">
                <AnimatePresence mode="wait">
                  {activeTab === "form" && (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <form
                        onSubmit={handleSubmit}
                        className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                      >
                        <div className="relative">
                          <label
                            htmlFor="firstName"
                            className={`absolute left-4 transition-all duration-200 ${formValues.firstName ? "-top-2.5 text-xs bg-white px-1 text-blue-600" : "top-3 text-gray-500"}`}
                          >
                            Vorname
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            value={formValues.firstName}
                            onChange={handleInputChange}
                            autoComplete="given-name"
                            className={`py-3 px-4 block w-full shadow-sm border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${formErrors.firstName ? "border-red-500" : ""}`}
                          />
                          {formErrors.firstName && (
                            <p className="mt-1 text-sm text-red-600">
                              {formErrors.firstName}
                            </p>
                          )}
                        </div>
                        <div className="relative">
                          <label
                            htmlFor="lastName"
                            className={`absolute left-4 transition-all duration-200 ${formValues.lastName ? "-top-2.5 text-xs bg-white px-1 text-blue-600" : "top-3 text-gray-500"}`}
                          >
                            Nachname
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            value={formValues.lastName}
                            onChange={handleInputChange}
                            autoComplete="family-name"
                            className={`py-3 px-4 block w-full shadow-sm border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${formErrors.lastName ? "border-red-500" : ""}`}
                          />
                          {formErrors.lastName && (
                            <p className="mt-1 text-sm text-red-600">
                              {formErrors.lastName}
                            </p>
                          )}
                        </div>
                        <div className="sm:col-span-2 relative">
                          <label
                            htmlFor="company"
                            className={`absolute left-4 transition-all duration-200 ${formValues.company ? "-top-2.5 text-xs bg-white px-1 text-blue-600" : "top-3 text-gray-500"}`}
                          >
                            Unternehmen
                          </label>
                          <input
                            type="text"
                            name="company"
                            id="company"
                            value={formValues.company}
                            onChange={handleInputChange}
                            autoComplete="organization"
                            className="py-3 px-4 block w-full shadow-sm border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          />
                        </div>
                        <div className="sm:col-span-2 relative">
                          <label
                            htmlFor="email"
                            className={`absolute left-4 transition-all duration-200 ${formValues.email ? "-top-2.5 text-xs bg-white px-1 text-blue-600" : "top-3 text-gray-500"}`}
                          >
                            E-Mail
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            value={formValues.email}
                            onChange={handleInputChange}
                            autoComplete="email"
                            className={`py-3 px-4 block w-full shadow-sm border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${formErrors.email ? "border-red-500" : ""}`}
                          />
                          {formErrors.email && (
                            <p className="mt-1 text-sm text-red-600">
                              {formErrors.email}
                            </p>
                          )}
                        </div>
                        <div className="sm:col-span-2 relative">
                          <label
                            htmlFor="phone"
                            className={`absolute left-4 transition-all duration-200 ${formValues.phone ? "-top-2.5 text-xs bg-white px-1 text-blue-600" : "top-3 text-gray-500"}`}
                          >
                            Telefon
                          </label>
                          <input
                            type="text"
                            name="phone"
                            id="phone"
                            value={formValues.phone}
                            onChange={handleInputChange}
                            autoComplete="tel"
                            className="py-3 px-4 block w-full shadow-sm border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          />
                        </div>
                        <div className="sm:col-span-2 relative">
                          <label
                            htmlFor="message"
                            className={`absolute left-4 transition-all duration-200 ${formValues.message ? "-top-2.5 text-xs bg-white px-1 text-blue-600" : "top-3 text-gray-500"}`}
                          >
                            Nachricht
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            rows={4}
                            value={formValues.message}
                            onChange={handleInputChange}
                            className={`py-3 px-4 block w-full shadow-sm border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${formErrors.message ? "border-red-500" : ""}`}
                          ></textarea>
                          {formErrors.message && (
                            <p className="mt-1 text-sm text-red-600">
                              {formErrors.message}
                            </p>
                          )}
                        </div>
                        <div className="sm:col-span-2">
                          <button
                            type="submit"
                            disabled={
                              formStatus === "submitting" ||
                              formStatus === "success"
                            }
                            className={`w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all ${formStatus === "submitting" || formStatus === "success" ? "opacity-70 cursor-not-allowed" : ""}`}
                          >
                            {formStatus === "idle" && "Absenden"}
                            {formStatus === "submitting" && (
                              <>
                                <svg
                                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                  ></circle>
                                  <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                  ></path>
                                </svg>
                                Wird gesendet...
                              </>
                            )}
                            {formStatus === "success" && (
                              <>
                                <Check className="-ml-1 mr-2 h-5 w-5" />
                                Gesendet!
                              </>
                            )}
                          </button>

                          {/* Success message */}
                          <AnimatePresence>
                            {formStatus === "success" && (
                              <motion.div
                                className="mt-4 bg-green-50 border border-green-200 rounded-md p-4 text-green-700 text-center"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                              >
                                Vielen Dank für Ihre Nachricht! Wir werden uns
                                in Kürze bei Ihnen melden.
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </form>
                    </motion.div>
                  )}

                  {activeTab === "visit" && (
                    <motion.div
                      key="visit"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white rounded-lg shadow-lg overflow-hidden"
                    >
                      <div className="aspect-w-16 aspect-h-9">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2724.698927333143!2d7.4442!3d46.9479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDA1JzUyLjQiTiA3wrAyNicyNy4xIkU!5e0!3m2!1sen!2sch!4v1620000000000!5m2!1sen!2sch"
                          width="100%"
                          height="450"
                          style={{ border: 0 }}
                          allowFullScreen={true}
                          loading="lazy"
                          title="Google Maps"
                          className="w-full h-96"
                        ></iframe>
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          Besuchen Sie uns
                        </h3>
                        <p className="text-gray-600 mb-4">
                          Wir freuen uns auf Ihren Besuch in unserem Büro:
                        </p>
                        <div className="flex items-start mb-4">
                          <MapPin className="w-5 h-5 text-blue-600 mt-1 mr-3" />
                          <div>
                            <p className="font-medium">Swiss Tankstelle</p>
                            <p>Im Steiaher 22</p>
                            <p>5406 Rütiho</p>
                            <p>Schweiz</p>
                          </div>
                        </div>
                        <div className="mt-6">
                          <h4 className="font-medium text-gray-900 mb-2">
                            Öffnungszeiten:
                          </h4>
                          <ul className="space-y-1 text-gray-600">
                            <li className="flex justify-between">
                              <span>Montag - Freitag:</span>
                              <span>08:00 - 18:00 Uhr</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Samstag:</span>
                              <span>09:00 - 14:00 Uhr</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Sonntag:</span>
                              <span>Geschlossen</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "call" && (
                    <motion.div
                      key="call"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white rounded-lg shadow-lg p-6"
                    >
                      <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                          <Phone className="h-8 w-8" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          Rufen Sie uns an
                        </h3>
                        <p className="text-gray-600">
                          Unser freundliches Team steht Ihnen gerne zur
                          Verfügung
                        </p>
                      </div>

                      <div className="space-y-6">
                        <div
                          className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                          onClick={() =>
                            copyToClipboard("+41 123 456 789", "main")
                          }
                        >
                          <div className="flex items-center">
                            <div className="bg-blue-100 p-3 rounded-full mr-4">
                              <Phone className="h-5 w-5 text-blue-600" />
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">
                                Hauptnummer
                              </p>
                              <p className="text-gray-600">+41 123 456 789</p>
                            </div>
                          </div>
                          <div>
                            {copiedText === "main" ? (
                              <span className="text-green-600 flex items-center">
                                <Check className="w-4 h-4 mr-1" /> Kopiert
                              </span>
                            ) : (
                              <Copy className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                            )}
                          </div>
                        </div>

                        <div
                          className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                          onClick={() =>
                            copyToClipboard("+41 123 456 790", "support")
                          }
                        >
                          <div className="flex items-center">
                            <div className="bg-blue-100 p-3 rounded-full mr-4">
                              <Phone className="h-5 w-5 text-blue-600" />
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">
                                Kundendienst
                              </p>
                              <p className="text-gray-600">+41 123 456 790</p>
                            </div>
                          </div>
                          <div>
                            {copiedText === "support" ? (
                              <span className="text-green-600 flex items-center">
                                <Check className="w-4 h-4 mr-1" /> Kopiert
                              </span>
                            ) : (
                              <Copy className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                            )}
                          </div>
                        </div>

                        <div
                          className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                          onClick={() =>
                            copyToClipboard("+41 123 456 791", "sales")
                          }
                        >
                          <div className="flex items-center">
                            <div className="bg-blue-100 p-3 rounded-full mr-4">
                              <Phone className="h-5 w-5 text-blue-600" />
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">
                                Vertrieb
                              </p>
                              <p className="text-gray-600">+41 123 456 791</p>
                            </div>
                          </div>
                          <div>
                            {copiedText === "sales" ? (
                              <span className="text-green-600 flex items-center">
                                <Check className="w-4 h-4 mr-1" /> Kopiert
                              </span>
                            ) : (
                              <Copy className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="mt-8 text-center text-gray-500 text-sm">
                        <p>Telefonische Erreichbarkeit:</p>
                        <p>Montag bis Freitag, 08:00 - 18:00 Uhr</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-extrabold text-gray-900">
                Häufig gestellte Fragen
              </h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto my-6" />
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                    onClick={() =>
                      setExpandedFaq(expandedFaq === index ? null : index)
                    }
                  >
                    <span className="font-medium text-gray-900">
                      {faq.question}
                    </span>
                    <svg
                      className={`w-5 h-5 text-gray-500 transform transition-transform ${expandedFaq === index ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {expandedFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4 text-gray-600">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Social Media Contact */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-extrabold text-gray-900">
                Folgen Sie uns
              </h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto my-6" />
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Bleiben Sie über unsere neuesten Angebote und Nachrichten auf
                dem Laufenden
              </p>
            </motion.div>

            <motion.div
              className="flex justify-center space-x-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {[
                { name: "Facebook", bgColor: "bg-blue-600" },
                { name: "Twitter", bgColor: "bg-blue-400" },
                { name: "Instagram", bgColor: "bg-pink-600" },
                { name: "LinkedIn", bgColor: "bg-blue-800" },
              ].map((social, index) => (
                <motion.a
                  key={social.name}
                  href="#"
                  className={`${social.bgColor} rounded-full p-4 text-white hover:opacity-90 transition-opacity`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="sr-only">{social.name}</span>
                  <div className="h-6 w-6"></div>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
