import { useMutation, useQueryClient } from "@tanstack/react-query";
import { URL_BARRACAS } from "../util/constants";
import useAPI from "./useAPI";
import Barraca from "../interfaces/Barraca";

const useAlterarBarraca = () => {
  const {alterar} = useAPI<Barraca>(URL_BARRACAS);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (barraca: Barraca) => alterar(barraca),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["barracas"],
      }),
  });
};

export default useAlterarBarraca;
