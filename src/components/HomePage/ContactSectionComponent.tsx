import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { useCallback, useRef, useState } from "react";
import axios from "axios";

interface ContactSectionComponentProps {
  content: any;
}

export const ContactSectionComponent: React.FC<
  ContactSectionComponentProps
> = ({ content }) => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const successNotification = useRef<HTMLDivElement>(null);
  const errorNotification = useRef<HTMLDivElement>(null);

  const sendContactMail = useCallback((e: any) => {
    e.preventDefault();
    successNotification.current?.classList.add("notification--hidden");
    errorNotification.current?.classList.add("notification--hidden");

    setIsLoading(true);

    const data = {
      email: e.target.email.value,
      name: e.target.name.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
    };

    axios({
      method: "POST",
      headers: { "content-type": "application/json" },
      url: "/.netlify/functions/send-email",
      data: data,
    })
      .then(() => {
        form.current?.reset();
        successNotification.current?.classList.remove("notification--hidden");
        setTimeout(
          () =>
            successNotification.current?.classList.add("notification--hidden"),
          3000
        );
      })
      .catch(() => {
        errorNotification.current?.classList.remove("notification--hidden");
        setTimeout(
          () =>
            errorNotification.current?.classList.add("notification--hidden"),
          3000
        );
      })
      .finally(() => setIsLoading(false));
  }, []);

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
          <div
            ref={successNotification}
            className="notification notification--success notification--hidden fade-in"
          >
            Anfrage wurde verschickt
          </div>
          <div
            ref={errorNotification}
            className="notification notification--error notification--hidden fade-in"
          >
            Anfrage konnte nicht verschickt werden, bitte versuchen Sie es
            später erneut.
          </div>
          <form onSubmit={(e) => sendContactMail(e)} ref={form}>
            <input
              type="text"
              name="name"
              className="text-input"
              placeholder={content.formNameLabel}
              required
            />
            <input
              type="email"
              name="email"
              className="text-input"
              placeholder={content.formEmailLabel}
              required
            />
            <input
              type="tel"
              name="phone"
              className="text-input"
              placeholder={content.formPhoneLabel}
            />
            <textarea
              name="message"
              className="textarea-input"
              placeholder={content.formTextboxLabel}
              required
            ></textarea>
            <input
              type="submit"
              disabled={isLoading}
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
