import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import "./Header.css";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    document.documentElement.style.backgroundColor = "#ffffff";
    document.body.style.backgroundColor = "#ffffff";
    document.documentElement.style.colorScheme = "light";
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  return (
    <header>
      <nav className="main-nav">
        <a className="links" href="#Colorants">
          {t("header.Colorants")}
        </a>
        <a className="links" href="#Preservatives">
          {t("header.Preservatives")}
        </a>
        <a className="links" href="#Flavor-Enhancers">
          {t("header.FlavorEnhancers")}
        </a>
        <a className="links" href="#Myths">
          {t("header.Myths")}
        </a>
      </nav>

      <div className="language-selector">
        <button
          onClick={toggleMenu}
          className="lang-button flex items-center gap-2"
        >
          <span>{i18n.language.toUpperCase()}</span>

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
              <li onClick={() => changeLanguage("pl")}>PL</li>
              <li onClick={() => changeLanguage("ru")}>RU</li>
              <li onClick={() => changeLanguage("en")}>EN</li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
