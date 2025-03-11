import axios from "axios";
import Carrinho from "../interfaces/Carrinho";
import { URL_BASE, URL_CARRINHO } from "../util/constants";

const useAPICarrinho = () => {
  const axiosInstance = axios.create({
    baseURL: URL_BASE,
  });

  const recuperarCarrinhoMaisRecentePorContaUsuario = (usuario: string) =>
    axiosInstance
      .get<Carrinho>(URL_CARRINHO + "/usuario/" + usuario + "/mais-recente")
      .then((res) => res.data)
      .catch((error) => {
        tratarErro(error);
        throw error;
      });
    
  const alterarItemDeCarrinho = (carrinhoId: number, itemId: number, novaQuantidade: number) =>
    axiosInstance
      .put<Carrinho>(URL_CARRINHO + `/${carrinhoId}/itens/${itemId}?novaQuantidade=${novaQuantidade}`)
      .then((res) => res.data)
      .catch((error) => {
        tratarErro(error);
        throw error;
      });
  
  const removerItemDeCarrinho = (carrinhoId: number, itemId: number) =>
    axiosInstance
      .delete<Carrinho>(URL_CARRINHO + `/${carrinhoId}/itens/${itemId}`)
      .then((res) => res.data)
      .catch((error) => {
        tratarErro(error);
        throw error;
      });
  
  const cadastrarItemDeCarrinho = (carrinhoId: number, barracaId: number, qtd: number) =>
    axiosInstance
      .post<Carrinho>(URL_CARRINHO + `/${carrinhoId}/itens?barracaId=${barracaId}&qtd=${qtd}`)
      .then((res) => res.data)
      .catch((error) => {
        tratarErro(error);
        throw error;
      });
      
  const tratarErro = (error: any) => {
    console.log("Erro: ", error);

    if (error.response) {
      console.log(
        "A requisição foi realizada e o servidor respondeu com as seguintes informações: "
      );
      console.log("Mensagem do servidor: ", error.response.data);
      console.log("Código de status: ", error.response.status);
    } else if (error.request && error.config) {
      console.log(
        "A requisição foi realizada mas nenhuma resposta foi recebida."
      );
      console.log("URL Base: ", error.config.baseURL);
      console.log("Método de envio: ", error.config.method);
      console.log("URL solicitado: ", error.config.url);
    } else {
      console.log(
        "Algo aconteceu durante a configuração do pedido que acionou um erro: ",
        error.message
      );
    }
  };

  return { recuperarCarrinhoMaisRecentePorContaUsuario, alterarItemDeCarrinho, cadastrarItemDeCarrinho, removerItemDeCarrinho };
};
export default useAPICarrinho;
