import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Card({ card, onExpand }) {
  const { i18n } = useTranslation(); // Получаем текущий язык

  const handleCardClick = (e) => {
    // чтобы не сработало, если клик по кнопке
    if (e.target.closest("button")) return;
    onExpand(card.id);
  };

  // Получаем нужный перевод для title, content и expandedContent
  const title = card.title[i18n.language];
  const content = card.content[i18n.language];
  const expandedContent = card.expandedContent[i18n.language];

  return (
    <motion.div
      layout
      className="card"
      onClick={handleCardClick}
      style={{ cursor: "pointer" }}
    >
      <div className="card-image">
        <img src={card.image} alt={title} className="food-image" />
        <div className="overlay-image">
          <img
            src={card.overlayImage}
            alt={`${title} overlay`}
            className="food-image"
          />
        </div>
      </div>

      <div className="card-content">
        <h3 className="third-heading">{title}</h3>
        <p className="paragraf">{content}</p>

        <button onClick={() => onExpand(card.id)} className="expand-button">
          <motion.div
            initial={false}
            animate={{ rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown size={18} />
          </motion.div>
        </button>
      </div>
    </motion.div>
  );
}
