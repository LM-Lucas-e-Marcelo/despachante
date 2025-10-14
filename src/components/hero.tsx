import { motion } from "framer-motion";
import xande from "../assets/xande.png";

export function Hero({ id }: { id: string }) {
  const handleRedirectToWhatsApp = () => {
    window.open("https://wa.me/554891257916", "_blank");
  };
  return (
    <div
      id={id}
      className="bg-gradient-to-r from-zinc-900 to-zinc-600 pt-20 w-full flex items-center justify-center bg-[url(/hero.png)] bg-cover bg-center"
    >
      <div className="w-full max-w-7xl flex items-center justify-between p-4 min-h-[500px] md:flex-row flex-col">
        <motion.section
          className="flex flex-col gap-4"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.p
            className="text-white text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            CONSULTAR SEU IPVA 2025 NUNCA FOI TÃO FÁCIL
          </motion.p>
          <motion.h1
            className="text-primary-200 text-5xl font-bold"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Consulte e pague agora <br /> os débitos do seu veículo
          </motion.h1>
          <motion.p
            className="text-white text-sm mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            CONSULTE SEU IPVA 2025, LICENCIAMENTO E MULTAS E <br /> PARCELE EM
            ATÉ 24X NOS CARTÕES DE CRÉDITO
          </motion.p>
          <motion.button
            onClick={handleRedirectToWhatsApp}
            className="bg-primary-500 rounded-full w-[250px] p-2 font-bold text-white mt-4 hover:scale-110 transition-all duration-300 cursor-pointer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Consulte Grátis
          </motion.button>
        </motion.section>
        <motion.img
          src={xande}
          alt="Xande"
          width={500}
          className="mb-[-20px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        />
      </div>
    </div>
  );
}
