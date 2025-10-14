import { useParams } from "react-router-dom";
import { services } from "../constants/services";
import { useEffect, useState } from "react";

interface ISelectedService {
  id: number;
  title: string;
  description: string;
  img: string;
  documents: string[];
}

export function Services() {
  const [selectedService, setSelectedService] =
    useState<ISelectedService | null>();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const selectedService = services.find((service) => service.id === +id);

      if (selectedService) {
        setSelectedService(selectedService);
        return;
      }
    }

    return () => setSelectedService(null);
  }, [id]);

  if (!selectedService) return;

  return (
    <div className="w-full mt-[60px] md:mt-[70px] bg-gradient-to-r from-white to-zinc-100 min-h-[70vh]">
      <div
        className={`w-full bg-cover bg-center h-[500px] p-10 relative`}
        style={{ backgroundImage: `url(${selectedService?.img})` }}
      >
        <h1 className="absolute inset-0 flex items-center justify-center z-30 text-white text-4xl text-center">
          {selectedService?.title}
        </h1>
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-br from-secondary-800 to-secondary-900 opacity-70 z-0" />
      </div>
      <div className="p-10 flex gap-20 items-center justify-center flex-col md:flex-row">
        <h1 className="text-3xl font-bold text-secondary-500">
          Saiba mais sobre {selectedService?.title}
        </h1>
        <div className="w-[100%] md:w-[50%]">
          <span className="mb-10 block">
            <h1 className="text-3xl font-bold mb-2 text-secondary-500">
              O que é
            </h1>
            <p
              className="text-xl"
              dangerouslySetInnerHTML={{ __html: selectedService?.description }}
            />
          </span>
          {!!selectedService.documents.length && (
            <span>
              <h1 className="text-3xl font-bold mb-2 text-secondary-500">
                Documentação necessária
              </h1>
              <p className="text-xl">
                <ul className="list-disc flex flex-col gap-2">
                  {selectedService?.documents.map((document) => (
                    <li className="ml-5" key={document}>
                      {document}
                    </li>
                  ))}
                </ul>
              </p>
            </span>
          )}
          <a
            href="https://api.whatsapp.com/send?phone=554891257916"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-700 text-white px-4 py-2 rounded-full text-center mt-5 block w-[360px]"
          >
            QUERO RESOLVER MEUS PROBLEMAS
          </a>
        </div>
      </div>
    </div>
  );
}
