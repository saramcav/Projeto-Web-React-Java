import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-center bg-body-tertiary tema-header-footer">
      <div className="container pt-4">
        <section className="mb-4">
          <Link
            to="/facebook"
            className="btn btn-link btn-floating btn-lg text-body m-1"
          >
            <i className="bi bi-facebook"></i>
          </Link>

          <Link
            to="/twitter"
            className="btn btn-link btn-floating btn-lg text-body m-1"
          >
            <i className="bi bi-twitter"></i>
          </Link>

          <Link
            to="/google"
            className="btn btn-link btn-floating btn-lg text-body m-1"
          >
            <i className="bi bi-google"></i>
          </Link>

          <Link
            to="/instagram"
            className="btn btn-link btn-floating btn-lg text-body m-1"
          >
            <i className="bi bi-instagram"></i>
          </Link>

          <Link
            to="/linkedin"
            className="btn btn-link btn-floating btn-lg text-body m-1"
          >
            <i className="bi bi-linkedin"></i>
          </Link>

          <Link
            to="/github"
            className="btn btn-link btn-floating btn-lg text-body m-1"
          >
            <i className="bi bi-github"></i>
          </Link>
        </section>
      </div>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
      >
        © 2024: DevWeb
      </div>
    </footer>
  );
};

export default Footer;
