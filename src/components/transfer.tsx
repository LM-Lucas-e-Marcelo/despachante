import { motion } from "framer-motion";
import { FadeInLeft } from "./animations/FadeInLeft";
import { FadeInRight } from "./animations/FadeInRight";
import transferImg from "../assets/transfer.png";

export function Transfer({ id }: { id: string }) {
  const handleRedirectToWhatsApp = () => {
    window.open("https://wa.me/554891257916", "_blank");
  };
  return (
    <div id={id} className="w-full flex items-center justify-center py-10">
      <div className="w-full max-w-7xl flex items-center justify-between p-4 flex-wrap gap-10 md:gap-0">
        <FadeInLeft>
          <motion.img
            src={transferImg}
            alt="Transferência"
            width={500}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          />
        </FadeInLeft>
        <FadeInRight className="flex flex-col gap-7 max-w-[600px] text-lg">
          <motion.h1
            className="md:text-6xl text-4xl font-bold text-secondary-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Transferência
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ao comprar ou vender um carro usado, existe a necessidade e a
            obrigatoriedade de se realizar a transferência veicular. Esse
            processo tem por objetivo alterar os registros de propriedade de um
            automóvel, uma motocicleta ou qualquer outro veículo automotor.
            Nenhum carro pode circular sem estar registrado e devidamente
            emplacado. Entre em contato conosco e deixe a parte burocrática que
            nós resolvemos pra você!
          </motion.p>

          <motion.button
            onClick={handleRedirectToWhatsApp}
            className="py-2 px-4 rounded-full bg-secondary-500 text-white max-w-[400px] hover:scale-110 transition-all duration-300 cursor-pointer"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            QUERO RESOLVER MEUS PROBLEMAS
          </motion.button>
        </FadeInRight>
      </div>
    </div>
  );
}
