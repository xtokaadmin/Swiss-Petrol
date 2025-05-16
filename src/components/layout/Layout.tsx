import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps = {}) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src="/logo1 (2).png"
                alt="Swiss Petrol Logo"
                className="h-24 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-800 hover:text-blue-600 font-medium text-2xl"
            >
              Startseite
            </Link>
            <Link
              to="/about"
              className="text-gray-800 hover:text-blue-600 font-medium text-2xl"
            >
              Über Uns
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center text-gray-800 hover:text-blue-600 font-medium text-2xl"
              >
                Dienstleistungen
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-md py-2 z-10">
                  <Link
                    to="/services/petrol-powers"
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-50 text-xl"
                  >
                    B79 Tankstellen Netzwerk
                  </Link>
                  <Link
                    to="/services/asset-management"
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-50 text-xl"
                  >
                    B79 Tankstellenverwaltung
                  </Link>
                  <Link
                    to="/services/immobilien"
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-50 text-xl"
                  >
                    B79 Tankstellen-Immobilien
                  </Link>
                  <Link
                    to="/services/ai"
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-50 text-xl"
                  >
                    B79 Tankstellen-Technologie
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className="text-gray-800 hover:text-blue-600 font-medium text-2xl"
            >
              Kontakt
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-10 w-10" />
            ) : (
              <Menu className="h-10 w-10" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="container mx-auto px-4 py-2 space-y-2">
              <Link
                to="/"
                className="block py-2 text-gray-800 hover:text-blue-600 font-medium text-2xl"
              >
                Startseite
              </Link>
              <Link
                to="/about"
                className="block py-2 text-gray-800 hover:text-blue-600 font-medium text-2xl"
              >
                Über Uns
              </Link>

              {/* Mobile Services Links */}
              <div className="py-2">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center text-gray-800 hover:text-blue-600 font-medium w-full justify-between text-2xl"
                >
                  Dienstleistungen
                  <ChevronDown className="h-4 w-4" />
                </button>

                {isDropdownOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    <Link
                      to="/services/petrol-powers"
                      className="block py-2 text-gray-800 hover:text-blue-600 text-xl"
                    >
                      B79 Tankstellen Netzwerk
                    </Link>
                    <Link
                      to="/services/asset-management"
                      className="block py-2 text-gray-800 hover:text-blue-600 text-xl"
                    >
                      B79 Tankstellenverwaltung
                    </Link>
                    <Link
                      to="/services/immobilien"
                      className="block py-2 text-gray-800 hover:text-blue-600 text-xl"
                    >
                      B79 Tankstellen-Immobilien
                    </Link>
                    <Link
                      to="/services/ai"
                      className="block py-2 text-gray-800 hover:text-blue-600 text-xl"
                    >
                      B79 Tankstellen-Technologie
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/contact"
                className="block py-2 text-gray-800 hover:text-blue-600 font-medium text-2xl"
              >
                Kontakt
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">{children || <Outlet />}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto max-w-7xl px-4 md:px-8 lg:px-16 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">Swiss Tankstelle</h3>
              <p className="mb-2">Im Steiaher 22</p>
              <p>5406 Rütiho</p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Schnellzugriff</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="hover:text-blue-400">
                    Startseite
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-blue-400">
                    Über Uns
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-blue-400">
                    Dienstleistungen
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-blue-400">
                    Kontakt
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">Kontaktieren Sie uns</h3>
              <p className="mb-2">E-Mail: info@swisstankstelle.ch</p>
              <p className="mb-2">Telefon: +41 123 456 789</p>
              <div className="flex space-x-4 mt-4">
                {/* Social Media Icons - Using placeholder divs for now */}
                <div className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="sr-only">Facebook</span>
                </div>
                <div className="h-8 w-8 bg-blue-400 rounded-full flex items-center justify-center">
                  <span className="sr-only">Twitter</span>
                </div>
                <div className="h-8 w-8 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="sr-only">Instagram</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Swiss Tankstelle. Alle Rechte
              vorbehalten.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
