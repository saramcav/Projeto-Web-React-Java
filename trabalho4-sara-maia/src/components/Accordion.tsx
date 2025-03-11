import { useState, useEffect } from "react";
import { ItemFAQ } from "../interfaces/interfaces";

interface Props {
  itens: ItemFAQ[];
  accordionId: string;
}

const Accordion = ({ itens, accordionId }: Props) => {
  const [itemAberto, setItemAberto] = useState(() => {
    const ultimoAberto = localStorage.getItem(accordionId);
    return ultimoAberto ? JSON.parse(ultimoAberto) : itens[0]?.id || null;
  });

  const handleToggle = (itemId: string) => {
    const novoItemAberto = itemAberto === itemId ? null : itemId;
    setItemAberto(novoItemAberto);
    localStorage.setItem(accordionId, JSON.stringify(novoItemAberto));
  };

  useEffect(() => {
    const ultimoAberto = localStorage.getItem(accordionId);

    if (ultimoAberto && JSON.parse(ultimoAberto) !== itemAberto) {
      setItemAberto(JSON.parse(ultimoAberto));
    }
  }, [itemAberto]);

  return (
    <div className="accordion" id={accordionId}>
      {itens.map((item) => (
        <div className="accordion-item" key={item.id}>
          <h2 className="accordion-header" id={`${item.id}Titulo`}>
            <button
              className={`accordion-button ${
                itemAberto === item.id ? "" : "collapsed"
              }`}
              type="button"
              data-bs-toggle="collapse"
              aria-expanded={itemAberto === item.id}
              aria-controls={item.id}
              onClick={() => handleToggle(item.id)}
            >
              <strong>{item.pergunta}</strong>
            </button>
          </h2>
          <div
            id={item.id}
            className={`accordion-collapse collapse ${
              itemAberto === item.id ? "show" : ""
            }`}
            aria-labelledby={`${item.id}Titulo`}
            data-bs-parent={`#${accordionId}`}
          >
            <div className="accordion-body">{item.resposta}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
