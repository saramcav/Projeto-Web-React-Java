import CadastroDeBarracasForm from "../components/CadastroDeBarracasForm";
import useToastsStore from "../store/useToastsStore";

const CadastroDeBarracasPage = () => {
  const { toasts } = useToastsStore();
  
  return (
    <div className="container mb-5" id="containerCadastro">
      {toasts.map((t) => (
        <div key={t.id}>{t.toast}</div>
      ))}
      <h5>Cadastro de Barracas</h5>
      <hr className="mt-1"/>
      <CadastroDeBarracasForm />
    </div>
  )
}

export default CadastroDeBarracasPage