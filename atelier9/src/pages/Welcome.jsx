import { useContext } from "react";
import { motion } from "framer-motion";
import { AppContext } from "../context/AppContext";

export default function Welcome() {
    const { language, theme } = useContext(AppContext);

    const messages = {
        en: "Welcome to Tangier!",
        fr: "Bienvenue à Tanger !",
        ar: "مرحبا بكم في طنجة",
        es: "¡Bienvenidos a Tánger!"
    };

    return (
        <motion.div
            className={`page ${theme}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
            >
                {messages[language] || messages.en}
            </motion.h1>
            <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
            >
                We're excited to host you for CAN 2025. Explore our beautiful city and enjoy the festivities!
            </motion.p>
        </motion.div>
    );
}