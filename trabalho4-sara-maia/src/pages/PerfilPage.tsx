import { useState } from "react";
import FormPerfil from "../components/FormPerfil";
import useToastsStore from "../store/useToastsStore";

const PerfilPage = () => {
  const { toasts } = useToastsStore();

  const [mostrarTelaSucesso, setMostrarTelaSucesso] = useState(false);

  const [dadosForm, setDadosForm] = useState({
    nome: "Nome Completo",
    cpf: "123.456.789-00",
    pais: "Brasil",
    estado: "Rio de Janeiro",
    endereco: "Rua Exemplo, 123",
    telefone: "(21) 98765-4321",
    email: "usuario@exemplo.com",
    senha: "senha-secreta",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDadosForm((estadoAnterior) => ({
      ...estadoAnterior,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMostrarTelaSucesso(true);
  };

  return (
    <div className="container mb-5" style={{ marginTop: "20px" }}>
      {toasts.map((t) => (
        <div key={t.id}>{t.toast}</div>
      ))}
      {mostrarTelaSucesso && (
        <div
          className="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          <strong>Sucesso!</strong> Seu perfil foi atualizado.
          <button
            type="button"
            className="btn-close"
            onClick={() => setMostrarTelaSucesso(false)}
            aria-label="Close"
          ></button>
        </div>
      )}

      <FormPerfil
        id="formularioPerfil"
        nome={dadosForm.nome}
        cpf={dadosForm.cpf}
        pais={dadosForm.pais}
        estado={dadosForm.estado}
        endereco={dadosForm.endereco}
        telefone={dadosForm.telefone}
        email={dadosForm.email}
        senha={dadosForm.senha}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default PerfilPage;
