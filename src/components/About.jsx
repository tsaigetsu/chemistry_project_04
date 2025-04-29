//src/components/About.jsx
import "./About.css";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-wrapper">
        <div className="text-wrapper">
          <h1 className="first-heading">
            Chemical Food - Do You Know What You Eat?
          </h1>
          <p className="paragraf">
            This project dives into the world of food additives — colorants,
            preservatives, and flavor enhancers — that are often present in our
            daily meals. You'll discover how these substances work, why they're
            used, and where they come from. Our aim is to raise awareness about
            what's really inside your food and help you make informed choices
            when reading labels or buying groceries.
          </p>
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
