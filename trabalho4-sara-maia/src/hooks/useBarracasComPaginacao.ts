import { keepPreviousData, useQuery } from "@tanstack/react-query";
import Barraca from "../interfaces/Barraca";
import { URL_BARRACAS } from "../util/constants";
import useAPI from "./useAPI";

interface QueryString {
  pagina: number;
  tamanho: number;
  // ordenação
  nome?: string;
  campo?: string;
  ordem?: string;
}

const useBarracasComPaginacao = (queryString: QueryString) => {
  const { recuperarPagina } = useAPI<Barraca>(URL_BARRACAS);

  return useQuery({
    queryKey: ["barracas", "paginacao", queryString],
    queryFn: () =>
      recuperarPagina({
        params: {
          ...queryString,
        },
      }),
    staleTime: 10_000,
    placeholderData: keepPreviousData,
  });
};
export default useBarracasComPaginacao;
