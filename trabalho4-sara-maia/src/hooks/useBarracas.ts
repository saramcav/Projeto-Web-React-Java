import { useQuery } from "@tanstack/react-query";
import useAPI from "./useAPI";
import { URL_BARRACAS } from "../util/constants";
import Barraca from "../interfaces/Barraca";

const useBarracas = () => {
  const {recuperar} = useAPI<Barraca>(URL_BARRACAS);

  return useQuery({
    queryKey: ["barracas"],
    queryFn: () => recuperar(),
    staleTime: 10_000,
  })
};

export default useBarracas;