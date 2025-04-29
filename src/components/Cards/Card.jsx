import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Card({ card, onExpand }) {
  const handleCardClick = (e) => {
    // чтобы не сработало, если клик по кнопке
    if (e.target.closest("button")) return;
    onExpand(card.id);
  };

  return (
    <motion.div
      layout
      className="card"
      onClick={handleCardClick}
      style={{ cursor: "pointer" }}
    >
      <div className="card-image">
        <img src={card.image} alt={card.title} className="food-image" />
        <div className="overlay-image">
          <img
            src={card.overlayImage}
            alt={`${card.title} overlay`}
            className="food-image"
          />
        </div>
      </div>

      <div className="card-content">
        <h3 className="third-heading">{card.title}</h3>
        <p className="paragraf">{card.content}</p>

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
