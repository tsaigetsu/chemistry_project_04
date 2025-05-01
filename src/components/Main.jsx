// src/Main.jsx
import React from "react";
import "./Main.css";
import CardSection from "./Cards/CardSection.jsx";
import AboutSection from "./About.jsx";
import ScrollToTopButton from "./ScrollToTopButton.jsx";
import "../i18n";

export default function Main() {
  return (
    <main className="main">
      <AboutSection />
      <CardSection startId={1} endId={6} titleKey="sections.colorants" />
      <CardSection startId={7} endId={12} titleKey="sections.preservatives" />
      <CardSection
        startId={13}
        endId={18}
        titleKey="sections.flavorEnhancers"
      />
      <CardSection startId={19} endId={24} titleKey="sections.myths" />
      <ScrollToTopButton />
    </main>
  );
}
