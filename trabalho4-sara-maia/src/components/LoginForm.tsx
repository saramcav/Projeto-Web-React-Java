import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import useEfetuarLogin from "../hooks/useEfetuarLogin";
import useUsuarioStore from "../store/useUsuarioStore";
import TokenResponse from "../interfaces/TokenResponse";
import Usuario from "../interfaces/Usuario";

const schema = z.object({
  email: z.string().email({ message: "Email inválido." }).min(1, { message: "O email deve ser informado." }),
  senha: z.string().min(1, { message: "A senha deve ser informada." }),
});

type FormLogin = z.infer<typeof schema>;

const FormLogin = () => {
  const setUsuarioLogado = useUsuarioStore((s) => s.setUsuarioLogado);
  const setTentouLogar = useUsuarioStore((s) => s.setTentouLogar);
  const tentouLogar = useUsuarioStore((s) => s.tentouLogar);
  const rotaDestino = useUsuarioStore((s) => s.rotaDestino);
  const navigate = useNavigate();

  const { mutate: efetuarLogin, error: errorLogin } = useEfetuarLogin();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormLogin>({ resolver: zodResolver(schema) });

  const submit = ({ email, senha }: FormLogin) => {
    const usuario: Usuario = { conta: email, senha };

    efetuarLogin(usuario, {
      onSuccess: (tokenResponse: TokenResponse) => {
        if (tokenResponse.token.length > 0) {
          setUsuarioLogado(email);
          setTentouLogar(false);
          navigate(rotaDestino || "/");
        } else {
          setTentouLogar(true);
          setUsuarioLogado("");
        }
      },
    });
  };

  if (errorLogin) throw errorLogin;

  return (
    <div className="form-login">
      {tentouLogar && (
        <div className="alert alert-danger fw-bold" role="alert">
          Login inválido!
        </div>
      )}
      <form onSubmit={handleSubmit(submit)}>
        <div className="mb-3">
          <label htmlFor="emailLogin" className="form-label">
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            id="emailLogin"
            placeholder="Digite seu email"
          />
          <div className="invalid-feedback">{errors.email?.message}</div>
        </div>
        <div className="mb-3">
          <label htmlFor="senhaLogin" className="form-label">
            Senha
          </label>
          <input
            {...register("senha")}
            type="password"
            className={`form-control ${errors.senha ? "is-invalid" : ""}`}
            id="senhaLogin"
            placeholder="Digite sua senha"
          />
          <div className="invalid-feedback">{errors.senha?.message}</div>
        </div>
        <button type="submit" className="btn btn-success w-100">
          Entrar
        </button>
      </form>
      <p className="text-center w-100 mt-3">
        Não tem uma conta? 
        <Link to="cadastro" className="btn btn-link">
            Registre-se
        </Link>
        </p>
    </div>
  );
};

export default FormLogin;
