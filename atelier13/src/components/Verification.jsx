import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Verification() {
  const { iddemande } = useParams();
  const [resultat, setResultat] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    axios
      .get(`http://127.0.0.1:8000/api/verifier/${iddemande}`)
      .then((res) => {
        setResultat(res.data);
      })
      .catch(() => {
        setError("Erreur de vérification");
        setResultat(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [iddemande]);

  const displayResult = () => {
    if (typeof resultat === "object" && resultat !== null) {
      return JSON.stringify(resultat, null, 2);
    }
    return resultat;
  };

  return (
    <div className="page-container">
      <h2>Vérification du dossier</h2>
      {loading && <p className="loading-text">Chargement...</p>}
      {error && <p className="error-text">{error}</p>}
      {!loading && !error && resultat !== null && (
        <div className="result-container">
          <p>Résultat :</p>
          <pre>{displayResult()}</pre>
        </div>
      )}
    </div>
  );
}
