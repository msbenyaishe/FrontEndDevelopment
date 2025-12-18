import { useContext } from "react";
import { motion } from "framer-motion";
import { AppContext } from "../context/AppContext";

export default function EventInfo() {
    const { language, theme } = useContext(AppContext);

    const translations = {
        en: {
            title: "CAN 2025 Event Information",
            description: "The Africa Cup of Nations 2025 is set to be an unforgettable celebration of football excellence. Hosted in Morocco, this prestigious tournament brings together the best teams from across the continent."
        },
        fr: {
            title: "Informations sur l'événement CAN 2025",
            description: "La Coupe d'Afrique des Nations 2025 sera une célébration inoubliable de l'excellence du football. Organisée au Maroc, ce tournoi prestigieux rassemble les meilleures équipes du continent."
        },
        ar: {
            title: "معلومات حدث كأس الأمم الأفريقية 2025",
            description: "كأس الأمم الأفريقية 2025 ستكون احتفالاً لا يُنسى بالتميز الكروي. تستضيفها المغرب، ويجمع هذا البطولة المرموقة أفضل الفرق من جميع أنحاء القارة."
        },
        es: {
            title: "Información del Evento CAN 2025",
            description: "La Copa Africana de Naciones 2025 será una celebración inolvidable de la excelencia del fútbol. Organizada en Marruecos, este prestigioso torneo reúne a los mejores equipos de todo el continente."
        }
    };

    const text = translations[language] || translations.en;

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
                {text.title}
            </motion.h1>
            <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
            >
                {text.description}
            </motion.p>
        </motion.div>
    );
}