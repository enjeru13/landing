import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="min-h-screen bg-background-light dark:bg-background-dark flex flex-col items-center justify-center gap-6 font-body">
    <span className="text-8xl font-black text-primary">404</span>
    <p className="text-xl text-text-muted dark:text-gray-400">Página no encontrada</p>
    <Link
      to="/"
      className="px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-colors"
    >
      Volver al inicio
    </Link>
  </div>
);

export default NotFound;
