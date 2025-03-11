import { ComentarioBarraca } from "../interfaces/interfaces";
import Estrelas from "./Estrelas";

interface Props {
  comentarios: ComentarioBarraca[];
}

const Comentarios = ({ comentarios }: Props) => {
  return (
    <div>
      {comentarios.map((comentario) => (
        <div key={comentario.id} className="card mb-3">
          <div className="card-body d-flex align-items-center">
            <i className="bi bi-person me-4" style={{ fontSize: "2rem" }}></i>
            <div>
              <h5 className="card-title mb-1">{comentario.autor}</h5>
              <Estrelas avaliacao={comentario.avaliacao} />
              <p className="card-text mb-0" style={{ textAlign: "justify" }}>
                "{comentario.texto}"
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comentarios;
