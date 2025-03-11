interface Props {
  id: string;
  titulo: string;
  icone: string;
  corpo: React.ReactNode;
}

const OffCanvas = ({ id, titulo, icone, corpo }: Props) => (
  <div
    className="offcanvas offcanvas-end"
    id={id}
    aria-labelledby={`${id}-rotulo`}
  >
    <div className="offcanvas-header text-white tema-secundario">
      <h6 id={`${id}-rotulo`} className="mb-0">
        {icone && <i className={`bi ${icone} me-2`}></i>} {titulo}
      </h6>
      <button
        type="button"
        className="btn-close btn-close-white"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div className="offcanvas-body">{corpo}</div>
  </div>
);

export default OffCanvas;
