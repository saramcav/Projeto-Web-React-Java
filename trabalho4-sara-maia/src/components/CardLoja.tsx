import { Loja, ItemLojaListGroup } from "../interfaces/interfaces";
import ListGroup from "./ListGroup";

interface Props {
  loja: Loja;
}

const CardLoja = ({ loja }: Props) => {
  const itensLoja: ItemLojaListGroup[] = [
    { rotulo: "Endereço", valor: loja.endereco },
    { rotulo: "Telefone", valor: loja.telefone },
  ];

  return (
    <div className="card shadow border-0">
      <div className="card-header text-center">
        <span
          className={`badge bg-${
            loja.status === "Aberta" ? "success" : "danger"
          }`}
        >
          {loja.status}
        </span>
        <div className="d-flex justify-content-center align-items-center">
          <i className="bi bi-geo-alt fs-3 me-2"></i>
          <span className="fw-bold">{loja.nome}</span>
        </div>
      </div>

      <ListGroup
        itens={itensLoja}
        renderizarItem={(dadosLoja) => (
          <>
            <strong>{dadosLoja.rotulo}:</strong> {dadosLoja.valor}
          </>
        )}
      />
    </div>
  );
};

export default CardLoja;
