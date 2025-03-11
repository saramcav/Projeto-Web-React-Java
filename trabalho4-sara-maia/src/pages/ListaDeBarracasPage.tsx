import Paginacao from "../components/Paginacao";
import Pesquisa from "../components/Pesquisa";
import TabelaDeBarracas from "../components/TabelaDeBarracas";
import useToastsStore from "../store/useToastsStore";

const ListaDeBarracasPage = () => {
  const { toasts } = useToastsStore();

  return (
    <div className="container" id="containerListaBarracas">
      {toasts.map((t) => (
        <div key={t.id}>{t.toast}</div>
      ))}
      <h5>Lista de Barracas</h5>
      <hr className="mt-1" />
      <Pesquisa />
      
      <TabelaDeBarracas />
      <Paginacao />
    </div>
  );
}

export default ListaDeBarracasPage;
