import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ExpandedCard({ card, onCollapse }) {
  return (
    <motion.div
      layout
      className="expanded-card"
      onClick={onCollapse} // Клик по всей карточке
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
    >
      <img
        src={card.overlayImage}
        alt={card.title}
        className="expanded-card-image"
      />

      <div className="extra-wrapper">
        <h2 className="second-heading">{card.title}</h2>
        <p className="paragraf">{card.expandedContent}</p>

        <button
          onClick={(e) => {
            e.stopPropagation(); // Предотвратить всплытие на главный блок
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
