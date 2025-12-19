import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AppContext } from "../context/AppContext";

export default function Navbar() {
    const { language, setLanguage, toggleTheme } = useContext(AppContext);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const languages = [
        { code: "en", name: "EN" },
        { code: "fr", name: "FR" },
        { code: "ar", name: "AR" },
        { code: "es", name: "ES" }
    ];

    return (
        <motion.nav
            className={`navbar ${scrolled ? "scrolled" : ""}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h2>AFCON 2025</h2>

            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/tangier">Discover Tangier</Link>
                <Link to="/event">Event Info</Link>
                <Link to="/contact">Contact</Link>
            </div>

            <div className="actions">
                
                <select className="lang-select"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                >
                    {languages.map((lang) => (
                        <option key={lang.code} value={lang.code}>
                            {lang.name}
                        </option>
                    ))}
                </select>

                <motion.button
                    className="theme-switch"
                    onClick={toggleTheme}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Toggle theme"
                />
            </div>
        </motion.nav>
    );
}
