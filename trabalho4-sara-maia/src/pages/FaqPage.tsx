import { useState } from "react";
import Tabs from "../components/Tabs";
import Accordion from "../components/Accordion";
import { faqGeral, faqPagamentosReembolso, tabs } from "../data/objetos";
import { ConteudoAbas } from "../interfaces/interfacesAuxiliares";
import useToastsStore from "../store/useToastsStore";

const FaqPage = () => {
  const [tabAtiva, setTabAtiva] = useState("geral");

  const { toasts } = useToastsStore();

  const conteudosAbas: ConteudoAbas = {
    "geral": faqGeral,
    "pagamentosReembolso": faqPagamentosReembolso,
  };

  return (
    <div className="container" id="containerFaq">
      {toasts.map((t) => (
        <div key={t.id}>{t.toast}</div>
      ))}
      <h1 className="text-center mb-4">Perguntas Frequentes (FAQ)</h1>

      <Tabs tabs={tabs} tabAtiva={tabAtiva} onTabClick={setTabAtiva} />

      <div className="tab-content">
        {Object.keys(conteudosAbas).map((conteudo) => (
          <div
            key={conteudo}
            className={`tab-pane fade ${tabAtiva === conteudo ? "show active" : ""}`}
            id={conteudo}
          >
            <Accordion itens={conteudosAbas[conteudo]} accordionId={`faqAccordion${conteudo.charAt(0).toUpperCase() + conteudo.slice(1)}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqPage;
