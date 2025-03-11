import { useMutation, useQueryClient } from "@tanstack/react-query";
import Barraca from "../interfaces/Barraca";
import { URL_BARRACAS } from "../util/constants";
import useAPI from "./useAPI";

const useRemoverBarraca = () => {
  const {remover} = useAPI<Barraca>(URL_BARRACAS);

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => remover(id),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["barracas"],
      }),
  });
};
export default useRemoverBarraca;