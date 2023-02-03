import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { ServiceCardComponent } from "../ServiceCardComponent";

interface ServicesSectionComponentProps {
  content: any;
}

export const ServicesSectionComponent: React.FC<
  ServicesSectionComponentProps
> = ({ content }) => {
  return (
    <section className="section section--centered" id="services">
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
          <p className="paragraph">{content.paragraph}</p>
        </article>
        <article className="article">
          <div className="list list--space-evenly">
            {content.servicesCollection.items.map(
              (serviceCard: any, index: number) => (
                <ServiceCardComponent key={index} content={serviceCard} />
              )
            )}
          </div>
        </article>
      </div>
    </section>
  );
};
