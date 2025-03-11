import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import ErrorPage from "../pages/ErrorPage";
import PerfilPage from "../pages/PerfilPage";
import NossasLojasPage from "../pages/NossasLojasPage";
import FaqPage from "../pages/FaqPage";
import DetalhamentoBarracaPage from "../pages/DetalhamentoBarracaPage";
import ApresentacaoBarracasPage from "../pages/ApresentacaoBarracasPage";
import HomePage from "../pages/HomePage";
import CadastroDeBarracasPage from "../pages/CadastroDeBarracasPage";
import CarrinhoPage from "../pages/CarrinhoPage";
import ListaDeBarracasPage from "../pages/ListaDeBarracasPage";
import PrivateRoutes from "./PrivateRoutes";
import LoginPage from "../pages/LoginPage";
import CadastroContaPage from "../pages/CadastroContaPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "perfil", element: <PerfilPage /> },
      { path: "nossas-lojas", element: <NossasLojasPage /> },
      { path: "barracas/detalhes/:id", element: <DetalhamentoBarracaPage /> },
      { path: "barracas/formato/:nomeFormato", element: <ApresentacaoBarracasPage /> },
      { path: "faq", element: <FaqPage /> },
      { path: "login", element: <LoginPage />},
      { path: "login/cadastro", element: <CadastroContaPage/>}
    ],
  },
  {
    path: "/",
    element: <PrivateRoutes />,
    errorElement: <ErrorPage/>,
    children: [
      { path: "carrinho", element: <CarrinhoPage /> }, 
      { path: "cadastrar-barraca", element: <CadastroDeBarracasPage /> },    
      { path: "listar-barracas", element: <ListaDeBarracasPage /> }, 
    ],
  }
]);
export default router;


