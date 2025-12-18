import { useContext } from "react";
import { motion } from "framer-motion";
import { AppContext } from "../context/AppContext";

export default function DiscoverTangier() {
    const { language, theme } = useContext(AppContext);

    const translations = {
        en: {
            title: "Discover Tangier",
            description: "Tangier is a unique Moroccan city where the Mediterranean meets the Atlantic, blending African, European, and Arab cultures. Explore the rich history, vibrant markets, and stunning landscapes that make Tangier a must-visit destination. Wander through the historic Kasbah, visit the Kasbah Museum for a glimpse of Morocco’s past, and enjoy the lively Grand Socco square. Tangier's beaches, such as Plage Municipale and Achakar, offer relaxation and scenic views. The city is also famous for its café culture, art galleries, and proximity to the legendary Caves of Hercules and Cap Spartel lighthouse."
        },
        fr: {
            title: "Découvrez Tanger",
            description: "Tanger est une ville marocaine unique où la Méditerranée rencontre l'Atlantique, mélangeant les cultures africaine, européenne et arabe. Explorez l'histoire riche, les marchés vibrants et les paysages époustouflants qui font de Tanger une destination incontournable. Promenez-vous dans la Kasbah historique, visitez le Musée de la Kasbah pour un aperçu du passé marocain et profitez de la place animée du Grand Socco. Les plages de Tanger, comme Plage Municipale et Achakar, offrent détente et vues magnifiques. La ville est également célèbre pour sa culture des cafés, ses galeries d'art et sa proximité avec les légendaires Grottes d’Hercule et le phare de Cap Spartel."
        },
        ar: {
            title: "اكتشف طنجة",
            description: "طنجة مدينة مغربية فريدة حيث تلتقي البحر الأبيض المتوسط بالمحيط الأطلسي، ممزجة بين الثقافات الأفريقية والأوروبية والعربية. استكشف التاريخ الغني والأسواق النابضة بالحياة والمناظر الطبيعية الخلابة التي تجعل طنجة وجهة لا بد من زيارتها. تجول في القصبة التاريخية، وزيارة متحف القصبة لاستكشاف ماضي المغرب، واستمتع بساحة جراند سوكو الحيوية. توفر شواطئ طنجة مثل الشاطئ البلدي وأشكار مكانًا للاسترخاء وإطلالات خلابة. تشتهر المدينة أيضًا بثقافة المقاهي والمعارض الفنية وقربها من مغارات هرقل الأسطورية ومنارة رأس سبارتل."
        },
        es: {
            title: "Descubre Tánger",
            description: "Tánger es una ciudad marroquí única donde el Mediterráneo se encuentra con el Atlántico, fusionando culturas africanas, europeas y árabes. Explora la rica historia, los mercados vibrantes y los paisajes impresionantes que hacen de Tánger un destino imprescindible. Pasea por la histórica Kasbah, visita el Museo de la Kasbah para conocer el pasado de Marruecos y disfruta de la animada plaza Grand Socco. Las playas de Tánger, como Plage Municipale y Achakar, ofrecen relajación y vistas panorámicas. La ciudad también es famosa por su cultura de cafés, galerías de arte y su cercanía a las legendarias Cuevas de Hércules y al faro de Cap Spartel."
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
