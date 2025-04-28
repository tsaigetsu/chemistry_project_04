import { useState, useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from "lucide-react";
import "./Header.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    document.documentElement.style.backgroundColor = "#ffffff";
    document.body.style.backgroundColor = "#ffffff";
    document.documentElement.style.colorScheme = "light";
  }, []);

  return (
    <header>
      <nav className="main-nav">
        <a className="links" href="#colorants">Colorants</a>
        <a className="links" href="#preservatives">Preservatives</a>
        <a className="links" href="#flavor-enhancers">Flavor Enhancers</a>
        <a className="links" href="#myths">Myths</a>
      </nav>

      <div className="language-selector">
      <button onClick={toggleMenu} className="lang-button flex items-center gap-2">
      <span>ENG</span>

      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <ChevronDown size={18} />
      </motion.div>
    </button>

        {isOpen && (
          <div className="lang-menu">
            <ul>
              <li>PL</li>
              <li>RU</li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
