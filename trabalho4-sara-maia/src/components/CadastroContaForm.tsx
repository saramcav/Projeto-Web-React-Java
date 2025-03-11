import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  nome: z.string().min(1, { message: "O nome deve ser informado." }),
  cpf: z.string().min(1, { message: "O CPF deve ser informado." }),
  pais: z.string().min(1, { message: "O país deve ser informado." }),
  estado: z.string().min(1, { message: "O estado deve ser informado." }),
  endereco: z.string().min(1, { message: "O endereço deve ser informado." }),
  telefone: z.string().min(1, { message: "O telefone deve ser informado." }),
  email: z.string().email({ message: "Email inválido." }).min(1, { message: "O email deve ser informado." }),
  senha: z.string().min(1, { message: "A senha deve ser informada." }),
});

type CadastroContaForm = z.infer<typeof schema>;

const CadastroContaForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CadastroContaForm>({ resolver: zodResolver(schema) });

  const submit = (data: CadastroContaForm) => {
    console.log("Cadastro realizado com os dados:", data);
  };

  return (
    <div className="form-cadastro">
      <form onSubmit={handleSubmit(submit)}>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="cadastroNome" className="form-label">Nome</label>
            <input
              {...register("nome")}
              type="text"
              className={`form-control ${errors.nome ? "is-invalid" : ""}`}
              id="cadastroNome"
              placeholder="Digite seu nome"
            />
            <div className="invalid-feedback">{errors.nome?.message}</div>
          </div>
          <div className="col-md-6">
            <label htmlFor="cadastroCPF" className="form-label">CPF</label>
            <input
              {...register("cpf")}
              type="text"
              className={`form-control ${errors.cpf ? "is-invalid" : ""}`}
              id="cadastroCPF"
              placeholder="Digite seu CPF"
            />
            <div className="invalid-feedback">{errors.cpf?.message}</div>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="cadastroPais" className="form-label">País</label>
            <input
              {...register("pais")}
              type="text"
              className={`form-control ${errors.pais ? "is-invalid" : ""}`}
              id="cadastroPais"
              placeholder="Digite seu país"
            />
            <div className="invalid-feedback">{errors.pais?.message}</div>
          </div>
          <div className="col-md-6">
            <label htmlFor="cadastroEstado" className="form-label">Estado</label>
            <input
              {...register("estado")}
              type="text"
              className={`form-control ${errors.estado ? "is-invalid" : ""}`}
              id="cadastroEstado"
              placeholder="Digite seu estado"
            />
            <div className="invalid-feedback">{errors.estado?.message}</div>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="cadastroEndereco" className="form-label">Endereço</label>
            <input
              {...register("endereco")}
              type="text"
              className={`form-control ${errors.endereco ? "is-invalid" : ""}`}
              id="cadastroEndereco"
              placeholder="Digite seu endereço"
            />
            <div className="invalid-feedback">{errors.endereco?.message}</div>
          </div>
          <div className="col-md-6">
            <label htmlFor="cadastroTelefone" className="form-label">Telefone</label>
            <input
              {...register("telefone")}
              type="text"
              className={`form-control ${errors.telefone ? "is-invalid" : ""}`}
              id="cadastroTelefone"
              placeholder="Digite seu telefone"
            />
            <div className="invalid-feedback">{errors.telefone?.message}</div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-6">
            <label htmlFor="cadastroEmail" className="form-label">Email</label>
            <input
              {...register("email")}
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              id="cadastroEmail"
              placeholder="Digite seu email"
            />
            <div className="invalid-feedback">{errors.email?.message}</div>
          </div>
          <div className="col-md-6">
            <label htmlFor="cadastroSenha" className="form-label">Senha</label>
            <input
              {...register("senha")}
              type="password"
              className={`form-control ${errors.senha ? "is-invalid" : ""}`}
              id="cadastroSenha"
              placeholder="Digite sua senha"
            />
            <div className="invalid-feedback">{errors.senha?.message}</div>
          </div>
        </div>

        <button type="submit" className="btn btn-success w-100">
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default CadastroContaForm;
