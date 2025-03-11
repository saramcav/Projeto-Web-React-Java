import CadastroContaForm from "../components/CadastroContaForm";

const CadastroContaPage = () => {
    return (
      <div 
        className="d-flex justify-content-center align-items-center" 
        style={{
          height: "90vh",
          backgroundImage: "url('/fundo-login-cadastro.jpg')",
          backgroundSize: "cover", 
          backgroundPosition: "center", 
          backgroundRepeat: "no-repeat", 
          opacity: 0.8,
        }}
      >
        <div className="container bg-light bg-opacity-75 p-4 rounded shadow" style={{ maxWidth: "75%" }}>
            <h2 className="text-center mb-3 mt-3">Cadastre-se já!</h2>
            <CadastroContaForm />
        </div>
      </div>
    );
  };

export default CadastroContaPage;
