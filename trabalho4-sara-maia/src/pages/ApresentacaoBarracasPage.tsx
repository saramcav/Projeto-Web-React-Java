import InfiniteScroll from "react-infinite-scroll-component";
import { useParams, Navigate } from "react-router-dom";
import { FormatoBarraca } from "../data/objetos";
import CardBarraca from "../components/CardBarraca";
import useBarracasPaginadasPorFormato from "../hooks/useBarracasPaginadasPorFormato";
import Barraca from "../interfaces/Barraca";
import useToastsStore from "../store/useToastsStore";

const paraCamelCase = (palavra: string) => {
  return palavra.charAt(0).toUpperCase() + palavra.slice(1);
};

const ApresentacaoBarracasPage = () => {
  const { nomeFormato } = useParams<{ nomeFormato: FormatoBarraca }>();

  const tamanho = 18;

  const {
    data,
    isPending: carregandoBarracas,
    error: errorBarracas,
    hasNextPage,
    fetchNextPage,
  } = useBarracasPaginadasPorFormato({ tamanho, nomeFormato });

  const { toasts } = useToastsStore();

  if (!nomeFormato) {
    return <Navigate to="/error" />;
  }

  if (carregandoBarracas) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="spinner-border text-primary" role="status">
        </div>
      </div>
    );
  }
  
  if (errorBarracas) throw errorBarracas;

  return (
    <div className="container mb-5" style={{ marginTop: "20px" }}>
      {toasts.map((t) => (
        <div key={t.id}>{t.toast}</div>
      ))}
      <h2 className="text-center mb-4">
        Barracas {nomeFormato === "geodesica"? "Geodésica" : paraCamelCase(nomeFormato)}
      </h2>
      <InfiniteScroll
        style={{ overflow: "hidden" }}
        dataLength={data.pages.reduce((total: number, page) => total + page.itens.length, 0)}
        hasMore={hasNextPage}
        loader={<h6>Carregando mais barracas...</h6>}
        next={() => fetchNextPage()}
      >
        <div className="row g-3">
          {data.pages.map((page) =>
            page.itens.map((barraca: Barraca) => (
              <div key={barraca.id!} className="col-xl-2 col-md-3 col-sm-4">
                <CardBarraca
                  id={barraca.id!}
                  titulo={barraca.nome}
                  imgSrc={`/${barraca.imagem}`}
                  preco={barraca.preco}
                  modalidade={barraca.modalidade}
                  avaliacao={barraca.avaliacao}
                  styleHTML={{ height: "100%" }}
                />
              </div>
            ))
          )}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default ApresentacaoBarracasPage;
