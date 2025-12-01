import { useState } from 'react'
import ListeProfiles from './components/ListeProfiles';
import FormulaireProfil from './components/FormulaireProfile';

function App() {
  const [profiles, setProfiles] = useState ([
    {nom: "Alice", age: 25, profession: "Devloppeur", image : "./images/male.png"},
    {nom: "Bob", age: 30, profession: "Designer", image: "./images/male2.png"}
  ]);

  const ajouterProfil = (profil) => {
    const nouveauxProfiles = [...profiles, profil];
    setProfiles(nouveauxProfiles);
  }

  const supprimerProfil = (index) => {
    const nouveauxProfiles = profiles.filter((_,i) => i !== index);
    setProfiles(nouveauxProfiles);
  }

  return (
    <div className= "container">
      <h1 className= "text-center my-4">Liste des profiles</h1>
      <FormulaireProfil ajouterProfile={ajouterProfil} />
      <ListeProfiles profiles={profiles} supprimerProfil= {supprimerProfil} />
    </div>
  );
}

export default App;
