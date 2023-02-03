import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { ImageCardComponent } from "../ImageCardComponent";

interface AboutSectionComponentProps {
  content: any;
}

export const AboutSectionComponent: React.FC<AboutSectionComponentProps> = ({
  content,
}) => {
  return (
    <section className="section section--centered" id="about-us">
      <div className="section__inner">
        <article className="article article--50 article--centered article--text-centered article--mb-xl">
          <h2 className="heading heading--s">{content.title}</h2>
          <div className="divider divider--l divider--centered"></div>
          <div
            className="heading heading--contentful"
            dangerouslySetInnerHTML={{
              __html: documentToHtmlString(content.claim.json),
            }}
          ></div>
        </article>
        <article className="article">
          <div className="list list--center">
            {content.employeesCollection.items.map(
              (employeeCard: any, index: number) => (
                <ImageCardComponent key={index} content={employeeCard} />
              )
            )}
          </div>
        </article>
      </div>
    </section>
  );
};
