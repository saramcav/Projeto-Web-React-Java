import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import databaseAdd from "../assets/skin/database_add.png";
import databaseEdit from "../assets/skin/database_edit.png";
import databaseCancel from "../assets/skin/multiply.png";
import useCadastrarBarraca from "../hooks/useCadastrarBarraca";
import Formato from "../interfaces/Formato";
import Barraca from "../interfaces/Barraca";
import { z } from "zod";
import dataValida from "../util/dataValida";
import { zodResolver } from "@hookform/resolvers/zod";
import useBarracasStore from "../store/useBarracasStore";
import dayjs from "dayjs";
import useAlterarBarraca from "../hooks/useAlterarBarraca";
import useToastsStore from "../store/useToastsStore";
import Toast from "./Toast";

const validaCampoDeMarcar = (valor: string) => valor !== "0";

const regexData = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;
const regexImagem = /^[a-z0-9_-]+\.(gif|jpg|png|bmp)$/i;
const schema = z.object({
  nome: z
    .string()
    .min(1, { message: "O nome deve ser informado." })
    .min(3, { message: "O nome deve ter pelo menos 3 caracteres." }),
  descricao: z.string().min(1, { message: "A descrição deve ser informada." }),
  formato: z
    .string()
    .refine(validaCampoDeMarcar, { message: "O formato deve ser informado." }),
  data_cadastro: z
    .string()
    .min(1, { message: "A data de cadastro deve ser informada." })
    .regex(regexData, { message: "Data inválida." })
    .refine(dataValida, { message: "Data inválida." }),
  preco: z
    .number({ invalid_type_error: "O preço deve ser informado." })
    .min(0.1, { message: "O preço deve ser maior ou igual a R$ 0.10" }),
  qtd_estoque: z
    .number({
      invalid_type_error: "A quantidade em estoque deve ser informada.",
    })
    .min(0, { message: "A quantidade em estoque deve ser maior do que zero." }),
  imagem: z
    .string()
    .min(1, { message: "A imagem deve ser informada." })
    .regex(regexImagem, { message: "Nome de imagem inválido." }),
  disponivel: z.boolean(),

  modalidade: z
    .string()
    .refine(validaCampoDeMarcar, { message: "A modalidade deve ser informada." }),
  capacidade: z
    .string()
    .min(1, { message: "A capacidade deve ser informada." })
    .min(8, { message: "A capacidade deve ter pelo menos 8 caracteres." }),
  material: z
    .string()
    .min(1, { message: "O material deve ser informado." })
    .min(2, { message: "O material deve ter pelo menos 2 caracteres."}),
    
  dimensoes: z
    .string()
    .min(1, { message: "Dimensões devem ser informadas." })
    .min(10, { message: "O campo Dimensões deve ter pelo menos 10 caracteres." }),
  peso: z
    .string()
    .min(1, { message: "O peso deve ser informado." })
    .min(3, {message: "O peso deve ter pelo menos 3 caracteres."}),
    
  estrutura: z
    .string()
    .min(1, { message: "A estrutura deve ser informada." })
    .min(4, {message: "A estrutura deve ter pelo menos 4 caracteres."}),
  cor: z
    .string()
    .min(1, { message: "A cor deve ser informada" })
    .min(2, { message: "A cor deve ter pelo menos 2 caracteres." }),  
});

type BarracaForm = z.infer<typeof schema>;

