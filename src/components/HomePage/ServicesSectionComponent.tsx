export const ServicesSectionComponent = () => {
  return (
    <section className="section section--centered" id="services">
      <div className="section__inner">
        <article className="article article--50 article--centered article--text-centered article--mb-xl">
          <h2 className="heading heading--s">Leistungen</h2>
          <div className="divider divider--l divider--centered"></div>
          <h3 className="heading">
            <span className="highlight">Neues</span> erschaffen
          </h3>
          <p className="paragraph">
            Möglicherweise gibt es ein Problem mit Ihrem Produkt, für das Sie
            keine Lösung finden, oder Ihr Produkt ist bereits in Ordnung, aber
            es könnte besser funktionieren. In jedem Fall benötigen Sie den
            besten Partner für Ihr Unternehmen, um Ihr Produkt mit Ihnen zu
            analysieren und zu ermitteln, wie man Sie dabei unterstützen kann.
          </p>
        </article>
        <article className="article">
          <div className="list list--space-evenly">
            <div className="card">
              <div className="card__icon">
                <img
                  className="image"
                  src="media/icons/people-group-solid.svg"
                />
              </div>
              <h4 className="heading heading--m">Team Erweiterung</h4>
              <p className="paragraph paragraph--s">
                Wenn Sie einen Mangel an technischen Spezialisten haben,
                Deadlines verpassen oder Ihr Budget überschreiten, sind wir für
                Sie da.
              </p>
            </div>
            <div className="card">
              <div className="card__icon">
                <img className="image" src="media/icons/code-solid.svg" />
              </div>
              <h4 className="heading heading--m">
                Umfassende Entwicklungsarbeit
              </h4>
              <p className="paragraph paragraph--s">
                Wir bieten umfassende Entwicklungsdienstleistungen für Web- und
                mobile Anwendungen. Wir können Ihnen helfen, Ihren MVP zu
                erstellen, Ihr Produkt zu starten und Ihr Geschäft zu skalieren.
              </p>
            </div>
            <div className="card">
              <div className="card__icon">
                <img
                  className="image"
                  src="media/icons/handshake-angle-solid.svg"
                />
              </div>
              <h4 className="heading heading--m">Beratung & Schulung</h4>
              <p className="paragraph paragraph--s">
                Unser Expertenteam hilft Ihnen beim Aufbau einer Kultur von
                Innovation und Zusammenarbeit. Wir helfen Ihnen auch bei der
                Schulung Ihres Teams, um bessere Produkte zu entwickeln.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
