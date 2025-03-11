export interface Barraca {
  id: number;
  imgSrc: string;
  titulo: string;
  preco: number;
  modalidade: "Venda" | "Aluguel";
  avaliacao: number;
  descricao: string;
}

export interface Capa {
  imgSrc: string;
  textoAlt: string;
}

export interface Loja {
  id: number;
  status: "Aberta" | "Fechada";
  nome: string;
  endereco: string;
  telefone: string;
  horario: string;
}

export interface ItemLojaListGroup {
  rotulo: string;
  valor: string;
}

export interface ComentarioBarraca {
  id: number;
  idBarraca: number;
  avaliacao: number;
  texto: string;
  autor: string;
}

export interface ComentarioLoja {
  idLoja: number;
  texto: string;
  autor: string;
}

export interface DadosFormato {
  barracas: Barraca[];
  titulo: string;
}

export interface TemaTab {
  id: string;
  rotulo: string;
}

export interface ItemFAQ {
  id: string;
  pergunta: string;
  conteudo?: string;
  resposta?: string;
}

export interface Especificacao {
  especificacao: string;
  detalhes: string;
}

export interface Especificacoes {
  idBarraca: number;
  listaEspecificacoes: Especificacao[];
}

export interface ConteudoAbas {
  [chave: string]: ItemFAQ[];
}