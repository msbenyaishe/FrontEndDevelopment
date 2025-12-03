import React, { useState } from "react";

function DynamicCity({ setCity }) {
  const [selectedCity, setSelectedCityLocal] = useState("");
  const [cities, setCities] = useState(["Paris", "London", "New York"]);
  const [ville, setVille] = useState("");

  const handleCityChange = (e) => {
    const value = e.target.value;
    setSelectedCityLocal(value);
    setCity(value);
  };

  const addCity = (e) => {
    e.preventDefault();
    if (ville.trim() === "") return;

    setCities([...cities, ville]);
    setVille("");
  };

  return (
    <div style={{ marginTop: "50px", fontWeight: "bold" }}>
    <h2>Ville</h2>
      <table>
        <tbody>
          <tr>
            <td>
              <label>Entrer une ville :</label>
              <input
                type="text"
                value={ville}
                onChange={(e) => setVille(e.target.value)}
              />
            </td>
          </tr>

          <tr>
            <td>
              <button onClick={addCity}>Add City</button>
            </td>
          </tr>

          <tr>
            <td>
              <select value={selectedCity} onChange={handleCityChange}>
                {cities.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </td>
          </tr>

          <tr>
            <td>
              <p>Selected City : {selectedCity}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DynamicCity;
