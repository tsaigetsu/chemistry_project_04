import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Card({ card, onExpand }) {
  return (
    <motion.div layout className="card">
      <div className="card-image">
        <img src={card.image} alt={card.title} className="food-image" />
        <div className="overlay-image">
          <img src={card.overlayImage} alt={`${card.title} overlay`} className="food-image" />
        </div>
      </div>

      <div className="card-content">
        <h3 className="third-heading">{card.title}</h3>
        <p className="paragraf">{card.content}</p>

        <button onClick={() => onExpand(card.id)} className="expand-button">
          <motion.div
            initial={false}
            animate={{ rotate: 0 }}
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown size={18} />
          </motion.div>
        </button>
      </div>
    </motion.div>
  );
}
