import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
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
        <a href="#colorants">Colorants</a>
        <a href="#preservatives">Preservatives</a>
        <a href="#flavor-enhancers">Flavor Enhancers</a>
        <a href="#myths">Myths</a>
      </nav>

      <div className="language-selector">
        <button onClick={toggleMenu} className="lang-button">
          <span>ENG</span>
          <ChevronDown size={18} />
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
