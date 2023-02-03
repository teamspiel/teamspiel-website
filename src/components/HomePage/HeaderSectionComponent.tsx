import React from "react";

interface HeaderSectionComponentProps {
  content: any;
}

export const HeaderSectionComponent: React.FC<HeaderSectionComponentProps> = ({
  content,
}) => {
  return (
    <section className="section section--dark section--v-centered">
      <div className="section__inner">
        <article className="article">
          <h1 className="heading heading--light heading--m heading--regular">
            {content.companyType}
          </h1>
          <div className="divider"></div>
        </article>
        <article className="article article--space-between article--row article--no-wrap article--gap-l">
          <article className="article article--auto">
            <h2 className="heading heading--light">{content.title}</h2>
            <p className="paragraph paragraph--light">{content.paragraph}</p>
            <a href="#contact" className="button button--mt">
              {content.buttonLabel}
            </a>
          </article>
          <article className="article article--50 article--hidden-laptop">
            <img
              alt="Header image"
              className="header-image"
              src="media/header-image.svg"
            />
          </article>
        </article>
      </div>
    </section>
  );
};