const CadastroDeBarracasForm = () => {
  const navigate = useNavigate();
  const { adicionarToast } = useToastsStore();
  const barracaSelecionada = useBarracasStore((s) => s.barracaSelecionada);
  const setBarracaSelecionada = useBarracasStore((s) => s.setBarracaSelecionada);

  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    setValue,
    formState: { isSubmitSuccessful, errors },
  } = useForm<BarracaForm>({ resolver: zodResolver(schema) });

  const { mutate: cadastrarBarraca, error: errorCadastrarBarraca } =
    useCadastrarBarraca();
  const { mutate: alterarBarraca, error: errorAlterarBarraca } =
    useAlterarBarraca();

  // Esse useEffect é executado sempre que o barracaSelecionada muda.
  useEffect(() => {
    console.log("barracaSelecionada executado", barracaSelecionada);
    setFocus("nome");
    reset();
    if (barracaSelecionada.id) {
      setValue("nome", barracaSelecionada.nome);
      setValue("descricao", barracaSelecionada.descricao);
      setValue("formato", String(barracaSelecionada.formato.id));
      setValue(
        "data_cadastro",
        dayjs(barracaSelecionada.dataCadastro).format("DD/MM/YYYY")
      );
      setValue("preco", barracaSelecionada.preco);
      setValue("qtd_estoque", barracaSelecionada.qtdEstoque);
      setValue("imagem", barracaSelecionada.imagem);
      setValue("disponivel", barracaSelecionada.disponivel);
      
      setValue("modalidade", barracaSelecionada.modalidade === "Aluguel"? "1" : "2");
      setValue("capacidade", barracaSelecionada.capacidade);
      setValue("peso", barracaSelecionada.peso);
      setValue("estrutura", barracaSelecionada.estrutura);
      setValue("cor", barracaSelecionada.cor);
      setValue("material", barracaSelecionada.material);
      setValue("dimensoes", barracaSelecionada.dimensoes);
    }
  }, [barracaSelecionada]);

  // Esse useEffect é executado sempre que o form é montado e
  // sempre que o formulário é submetido. Para evitar o reset()
  // quando o form é montado podemos acrescentar o comando
  // if (isSubmitSuccessful) abaixo.
  useEffect(() => {
    console.log("isSubmitSuccessful executado");
    setFocus("nome");
    if (isSubmitSuccessful) {
      console.log("Resetou");
      reset();
      setBarracaSelecionada({} as Barraca);
    }
  }, [isSubmitSuccessful]);

  // Esse useEffect é executado sempre que a página é montada.
  // Ele retorna uma cleanup function que é executada sempre
  // que a página é desmontada.
  useEffect(() => {
    console.log("[] executado");
    return () => {
      // setFocus("nome");
      
      setBarracaSelecionada({} as Barraca);
    };
  }, []);

  const submit = ({
    nome,
    descricao,
    formato,
    data_cadastro,
    preco,
    qtd_estoque,
    imagem,
    disponivel,

    modalidade,
    estrutura ,
    cor,
    peso,
    capacidade,
    material,
    dimensoes
  }: BarracaForm) => {
    const barraca: Barraca = {
      nome: nome,
      descricao: descricao,
      formato: { id: parseInt(formato) } as Formato,
      dataCadastro: new Date(
        data_cadastro.substring(6, 10) +
          "-" +
          data_cadastro.substring(3, 5) +
          "-" +
          data_cadastro.substring(0, 2)
      ),
      preco: preco,
      qtdEstoque: qtd_estoque,
      imagem: imagem,
      disponivel: disponivel,
      
      modalidade: modalidade === "1"? "Aluguel" : "Venda",
      estrutura: estrutura,
      cor: cor,
      peso: peso,
      capacidade: capacidade,
      material: material,
      dimensoes: dimensoes,
      avaliacao: barracaSelecionada.id? barracaSelecionada.avaliacao : 0
    };
    if (barracaSelecionada.id) {
      barraca.id = barracaSelecionada.id;
      alterarBarraca(barraca);
      adicionarToast({
        id: 5,
        toast: (
          <Toast
            icone="bi-check-circle"
            titulo="Barraca Alterada!"
            mensagem={`${barraca.nome} alterada com sucesso!`}
          />
        ),
      });
      navigate(-1);
    } else {
      cadastrarBarraca(barraca);
      adicionarToast({
        id: 5,
        toast: (
          <Toast
            icone="bi-check-circle"
            titulo="Barraca Cadastrada!"
            mensagem={`${barraca.nome} cadastrada com sucesso!`}
          />
        ),
      });
    }
  };

  if (errorCadastrarBarraca) throw errorCadastrarBarraca;
  if (errorAlterarBarraca) throw errorAlterarBarraca;

  return (
    <form onSubmit={handleSubmit(submit)} autoComplete="off">
      <div className="row">
        <div className="col-xl-6">
          <div className="row mb-2">
            <label htmlFor="nome" className="col-xl-2 fw-bold">
              Nome
            </label>
            <div className="col-xl-10">
              <input
                // ref={nomeRef}
                {...register("nome")}
                type="text"
                id="nome"
                className={
                  errors.nome
                    ? "form-control form-control-sm is-invalid"
                    : "form-control form-control-sm"
                }
              />
              <div className="invalid-feedback">{errors.nome?.message}</div>
              {/* {errors.nome ? <p className="text-danger">{errors.nome.message}</p> : ""} */}
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="row mb-2">
            <label htmlFor="modalidade" className="col-xl-2 fw-bold">
              Modalidade
            </label>
            <div className="col-xl-10">
              <select
                {...register("modalidade")}
                id="modalidade"
                className={
                  errors.modalidade
                    ? "form-control form-control-sm is-invalid"
                    : "form-control form-control-sm"
                }
              >
                <option value="0">Selecione uma Modalidade</option>
                <option value="1">Aluguel</option>
                <option value="2">Venda</option>
              </select>
              <div className="invalid-feedback">
                {errors.modalidade?.message}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-1">
        <div className="col-xl-6">
          <div className="row mb-2">
            <label htmlFor="formato" className="col-xl-2 fw-bold">
              Formato
            </label>
            <div className="col-xl-10">
              <select
                {...register("formato")}
                id="formato"
                className={
                  errors.formato
                    ? "form-control form-control-sm is-invalid"
                    : "form-control form-control-sm"
                }
              >
                <option value="0">Selecione um Formato</option>
                <option value="1">Iglu</option>
                <option value="2">Bivak</option>
                <option value="3">Túnel</option>
                <option value="4">Geodésica</option>
              </select>
              <div className="invalid-feedback">{errors.formato?.message}</div>
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="row mb-2">
            <label htmlFor="data_cadastro" className="col-xl-3 fw-bold">
              Data Cadastro
            </label>
            <div className="col-xl-9">
              <input
                {...register("data_cadastro")}
                type="text"
                id="data_cadastro"
                className={
                  errors.data_cadastro
                    ? "form-control form-control-sm is-invalid"
                    : "form-control form-control-sm"
                }
              />
              <div className="invalid-feedback">
                {errors.data_cadastro?.message}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-1">
        <div className="col-xl-6">
          <div className="row mb-2">
            <label htmlFor="preco" className="col-xl-2 fw-bold">
              Preço
            </label>
            <div className="col-xl-10">
              <input
                {...register("preco", { valueAsNumber: true })}
                type="number"
                step="0.01"
                min="0"
                id="preco"
                className={
                  errors.preco
                    ? "form-control form-control-sm is-invalid"
                    : "form-control form-control-sm"
                }
              />
              <div className="invalid-feedback">{errors.preco?.message}</div>
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="row mb-2">
            <label htmlFor="qtd_estoque" className="col-xl-3 fw-bold">
              Estoque
            </label>
            <div className="col-xl-9">
              <input
                {...register("qtd_estoque", { valueAsNumber: true })}
                type="number"
                min="0"
                id="qtd_estoque"
                className={
                  errors.qtd_estoque
                    ? "form-control form-control-sm is-invalid"
                    : "form-control form-control-sm"
                }
              />
              <div className="invalid-feedback">
                {errors.qtd_estoque?.message}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-1">
        <div className="col-xl-6">
          <div className="row mb-2">
            <label htmlFor="imagem" className="col-xl-2 fw-bold">
              Imagem
            </label>
            <div className="col-xl-10">
              <input
                {...register("imagem")}
                type="text"
                id="imagem"
                className={
                  errors.imagem
                    ? "form-control form-control-sm is-invalid"
                    : "form-control form-control-sm"
                }
              />
              <div className="invalid-feedback">{errors.imagem?.message}</div>
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="row mb-2">
            <label htmlFor="capacidade" className="col-xl-2 fw-bold">
              Capacidade
            </label>
            <div className="col-xl-10">
              <input
                {...register("capacidade")}
                type="text"
                id="capacidade"
                className={
                  errors.capacidade
                    ? "form-control form-control-sm is-invalid"
                    : "form-control form-control-sm"
                }
              />
              <div className="invalid-feedback">
                {errors.capacidade?.message}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-1">
        <div className="col-xl-6">
          <div className="row mb-2">
            <label htmlFor="material" className="col-xl-2 fw-bold">
              Material
            </label>
            <div className="col-xl-10">
              <input
                {...register("material")}
                type="text"
                id="material"
                className={
                  errors.material
                    ? "form-control form-control-sm is-invalid"
                    : "form-control form-control-sm"
                }
              />
              <div className="invalid-feedback">{errors.material?.message}</div>
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="row mb-2">
            <label htmlFor="estrutura" className="col-xl-2 fw-bold">
              Estrutura
            </label>
            <div className="col-xl-10">
              <input
                {...register("estrutura")}
                type="text"
                id="estrutura"
                className={
                  errors.estrutura
                    ? "form-control form-control-sm is-invalid"
                    : "form-control form-control-sm"
                }
              />
              <div className="invalid-feedback">
                {errors.estrutura?.message}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-1">
        <div className="col-xl-6">
          <div className="row mb-2">
            <label htmlFor="dimensoes" className="col-xl-2 fw-bold">
              Dimensões
            </label>
            <div className="col-xl-10">
              <input
                {...register("dimensoes")}
                type="text"
                id="dimensoes"
                className={
                  errors.dimensoes
                    ? "form-control form-control-sm is-invalid"
                    : "form-control form-control-sm"
                }
              />
              <div className="invalid-feedback">
                {errors.dimensoes?.message}
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="row mb-2">
            <label htmlFor="peso" className="col-xl-2 fw-bold">
              Peso
            </label>
            <div className="col-xl-10">
              <input
                {...register("peso")}
                type="text"
                id="peso"
                className={
                  errors.peso
                    ? "form-control form-control-sm is-invalid"
                    : "form-control form-control-sm"
                }
              />
              <div className="invalid-feedback">{errors.peso?.message}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-1">
        <div className="col-xl-6">
          <div className="row mb-2">
            <label htmlFor="descricao" className="col-xl-2 fw-bold">
              Descrição
            </label>
            <div className="col-xl-10">
              <textarea
                {...register("descricao")}
                id="descricao"
                rows={5}
                className={
                  errors.descricao
                    ? "form-control form-control-sm is-invalid"
                    : "form-control form-control-sm"
                }
              />
              <div className="invalid-feedback">
                {errors.descricao?.message}
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-6">
          <div className="row mb-2">
            <label htmlFor="cor" className="col-xl-2 fw-bold">
              Cor
            </label>
            <div className="col-xl-10">
              <input
                {...register("cor")}
                type="text"
                id="cor"
                className={
                  errors.cor
                    ? "form-control form-control-sm is-invalid"
                    : "form-control form-control-sm"
                }
              />
              <div className="invalid-feedback">{errors.cor?.message}</div>
            </div>
          </div>
          <div className="row mb-2">
            <div className="offset-xl-2 col-xl-10">
              <div className="form-check pl-0 mt-xl-0 mt-2">
                <input
                  {...register("disponivel")}
                  type="checkbox"
                  id="disponivel"
                  className="form-check-input"
                />
                <label htmlFor="disponivel" className="form-check-label">
                  Disponível?
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-xl-6">
          <div className="row">
            <div className="col-xl-10 offset-xl-2 d-flex flex-row">
              <button
                id="botaoEdicao"
                type="submit"
                style={{ width: "100px" }}
                className="btn btn-primary btn-sm d-flex align-items-center me-3"
              >
                {barracaSelecionada.id ? (
                  <>
                    <img src={databaseEdit} className="me-1" /> Alterar
                  </>
                ) : (
                  <>
                    <img src={databaseAdd} className="me-1" /> Cadastrar
                  </>
                )}
              </button>
              <button
                id="botaoCancelamento"
                type="button"
                onClick={() => setBarracaSelecionada({} as Barraca)}
                className="btn btn-primary btn-sm d-flex align-items-center "
              >
                <img src={databaseCancel} className="me-1" /> Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
export default CadastroDeBarracasForm;
