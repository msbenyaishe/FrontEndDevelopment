import { useState } from 'react'
import NotificationMode from './components/NotificationMode';
import DynamicCity from './components/DynamicCity';
import Competences from './components/skills';
import DynamicDisplay from './components/DynamicDisplay';

function App() {

  const [notification, setNotification] = useState("");
  const [city, setCity] = useState("");
  const [skills, setSkills] = useState([]);

  return (
    <>
      <NotificationMode setNotification={setNotification} />
      <DynamicCity setCity={setCity} />
      <Competences setSkills={setSkills} />

      <DynamicDisplay 
        notification={notification}
        city={city}
        skills={skills}
      />
    </>
  );
}

export default App;
