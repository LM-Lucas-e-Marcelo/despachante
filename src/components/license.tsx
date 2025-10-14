import { motion } from "framer-motion";
import { FadeInLeft } from "./animations/FadeInLeft";
import { FadeInRight } from "./animations/FadeInRight";
import licenseImg from "../assets/license.png";

export function License({ id }: { id: string }) {
  const handleRedirectToWhatsApp = () => {
    window.open("https://wa.me/554891257916", "_blank");
  };
  return (
    <div
      id={id}
      className="w-full flex items-center justify-center py-10 bg-gradient-to-br from-primary-600 to-primary-700"
    >
      <div className="w-full max-w-7xl flex items-center justify-between p-4 flex-wrap gap-10 md:gap-0">
        <FadeInLeft className="flex flex-col gap-7 max-w-[600px] text-lg text-white">
          <motion.h1
            className="md:text-6xl text-4xl font-bold"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Licenciamento
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            O licenciamento é um dos documentos veiculares obrigatórios, ele é o
            responsável por permitir a circulação dos veículos nas ruas e
            rodovias do país, ele também é um comprovante de que seu veículo
            está em dia com outros impostos.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Ele deve ser renovado todos os anos e não estar em dia com esse
            documento pode levar multa até mesmo a apreensão do automóvel.
            Utilizando os nossos serviços, você faz a consulta do licenciamento
            sem sair de casa. Não arrisque!
          </motion.p>
          <motion.button
            onClick={handleRedirectToWhatsApp}
            className="py-2 px-4 rounded-full bg-secondary-500 text-white max-w-[300px] hover:scale-110 transition-all duration-300 cursor-pointer"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            FAZER CONSULTA
          </motion.button>
        </FadeInLeft>
        <FadeInRight>
          <motion.img
            src={licenseImg}
            alt="Licenciamento"
            width={500}
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
