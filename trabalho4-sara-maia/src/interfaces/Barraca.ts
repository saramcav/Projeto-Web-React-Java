import Formato from "./Formato";

interface Barraca {
    id?: number;
    imagem: string;
    formato: Formato;
    nome: string;
    descricao: string;
    disponivel: boolean;
    dataCadastro: Date;
    qtdEstoque: number;
    preco: number;  
    modalidade: "Venda" | "Aluguel";
    avaliacao: number;
    capacidade: string;
    material: string;
    estrutura: string;
    dimensoes: string;
    peso: string;
    cor: string;
}
export default Barraca;