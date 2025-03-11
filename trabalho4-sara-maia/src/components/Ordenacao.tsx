import useBarracasStore from "../store/useBarracasStore";

const Ordenacao = ({ campo }: { campo: string }) => {
  const ordem = useBarracasStore((s) => s.ordem);
  const campoAtual = useBarracasStore((s) => s.campo);
  const setCampo = useBarracasStore((s) => s.setCampo);
  const setOrdem = useBarracasStore((s) => s.setOrdem);

  const handleOrdenacao = () => {
    if (campoAtual === campo) {
        const novaOrdem: "asc" | "desc" = ordem === "asc"? "desc" : "asc";
        setOrdem(novaOrdem);
    } else {
        setCampo(campo);
        setOrdem("asc");
    }
  };

  return (
    <span onClick={handleOrdenacao} style={{ cursor: "pointer", marginLeft: "5px" }}>
      {campoAtual === campo ? (
        ordem === "asc" ? (
          <img src="/src/assets/sort-order-up-16.png" alt="Ordenar ascendente" style={{ width: "12px", height: "12px" }}/>
        ) : (
          <img src="/src/assets/sort-order-down-16.png" alt="Ordenar descendente" style={{ width: "12px", height: "12px" }} />
        )
      ) : (
        <img src="/src/assets/sort-order-16.png" alt="Ordenar" style={{ width: "12px", height: "12px" }}/>
      )}
    </span>
  );
};

export default Ordenacao;
