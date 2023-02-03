import React from "react";

interface ImageCardComponentProps {
  content: any;
}

export const ImageCardComponent: React.FC<ImageCardComponentProps> = ({
  content,
}) => {
  return (
    <div className="image-card">
      <img
        className="image-card__image"
        alt={content.fullname}
        src={content.image.url}
      />
      <div className="image-card__caption">
        <h4 className="heading heading--m">{content.fullname}</h4>
        <div className="divider"></div>
        <ul>
          {content.roles.map((role: string, index: number) => (
            <li key={index}>{role}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
