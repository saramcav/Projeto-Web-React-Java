import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <div 
      className="d-flex justify-content-center align-items-center" 
      style={{
        height: "100vh",
        backgroundImage: "url('/fundo-login-cadastro.jpg')",
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat", 
        opacity: 0.8,
      }}
    >
      <div className="container bg-light bg-opacity-75 p-4 rounded shadow" style={{ maxWidth: "400px" }}>
        <h2 className="text-center mb-4">Entre já!</h2>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;

