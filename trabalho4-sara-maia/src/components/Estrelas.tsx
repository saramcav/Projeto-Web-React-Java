interface Props {
  avaliacao: number;
};

const Estrelas = ({ avaliacao }: Props) => {
  return (
    <div>
      {Array.from({ length: 5 }, (_, indice) => (
        <span
          key={`estrela-${indice}`}
          className={`bi ${
            indice < avaliacao ? "bi-star-fill" : "bi-star"
          } text-warning`}
        ></span>
      ))}
    </div>
  );
}

export default Estrelas;
