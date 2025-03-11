import { useLocation } from "react-router-dom";
import useUsuarioStore from "../store/useUsuarioStore";
import Layout from "./Layout";
import { Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  const usuarioLogado = useUsuarioStore((s) => s.usuarioLogado);
  const setRotaDestino = useUsuarioStore((s) => s.setRotaDestino);
  const location = useLocation();

  if (usuarioLogado.length === 0) {
    setRotaDestino(location.pathname);
    return <Navigate to="login"/>;
  }
  
  return <Layout />;
};

export default PrivateRoutes;
