import useRemoverItemDeCarrinho from "../hooks/useRemoverItemDeCarrinho";
import useUsuarioStore from "../store/useUsuarioStore";
import useCarrinhoPorConta from "../hooks/useCarrinhoPorConta";
import Carrinho from "../interfaces/Carrinho";
import useBarracasStore from "../store/useBarracasStore";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import ItemDeCarrinho from "../interfaces/ItemDeCarrinho";
import useAlterarQtdItemDeCarrinho from "../hooks/useAlterarQtdItemDeCarrinho";

const TabelaCarrinho = () => {
  const setBarracaSelecionada = useBarracasStore(
    (s) => s.setBarracaSelecionada
  );
  const ehAdmin = useUsuarioStore((s) => s.ehAdmin);
  const navigate = useNavigate();

  const { mutate: removerItem } = useRemoverItemDeCarrinho();
  const { mutate: alterarQtdItem } = useAlterarQtdItemDeCarrinho();

  const qtdRef = useRef<{ [key: number]: HTMLInputElement | null }>({});

  const calculaTotalCarrinho = (carrinho: Carrinho) => {
    return carrinho.itens.reduce(
      (total, item) => total + item.barraca.preco * item.qtd,
      0
    );
  };

  const calculaTotalItem = (item: ItemDeCarrinho) => {
    return item.barraca.preco * item.qtd;
  };

  const handleRemoverItem = (carrinhoId: number, itemId: number) => {
    removerItem({
      carrinhoId: carrinhoId,
      itemId: itemId,
    });
  };

  const handleAlteracaoQuantidade = (
    carrinhoId: number,
    itemId: number,
    novaQuantidade: number
  ) => {
    if (novaQuantidade === 0) {
      handleRemoverItem(carrinhoId, itemId);
    } else {
      alterarQtdItem({
        carrinhoId: carrinhoId,
        itemId: itemId,
        novaQuantidade: novaQuantidade,
      });
    }
  };

  const conta = useUsuarioStore((s) => s.usuarioLogado);

  const {
    data: carrinho,
    isPending: carregandoCarrinho,
    error: errorCarrinho,
  } = useCarrinhoPorConta(conta);

  if (carregandoCarrinho) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="spinner-border text-primary" role="status"></div>
      </div>
    );
  }
  if (errorCarrinho) throw errorCarrinho;

  return !carrinho || carrinho.itens.length === 0 ? (
    <div className="alert alert-primary text-center" role="alert">
      Seu carrinho está vazio!
    </div>
  ) : (
    <div className="table-responsive">
      <table className="table table-hover table-no-vertical-borders table-sm">
        <thead>
          <tr>
            <th className="align-middle text-center">Barraca</th>
            <th className="align-middle text-center">Preço Unitário</th>
            <th className="align-middle text-center">Quantidade</th>
            <th className="align-middle text-center">Preço Total</th>
            <th className="align-middle text-center">Remover</th>
          </tr>
        </thead>
        <tbody>
          {carrinho.itens.map((item) => (
            <tr key={item.id}>
              <td width="60%" className="align-middle">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={item.barraca.imagem}
                    width="120px"
                    alt={item.barraca.nome}
                    style={{ marginRight: "15px" }}
                  />
                  <div>
                    <a
                      onClick={() => {
                        setBarracaSelecionada(item.barraca);
                        if (ehAdmin) {
                          navigate("/cadastrar-barraca");
                        } else {
                          navigate(`/barracas/detalhes/${item.barraca.id!}`);
                        }
                      }}
                      className="link_underline"
                      style={{ cursor: "pointer" }}
                    >
                      <strong>{item.barraca.nome}</strong>
                    </a>
                    <br />
                    <small>{item.barraca.descricao.slice(0, 170)}...</small>
                  </div>
                </div>
              </td>
              <td width={"10%"} className="align-middle text-center pe-3">
                R${" "}
                {item.barraca.preco.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                  useGrouping: true,
                })}
              </td>
              <td width="10%" className="align-middle text-center">
                <input
                  type="number"
                  value={item.qtd}
                  min="0"
                  ref={(el) => (qtdRef.current[item.id] = el)}
                  onChange={(e) =>
                    handleAlteracaoQuantidade(
                      carrinho.id,
                      item.id,
                      parseInt(e.target.value)
                    )
                  }
                  className="form-control form-control-sm"
                  style={{ width: "80px", display: "inline-block" }}
                />
              </td>
              <td width={"10%"} className="align-middle text-center pe-3">
                R${" "}
                {calculaTotalItem(item).toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                  useGrouping: true,
                })}
              </td>
              <td width="20%" className="align-middle text-center">
                <button
                  onClick={() => handleRemoverItem(carrinho.id, item.id)}
                  className="btn btn-danger btn-sm"
                  type="button"
                >
                  <i className="bi bi-x"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td
              className="align-middle text-end fw-bold"
              colSpan={3}
              style={{ paddingRight: "25px" }}
            >
              Total Carrinho...
            </td>
            <td className="align-middle text-center fw-bold" colSpan={2}>
              R${" "}
              {calculaTotalCarrinho(carrinho).toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
                useGrouping: true,
              })}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default TabelaCarrinho;
