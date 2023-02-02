export const AboutSectionComponent = () => {
  return (
    <section className="section section--centered" id="about-us">
      <div className="section__inner">
        <article className="article article--50 article--centered article--text-centered article--mb-xl">
          <h2 className="heading heading--s">About us</h2>
          <div className="divider divider--l divider--centered"></div>
          <h3 className="heading">
            Unsere <span className="highlight">Schöpfer</span> und{" "}
            <span className="highlight">Problemlöser</span>
          </h3>
        </article>
        <article className="article">
          <div className="list list--center">
            <div className="image-card">
              <img
                className="image-card__image"
                src="media/people/julian.jpg"
              />
              <div className="image-card__caption">
                <h4 className="heading heading--m">Julian Köhn</h4>
                <div className="divider"></div>
                <ul>
                  <li>Geschäftsführer</li>
                  <li>Software-Entwicklung</li>
                  <li>Beratung</li>
                </ul>
              </div>
            </div>
            <div className="image-card">
              <img
                className="image-card__image"
                src="media/people/steffen.jpg"
              />
              <div className="image-card__caption">
                <h4 className="heading heading--m">Steffen Petschow</h4>
                <div className="divider"></div>
                <ul>
                  <li>Software-Entwicklung</li>
                  <li>Beratung</li>
                </ul>
              </div>
            </div>
            <div className="image-card">
              <img
                className="image-card__image"
                src="media/people/lamine.jpg"
              />
              <div className="image-card__caption">
                <h4 className="heading heading--m">Lamine Dia</h4>
                <div className="divider"></div>
                <ul>
                  <li>Software-Entwicklung</li>
                  <li>Beratung</li>
                </ul>
              </div>
            </div>
            <div className="image-card">
              <img
                className="image-card__image"
                src="media/people/matthias.jpg"
              />
              <div className="image-card__caption">
                <h4 className="heading heading--m">Matthias Ort</h4>
                <div className="divider"></div>
                <ul>
                  <li>Beratung</li>
                </ul>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
