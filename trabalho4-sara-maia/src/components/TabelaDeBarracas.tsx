import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import useBarracasComPaginacao from "../hooks/useBarracasComPaginacao";
import useRemoverBarraca from "../hooks/useRemoverBarraca";
import useBarracasStore from "../store/useBarracasStore";

import Ordenacao from "./Ordenacao";

const TabelaDeBarracas = () => {
  const pagina = useBarracasStore((s) => s.pagina);
  const tamanho = useBarracasStore((s) => s.tamanho);
  const nome = useBarracasStore((s) => s.nome);
  const campo = useBarracasStore((s) => s.campo);
  const ordem = useBarracasStore((s) => s.ordem);

  const setPagina = useBarracasStore((s) => s.setPagina);
  const setBarracaSelecionada = useBarracasStore(
    (s) => s.setBarracaSelecionada
  );
  const adicionarBarracaEmRemocao = useBarracasStore(
    (s) => s.adicionarBarracaEmRemocao
  );
  const deletarBarracaRemovida = useBarracasStore(
    (s) => s.deletarBarracaRemovida
  );
  const idsBarracasEmRemocao = useBarracasStore(
    (s) => s.idsBarracasEmRemocao
  );

  const { mutate: removerBarraca, error: errorRemocaoBarraca } = useRemoverBarraca();

  const {
    data: resultadoPaginado,
    isPending: carregandoBarracas,
    error: errorBarracas,
  } = useBarracasComPaginacao({ pagina, tamanho, nome, campo, ordem });

  const navigate = useNavigate();

  if (carregandoBarracas) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="spinner-border text-primary" role="status">
        </div>
      </div>
    );
  }

  if (errorBarracas) throw errorBarracas;
  if (errorRemocaoBarraca) throw errorRemocaoBarraca;

  const barracas = resultadoPaginado.itens;

  const handleRemocaoDeBarraca = (id: number) => {
    adicionarBarracaEmRemocao(id);
    removerBarraca(id, {
      onSuccess: () => {
        setPagina(0);
        deletarBarracaRemovida(id);
      },
      onError: () => {
        deletarBarracaRemovida(id);
      },
    });
  };

  return (
    <div className="table-responsive">
      <table className="table table-hover table-bordered table-sm">
        <thead>
          <tr>
            <th className="align-middle text-center">
              Id
              <Ordenacao campo="id" />
            </th>
            <th className="align-middle text-center">Imagem</th>
            <th className="align-middle text-center">
              Formato
              <Ordenacao campo="formato.nome" />
            </th>
            <th className="align-middle text-center">
              Modalidade
              <Ordenacao campo="modalidade" />
            </th>
            <th className="align-middle text-center">
              Nome
              <Ordenacao campo="nome" />
            </th>
            <th className="align-middle text-center">
              Data de Cadastro
              <Ordenacao campo="dataCadastro" />
            </th>
            <th className="align-middle text-center">
              Quantidade
              <Ordenacao campo="qtdEstoque" />
            </th>
            <th className="align-middle text-center">
              Preço
              <Ordenacao campo="preco" />
            </th>
            <th className="align-middle text-center">Ação</th>
          </tr>
        </thead>
        <tbody>
          {barracas.map((barraca) => (
            <tr key={barraca.id!}>
              <td width={"7%"} className="align-middle text-center">
                {barraca.id!}
              </td>
              <td width={"10%"} className="align-middle text-center">
                <img src={barraca.imagem} width="55px" />
              </td>
              <td width={"10%"} className="align-middle text-center">
                {barraca.formato.nome}
              </td>
              <td width={"10%"} className="align-middle text-center">
                {barraca.modalidade}
              </td>
              <td width={"20%"} className="align-middle ps-3">
                <a
                  onClick={() => {
                    setBarracaSelecionada(barraca);
                    navigate("/cadastrar-barraca"); 
                  }}
                  className="link_underline"
                  style={{ cursor: "pointer" }}
                >
                  {barraca.nome}
                </a>
              </td>
              <td width={"13%"} className="align-middle text-center">
                {dayjs(barraca.dataCadastro).format("DD/MM/YYYY")}
              </td>
              <td width={"11%"} className="align-middle text-center">
                {barraca.qtdEstoque}
              </td>
              <td width={"8%"} className="align-middle text-end pe-3">
                {barraca.preco.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                  useGrouping: true,
                })}
              </td>
              <td width={"19%"} className="align-middle text-center">
                <button
                  onClick={() => handleRemocaoDeBarraca(barraca.id!)}
                  className="btn btn-danger btn-sm"
                  type="button"
                  disabled={idsBarracasEmRemocao.has(barraca.id!)}
                >
                  {idsBarracasEmRemocao.has(barraca.id!) ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2"></span>
                      Remover
                    </>
                  ) : (
                    <>
                      <img src="/src/assets/skin/database_delete.png" className="me-2"/>
                      Remover
                    </>
                  )}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td className="align-middle text-end fw-bold" colSpan={6} style={{ paddingRight: '40px' }}>
              Total...
            </td>
            <td className="align-middle text-center fw-bold" colSpan={2}>
              R${" "}
              {barracas
                .reduce(
                  (total, barraca) =>
                    total + barraca.qtdEstoque * barraca.preco,
                  0
                )
                .toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                  useGrouping: true,
                })}
            </td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default TabelaDeBarracas;
