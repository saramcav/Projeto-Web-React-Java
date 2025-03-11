import { useQuery } from "@tanstack/react-query";
import useAPIBarraca from "./useAPIBarraca";

const useBarracasPorFormato = (id?: string, quantidade?: string, nome?: string) => {
  const { recuperarBarracasPorIdFormato, recuperarMelhoresBarracasPorIdFormato, recuperarBarracasPorNomeDoFormato } = useAPIBarraca();

  return useQuery({
    queryKey: id
      ? quantidade
        ? ["barracas", "formato", id, quantidade]
        : ["barracas", "formato", id]
      : nome
      ? ["barracas", "formato", nome]
      : ["barracas"], 
    queryFn: () => {
      if (id) {
        return quantidade
          ? recuperarMelhoresBarracasPorIdFormato(id, quantidade)
          : recuperarBarracasPorIdFormato(id);
      } else if (nome) {
        return recuperarBarracasPorNomeDoFormato(nome);
      } else {
        return Promise.reject("Parâmetros id ou nome não fornecidos");
      }
    },
    staleTime: 10_000,
  });
};

export default useBarracasPorFormato;
