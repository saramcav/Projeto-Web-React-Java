interface Props {
  id: string;
  nome: string;
  cpf: string;
  pais: string;
  estado: string;
  endereco: string;
  telefone: string;
  email: string;
  senha: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const FormPerfil = ({
  id,
  nome,
  cpf,
  pais,
  estado,
  endereco,
  telefone,
  email,
  senha,
  onChange,
  onSubmit,
}: Props) => {
  return (
    <div className="card border rounded shadow">
      <div className="card-header tema-secundario text-white">
        <h4 className="mb-0">Perfil do Usuário</h4>
      </div>
      <div className="card-body">
        <form onSubmit={onSubmit}>
          <div className="d-flex align-items-center mb-4">
            <div className="me-3">
              <i
                className="bi bi-person-circle"
                style={{ fontSize: "50px" }}
              ></i>
            </div>
            <div className="w-100">
              <label htmlFor={`nome-${id}`} className="form-label">
                Nome:
              </label>
              <input
                type="text"
                id={`nome-${id}`}
                name="nome"
                className="form-control"
                value={nome}
                onChange={onChange}
              />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor={`cpf-${id}`} className="form-label">
              CPF:
            </label>
            <input
              type="text"
              id={`cpf-${id}`}
              name="cpf"
              className="form-control"
              value={cpf}
              onChange={onChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor={`pais-${id}`} className="form-label">
              País:
            </label>
            <input
              type="text"
              id={`pais-${id}`}
              name="pais"
              className="form-control"
              value={pais}
              onChange={onChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor={`estado-${id}`} className="form-label">
              Estado:
            </label>
            <input
              type="text"
              id={`estado-${id}`}
              name="estado"
              className="form-control"
              value={estado}
              onChange={onChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor={`endereco-${id}`} className="form-label">
              Endereço:
            </label>
            <input
              type="text"
              id={`endereco-${id}`}
              name="endereco"
              className="form-control"
              value={endereco}
              onChange={onChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor={`telefone-${id}`} className="form-label">
              Telefone:
            </label>
            <input
              type="text"
              id={`telefone-${id}`}
              name="telefone"
              className="form-control"
              value={telefone}
              onChange={onChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor={`email-${id}`} className="form-label">
              Email:
            </label>
            <input
              type="email"
              id={`email-${id}`}
              name="email"
              className="form-control"
              value={email}
              onChange={onChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor={`senha-${id}`} className="form-label">
              Senha:
            </label>
            <input
              type="password"
              id={`senha-${id}`}
              name="senha"
              className="form-control"
              value={senha}
              onChange={onChange}
            />
          </div>

          <div className="text-end">
            <button type="submit" className="btn btn-primary bg-warning">
              Editar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormPerfil;
