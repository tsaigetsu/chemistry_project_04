import { useState } from 'react';
import Card from './Card.jsx';
import ExpandedCard from './Expand.jsx';
import { AnimatePresence } from 'framer-motion';
import cardsData from '../../cardsData.js';

export default function CardsSection() {
  const [expandedCardId, setExpandedCardId] = useState(null);

  const handleExpand = (id) => {
    setExpandedCardId(id);
  };

  const handleCollapse = () => {
    setExpandedCardId(null);
  };

  // Найти карточку в данных по её id
  const expandedCard = Object.values(cardsData)
    .flat()
    .find(card => card.id === expandedCardId);

  return (
    <section id="colorants" className={`cards-section ${expandedCard ? 'no-scroll' : ''}`}>
      <div className='card-section'>
        <AnimatePresence mode="wait">
          {expandedCard ? (
            <ExpandedCard key="expanded" card={expandedCard} onCollapse={handleCollapse} />
          ) : (
            // Отображаем только карточки с id от 1 до 6
            Object.values(cardsData).flat().filter(card => card.id >= 1 && card.id <= 6).map(card => (
              <Card key={card.id} card={card} onExpand={handleExpand} />
            ))
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
