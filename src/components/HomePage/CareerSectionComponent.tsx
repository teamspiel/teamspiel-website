export const CareerSectionComponent = () => {
  return (
    <section
      className="section section--s section--primary section--centered section--v-centered"
      id="career"
    >
      <div className="section__inner">
        <div className="illustration-container">
          <h2 className="heading heading--light heading--xl">
            Wir stellen ein
          </h2>
          <img id="star-1" src="media/star-1.svg" />
          <img id="star-2" src="media/star-2.svg" />
        </div>
        <a className="button button--secondary" href="#join">
          Bewirb dich jetzt
        </a>
      </div>
    </section>
  );
};
