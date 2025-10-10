import { motion } from "framer-motion";
import { FadeInLeft } from "./animations/FadeInLeft";
import { FadeInRight } from "./animations/FadeInRight";
import who from "../assets/who.png";

export function About({ id }: { id: string }) {
  return (
    <div id={id} className="w-full flex items-center justify-center py-10">
      <div className="w-full max-w-7xl flex items-center justify-between p-4">
        <FadeInLeft className="flex flex-col gap-7 max-w-[600px] text-lg">
          <motion.h1
            className="text-secondary-500 text-6xl font-bold"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Quem somos
          </motion.h1>
          <motion.p
            className="text-zinc-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Fundado em 2007 pelos irmãos Alexandre Valter Rodrigues e Magna
            Valdete Rodrigues, o Xande Despachante, localizado no centro de
            Biguaçu, veio com o propósito de oferecer agilidade e praticidade na
            regularização da documentação de veículos de todo o Brasil.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Possuímos uma equipe qualificada e pronta para facilitar todo o
            processo burocrático referente a documentação do seu veículo.
          </motion.p>
          <motion.strong
            className="text-secondary-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Despachante Credenciado no DETRAN-SC – Credencial: 2233
          </motion.strong>
        </FadeInLeft>
        <FadeInRight>
          <motion.img
            src={who}
            alt="Xande e Magna"
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
