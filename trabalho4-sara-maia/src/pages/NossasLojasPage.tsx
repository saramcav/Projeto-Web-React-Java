import Carousel from "../components/Carousel";
import OffCanvas from "../components/OffCanvas";
import ListGroup from "../components/ListGroup";
import CardLoja from "../components/CardLoja";
import { Loja, ComentarioLoja } from "../interfaces/interfaces";
import { lojas, comentariosLojas } from "../data/objetos";
import useToastsStore from "../store/useToastsStore";

const NossasLojasPage = () => {
  const { toasts } = useToastsStore();

  const renderizarComentario = (comentario: ComentarioLoja) => (
    <blockquote className="blockquote">
      <p>{comentario.texto}</p>
      <footer className="blockquote-footer">{comentario.autor}</footer>
    </blockquote>
  );

  const renderizarHorario = (loja: Loja) => (
    <div className="d-flex align-items-start">
      <i
        className={`bi bi-geo-alt-fill text-${
          loja.status === "Aberta" ? "success" : "danger"
        } me-2`}
      ></i>
      <div>
        <strong>{loja.nome}</strong>
        <p className="mb-0 text-muted">{loja.horario}</p>
      </div>
    </div>
  );

  return (
    <div className="container" id="containerNossasLojas">
      {toasts.map((t) => (
        <div key={t.id}>{t.toast}</div>
      ))}
      <div className="d-flex align-items-center mb-2">
        <h2 className="mb-0 me-3">Nossas Lojas</h2>

        <button
          className="btn btn-outline-success btn-sm"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasLojas"
          aria-controls="offcanvasLojas"
        >
          <i className="bi bi-info-circle"></i> Info
        </button>
      </div>
      <p className="mb-4">
        Conheça nossas lojas presenciais e visite-as já!
      </p>

      <div className="row g-4 mb-5">
        {lojas.map((loja) => (
          <div className="col-md-4" key={loja.id}>
            <CardLoja loja={loja} />
          </div>
        ))}
      </div>

      <div className="mb-5">
        <h2>O que dizem nossos clientes?</h2>
        <p>
          Aqui estão algumas opiniões dos nossos clientes sobre nossas unidades:
        </p>
        <Carousel
          id="carrosselComentariosLojas"
          itens={comentariosLojas}
          renderizarItem={renderizarComentario}
          intervalo={6000}
          controles={true}
          rolagemAutomatica={true}
        />
      </div>

      <OffCanvas
        id="offcanvasLojas"
        titulo="Detalhes sobre nossas lojas"
        icone="bi-shop"
        corpo={
          <>
            <ListGroup
              itens={lojas}
              renderizarItem={renderizarHorario}
              classNameLG="mb-3"
            />
            <p className="text-muted text-center">
              Informações de horários podem sofrer alterações. Por favor,
              verifique antes de visitar.
            </p>
          </>
        }
      />
    </div>
  );
};

export default NossasLojasPage;