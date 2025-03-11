import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAPICarrinho from "./useAPICarrinho";

const useRemoverItemDeCarrinho = () => {
  const { removerItemDeCarrinho } = useAPICarrinho();

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ carrinhoId, itemId }: { carrinhoId: number; itemId: number }) => 
      removerItemDeCarrinho(carrinhoId, itemId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["carrinhos"],
      });
    },
  });
};

export default useRemoverItemDeCarrinho;
