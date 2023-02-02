export const CTASectionComponent = () => {
  return (
    <div className="parallax">
      <img className="parallax__image" src="media/stars.jpg" />
      <section className="section section--xs section--secondary section--v-centered">
        <div className="section__inner">
          <article className="article article--row article--space-between article--no-wrap">
            <article className="article article--75">
              <h3 className="heading heading--xl heading--light">
                Starten wir die Kooperation!
              </h3>
              <a className="button" href="#contact">
                Jetzt kontaktieren
              </a>
            </article>
            <article className="article article--auto article--hidden-laptop">
              <img className="image" src="media/contact-cta.svg" />
            </article>
          </article>
        </div>
      </section>
    </div>
  );
};
