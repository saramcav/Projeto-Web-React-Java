import TabelaCarrinho from "../components/TabelaCarrinho";
import useToastsStore from "../store/useToastsStore";
import { useNavigate } from "react-router-dom";

const CarrinhoPage = () => {
  const navigate = useNavigate();

  const handleVoltarCompras = () => {
    navigate("/");
  }

  const { toasts } = useToastsStore();
  return (
    <div className="container" id="containerCarrinho">
      {toasts.map((t) => (
        <div key={t.id}>{t.toast}</div>
      ))}
      <h5>Meu Carrinho</h5>
      <TabelaCarrinho />
      <div className="d-flex justify-content-between mb-3">
        <button className="btn btn-success" onClick={handleVoltarCompras}> <i className="bi bi-arrow-left"></i> Voltar às Compras</button>
        <button className="btn btn-success">Fechar Compra</button>
      </div>
    </div>
  );
};

export default CarrinhoPage;
