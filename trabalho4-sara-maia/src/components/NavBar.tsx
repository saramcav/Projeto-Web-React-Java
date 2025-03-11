import { Link } from "react-router-dom";
import useUsuarioStore from "../store/useUsuarioStore";

const NavBar = () => {
  const usuarioLogado = useUsuarioStore((s) => s.usuarioLogado);
  const setUsuarioLogado = useUsuarioStore((s) => s.setUsuarioLogado);
  const setRotaDestino = useUsuarioStore((s) => s.setRotaDestino);
  const ehAdmin = useUsuarioStore((s) => s.ehAdmin);
  
  const handleLogout = () => {
    setUsuarioLogado("");
    setRotaDestino("");
  };

  return (
    <nav className="navbar navbar-expand-lg tema-header-footer px-5 fixed-top">
      <div className="container-fluid px-5">
        <Link className="navbar-brand" to="/">
          AlugaAventura
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Botão de navegação"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="barracas/formato/iglu">
                Iglu
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="barracas/formato/bivak">
                Bivak
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="barracas/formato/geodesica">
                Geodésica
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="barracas/formato/tunel">
                Túnel
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="nossas-lojas">
                Nossas Lojas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="faq">
                FAQ
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
          {ehAdmin && (
              <li className="nav-item me-3">
                <Link className="nav-link" to="cadastrar-barraca">
                  <i className="bi bi-pencil-square"></i> Cadastro
                </Link>
              </li>
            )}
            {ehAdmin && (
              <li className="nav-item me-3">
                <Link className="nav-link" to="listar-barracas">
                  <i className="bi bi-list"></i> Listagem
                </Link>
              </li>
            )}
            {!ehAdmin && (
              <li className="nav-item">
                <Link className="nav-link" to="carrinho">
                  <i className="bi bi-cart"></i> Carrinho
                </Link>
              </li>
            )}
            {usuarioLogado ? (
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-person"></i> Perfil
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="perfil">
                      <i className="bi bi-person-circle"></i> Meu Perfil
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      <i className="bi bi-bag"></i> Meus aluguéis
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      <i className="bi bi-bag-check"></i> Minhas compras
                    </Link>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={handleLogout}>
                      <i className="bi bi-box-arrow-right"></i> Sair
                    </button>
                  </li>
                </ul>
              </li>
            ) : (
              <li className="nav-item ms-3">
                <Link className="nav-link" to="login">
                  <i className="bi bi-box-arrow-in-right"></i> Entrar
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;



