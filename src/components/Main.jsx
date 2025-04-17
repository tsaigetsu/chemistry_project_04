// src/Main.jsx
import "./Main.css";

export default function Main() {
  return (
    <main>
      <section id="colorants">
        <h2>Colorants</h2>
        <div className="card-container">
          {/* Карточка 1 */}
          <div className="card">
            <div className="card-image">
              <img
                src="../images/cheddar.png"
                alt="Cheddar cheese"
                className="food-image"
              />
              <img
                src="../images/annatto.jpg"
                alt="Annatto colorant"
                className="overlay-image"
              />
            </div>
            <div className="card-content">
              <h3>Annatto</h3>
              <p>
                Natural orange-red colorant from Bixa orellana seeds. Used in
                cheddar and butter.
              </p>
              <button className="expand-button">&#x25BC;</button>
            </div>
          </div>

          {/* Карточка 2 */}
          <div className="card">
            <div className="card-image">
              <img
                src="../images/curry.png"
                alt="Curry with turmeric"
                className="food-image"
              />
              <img
                src="images/curcumin.png"
                alt="Curcumin colorant"
                className="overlay-image"
              />
            </div>
            <div className="card-content">
              <h3>Curcumin</h3>
              <p>
                Yellow pigment from turmeric. Common in curry and spice mixes.
              </p>
              <button className="expand-button">&#x25BC;</button>
            </div>
          </div>

          {/* Карточка 3 */}
          <div className="card">
            <div className="card-image">
              <img
                src="beet_salad.jpg"
                alt="Beetroot salad"
                className="food-image"
              />
              <img
                src="betanin.jpg"
                alt="Betanin colorant"
                className="overlay-image"
              />
            </div>
            <div className="card-content">
              <h3>Betanin</h3>
              <p>
                Extracted from beets, adds strong red color to salads and
                beverages.
              </p>
              <button className="expand-button">&#x25BC;</button>
            </div>
          </div>

          {/* Карточка 4 */}
          <div className="card">
            <div className="card-image">
              <img
                src="berries.jpg"
                alt="Berry yogurt"
                className="food-image"
              />
              <img
                src="anthocyanins.jpg"
                alt="Anthocyanin colorant"
                className="overlay-image"
              />
            </div>
            <div className="card-content">
              <h3>Anthocyanins</h3>
              <p>
                Blue-purple pigments found in berries. Used in yogurts and
                drinks.
              </p>
              <button className="expand-button">&#x25BC;</button>
            </div>
          </div>
        </div>
      </section>

      <section id="preservatives">
        <h2>Preservatives</h2>
        <div className="card-container">{/* Карточки с консервантом */}</div>
      </section>

      <section id="flavor-enhancers">
        <h2>Flavor Enhancers</h2>
        <div className="card-container">
          {/* Карточки с усилителями вкуса */}
        </div>
      </section>

      <section id="myths">
        <h2>Myths</h2>
        <div className="card-container">{/* Карточки с мифами */}</div>
      </section>
    </main>
  );
}
