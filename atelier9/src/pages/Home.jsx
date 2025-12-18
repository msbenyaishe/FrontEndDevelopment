import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import heroImage from "../assets/image.png"; // Import the image via JS for Vite

export default function Home() {
  const { language } = useContext(AppContext);

  const translations = {
    en: { welcome: "WELCOME TO TANGIER", subtext: "Bienvenue à Tanger" },
    fr: { welcome: "BIENVENUE À TANGER", subtext: "Welcome to Tangier" },
    ar: { welcome: "مرحبا بكم في طنجة", subtext: "BIENVENIDOS A TÁNGERS" },
    es: { welcome: "BIENVENIDOS A TÁNGERS", subtext: "مرحبا بكم في طنجة" },
  };

  const text = translations[language] || translations.en;

  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <div className="hero-content">
        <h1>{text.welcome}</h1>
        <p>{text.subtext}</p>
      </div>
    </div>
  );
}
