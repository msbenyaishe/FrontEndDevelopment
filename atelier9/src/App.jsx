import { Routes, Route } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import DiscoverTangier from "./pages/DiscoverTangier";
import EventInfo from "./pages/EventInfo";
import Contact from "./pages/Contact";

export default function App() {
  const { theme, language } = useContext(AppContext);

  useEffect(() => {
    document.body.className = theme;
    document.documentElement.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme, language]);

  return (
    <div className={theme}>
      <Navbar />

      <main className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tangier" element={<DiscoverTangier />} />
          <Route path="/event" element={<EventInfo />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}