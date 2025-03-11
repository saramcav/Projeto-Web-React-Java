import {
    Capa,
    Loja,
    ComentarioBarraca,
    ComentarioLoja,
    TemaTab,
    ItemFAQ,
  } from "../interfaces/interfacesAuxiliares";
  
  export const capas: Capa[] = [
    {
      imgSrc: "capa3.png",
      textoAlt: "amigos conversando na natureza com barraca ao fundo",
    },
    {
      imgSrc: "capa2.png",
      textoAlt: "homem sentado em região montanhosa com barraca ao fundo",
    },
    {
      imgSrc: "capa1.jpg",
      textoAlt: "barraca com homem sob o pôr do sol",
    },
    {
      imgSrc: "capa4.png",
      textoAlt: "barraca iluminada em noite estrelada",
    },
  ];
  
  export type FormatoBarraca = "iglu" | "bivak" | "tunel" | "geodesica";
  
  export const lojas: Loja[] = [
    {
      id: 1,
      status: "Aberta",
      nome: "Arraial do Cabo - RJ",
      endereco: "Avenida dos Pescadores, 456",
      telefone: "(22) 8765-4321",
      horario: "De domingo a domingo, das 8h às 18h.",
    },
    {
      id: 2,
      status: "Fechada",
      nome: "Rio de Janeiro - RJ",
      endereco: "Rua da Praia, 789",
      telefone: "(21) 9876-5432",
      horario: "De segunda a sábado, das 9h às 19h.",
    },
    {
      id: 3,
      status: "Aberta",
      nome: "Niterói - RJ",
      endereco: "Rua do Comércio, 123",
      telefone: "(21) 1234-5678",
      horario: "De segunda a sexta, das 8h às 17h.",
    },
  ];
  
  export const comentariosLojas: ComentarioLoja[] = [
    {
      idLoja: 3,
      texto:
        "A loja de Niterói tem uma equipe excelente e um atendimento muito ágil.",
      autor: "Maria Silva",
    },
    {
      idLoja: 1,
      texto:
        "Adorei a localização da loja de Arraial do Cabo, perfeita para quem busca barracas de qualidade!",
      autor: "João Santos",
    },
    {
      idLoja: 2,
      texto:
        "A loja do Rio de Janeiro tem uma grande variedade de barracas e preços acessíveis.",
      autor: "Ana Souza",
    },
  ];
  
  export const tabs: TemaTab[] = [
    { id: "geral", rotulo: "Geral" },
    { id: "pagamentosReembolso", rotulo: "Pagamentos e Reembolso" },
  ];
  
  export const faqGeral: ItemFAQ[] = [
    {
      id: "collapseUm",
      pergunta: "O que é o AlugaAventura?",
      resposta:
        "O AlugaAventura é uma empresa que oferece aluguel e venda de barracas de diferentes formatos e marcas que podem ser usadas para camping, mochilão, entre outras atividades recreativas. Possuímos lojas físicas caso não se sinta à vontade para reservar via site.",
    },
    {
      id: "collapseDois",
      pergunta: "Como faço para alugar barracas?",
      resposta:
        "Para alugar barracas, basta acessar o nosso site, escolher o formato desejado (como bivak ou geofásica), selecioná-las e fazer a reserva. Para retirá-las, vá até uma de nossas lojas no horário definido na reserva.",
    },
    {
      id: "collapseTres",
      pergunta: "Quais são os tamanhos disponíveis para as barracas?",
      resposta:
        "Oferecemos barracas de diferentes tamanhos, desde individuais até para grupos de 8 pessoas. Você pode verificar os detalhes de cada modelo no nosso site ou diretamente em nossas lojas.",
    },
    {
      id: "collapseSete",
      pergunta: "Posso comprar uma barraca em vez de alugar?",
      resposta:
        "Sim, além do aluguel, também vendemos barracas. Consulte o nosso catálogo online ou visite nossas lojas para conferir os modelos disponíveis.",
    },
    {
      id: "collapseNove",
      pergunta: "Preciso de experiência para montar as barracas?",
      resposta:
        "Não, nossas barracas são projetadas para serem fáceis de montar, mesmo para iniciantes. Além disso, disponibilizamos tutoriais em vídeo e instruções detalhadas para ajudá-lo no processo.",
    },
    {
      id: "collapseDez",
      pergunta: "Vocês oferecem suporte em caso de problemas com a barraca?",
      resposta:
        "Sim, oferecemos suporte durante o período de aluguel. Se você tiver qualquer problema, entre em contato conosco pelo telefone ou chat disponível em nosso site.",
    },
  ];
  
  export const faqPagamentosReembolso: ItemFAQ[] = [
    {
      id: "collapseQuatro",
      pergunta: "Quais são as formas de pagamento?",
      resposta:
        "De forma online, aceitamos cartões de crédito, débito e pagamentos via boleto bancário. Todos os pagamentos são realizados de forma segura através de nosso site. Caso deseje pagar com dinheiro físico, dirija-se a uma de nossas lojas.",
    },
    {
      id: "collapseCinco",
      pergunta: "Se cancelar minha reserva serei reembolsado?",
      resposta:
        "Sim, você pode cancelar sua reserva até 48 horas antes do início do aluguel. Após esse prazo, não será possível obter reembolso.",
    },
    {
      id: "collapseSeis",
      pergunta: "Há taxas adicionais no pagamento?",
      resposta:
        "Não cobramos taxas adicionais para pagamentos online. No entanto, é importante verificar as condições de seu cartão ou banco para possíveis encargos financeiros externos.",
    },
    {
      id: "collapseOito",
      pergunta: "Posso alterar a forma de pagamento após a reserva?",
      resposta:
        "Sim, você pode alterar a forma de pagamento até 24 horas antes do horário de retirada. Entre em contato com nosso suporte para realizar a alteração.",
    },
    {
      id: "collapseOnze",
      pergunta: "Posso parcelar o pagamento do aluguel ou compra?",
      resposta:
        "Sim, para pagamentos com cartão de crédito, oferecemos a opção de parcelamento. Consulte as condições diretamente na página de checkout.",
    },
    {
      id: "collapseDoze",
      pergunta: "O que acontece se eu atrasar a devolução da barraca?",
      resposta:
        "Caso a devolução seja feita fora do horário combinado, poderá ser aplicada uma taxa adicional proporcional ao tempo de atraso. Consulte os termos de uso para mais informações.",
    },
  ];
  
  export const comentarios: ComentarioBarraca[] = [
    {
      id: 1,
      idBarraca: 1,
      avaliacao: 4,
      autor: "Ana Paula",
      texto:
        "A barraca é excelente para acampamentos rápidos. Super fácil de montar e desmontar. O único ponto é que fica um pouco apertada para duas pessoas, mas ainda assim muito boa!",
    },
    {
      id: 2,
      idBarraca: 1,
      avaliacao: 5,
      autor: "Carlos Souza",
      texto:
        "Excelente barraca! Perfeita para acampar em climas amenos. A montagem é bem simples e a proteção contra chuva é boa.",
    },
    {
      id: 3,
      idBarraca: 9,
      avaliacao: 4,
      autor: "Maria Silva",
      texto:
        "Adorei a barraca! Mantém a pessoa quentinha durante toda a noite. Super recomendo!",
    },
    {
      id: 4,
      idBarraca: 9,
      avaliacao: 5,
      autor: "João Santos",
      texto:
        "Muito boa! A barraca é leve e de ótima qualidade. Ideal para quem deseja se aventurar de forma solitária. Vou comprar uma para presentear meu primo!",
    },
  ];
  