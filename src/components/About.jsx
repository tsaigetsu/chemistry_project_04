// src/components/About.jsx
import "./About.css";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="about-section">
      <div className="about-wrapper">
        <div className="text-wrapper">
          <h1 className="first-heading">{t("about.title")}</h1>
          <p className="paragraf">{t("about.description")}</p>
        </div>
        <div className="gallery-wrapper">
          <img
            src="../images/bacon.jpg"
            alt="Bacon"
            className="gallery-image"
          />
          <img
            src="../images/betanin.jpg"
            alt="Betanin"
            className="gallery-image"
          />
          <img
            src="../images/ascorbic_acid.jpg"
            alt="Ascorbic Acid"
            className="gallery-image"
          />
          <img
            src="../images/berries.jpg"
            alt="Berries"
            className="gallery-image"
          />
        </div>
      </div>
    </section>
  );
}
