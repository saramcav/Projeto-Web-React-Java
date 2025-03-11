import { keepPreviousData, useInfiniteQuery } from "@tanstack/react-query";
import Barraca from "../interfaces/Barraca";
import ResultadoPaginado from "../interfaces/ResultadoPaginado";
import useAPIBarraca from "./useAPIBarraca";

interface QueryString {
  tamanho: number;
  nomeFormato?: string;
}
const useBarracasPaginadasPorFormato = (queryString: QueryString) => {
  const { recuperarBarracasPaginadasPorFormato } = useAPIBarraca();

  return useInfiniteQuery<ResultadoPaginado<Barraca>>({
    queryKey: ["barracas", "formato", "paginacao", queryString],
    queryFn: ({pageParam}) =>
      recuperarBarracasPaginadasPorFormato({
        params: {
          pagina: pageParam,
          ...queryString,
        },
      }),
    staleTime: 10_000,
    initialPageParam: 0,
    placeholderData: keepPreviousData,
    getNextPageParam: (lastPage, pages) => {
      return lastPage.paginaCorrente < lastPage.totalDePaginas - 1 ? lastPage.paginaCorrente + 1 : undefined;
    }
  });
};
export default useBarracasPaginadasPorFormato;
