import React from "react";

function DynamicDisplay({ notification, city, skills }) {
  return (
    <div style={{ marginTop: "40px" }}>
      <h2>Affichage dynamique</h2>

      <p>
        <strong>Mode de notification :</strong>{" "}
        {notification ? notification : "Aucun mode choisi"}
      </p>

      <p>
        <strong>Ville selectionnee :</strong>{" "}
        {city ? city : "Aucune ville selectionnee"}
      </p>

      <p>
        <strong>Competences :</strong>
      </p>

      {skills.length === 0 ? (
        <p>Aucune competence selectionnee.</p>
      ) : (
        <ul>
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DynamicDisplay;
