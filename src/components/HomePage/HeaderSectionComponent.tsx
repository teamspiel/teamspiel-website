export const HeaderSectionComponent = () => {
  return (
    <section className="section section--dark section--v-centered">
      <div className="section__inner">
        <article className="article">
          <h1 className="heading heading--light heading--m heading--regular">
            Software- und Consultingagentur
          </h1>
          <div className="divider"></div>
        </article>
        <article className="article article--space-between article--row article--no-wrap article--gap-l">
          <article className="article article--auto">
            <h2 className="heading heading--light">
              Softwareentwicklung so kollaborativ, dass sie quasi in-house
              entwickelt wird.
            </h2>
            <p className="paragraph paragraph--light">
              Wir sind kein Dienstleister, wir sind Partner. Ein fester
              Bestandteil Ihres Teams, der auf einer Entwicklungskultur und
              felsenfester Technik basiert und bereit ist, auch die komplexesten
              technischen und gemeinsamen Herausforderungen zu meistern.
            </p>
            <a href="#contact" className="button button--mt">
              Kontakt aufnehmen
            </a>
          </article>
          <article className="article article--50 article--hidden-laptop">
            <img className="header-image" src="media/header-image.svg" />
          </article>
        </article>
      </div>
    </section>
  );
};
