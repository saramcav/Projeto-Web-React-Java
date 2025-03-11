import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Layout = () => {
  const location = useLocation();
  
  const ehLoginOuCadastroPage = location.pathname === "/login" || location.pathname === "/login/cadastro";

  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBar />
      <main style={{ marginTop: "54px" }} className={`flex-grow-1 ${!ehLoginOuCadastroPage ? "mb-5" : ""}`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
