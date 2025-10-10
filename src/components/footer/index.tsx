import logo from "../../assets/logo.png";
import { services } from "../../constants/services";
import { FaInstagram, FaRegClock } from "react-icons/fa";
import { FaFacebook, FaWhatsapp } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";

export function Footer() {
  return (
    <footer className="w-full flex items-center justify-center py-10 flex-col">
      <div className="w-full max-w-7xl flex items-start justify-between p-4">
        <section className="max-w-[300px]">
          <img src={logo} alt="Logo" width={250} className="mb-4" />
          <p className="text-zinc-900 text-lg">
            O Despachante Xande tem como prioridade proporcionar sempre a melhor
            experiência aos seus clientes.
          </p>
          <div className="flex gap-4 mt-4">
            <a
              className="hover:scale-125 transition-all duration-300"
              href="https://www.instagram.com/despachantexande/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-secondary-500" size={30} />
            </a>
            <a
              className="hover:scale-125 transition-all duration-300"
              href="https://www.facebook.com/despachantexande/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-secondary-500" size={30} />
            </a>
            <a
              className="hover:scale-125 transition-all duration-300"
              href="https://api.whatsapp.com/send?phone=554891257916"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="text-secondary-500" size={30} />
            </a>
          </div>
        </section>
        <section>
          <h1 className="text-secondary-500 text-2xl font-bold mb-4">
            Serviços
          </h1>
          <ul className="list-disc list-inside flex flex-col gap-2">
            {services.map((service) => (
              <li key={service.id}>
                <a className="hover:underline" href={`/services/${service.id}`}>
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </section>
        <section className="max-w-[300px] flex flex-col gap-4">
          <h1 className="text-secondary-500 text-2xl font-bold">Contato</h1>
          <a
            className="flex items-center gap-4"
            href="https://www.google.com/maps/place/Despachante+Xande%E2%80%8E/@-27.4968057,-48.6540162,17z/data=!3m1!4b1!4m6!3m5!1s0x95274c340a5066a9:0x76876e7e1b30d407!8m2!3d-27.4968057!4d-48.6540162!16s%2Fg%2F1tkmnqxz?entry=ttu&g_ep=EgoyMDI1MTAwNy4wIKXMDSoASAFQAw%3D%3D"
          >
            <IoLocationOutline
              className="text-secondary-500 shrink-0"
              size={30}
            />{" "}
            R. Hermógenes Prazeres, 97 - Centro, Biguaçu - SC, 88160-152
          </a>
          <a className="flex items-center gap-4">
            <FaWhatsapp className="text-secondary-500" size={23} /> (48)
            99125-7916
          </a>
          <p className="flex items-center gap-4">
            <FaRegClock className="shrink-0 text-secondary-500" size={23} />
            Segunda à Sexta-feira, das 08h às 18h
          </p>
        </section>
      </div>
      <div className="text-center text-sm border-t border-zinc-200 pt-8 w-full">
        © Todos os direitos reservados. Desenvolvido por Despachante Xande
      </div>
    </footer>
  );
}
