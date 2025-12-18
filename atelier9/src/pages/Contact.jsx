import { useContext } from "react";
import { motion } from "framer-motion";
import { AppContext } from "../context/AppContext";

export default function Contact() {
    const { language, theme } = useContext(AppContext);

    const translations = {
        en: {
            title: "Contact & Help",
            description: "Need assistance? Our team is here to help you make the most of your visit to Tangier for CAN 2025."
        },
        fr: {
            title: "Contact et Aide",
            description: "Besoin d'aide ? Notre équipe est là pour vous aider à profiter au maximum de votre visite à Tanger pour la CAN 2025."
        },
        ar: {
            title: "الاتصال والمساعدة",
            description: "تحتاج مساعدة؟ فريقنا هنا لمساعدتك في الاستفادة القصوى من زيارتك إلى طنجة لكأس الأمم الأفريقية 2025."
        },
        es: {
            title: "Contacto y Ayuda",
            description: "¿Necesitas ayuda? Nuestro equipo está aquí para ayudarte a aprovechar al máximo tu visita a Tánger para la CAN 2025."
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