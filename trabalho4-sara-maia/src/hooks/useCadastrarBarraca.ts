import { useMutation, useQueryClient } from "@tanstack/react-query";
import { URL_BARRACAS } from "../util/constants";
import useAPI from "./useAPI";
import Barraca from "../interfaces/Barraca";

const useCadastrarBarraca = () => {
  const {cadastrar} = useAPI<Barraca>(URL_BARRACAS);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (barraca: Barraca) => cadastrar(barraca),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["barracas"],
      }),
  });
};

export default useCadastrarBarraca;
