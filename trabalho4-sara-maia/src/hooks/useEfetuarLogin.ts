import { useMutation } from "@tanstack/react-query";
import useAPIAutenticacao from "./useAPIAutenticacao";
import Usuario from "../interfaces/Usuario";

const useEfetuarLogin = () => {
    const { login } = useAPIAutenticacao();
  
    return useMutation({
      mutationFn: (usuario: Usuario) => login(usuario),
    });
  };
  
export default useEfetuarLogin;

