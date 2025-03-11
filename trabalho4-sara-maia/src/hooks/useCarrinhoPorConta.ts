import { useQuery } from "@tanstack/react-query";
import useAPICarrinho from "./useAPICarrinho";

const useCarrinhoPorConta = (conta: string) => {
  const { recuperarCarrinhoMaisRecentePorContaUsuario } = useAPICarrinho();

  return useQuery({
    queryKey: ["carrinhos", conta],
    queryFn: () => recuperarCarrinhoMaisRecentePorContaUsuario(conta),
    staleTime: 10_000, 
  });
};

export default useCarrinhoPorConta;
