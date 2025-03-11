import flatpickr from "flatpickr";
import { useEffect } from "react";
import { Portuguese } from "flatpickr/dist/l10n/pt.js";

interface Props {
  containerClassName: string;
  id: string;
}

const FormAluguel = ({ containerClassName, id }: Props) => {
  useEffect(() => {
    flatpickr(`#periodo-${id}`, {
      locale: Portuguese,
      mode: "range",
      dateFormat: "d/m/Y",
    });
  }, []);

  return (
    <div className={containerClassName} id={id}>
      <h2 className="text-center">Alugue sua Barraca Aqui!</h2>
      <p className="text-center text-muted">A loja mais aventureira de Niterói</p>
      <form>
        <div className="row g-3">
          <div className="col-md-6  col-md-3">
            <label htmlFor={`formato-${id}`} className="form-label">
              Formato
            </label>
            <select className="form-select" id={`formato-${id}`} required>
              <option value="">Selecione</option>
              <option value="formato1">Iglu</option>
              <option value="formato2">Bivak</option>
              <option value="formato3">Geodésica</option>
              <option value="formato4">Túnel</option>
            </select>
          </div>


          <div className="col-md-6 mb-3">
            <label htmlFor={`barraca-${id}`} className="form-label">
              Barraca
            </label>
            <input
              type="text"
              className="form-control"
              id={`barraca-${id}`}
              placeholder="Digite o nome da barraca"
              required
            />
          </div>

          <div className="row g-3">
            <div className="col-md-6">
              <label htmlFor={`periodo-${id}`} className="form-label">
                Período
              </label>
              <input
                type="text"
                id={`periodo-${id}`}
                className="form-control"
                placeholder="Selecione o período"
              />
            </div>

            <div className="col-md-6 mb-3">
              <label htmlFor={`hora-${id}`} className="form-label">
                Hora
              </label>
              <input type="time" id={`hora-${id}`} className="form-control" />
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-success">
            Continuar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormAluguel;
