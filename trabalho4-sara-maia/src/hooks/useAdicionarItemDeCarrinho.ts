import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAPICarrinho from "./useAPICarrinho";

const useAdicionarItemAoCarrinho = () => {
  const { cadastrarItemDeCarrinho } = useAPICarrinho();

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      carrinhoId,
      barracaId,
      qtd,
    }: {
      carrinhoId: number;
      barracaId: number;
      qtd: number;
    }) =>
      cadastrarItemDeCarrinho(carrinhoId, barracaId, qtd),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["carrinhos"], 
      });
    },
  });
};

export default useAdicionarItemAoCarrinho;
