import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav>
      <Link to="/calcul">Calcul Frais</Link>
      <Link to="/verification/1">Vérification</Link>
    </nav>
  );
}
