import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useTranslation } from "react-i18next";
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
        <a className="links" href="#Colorants">
          Colorants
        </a>
        <a className="links" href="#Preservatives">
          Preservatives
        </a>
        <a className="links" href="#Flavor-Enhancers">
          Flavor Enhancers
        </a>
        <a className="links" href="#Myths">
          Myths
        </a>
      </nav>

      <div className="language-selector">
        <button
          onClick={toggleMenu}
          className="lang-button flex items-center gap-2"
        >
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
