// App.jsx
import { useEffect, useState } from "react";
import Composant1 from "./components/composant1";
import Composant3 from "./components/Composant3";

function App() {
  const [salaries, setSalaries] = useState([]);

  useEffect(() => {
    fetch("https://salaries.42web.io/salaries.php")
      .then(response => response.json())
      .then(data => {
        console.log("API DATA:", data);
        setSalaries(data);
      });
  }, []);

  return (
    <div className="app-container">
      <h1 className="app-title">Gestion des Salaries</h1>
      <Composant1 salaries={salaries} />
      <Composant3 salaries={salaries} />
    </div>
  );
}

export default App;
