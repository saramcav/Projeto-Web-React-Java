import axios, { AxiosRequestConfig } from "axios";
import Barraca from "../interfaces/Barraca";
import { URL_BASE, URL_BARRACAS } from "../util/constants";
import ResultadoPaginado from "../interfaces/ResultadoPaginado";

const useAPIBarraca = () => {
  const axiosInstance = axios.create({
    baseURL: URL_BASE,
  });


  const recuperarBarracasPorIdFormato = (id?: string) =>
    axiosInstance
      .get<Barraca[]>(URL_BARRACAS + (id ? "/formato?id=" + id : ""))
      .then((res) => res.data)
      .catch((error) => {
        tratarErro(error);
        throw error;
      });

  const recuperarBarracasPorNomeDoFormato = (nome?: string) =>
    axiosInstance
      .get<Barraca[]>(URL_BARRACAS + (nome ? "/formato?nome=" + nome : ""))
      .then((res) => res.data)
      .catch((error) => {
        tratarErro(error);
        throw error;
      });

  const recuperarMelhoresBarracasPorIdFormato = (idFormato?: string, quantidade?: string) =>
    axiosInstance
      .get<Barraca[]>(
        `${URL_BARRACAS}/formato${idFormato && quantidade ? `?id=${idFormato}&quantidade=${quantidade}` : ""}`
      )
      .then((res) => res.data)
      .catch((error) => {
        tratarErro(error);
        throw error;
      });
          
  const recuperarBarracaPorId = (id: string) =>
    axiosInstance
      .get<Barraca>(URL_BARRACAS + "/" + id)
      .then((res) => res.data)
      .catch((error) => {
        tratarErro(error);
        throw error;
      });
  
  
  const recuperarBarracasPaginadasPorFormato = (config: AxiosRequestConfig) =>
    axiosInstance
      .get<ResultadoPaginado<Barraca>>(URL_BARRACAS + "/formato/paginacao", config)
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

  return { recuperarBarracasPorIdFormato, recuperarBarracaPorId, recuperarMelhoresBarracasPorIdFormato, recuperarBarracasPorNomeDoFormato, recuperarBarracasPaginadasPorFormato };
};
export default useAPIBarraca;
