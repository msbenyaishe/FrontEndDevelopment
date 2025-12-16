import { useState } from "react";

function Composant3({ salaries }) {
  const [service, setService] = useState("");
  const [result, setResult] = useState([]);

  const chercher = () => {
    const res = salaries.filter(
      s => s.service.nomser === service
    );
    setResult(res);
  };

  return (
    <div className="composant3-container">
      <h2 className="section-title">Rechercher par service</h2>

      <input
        className="input-field"
        placeholder="Nom du service"
        onChange={e => setService(e.target.value)}
      />

      <button className="btn-search" onClick={chercher}>Chercher</button>

      <h3 className="result-title">Resultat</h3>

      {result.length === 0 ? (
        <p className="no-result">Aucun salarie n'est affecte a ce service</p>
      ) : (
        <ul className="result-list">
          {result.map(s => (
            <li key={s._id} className="result-item">
              Nom: {s.nomsal} Prenom: {s.prenomsal}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Composant3;
