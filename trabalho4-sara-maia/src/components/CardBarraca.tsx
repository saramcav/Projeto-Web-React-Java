import { useNavigate } from "react-router-dom";
import Estrelas from "./Estrelas";

interface Props {
  id: number;
  titulo: string;
  imgSrc: string;
  preco: number;
  modalidade: "Venda" | "Aluguel";
  avaliacao: number;
  styleHTML?: React.CSSProperties;
}

const CardBarraca = ({
  id,
  titulo,
  imgSrc,
  preco,
  modalidade,
  avaliacao,
  styleHTML,
}: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/barracas/detalhes/${id}`);
  };

  const formatarPreco = (preco: number): string =>
    preco.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

  return (
    <div className="card" style={{ cursor: "pointer", ...styleHTML }} onClick={handleClick}>
      <img src={imgSrc} className="card-img-top" alt={titulo} />
      <div className="card-body">
        <h5 className="card-title">{titulo}</h5>
        {avaliacao === 0 ? (
          <p className="text-primary">Não há avaliações</p>
        ) : (
          <Estrelas avaliacao={avaliacao} />
        )}
        <h6 className="card-text">
          {formatarPreco(preco)} {modalidade === "Venda" ? "a unidade" : "/dia"}
        </h6>
      </div>
    </div>
  );
};

export default CardBarraca;
