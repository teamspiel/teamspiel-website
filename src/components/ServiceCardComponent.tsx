import React from "react";

interface ServiceCardComponentProps {
  content: any;
}

export const ServiceCardComponent: React.FC<ServiceCardComponentProps> = ({
  content,
}) => {
  return (
    <div className="card">
      <div className="card__icon">
        <img alt="Service icon" className="image" src={content.icon.url} />
      </div>
      <h4 className="heading heading--m">{content.title}</h4>
      <p className="paragraph paragraph--s">{content.paragraph}</p>
    </div>
  );
};
