// Composant1.jsx
import { useState } from "react";

function Composant1({ salaries }) {
  const [matricule, setMatricule] = useState("");
  const [marque, setMarque] = useState("");
  const [date, setDate] = useState("");
  const [couleur, setCouleur] = useState("");
  const [show, setShow] = useState(false);

  return (
    <div className="composant1-container">
      <h2 className="section-title">Gestion Voiture</h2>

      <input className="input-field" placeholder="Matricule" onChange={e => setMatricule(e.target.value)} />
      <input className="input-field" placeholder="Marque" onChange={e => setMarque(e.target.value)} />
      <input className="input-field" type="date" onChange={e => setDate(e.target.value)} />
      <input className="input-field" placeholder="Couleur" onChange={e => setCouleur(e.target.value)} />

      <button className="btn-confirm" onClick={() => setShow(true)}>Confirmer</button>

      {show && (
        <div className="recap-container">
          <h3 className="recap-title">Recapitulatif</h3>
          <p className="recap-item">Matricule : {matricule}</p>
          <p className="recap-item">Marque : {marque}</p>
          <p className="recap-item">Date : {date}</p>
          <p className="recap-item">Couleur : {couleur}</p>
        </div>
      )}

      <h2 className="section-title">Liste des Salaries</h2>

      <table className="salaries-table" border="1">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prenom</th>
            <th>Fonction</th>
            <th>Service</th>
          </tr>
        </thead>
        <tbody>
          {salaries.map(s => (
            <tr key={s._id}>
              <td>{s.nomsal}</td>
              <td>{s.prenomsal}</td>
              <td>{s.fonction}</td>
              <td>{s.service.nomser}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Composant1;
