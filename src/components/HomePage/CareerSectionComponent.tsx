import React from "react";

interface CareerSectionComponentProps {
  content: any;
}

export const CareerSectionComponent: React.FC<CareerSectionComponentProps> = ({
  content,
}) => {
  return (
    <section
      className="section section--s section--primary section--centered section--v-centered"
      id="career"
    >
      <div className="section__inner">
        <div className="illustration-container">
          <h2 className="heading heading--light heading--xl">
            {content.title}
          </h2>
          <img alt="Decorative star 1" id="star-1" src="media/star-1.svg" />
          <img alt="Decorative star 2" id="star-2" src="media/star-2.svg" />
        </div>
        <a className="button button--secondary" href={content.buttonUrl}>
          {content.buttonLabel}
        </a>
      </div>
    </section>
  );
};
