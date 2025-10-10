import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "./button";
import { Dropdown } from "./dropdown";
import logo from "../assets/logo.png";
import { NAV_LINKS } from "../constants/nav";

export function Header() {
  const { scrollY } = useScroll();

  const blur = useTransform(scrollY, [0, 50, 100], [0, 4, 8]);
  const backgroundColor = useTransform(
    scrollY,
    [0, 50, 100],
    [
      "rgba(255, 255, 255, 1)",
      "rgba(255, 255, 255, 0.9)",
      "rgba(255, 255, 255, 0.8)",
    ]
  );
  const boxShadow = useTransform(
    scrollY,
    [0, 50, 100],
    [
      "0 0 0 rgba(0, 0, 0, 0)",
      "0 2px 10px rgba(0, 0, 0, 0.05)",
      "0 4px 20px rgba(0, 0, 0, 0.1)",
    ]
  );

  return (
    <motion.header
      className="w-full flex items-center justify-center fixed top-0 left-0 right-0 z-50 backdrop-blur-sm"
      style={{
        backgroundColor,
        backdropFilter: `blur(${blur}px)`,
        boxShadow,
      }}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="w-full max-w-7xl flex items-center justify-between p-4">
        <motion.nav
          className="flex items-center gap-15"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={logo} alt="Logo" width={150} />
          </motion.a>
          <ul className="flex items-center gap-10">
            {NAV_LINKS.map(({ label, href }, index) => (
              <motion.li
                key={href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <motion.a
                  className="text-zinc-900 hover:underline"
                  href={href}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {label}
                </motion.a>
              </motion.li>
            ))}
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 }}
            >
              <Dropdown label="Serviços" />
            </motion.li>
          </ul>
        </motion.nav>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button>FALE COM NOSSA EQUIPE</Button>
        </motion.div>
      </div>
    </motion.header>
  );
}
