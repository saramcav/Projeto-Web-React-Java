import { useState, useEffect } from "react";
import Carousel from "../components/Carousel";
import CardBarraca from "../components/CardBarraca.tsx";
import FormAluguel from "../components/FormAluguel";
import { capas } from "../data/objetos";
import Barraca from "../interfaces/Barraca.ts";
import { Capa } from "../interfaces/interfacesAuxiliares.ts";
import useBarracasPorFormato from "../hooks/useBarracasPorFormato";
import useToastsStore from "../store/useToastsStore.ts";

const HomePage = () => {
  const { data: melhoresBarracasIglu } = useBarracasPorFormato("1", "8");
  const { data: melhoresBarracasBivak } = useBarracasPorFormato("2", "8");
  const { data: melhoresBarracasTunel } = useBarracasPorFormato("3", "8");
  const { data: melhoresBarracasGeodesica } = useBarracasPorFormato("4", "8");

  const melhoresBarracas: { [formato: string]: Barraca[] } = {
    iglu: melhoresBarracasIglu || [],
    bivak: melhoresBarracasBivak || [],
    tunel: melhoresBarracasTunel || [],
    geodesica: melhoresBarracasGeodesica || [],
  };

  const { toasts } = useToastsStore();

  const [barracasPorCarrossel, setBarracasPorCarrossel] = useState(4);
  const [telaPequena, setTelaPequena] = useState(false);
  const [indicesUltimasBarracas, setIndicesUltimasBarracas] = useState<{
    [formato: string]: number;
  }>({});

  const determinarConfigTela = () => {
    const largura = window.innerWidth;

    if (largura >= 1200) {
      setTelaPequena(false);
      setBarracasPorCarrossel(4);
    } else {
      setTelaPequena(true);
      if (largura >= 992) {
        setBarracasPorCarrossel(4);
      } else if (largura >= 768) {
        setBarracasPorCarrossel(3);
      } else if (largura >= 576) {
        setBarracasPorCarrossel(2);
      } else {
        setBarracasPorCarrossel(1);
      }
    }
  };

  useEffect(() => {
    determinarConfigTela();
    const handleResize = () => {
      determinarConfigTela();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const dividirEmPaginas = (
    barracas: Barraca[],
    barracasPorCarrossel: number
  ) => {
    const paginas = [];
    for (let i = 0; i < barracas.length; i += barracasPorCarrossel) {
      paginas.push(barracas.slice(i, i + barracasPorCarrossel));
    }
    return paginas;
  };

  const handleTrocarPagina = (formato: string, novaPagina: number) => {
    setIndicesUltimasBarracas((estadoAnterior) => ({
      ...estadoAnterior,
      [formato]: novaPagina * barracasPorCarrossel,
    }));
  };

  const renderizarCards = (pagina: Barraca[]) => (
    <div
      className="row justify-content-center g-0 mx-auto"
      style={{ maxWidth: "65%", margin: "0 auto" }}
    >
      {pagina.map((barraca) => (
        <div
          key={barraca.id!}
          className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3 px-1 d-flex justify-content-center"
        >
          <CardBarraca
            id={barraca.id!}
            titulo={barraca.nome}
            imgSrc={`/${barraca.imagem}`}
            preco={barraca.preco}
            modalidade={barraca.modalidade}
            avaliacao={barraca.avaliacao}
            styleHTML={{ height: "100%" }}
          />
        </div>
      ))}
    </div>
  );

  const renderizarCarrossel = (capa: Capa) => (
    <img
      src={`/${capa.imgSrc}`}
      className="d-block w-100"
      alt={capa.textoAlt}
    />
  );

  return (
    <>
      <div className="position-relative">
        <Carousel
          id="carouselCapa"
          itens={capas}
          renderizarItem={renderizarCarrossel}
          intervalo={5000}
          rolagemAutomatica={true}
          controles={true}
          classNameCarousel="position-relative d-none d-xl-block"
        />

        <FormAluguel
          id="formularioAluguel"
          containerClassName={`${
            telaPequena
              ? "position-relative bg-white bg-opacity-75 p-4 rounded shadow w-75 mx-auto"
              : "position-absolute top-50 start-50 translate-middle bg-white bg-opacity-75 p-4 rounded shadow w-75 mb-5"
          }`}
        />
      </div>

      <div id="containerCarrosseis" className="p-4">
        {toasts.map((t) => (
          <div key={t.id}>{t.toast}</div>
        ))}
        {Object.entries(melhoresBarracas).map(([formato, barracas]) => {
          const paginas = dividirEmPaginas(
            barracas,
            barracasPorCarrossel
          );
          const indiceUltimaBarraca = indicesUltimasBarracas[formato] || 0;
          const paginaInicial = Math.floor(
            indiceUltimaBarraca / barracasPorCarrossel
          );

          return (
            <div key={formato} className="mb-5">
              <h3 className="mb-4 text-center">
                Mais Populares em {formato === "geodesica"? "Geodésica" : formato[0].toUpperCase() + formato.slice(1)}
              </h3>
              <Carousel
                id={`carousel-${formato}`}
                itens={paginas}
                renderizarItem={renderizarCards}
                rolagemAutomatica={false}
                controles={true}
                classNameControles="carousel-icone-cards"
                paginaInicial={paginaInicial}
                onTrocarPagina={(novaPagina) =>
                  handleTrocarPagina(formato, novaPagina)
                }
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HomePage;
