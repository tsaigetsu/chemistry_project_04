import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next"; // Подключаем

export default function ExpandedCard({ card, onCollapse }) {
  const { i18n } = useTranslation(); // Берем текущий язык

  const currentLang = i18n.language || "en"; // на случай если язык вдруг undefined

  return (
    <motion.div
      layout
      className="expanded-card"
      onClick={onCollapse}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
    >
      <img
        src={card.overlayImage}
        alt={card.title[currentLang]} // <-- правильный alt
        className="expanded-card-image"
      />

      <div className="extra-wrapper">
        <h2 className="second-heading">{card.title[currentLang]}</h2>{" "}
        {/* правильный заголовок */}
        <p className="paragraf">{card.expandedContent[currentLang]}</p>{" "}
        {/* правильный текст */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onCollapse();
          }}
          className="expand-button"
        >
          <motion.div animate={{ rotate: 180 }} transition={{ duration: 0.3 }}>
            <ChevronDown size={18} />
          </motion.div>
        </button>
      </div>
    </motion.div>
  );
}
