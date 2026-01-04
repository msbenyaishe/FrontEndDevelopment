import { useState } from "react";
import { useDispatch } from "react-redux";
import { ajouterSimulation } from "../assets/redux/simulationSlice";

export default function CalculFrais() {
  const [montant, setMontant] = useState("");
  const [resultat, setResultat] = useState(null);

  const dispatch = useDispatch();

  const calculer = () => {
    const prix = Number(montant);
    
    if (isNaN(prix) || prix <= 0) {
      alert("Veuillez entrer un montant valide supérieur à 0");
      return;
    }

    // 1️⃣ Droits d'enregistrement (4%)
    const droits = prix * 0.04;

    // 2️⃣ Conservation foncière
    const conservation = prix * 0.015 + 200;

    // 3️⃣ Frais de dossier
    const dossier = 1500;

    // 4️⃣ Honoraires du notaire
    let taux = 0;

    if (prix < 300000) taux = 4000;
    else if (prix <= 1000000) taux = prix * 0.015;
    else if (prix <= 5000000) taux = prix * 0.0125;
    else if (prix <= 10000000) taux = prix * 0.0075;
    else taux = prix * 0.005;

    // 5️⃣ TVA (10%)
    const tva = taux * 0.1;

    // TOTAL
    const total = droits + conservation + dossier + taux + tva;

    const simulation = {
      id: Date.now(),
      montantVente: prix,
      Droits_en: droits,
      Conservation: conservation,
      Date: new Date().toLocaleDateString(),
      total: total
    };

    setResultat({ droits, conservation, dossier, taux, tva, total });

    // Save to Redux
    dispatch(ajouterSimulation(simulation));
  };

  return (
    <div className="page-container">
      <h2>Simulation des frais de notaire</h2>

      <input
        type="number"
        placeholder="Montant de vente"
        value={montant}
        onChange={(e) => setMontant(e.target.value)}
      />

      <button onClick={calculer}>Calculer</button>

      {resultat && (
        <div className="result-container">
          <p>Droits d'enregistrement: {resultat.droits.toFixed(2)} DH</p>
          <p>Conservation foncière: {resultat.conservation.toFixed(2)} DH</p>
          <p>Frais de dossier: {resultat.dossier.toFixed(2)} DH</p>
          <p>Honoraires notaire: {resultat.taux.toFixed(2)} DH</p>
          <p>TVA (10%): {resultat.tva.toFixed(2)} DH</p>
          <h3>TOTAL: {resultat.total.toFixed(2)} DH</h3>
        </div>
      )}
    </div>
  );
}
