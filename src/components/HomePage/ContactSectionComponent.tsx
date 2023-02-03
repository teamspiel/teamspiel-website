import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

interface ContactSectionComponentProps {
  content: any;
}

export const ContactSectionComponent: React.FC<
  ContactSectionComponentProps
> = ({ content }) => {
  return (
    <section className="section section--centered" id="contact">
      <div className="section__inner">
        <article className="article article--max-600 article--centered article--text-centered article--mb-xl">
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
        <article className="article article--max-600 article--mb-l">
          <form>
            <input
              type="text"
              className="text-input"
              placeholder={content.formNameLabel}
              required
            />
            <input
              type="text"
              className="text-input"
              placeholder={content.formEmailLabel}
              required
            />
            <input
              type="text"
              className="text-input"
              placeholder={content.formPhoneLabel}
            />
            <textarea
              className="textarea-input"
              placeholder={content.formTextboxLabel}
              required
            ></textarea>
            <input
              type="submit"
              className="button button--full-width button--bold"
              value={content.formSubmitLabel}
            />
          </form>
        </article>
        <article className="article article--max-600">
          <div className="list list--center list--gap-xl">
            <div className="list list--v-align-center">
              <img
                className="icon icon--30"
                src="media/icons/phone-solid.svg"
              />
              <div>
                <h5 className="heading heading--xxs">TELEFON</h5>
                <a
                  className="link link--xs"
                  href={`tel:${content.contactPhoneNumber.replace(/\s/g, "")}`}
                >
                  {content.contactPhoneNumber}
                </a>
              </div>
            </div>
            <div className="list list--v-align-center">
              <img
                className="icon icon--30"
                src="media/icons/envelope-solid.svg"
              />
              <div>
                <h5 className="heading heading--xxs">EMAIL</h5>
                <a className="link link--xs" href="mailto:info@teamspiel.io">
                  {content.contactEmailAddress}
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
