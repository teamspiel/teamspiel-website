import React from "react";

interface CTASectionComponentProps {
  content: any;
}

export const CTASectionComponent: React.FC<CTASectionComponentProps> = ({
  content,
}) => {
  return (
    <div className="parallax">
      <img className="parallax__image" src="media/stars.jpg" />
      <section className="section section--xs section--secondary section--v-centered">
        <div className="section__inner">
          <article className="article article--row article--space-between article--no-wrap">
            <article className="article article--75">
              <h3 className="heading heading--xl heading--light">
                {content.title}
              </h3>
              <a className="button" href="#contact">
                {content.buttonLabel}
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
