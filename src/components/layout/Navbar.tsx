import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, Calendar, Info, Phone } from "lucide-react";
import clsx from "clsx";

const navItems = [
  { label: "Ana Sayfa", to: "/", icon: Home },
  { label: "Randevu Al", to: "/randevu", icon: Calendar },
  { label: "Hakkımızda", to: "/hakkimizda", icon: Info },
  { label: "İletişim", to: "/iletisim", icon: Phone },
];

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (to: string) => {
    navigate(to);
    setMobileOpen(false);
  };

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map(({ label, to, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  clsx(
                    "flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-md transition-all duration-200",
                    isActive
                      ? "text-teal-600 bg-teal-50 border-b-2 border-teal-600"
                      : "text-gray-600 hover:text-teal-600 hover:bg-gray-50"
                  )
                }
              >
                <Icon className="w-4 h-4" />
                {label}
              </NavLink>
            ))}
          </div>

          {/* Mobile: Randevu Al quick button */}
          <div className="md:hidden flex-1">
            <span className="text-sm font-semibold text-teal-700">Menü</span>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Menüyü aç/kapat"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white border-t border-gray-100"
          >
            <div className="px-4 py-3 flex flex-col gap-1">
              {navItems.map(({ label, to, icon: Icon }) => (
                <button
                  key={to}
                  onClick={() => handleNavClick(to)}
                  className="flex items-center gap-2 px-3 py-2.5 text-sm font-medium rounded-lg text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-colors text-left w-full"
                >
                  <Icon className="w-4 h-4 text-teal-600" />
                  {label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;