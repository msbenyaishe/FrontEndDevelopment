import { useContext } from "react";
import { motion } from "framer-motion";
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
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {text.welcome}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          {text.subtext}
        </motion.p>
      </motion.div>
    </div>
  );
}
