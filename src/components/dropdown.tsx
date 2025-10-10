import { useState } from "react";
import { services } from "../constants/services";

interface DropdownProps {
  label: string;
}

export const Dropdown = ({ label }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="text-zinc-900 hover:underline flex items-center gap-1"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {label}
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
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

      {isOpen && (
        <div className="absolute top-full left-0 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
          <div className="absolute -top-2 left-0 right-0 h-2"></div>
          {services.map((item, index) => (
            <a
              key={index}
              href={`/services/${item.id}`}
              className="block px-4 py-2 text-sm text-zinc-700 hover:bg-gray-100 hover:text-zinc-900 transition-colors duration-200"
            >
              {item.title}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};
