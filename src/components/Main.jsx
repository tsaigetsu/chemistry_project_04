// src/Main.jsx
import React from "react";
import "./Main.css";
import CardSection from "./Cards/CardSection.jsx";

export default function Main() {
  return (
    <main className="main">
      <CardSection />

      <section id="preservatives">
        <h2 className="second-heading">Preservatives</h2>
        <div className="card-container">
          {/* Карточка 1 */}
          <div className="card">
            <div className="card-image">
              <img
                src="../images/bacon.jpg"
                alt="Bacon"
                className="food-image"
              />
              <img
                src="../images/nitrites.jpg"
                alt="Nitrites preservative"
                className="overlay-image"
              />
            </div>
            <div className="card-content">
              <h3 className="third-heading">Nitrites</h3>
              <p className="paragraf">
                Used in cured meats to prevent bacteria and preserve color.
              </p>
              <button className="expand-button">&#x25BC;</button>
            </div>
          </div>

          {/* Карточка 2 */}
          <div className="card">
            <div className="card-image">
              <img
                src="../images/bread.jpg"
                alt="Bread with calcium propionate"
                className="food-image"
              />
              <img
                src="../images/calcium_propionate.jpg"
                alt="Calcium propionate preservative"
                className="overlay-image"
              />
            </div>
            <div className="card-content">
              <h3 className="third-heading">Calcium Propionate</h3>
              <p className="paragraf">
                Added to breads to prevent mold and extend shelf life.
              </p>
              <button className="expand-button">&#x25BC;</button>
            </div>
          </div>

          {/* Карточка 3 */}
          <div className="card">
            <div className="card-image">
              <img
                src="../images/jam.jpg"
                alt="Jam with sorbates"
                className="food-image"
              />
              <img
                src="../images/sorbates.jpg"
                alt="Sorbates preservative"
                className="overlay-image"
              />
            </div>
            <div className="card-content">
              <h3 className="third-heading">Sorbates</h3>
              <p className="paragraf">
                Common in jams and cheeses to prevent yeast and mold growth.
              </p>
              <button className="expand-button">&#x25BC;</button>
            </div>
          </div>

          {/* Карточка 4 */}
          <div className="card">
            <div className="card-image">
              <img
                src="../images/lemonade.jpg"
                alt="Lemonade with sodium benzoate"
                className="food-image"
              />
              <img
                src="../images/sodium_benzoate.jpg"
                alt="Sodium benzoate preservative"
                className="overlay-image"
              />
            </div>
            <div className="card-content">
              <h3 className="third-heading">Sodium Benzoate</h3>
              <p className="paragraf">
                Helps prevent spoilage in acidic drinks like sodas and
                lemonades.
              </p>
              <button className="expand-button">&#x25BC;</button>
            </div>
          </div>

          {/* Карточка 5 */}
          <div className="card">
            <div className="card-image">
              <img
                src="../images/canned_fruit.jpg"
                alt="Canned fruits with sulfites"
                className="food-image"
              />
              <img
                src="../images/sulfites.jpg"
                alt="Sulfites preservative"
                className="overlay-image"
              />
            </div>
            <div className="card-content">
              <h3 className="third-heading">Sulfites</h3>
              <p className="paragraf">
                Used in dried fruits and wines to prevent browning and spoilage.
              </p>
              <button className="expand-button">&#x25BC;</button>
            </div>
          </div>

          {/* Карточка 6 */}
          <div className="card">
            <div className="card-image">
              <img
                src="../images/fruit_juice.jpg"
                alt="Juice with ascorbic acid"
                className="food-image"
              />
              <img
                src="../images/ascorbic_acid.jpg"
                alt="Ascorbic acid preservative"
                className="overlay-image"
              />
            </div>
            <div className="card-content">
              <h3 className="third-heading">Ascorbic Acid</h3>
              <p className="paragraf">
                Vitamin C acts as an antioxidant to preserve flavor and color.
              </p>
              <button className="expand-button">&#x25BC;</button>
            </div>
          </div>
        </div>
      </section>

      <section id="flavor-enhancers">
        <h2 className="second-heading">Flavor Enhancers</h2>
        <div className="card-container">
          {/* Карточка 1 */}
          <div className="card">
            <div className="card-image">
              <img
                src="../images/chips.jpg"
                alt="Chips with MSG"
                className="food-image"
              />
              <img
                src="../images/msg.jpg"
                alt="Monosodium Glutamate"
                className="overlay-image"
              />
            </div>
            <div className="card-content">
              <h3 className="third-heading">Monosodium Glutamate</h3>
              <p className="paragraf">
                Boosts umami flavor in snacks, soups, and processed foods.
              </p>
              <button className="expand-button">&#x25BC;</button>
            </div>
          </div>

          {/* Карточка 2 */}
          <div className="card">
            <div className="card-image">
              <img
                src="../images/instant_noodles.jpg"
                alt="Instant noodles with disodium inosinate"
                className="food-image"
              />
              <img
                src="../images/inosinate.jpg"
                alt="Disodium Inosinate"
                className="overlay-image"
              />
            </div>
            <div className="card-content">
              <h3 className="third-heading">Disodium Inosinate</h3>
              <p className="paragraf">
                Often combined with MSG in instant noodles and savory snacks.
              </p>
              <button className="expand-button">&#x25BC;</button>
            </div>
          </div>

          {/* Карточка 3 */}
          <div className="card">
            <div className="card-image">
              <img
                src="../images/soy_sauce.jpg"
                alt="Soy sauce with glutamates"
                className="food-image"
              />
              <img
                src="../images/glutamates.jpg"
                alt="Natural Glutamates"
                className="overlay-image"
              />
            </div>
            <div className="card-content">
              <h3 className="third-heading">Natural Glutamates</h3>
              <p className="paragraf">
                Found in soy sauce, parmesan, tomatoes, enhancing savory taste.
              </p>
              <button className="expand-button">&#x25BC;</button>
            </div>
          </div>

          {/* Карточка 4 */}
          <div className="card">
            <div className="card-image">
              <img
                src="../images/processed_meat.jpg"
                alt="Processed meats with disodium guanylate"
                className="food-image"
              />
              <img
                src="../images/guanylate.jpg"
                alt="Disodium Guanylate"
                className="overlay-image"
              />
            </div>
            <div className="card-content">
              <h3 className="third-heading">Disodium Guanylate</h3>
              <p className="paragraf">
                Flavor enhancer used with MSG in processed meats and soups.
              </p>
              <button className="expand-button">&#x25BC;</button>
            </div>
          </div>

          {/* Карточка 5 */}
          <div className="card">
            <div className="card-image">
              <img
                src="../images/cheese_snacks.jpg"
                alt="Cheese snacks with yeast extract"
                className="food-image"
              />
              <img
                src="../images/yeast_extract.jpg"
                alt="Yeast Extract"
                className="overlay-image"
              />
            </div>
            <div className="card-content">
              <h3 className="third-heading">Yeast Extract</h3>
              <p className="paragraf">
                Natural flavoring ingredient rich in umami, used in soups and
                snacks.
              </p>
              <button className="expand-button">&#x25BC;</button>
            </div>
          </div>

          {/* Карточка 6 */}
          <div className="card">
            <div className="card-image">
              <img
                src="../images/bouillon_cubes.jpg"
                alt="Bouillon cubes with hydrolyzed protein"
                className="food-image"
              />
              <img
                src="../images/hydrolyzed_protein.jpg"
                alt="Hydrolyzed Vegetable Protein"
                className="overlay-image"
              />
            </div>
            <div className="card-content">
              <h3 className="third-heading">Hydrolyzed Vegetable Protein</h3>
              <p className="paragraf">
                Adds umami flavor to soups, sauces, and bouillon cubes.
              </p>
              <button className="expand-button">&#x25BC;</button>
            </div>
          </div>
        </div>
      </section>

      <section id="myths">
        <h2 className="second-heading">Myths</h2>
        <div className="card-container">
          {/* Карточка 1 */}
          <div className="card">
            <div className="card-image">
              <img
                src="../images/msg_myth.jpg"
                alt="MSG Myth"
                className="food-image"
              />
              <img
                src="../images/msg_real.jpg"
                alt="MSG Reality"
                className="overlay-image"
              />
            </div>
            <div className="card-content">
              <h3 className="third-heading">MSG is Dangerous</h3>
              <p className="paragraf">
                Studies show MSG is safe when consumed within normal dietary
                amounts.
              </p>
              <button className="expand-button">&#x25BC;</button>
            </div>
          </div>

          {/* Карточка 2 */}
          <div className="card">
            <div className="card-image">
              <img
                src="../images/preservatives_myth.jpg"
                alt="Preservatives Myth"
                className="food-image"
              />
              <img
                src="../images/preservatives_real.jpg"
                alt="Preservatives Reality"
                className="overlay-image"
              />
            </div>
            <div className="card-content">
              <h3 className="third-heading">
                Preservatives Are Always Harmful
              </h3>
              <p className="paragraf">
                Preservatives protect food safety and are regulated for health.
              </p>
              <button className="expand-button">&#x25BC;</button>
            </div>
          </div>

          {/* Карточка 3 */}
          <div className="card">
            <div className="card-image">
              <img
                src="../images/natural_vs_artificial.jpg"
                alt="Natural vs Artificial Myth"
                className="food-image"
              />
              <img
                src="../images/natural_vs_artificial_real.jpg"
                alt="Natural vs Artificial Reality"
                className="overlay-image"
              />
            </div>
            <div className="card-content">
              <h3 className="third-heading">
                Natural Additives Are Always Safer
              </h3>
              <p className="paragraf">
                Natural substances can be harmful too; safety depends on the
                dose.
              </p>
              <button className="expand-button">&#x25BC;</button>
            </div>
          </div>

          {/* Карточка 4 */}
          <div className="card">
            <div className="card-image">
              <img
                src="../images/e_numbers.jpg"
                alt="E-numbers Myth"
                className="food-image"
              />
              <img
                src="../images/e_numbers_real.jpg"
                alt="E-numbers Reality"
                className="overlay-image"
              />
            </div>
            <div className="card-content">
              <h3 className="third-heading">All E-numbers Are Dangerous</h3>
              <p className="paragraf">
                E-numbers simply indicate approved food additives, not danger.
              </p>
              <button className="expand-button">&#x25BC;</button>
            </div>
          </div>

          {/* Карточка 5 */}
          <div className="card">
            <div className="card-image">
              <img
                src="../images/food_dyes.jpg"
                alt="Food Dyes Myth"
                className="food-image"
              />
              <img
                src="../images/food_dyes_real.jpg"
                alt="Food Dyes Reality"
                className="overlay-image"
              />
            </div>
            <div className="card-content">
              <h3 className="third-heading">
                Food Dyes Always Cause Hyperactivity
              </h3>
              <p className="paragraf">
                No conclusive evidence links food dyes directly to
                hyperactivity.
              </p>
              <button className="expand-button">&#x25BC;</button>
            </div>
          </div>

          {/* Карточка 6 */}
          <div className="card">
            <div className="card-image">
              <img
                src="../images/additives_cancer.jpg"
                alt="Additives Cancer Myth"
                className="food-image"
              />
              <img
                src="../images/additives_cancer_real.jpg"
                alt="Additives Cancer Reality"
                className="overlay-image"
              />
            </div>
            <div className="card-content">
              <h3 className="third-heading">Additives Always Cause Cancer</h3>
              <p className="paragraf">
                Most additives are tested for safety; risks are extremely low at
                dietary levels.
              </p>
              <button className="expand-button">&#x25BC;</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
