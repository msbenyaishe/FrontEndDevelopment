import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
    const [language, setLanguage] = useState(() => localStorage.getItem("language") || "en");
    const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

    useEffect(() => {
        localStorage.setItem("language", language);
    }, [language]);

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <AppContext.Provider value={{ language, setLanguage, theme, toggleTheme }}>
            {children}
        </AppContext.Provider>
    )
}