import { motion } from "framer-motion";
import { FadeInLeft } from "./animations/FadeInLeft";
import { FadeInRight } from "./animations/FadeInRight";
import paymentImg from "../assets/payment.svg";

export function Payment({ id }: { id: string }) {
  return (
    <div
      id={id}
      className="w-full flex items-center justify-center py-10 bg-gradient-to-br from-secondary-800 to-secondary-900"
    >
      <div className="w-full max-w-7xl flex items-center justify-between p-4">
        <FadeInLeft className="w-[70%] flex flex-col items-center gap-4">
          <motion.p
            className="font-bold text-white text-4xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            PARCELE EM ATÉ
          </motion.p>
          <motion.p
            className="font-bold text-white text-8xl"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
          >
            24X
          </motion.p>
          <motion.p
            className="font-bold text-white text-4xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            OS DÉBITOS DO SEU VEÍCULO
          </motion.p>
          <motion.button
            className="py-2 px-4 rounded-full bg-primary-500 text-white max-w-[400px] mt-4 hover:scale-110 transition-all duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            CLIQUE AQUI E CONSULTE AGORA
          </motion.button>
        </FadeInLeft>
        <FadeInRight>
          <motion.img
            src={paymentImg}
            alt="Pagamento"
            width={350}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          />
        </FadeInRight>
      </div>
    </div>
  );
}
