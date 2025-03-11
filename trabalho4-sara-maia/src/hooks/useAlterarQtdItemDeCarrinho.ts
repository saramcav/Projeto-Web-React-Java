import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAPICarrinho from "./useAPICarrinho";

const useAlterarQtdItemDeCarrinho = () => {
  const { alterarItemDeCarrinho } = useAPICarrinho();

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      carrinhoId,
      itemId,
      novaQuantidade,
    }: {
      carrinhoId: number;
      itemId: number;
      novaQuantidade: number;
    }) =>
      alterarItemDeCarrinho(carrinhoId, itemId, novaQuantidade),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["carrinhos"],
      });
    },
  });
};

export default useAlterarQtdItemDeCarrinho;
