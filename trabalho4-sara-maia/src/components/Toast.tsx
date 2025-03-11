interface Props {
  icone: string;
  titulo: string;
  mensagem: string;
}

const Toast = ({ icone, titulo, mensagem }: Props) => {
  return (
    <div className="toast-container position-fixed top-0 end-0 p-3">
      <div
        id="toastCarrinho"
        className="toast align-items-center show"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="toast-header">
          <i className={`bi ${icone} me-2`}></i>
          <strong className="me-auto">{titulo}</strong>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
        <div className="toast-body">{mensagem}</div>
      </div>
    </div>
  );
};

export default Toast;
