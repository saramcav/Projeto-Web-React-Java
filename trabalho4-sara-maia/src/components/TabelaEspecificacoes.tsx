import { Especificacao } from "../interfaces/interfacesAuxiliares";

interface Props {
  dados: Especificacao[];
  nomeColunaChave: string,
  nomeColunaValor: string
}

const TabelaEspecificacoes = ({ dados, nomeColunaChave, nomeColunaValor }: Props) => {
  return (
    <table className="table table-striped table-bordered">
      <thead>
        <tr>
          <th scope="col">{nomeColunaChave}</th>
          <th scope="col">{nomeColunaValor}</th>
        </tr>
      </thead>
      <tbody>
        {dados.map((item, indice) => (
          <tr key={`${JSON.stringify(item)}-${indice}`}>
            <td>{item.especificacao}</td>
            <td>{item.detalhes}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TabelaEspecificacoes;
