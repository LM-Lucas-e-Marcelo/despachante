import atpv from "/atpv.jpeg";
import first from "/first.png";
import crv from "/crv.png";
import sell from "/sell.jpg";
import vehicle from "/vehicle.webp";
import mercosul from "/mercosul.jpg";
import change from "/change.jpg";
import certificate from "/certificate.jpeg";
import truck from "/truck.webp";

export const services = [
  {
    id: 1,
    title: "ATPV-e",
    description:
      "O ATPV-e é um documento extremamente importante para comprovar que a transferência entre os proprietários é válida. Sendo assim, ele é essencial nos casos em que os antigos donos desejam realizar a venda de um automotor para um novo proprietário, onde a transferência é necessária.",
    img: atpv,
    documents: [
      "Certificado de Registro e Licenciamento do Veículo (CRLV)",
      "Documentação de identificação pessoal do vendedor e do comprador do veículo",
      "Comprovante de residência do comprador",
      "Email do comprador e vendedor",
      "Valor da venda do veículo",
    ],
  },
  {
    id: 2,
    title: "1º EMPLACAMENTO",
    description:
      "Trata-se do registro obrigatório que todo veículo automotor, elétrico, articulado, reboque ou semi-reboque, deve ter perante o órgão executivo de trânsito do Estado ou do Distrito Federal, no município de domicílio ou residência de seu proprietário.",
    img: first,
    documents: [
      "Documentação de identificação pessoal do adquirente do veículo",
      "Nota fiscal emitida pela montadora ou revenda autorizada, ou documento expedido pela autoridade competente, com decalque ou foto do chassi",
      "Comprovante de residência",
    ],
  },
  {
    id: 3,
    title: "2º via CRV",
    description:
      "É o processo de emissão de um novo documento de compra e venda de veículo (CRV). Em casos de dano, perda, roubo ou furto do CRV original, pode-se solicitar a segunda via do documento diretamente conosco. Saiba como clicando no botão abaixo.",
    img: crv,
    documents: [
      "Requerimento de 2ª via do CRV",
      "Documentação de identificação pessoal do proprietário do veículo",
      "Comprovante de residência",
      "Vistoria",
    ],
  },
  {
    id: 4,
    title: "Comunicado de venda",
    description:
      "A Comunicação de Venda é o documento que transfere ao adquirente do veículo usado a responsabilidade sobre o mesmo, afastando a responsabilidade do vendedor sobre débitos de impostos, taxas, multas, seguro obrigatório e outros ocorridos após a data da venda.",
    img: sell,
    documents: [
      "Certificado de Registro do Veículo (CRV) preenchido e reconhecido firma as assinaturas de comprador e vendedor",
    ],
  },
  {
    id: 5,
    title: "Baixa de circulação do veículo",
    description:
      "É o processo de baixa definitiva e irreversível do veículo quando ficam sem condições de transitar – para que não sejam gerados débitos futuros para o proprietário.",
    img: vehicle,
    documents: [
      "Documentação de identificação pessoal do proprietário do veículo",
      "Requerimento de baixa do veículo",
      "Certificado de Registro do Veículo (CRV)",
      "Parte/peça do chassi com a numeração de identificação (recorte)",
      "Placas do veículo",
      "Fotos do veículo (de todos os ângulos)",
    ],
  },
  {
    id: 6,
    title: "Alteração para a Placa Mercosul",
    description:
      "Serviço destinado ao proprietário de veículo que deseja trocar as placas cinzas para a nova placa de identificação veicular ou que teve as placas perdidas, danificadas ou furtadas/roubadas. <br /> <br /> A troca das placas é opcional, exceto quando a placa tiver sido danificada, extraviada, furtada ou roubada, ou o proprietário do veículo precisar realizar algum dos serviços abaixo: <br /> <br /> Transferência de veículo de outro estado; Alteração de endereço para outro município em; Mudança de categoria do veículo.",
    img: mercosul,
    documents: [
      "Certificado de Registro do Veículo (CRV)",
      "Documentação de identificação pessoal do proprietário do veículo",
      "Comprovante de residência",
      "Vistoria do veículo",
    ],
  },
  {
    id: 7,
    title: "Alteração de dados e características",
    description:
      "É a emissão de um novo documento do veículo, em decorrência da alteração de alguma característica ou dado do veículo como: <br /> - Cor <br /> - Combustível <br /> - Categoria <br /> - Carroceria <br /> - Alienação <br /> - Desalienação, etc",
    img: change,
    documents: [
      "Requerimento do proprietário do veículo com indicação da alteração (ou alterações) a ser realizada",
      "Documentação de identificação pessoal do proprietário do veículo",
      "Comprovante de residência",
      "Certificado de Registro do Veículo (CRV)",
      "Nota Fiscal do serviço realizado",
      "Vistoria",
      "Os documentos podem mudar de acordo com a alteração solicitada",
    ],
  },
  {
    id: 8,
    title: "Certificado digital ICP-BRASIL",
    description:
      "Certificado digital é o documento que garante a autenticidade de um documento eletrônico. Com ele, você pode assinar contratos, documentos e fazer a transferência do seu veículo com segurança e agilidade. Em poucos minutos, você pode emitir ou renovar seu certificado digital. Basta entrar em contato conosco e seguir as orientações. Agora sua assinatura é digital!",
    img: certificate,
    documents: [],
  },
  {
    id: 9,
    title: "ANTT",
    description:
      "Se você trabalha com transporte de cargas, precisa entender o que é ANTT: A Agência Nacional de Transportes Terrestres (ANTT) é o órgão responsável por regularizar os serviços de transportes de cargas e passageiros nas rodovias brasileiras, atuando na regulação e fiscalização.",
    img: truck,
    documents: [],
  },
];
