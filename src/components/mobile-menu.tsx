import { twMerge } from "tailwind-merge";
import { NAV_LINKS } from "../constants/nav";

interface MobileMenuProps {
  isOpen?: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <div
      className={twMerge(
        "fixed top-0 left-[-1000px] bg-gradient-to-r from-white to-zinc-100 w-full h-screen mt-[60px] transition-all md:hidden",
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
        </ul>
      </nav>
    </div>
  );
};
