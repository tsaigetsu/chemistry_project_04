import { useState } from 'react';
import Card from './Card.jsx';
import ExpandedCard from './Expand.jsx';
import { AnimatePresence, motion } from 'framer-motion';
import cardsData from '../../cardsData.js';

export default function CardsSection({ startId, endId, title }) {  // <--- Принимаем title
  const [expandedCardId, setExpandedCardId] = useState(null);
  const [isCollapsing, setIsCollapsing] = useState(false);

  const handleExpand = (id) => {
    setIsCollapsing(true);

    setTimeout(() => {
      setExpandedCardId(id);
      setIsCollapsing(false);
    }, 400);
  };

  const handleCollapse = () => {
    setExpandedCardId(null);
  };

  const expandedCard = Object.values(cardsData)
    .flat()
    .find(card => card.id === expandedCardId);

  const cards = Object.values(cardsData)
    .flat()
    .filter(card => card.id >= startId && card.id <= endId);

  return (
    <section id={`${title}`} className={`cards-section ${expandedCard ? 'no-scroll' : ''}`}>
      {/* Добавляем заголовок */}
      <h2 className="second-heading">{title}</h2> 

      <div className="card-section">
        <AnimatePresence mode="wait">
          {expandedCard ? (
            <ExpandedCard key="expanded" card={expandedCard} onCollapse={handleCollapse} />
          ) : (
            cards.map((card) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 1, y: 0 }}
                animate={isCollapsing ? { opacity: 0, y: 50 } : { opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.4 }}
              >
                <Card card={card} onExpand={handleExpand} />
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
