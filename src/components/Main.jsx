// src/Main.jsx
import React from "react";
import "./Main.css";
import CardSection from "./Cards/CardSection.jsx";
import AboutSection from "./About.jsx";

export default function Main() {
  return (
    <main className="main">
      <AboutSection />
      <CardSection startId={1} endId={6} title="Colorants" />
      <CardSection startId={7} endId={12} title="Preservatives" />
      <CardSection startId={13} endId={18} title="Flavor-Enhancers" />
      <CardSection startId={19} endId={24} title="Myths" />
    </main>
  );
}
