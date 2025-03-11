import { useQuery } from "@tanstack/react-query";
import useAPIBarraca from "./useAPIBarraca";

const useBarracaPorId = (id: string) => {
  const { recuperarBarracaPorId } = useAPIBarraca();

  return useQuery({
    queryKey: ["barracas", id],
    queryFn: () => recuperarBarracaPorId(id),
    staleTime: 10_000, 
  });
};

export default useBarracaPorId;
