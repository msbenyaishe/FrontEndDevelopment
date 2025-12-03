import React, { useRef, useState } from "react";

function Competences({ setSkills }) {
  const checkboxRefs = useRef([]);
  const [selectedSkills, setSelectedSkills] = useState([]);

  const updateSkills = () => {
    const selected = checkboxRefs.current
      .filter((cb) => cb.checked)
      .map((cb) => cb.value);

    setSelectedSkills(selected);
    setSkills(selected);
  };

  const selectAll = () => {
    checkboxRefs.current.forEach((cb) => (cb.checked = true));
    updateSkills();
  };

  const deselectAll = () => {
    checkboxRefs.current.forEach((cb) => (cb.checked = false));
    updateSkills();
  };

  return (
    <div>
      <h2>Competences</h2>

      <label>
        <input
          type="checkbox"
          value="React"
          ref={(el) => (checkboxRefs.current[0] = el)}
          onChange={updateSkills}
        />
        React
      </label>

      <br />

      <label>
        <input
          type="checkbox"
          value="Node.js"
          ref={(el) => (checkboxRefs.current[1] = el)}
          onChange={updateSkills}
        />
        Node.js
      </label>

      <br />

      <label>
        <input
          type="checkbox"
          value="JavaScript"
          ref={(el) => (checkboxRefs.current[2] = el)}
          onChange={updateSkills}
        />
        JavaScript
      </label>

      <div style={{ marginTop: "10px" }}>
        <button type="button" onClick={selectAll}>
          Tout selectionner
        </button>
        <button type="button" onClick={deselectAll} style={{ marginLeft: "10px" }}>
          Tout deselectionner
        </button>
      </div>

      <h3 style={{ marginTop: "15px" }}>Competences selectionnees :</h3>

      {selectedSkills.length === 0 ? (
        <p>Aucune competence selectionnee.</p>
      ) : (
        <ul>
          {selectedSkills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Competences;
