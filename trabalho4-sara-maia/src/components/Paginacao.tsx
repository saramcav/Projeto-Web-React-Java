import useBarracasComPaginacao from "../hooks/useBarracasComPaginacao";
import useBarracasStore from "../store/useBarracasStore";


const Paginacao = () => {
  const pagina = useBarracasStore((s) => s.pagina);
  const tamanho = useBarracasStore((s) => s.tamanho);
  const nome = useBarracasStore((s) => s.nome);

  const setPagina = useBarracasStore((s) => s.setPagina);

  const tratarPaginacao = (pagina: number) => {
    setPagina(pagina);
  };

  const {
    data: resultadoPaginado,
    isPending: carregandoBarracas,
    error: errorBarracas,
  } = useBarracasComPaginacao({ pagina, tamanho, nome });

  if (carregandoBarracas) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="spinner-border text-primary" role="status"></div>
      </div>
    );
  }
  if (errorBarracas) throw errorBarracas;

  const totalDePaginas = resultadoPaginado.totalDePaginas;

  if (totalDePaginas < 2) return null;

  const paginas = [];

  const mostrarTresPontosEsquerda = pagina > 2;
  const mostrarTresPontosDireita = pagina < totalDePaginas - 3;

  if (mostrarTresPontosEsquerda) {
    paginas.push(
      <li key={0} className="page-item">
        <a onClick={() => tratarPaginacao(0)} className="page-link" style={{ cursor: "pointer" }}>
          1
        </a>
      </li>
    );
    paginas.push(
      <li key="left-dots" className="page-item disabled">
        <span className="page-link">...</span>
      </li>
    );
  }

  const inicio = Math.max(pagina - 2, 0);
  const fim = Math.min(pagina + 2, totalDePaginas - 1);

  for (let i = inicio; i <= fim; i++) {
    paginas.push(
      <li key={i} className={pagina === i ? "page-item active" : "page-item"}>
        <a onClick={() => tratarPaginacao(i)} className="page-link" style={{ cursor: "pointer" }}>
          {i + 1}
        </a>
      </li>
    );
  }

  if (mostrarTresPontosDireita) {
    paginas.push(
      <li key="right-dots" className="page-item disabled">
        <span className="page-link">...</span>
      </li>
    );
    paginas.push(
      <li key={totalDePaginas - 1} className="page-item">
        <a
          onClick={() => tratarPaginacao(totalDePaginas - 1)}
          className="page-link"
          style={{ cursor: "pointer" }}
        >
          {totalDePaginas}
        </a>
      </li>
    );
  }

  return (
    <nav aria-label="Paginação de barracas">
      <ul className="pagination">
        <li className={pagina === 0 ? "page-item disabled" : "page-item"}>
          <a
            onClick={() => tratarPaginacao(pagina - 1)}
            className="page-link"
            aria-label="Anterior"
            style={{ cursor: "pointer" }}
          >
            Anterior
          </a>
        </li>
        {paginas}
        <li
          className={
            pagina === totalDePaginas - 1 ? "page-item disabled" : "page-item"
          }
        >
          <a
            onClick={() => tratarPaginacao(pagina + 1)}
            className="page-link"
            aria-label="Próxima"
            style={{ cursor: "pointer" }}
          >
            Próxima
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Paginacao;
