export const ContactSectionComponent = () => {
  return (
    <section className="section section--centered" id="contact">
      <div className="section__inner">
        <article className="article article--max-600 article--centered article--text-centered article--mb-xl">
          <h2 className="heading heading--s">Kontakt</h2>
          <div className="divider divider--l divider--centered"></div>
          <h3 className="heading">
            <span className="highlight">Kontakt</span> herstellen
          </h3>
          <p className="paragraph">
            Unsere engagiertes agiles Team hilft Ihnen bei der Erstellung einer
            hochleistungsfähigen und skalierbaren Webanwendung, die die Benutzer
            verstehen.
          </p>
        </article>
        <article className="article article--max-600 article--mb-l">
          <form>
            <input
              type="text"
              className="text-input"
              placeholder="Name"
              required
            />
            <input
              type="text"
              className="text-input"
              placeholder="Email"
              required
            />
            <input type="text" className="text-input" placeholder="Phone" />
            <textarea
              className="textarea-input"
              placeholder="Was brauchen Sie von uns…"
              required
            ></textarea>
            <input
              type="submit"
              className="button button--full-width button--bold"
              value="Senden"
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
                <a className="link link--xs" href="tel:+49012345644789">
                  +49 0123 456 44 789
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
                  info@teamspiel.io
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
