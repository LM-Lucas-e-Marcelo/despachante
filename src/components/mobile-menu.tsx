import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "../constants/nav";
import { services } from "../constants/services";

interface MobileMenuProps {
  isOpen?: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const handleToggleServices = () => {
    setIsServicesOpen((prevState) => !prevState);
  };

  const handleServiceClick = () => {
    setIsServicesOpen(false);
    onClose();
  };

  return (
    <div
      className={twMerge(
        "fixed top-0 left-[-1000px] bg-gradient-to-r from-white to-zinc-100 w-full h-screen mt-[60px] transition-all md:hidden overflow-y-auto",
        isOpen && "left-0"
      )}
    >
      <nav>
        <ul className="flex flex-col">
          {NAV_LINKS.map(({ label, href }) => (
            <li
              key={href}
              className="p-5 text-center border-b border-zinc-200 w-full block"
              onClick={onClose}
            >
              <a href={href}>{label}</a>
            </li>
          ))}

          {/* Dropdown de Serviços */}
          <li className="border-b border-zinc-200 w-full">
            <button
              onClick={handleToggleServices}
              className="w-full p-5 text-center flex items-center justify-center gap-2"
              aria-expanded={isServicesOpen}
              aria-haspopup="true"
            >
              Serviços
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  isServicesOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <AnimatePresence>
              {isServicesOpen && (
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden bg-white/50"
                >
                  {services.map((service, index) => (
                    <motion.li
                      key={service.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                      className="border-t border-zinc-200"
                    >
                      <Link
                        to={`/services/${service.id}`}
                        className="block py-3 px-5 text-center text-sm text-zinc-700 hover:bg-gray-100 transition-colors duration-200"
                        onClick={handleServiceClick}
                      >
                        {service.title}
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
        </ul>
      </nav>
    </div>
  );
};
