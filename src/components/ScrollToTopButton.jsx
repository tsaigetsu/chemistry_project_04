import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Определяем направление прокрутки
      if (window.scrollY < lastScrollY) {
        setIsScrollingUp(true); // Пользователь прокручивает вверх
      } else {
        setIsScrollingUp(false); // Пользователь прокручивает вниз
      }

      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <motion.button
        className="scroll-to-top"
        onClick={scrollToTop}
        initial={{ opacity: 0, y: 50 }} // Начальное состояние
        animate={{ opacity: 1, y: 0 }} // Когда кнопка появляется
        exit={{ opacity: 0, y: isScrollingUp ? -50 : 50 }} // Уходим вниз, если прокручиваем вниз, и вверх, если прокручиваем вверх
        transition={{ duration: 0.12 }} // Длительность анимации
      >
        <ArrowUp size={24} />
      </motion.button>
    )
  );
}
