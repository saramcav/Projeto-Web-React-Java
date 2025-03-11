import { useParams, useNavigate, useLocation } from "react-router-dom";
import useBarracaPorId from "../hooks/useBarracaPorId";
import Toast from "../components/Toast";
import TabelaEspecificacoes from "../components/TabelaEspecificacoes";
import Estrelas from "../components/Estrelas";
import CardComentarioBarraca from "../components/CardComentarioBarraca";
import { comentarios } from "../data/objetos";
import flatpickr from "flatpickr";
import { Portuguese } from "flatpickr/dist/l10n/pt.js";
import { useState, useEffect } from "react";
import useUsuarioStore from "../store/useUsuarioStore";
import dayjs from "dayjs";
import useBarracasStore from "../store/useBarracasStore";
import Barraca from "../interfaces/Barraca";
import useRemoverBarraca from "../hooks/useRemoverBarraca";
import useToastsStore from "../store/useToastsStore";
import useAdicionarItemAoCarrinho from "../hooks/useAdicionarItemDeCarrinho";
import useCarrinhoPorConta from "../hooks/useCarrinhoPorConta";

const DetalhamentoBarracaPage = () => {
  const { id } = useParams<string>();
  const {
    data: barraca,
    isLoading: carregandoBarraca,
    isError: ocorreuErro,
    error: errorBarraca,
  } = useBarracaPorId(id!);
  const setBarracaSelecionada = useBarracasStore(
    (s) => s.setBarracaSelecionada
  );

  const { mutate: adicionarItem } = useAdicionarItemAoCarrinho();

  const location = useLocation();

  const setRotaDestino = useUsuarioStore((s) => s.setRotaDestino);

  const conta = useUsuarioStore((s) => s.usuarioLogado);

  const { data: carrinho } =
    conta.length > 0 ? useCarrinhoPorConta(conta) : { data: null };

  const [qtd, setQtd] = useState(1);
  const [entrega, setEntrega] = useState("retirar");
  const [complemento, setComplemento] = useState("");
  const [cep, setCep] = useState("");

  const ehAdmin = useUsuarioStore((s) => s.ehAdmin);

  const { toasts, adicionarToast } = useToastsStore();

  const navigate = useNavigate();
  const { mutate: removerBarraca } = useRemoverBarraca();

  const [modalConfirmacaoAberto, setModalConfirmacaoAberto] = useState(false);

  useEffect(() => {
    if (barraca?.modalidade === "Aluguel") {
      flatpickr("#periodo", {
        locale: Portuguese,
        mode: "range",
        dateFormat: "d/m/Y",
      });
    }
  }, [barraca]);

  const handleComprarAgora = () => {
    adicionarToast({
      id: 1,
      toast: (
        <Toast
          icone="bi-check-circle"
          titulo="Compra Incompleta"
          mensagem={`Compra ainda não implementada!`}
        />
      ),
    });
  };

  const handleAdicionarCarrinho = (barraca: Barraca) => {
    if (conta.length === 0) {
      setRotaDestino(location.pathname);
      navigate("/login");
      return;
    }

    adicionarItem({
      carrinhoId: carrinho!.id,
      barracaId: barraca.id!,
      qtd: qtd,
    });

    adicionarToast({
      id: 2,
      toast: (
        <Toast
          icone="bi-cart"
          titulo="Carrinho"
          mensagem={`${barraca.nome} adicionada ao carrinho!`}
        />
      ),
    });
  };

  const handleEditarBarraca = (barraca: Barraca) => {
    setBarracaSelecionada(barraca);
    navigate("/cadastrar-barraca");
  };

  const handleRemoverBarraca = (id: number, nomeBarraca: string) => {
    removerBarraca(id);
    adicionarToast({
      id: 1,
      toast: (
        <Toast
          icone="bi-check-circle"
          titulo="Remoção Confirmada"
          mensagem={`${nomeBarraca} removida com sucesso!`}
        />
      ),
    });
    navigate(-1);
  };

  const handleAlugarAgora = () => {
    adicionarToast({
      id: 1,
      toast: (
        <Toast
          icone="bi-check-circle"
          titulo="Aluguel Incompleto"
          mensagem={`Aluguel ainda não implementado!`}
        />
      ),
    });
  };

  const formatarPreco = (preco: number) =>
    preco.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

  if (carregandoBarraca) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="spinner-border text-primary" role="status">
        </div>
      </div>
    );
  }

  if (ocorreuErro) {
    return <div>Erro ao carregar barraca: {errorBarraca?.message}</div>;
  }

  if (!barraca) {
    return <div>Nenhuma barraca encontrada.</div>;
  }

  return (
    <div className="container" id="containerDetalhamentoBarraca">
      <div className="row mb-5">
        <div className="col-12 col-lg-6">
          <img
            src={`/${barraca.imagem}`}
            className="img-fluid rounded"
            alt={barraca.nome}
          />
        </div>

        <div className="col-md-6">
          <h1 className="display-5">{barraca.nome}</h1>
          {barraca.avaliacao === 0 ? (
            <p className="text-primary">Não há avaliações</p>
          ) : (
            <Estrelas avaliacao={barraca.avaliacao} />
          )}
          <p className="fs-4 text-primary">
            {formatarPreco(barraca.preco)}{" "}
            {barraca.modalidade === "Venda" ? " a unidade" : " por dia"}
          </p>

          {ehAdmin ? (
            <div className="mb-3">
              <TabelaEspecificacoes
                dados={[
                  {
                    especificacao: "Data Cadastro",
                    detalhes: dayjs(barraca.dataCadastro).format("DD/MM/YYYY"),
                  },
                  { especificacao: "Modalidade", detalhes: barraca.modalidade },
                  {
                    especificacao: "Estoque",
                    detalhes: barraca.qtdEstoque.toString(),
                  },
                  {
                    especificacao: "Disponível",
                    detalhes: barraca.disponivel ? "Sim" : "Não",
                  },
                ]}
                nomeColunaChave="Atributo"
                nomeColunaValor="Valor"
              />

              <button
                className="btn btn-warning btn-lg w-100 mb-3"
                onClick={() => handleEditarBarraca(barraca)}
              >
                Editar Barraca
              </button>

              <button
                className="btn btn-danger btn-lg w-100"
                onClick={() => setModalConfirmacaoAberto(true)}
              >
                Remover Barraca
              </button>

              {modalConfirmacaoAberto && (
                <div
                  className="modal show d-block modal-backdrop-custom"
                  tabIndex={-1}
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">Confirmar Remoção</h5>
                        <button
                          type="button"
                          className="btn-close"
                          aria-label="Close"
                          onClick={() => setModalConfirmacaoAberto(false)}
                        ></button>
                      </div>
                      <div className="modal-body">
                        <p>
                          Tem certeza de que deseja remover{" "}
                          <strong>{barraca.nome}</strong>?
                        </p>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          onClick={() => setModalConfirmacaoAberto(false)}
                        >
                          Cancelar
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() =>
                            handleRemoverBarraca(barraca.id!, barraca.nome)
                          }
                        >
                          Confirmar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            barraca.modalidade === "Venda" && (
              <>
                <div className="mb-3">
                  <label htmlFor="qtd" className="form-label">
                    Quantidade
                  </label>
                  <input
                    type="number"
                    id="qtd"
                    className="form-control"
                    min="1"
                    value={qtd}
                    onChange={(e) => setQtd(Number(e.target.value))}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="complemento" className="form-label">
                    Brindes Gratuitos
                  </label>
                  <select
                    className="form-select"
                    id="complemento"
                    value={complemento}
                    onChange={(e) => setComplemento(e.target.value)}
                  >
                    <option value="">Selecione</option>
                    <option value="brinde1">Cobertura Adicional</option>
                    <option value="brinde2">Iluminação LED</option>
                    <option value="brinde3">Kit de Reparos</option>
                  </select>
                </div>

                <div className="mt-4">
                  <h6 className="mb-3">Forma de entrega</h6>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="opcaoDeEntrega"
                      id="retirar"
                      value="retirar"
                      checked={entrega === "retirar"}
                      onChange={() => setEntrega("retirar")}
                    />
                    <label className="form-check-label" htmlFor="retirar">
                      Retirar na loja
                    </label>
                  </div>
                  <div className="form-check form-check-inline mb-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="opcaoDeEntrega"
                      id="entregar"
                      value="entregar"
                      checked={entrega === "entregar"}
                      onChange={() => setEntrega("entregar")}
                    />
                    <label className="form-check-label" htmlFor="entregar">
                      Receber em casa
                    </label>
                  </div>

                  {entrega === "entregar" && (
                    <div id="seletorCEP" className="mb-3">
                      <label htmlFor="cep" className="form-label">
                        CEP
                      </label>
                      <input
                        type="text"
                        id="cep"
                        className="form-control"
                        placeholder="Digite seu CEP"
                        value={cep}
                        onChange={(e) => setCep(e.target.value)}
                      />
                    </div>
                  )}

                  <button
                    className="btn btn-success btn-lg w-100 mb-3"
                    onClick={handleComprarAgora}
                  >
                    Comprar Agora
                  </button>
                  <button
                    className="btn btn-primary btn-lg w-100"
                    onClick={() => handleAdicionarCarrinho(barraca)}
                  >
                    Adicionar ao Carrinho
                  </button>
                </div>
              </>
            )
          )}

          {barraca.modalidade === "Aluguel" && !ehAdmin && (
            <>
              <div className="mb-3">
                  <label htmlFor="complemento" className="form-label">
                    Brindes Gratuitos
                  </label>
                  <select
                    className="form-select"
                    id="complemento"
                    value={complemento}
                    onChange={(e) => setComplemento(e.target.value)}
                  >
                    <option value="">Selecione</option>
                    <option value="brinde1">Cobertura Adicional</option>
                    <option value="brinde2">Iluminação LED</option>
                    <option value="brinde3">Kit de Reparos</option>
                  </select>
                </div>

              <div className="mb-3">
                <label htmlFor="periodo" className="form-label">
                  Período
                </label>
                <input
                  type="text"
                  id="periodo"
                  className="form-control"
                  placeholder="Selecione o período"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="hora" className="form-label">
                  Hora
                </label>
                <input type="time" id="hora" className="form-control" />
              </div>

              <button className="btn btn-success btn-lg w-100" onClick={handleAlugarAgora}>
                Alugar Agora
              </button>
            </>
          )}
        </div>
      </div>

      {toasts.map((t) => (
        <div key={t.id}>{t.toast}</div>
      ))}

      <div className="mb-4">
        <h2 className="mb-3">Descrição da Barraca</h2>
        <p style={{ textAlign: "justify" }}>{barraca.descricao}</p>
      </div>

      <div className="mb-4 mt-4">
        <h3 className="mb-3">Especificações</h3>
        <TabelaEspecificacoes
          dados={[
            { especificacao: "Formato", detalhes: barraca.formato.nome },
            { especificacao: "Capacidade", detalhes: barraca.capacidade },
            { especificacao: "Material", detalhes: barraca.material },
            { especificacao: "Estrutura", detalhes: barraca.estrutura },
            { especificacao: "Dimensões", detalhes: barraca.dimensoes },
            { especificacao: "Peso", detalhes: barraca.peso },
            { especificacao: "Cor", detalhes: barraca.cor },
          ]}
          nomeColunaChave="Especificação"
          nomeColunaValor="Valor"
        />
      </div>

      <div className="mb-4 mt-4">
        <h3 className="mb-3">Comentários de Clientes</h3>
        <CardComentarioBarraca
          comentarios={comentarios.filter(
            (item) => item.idBarraca === barraca.id
          )}
        />
      </div>
    </div>
  );
};

export default DetalhamentoBarracaPage;
