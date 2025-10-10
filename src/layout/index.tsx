import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { PageTransition } from "../components/animations/PageTransition";

export const Layout = () => {
  return (
    <motion.div
      className="min-h-screen flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <PageTransition>
        <Outlet />
      </PageTransition>
      <Footer />
      <WhatsAppButton />
    </motion.div>
  );
};
