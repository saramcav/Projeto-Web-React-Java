import { useState, useEffect } from "react";

interface Props {
  id: string;
  itens: any[];
  renderizarItem: (item: any) => JSX.Element;
  rolagemAutomatica: boolean;
  controles: boolean;
  intervalo?: number;
  classNameControles?: string;
  classNameCarousel?: string;
  paginaInicial?: number;
  onTrocarPagina?: (novaPagina: number) => void;
}

const Carousel = ({
  id,
  itens,
  renderizarItem,
  intervalo = 5000,
  rolagemAutomatica = true,
  controles,
  classNameControles = "",
  classNameCarousel = "",
  paginaInicial = 0,
  onTrocarPagina,
}: Props) => {
  // usada para controlar páginas de barracas mais populares de cada formato
  const [paginaAtual, setPaginaAtual] = useState(paginaInicial);

  useEffect(() => {
    setPaginaAtual(paginaInicial);
  }, [paginaInicial]);

  useEffect(() => {
    if (rolagemAutomatica) {
      const timer = setInterval(() => {
        const botaoNext = document.querySelector(
          `#${id} .carousel-control-next`
        ) as HTMLButtonElement | null;

        if (botaoNext) {
          botaoNext.click();
        }
      }, intervalo);

      return () => clearInterval(timer);
    }
  }, [id, rolagemAutomatica, intervalo]);

  const handleTrocarPagina = (direcao: "prev" | "next") => {
    const novaPagina =
      direcao === "prev"
        ? (paginaAtual - 1 + itens.length) % itens.length
        : (paginaAtual + 1) % itens.length;

    setPaginaAtual(novaPagina);
    onTrocarPagina?.(novaPagina);
  };

  return (
    <div
      id={id}
      className={`carousel slide ${classNameCarousel}`}
      data-bs-ride={rolagemAutomatica ? "carousel" : undefined}
      data-bs-interval={intervalo || undefined}
    >
      <div className="carousel-inner">
        {itens.map((item, indice) => (
          <div
            key={`${JSON.stringify(item)}-${indice}`}
            className={`carousel-item ${
              indice === paginaAtual ? "active" : ""
            }`}
          >
            <div className="row justify-content-center g-0">
              {renderizarItem(item)}
            </div>
          </div>
        ))}
      </div>

      {controles && (
        <>
          <button
            className="carousel-control-prev"
            type="button"
            onClick={
              id.startsWith("carousel-")
                ? () => handleTrocarPagina("prev")
                : undefined
            }
            data-bs-target={!id.startsWith("carousel-") ? `#${id}` : undefined}
            data-bs-slide={!id.startsWith("carousel-") ? "prev" : undefined}
          >
            <span
              className={`carousel-control-prev-icon ${classNameControles}`}
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Anterior</span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            onClick={
              id.startsWith("carousel-")
                ? () => handleTrocarPagina("next")
                : undefined
            }
            data-bs-target={!id.startsWith("carousel-") ? `#${id}` : undefined}
            data-bs-slide={!id.startsWith("carousel-") ? "next" : undefined}
          >
            <span
              className={`carousel-control-next-icon ${classNameControles}`}
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Próximo</span>
          </button>
        </>
      )}
    </div>
  );
};

export default Carousel;
