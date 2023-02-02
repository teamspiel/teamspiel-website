import React from "react";

export const HomePage = () => {
  return (
    <>
      <section className="section section--dark section--v-centered">
        <div className="section__inner">
          <article className="article">
            <h1 className="heading heading--light heading--m heading--regular">
              Software- and consulting agency
            </h1>
            <div className="divider"></div>
          </article>
          <article className="article article--space-between article--row article--no-wrap article--gap-l">
            <article className="article article--auto">
              <h2 className="heading heading--light">
                Software development so collaborative, it's virtually built
                in-house.
              </h2>
              <p className="paragraph paragraph--light">
                Lion! Bless up. We the best. They don’t want us to win. Fan luv.
                Major key, don’t fall for the trap, stay focused. It’s the ones
                closest to you that want to see you fail.
              </p>
              <a href="#contact" className="button button--mt">
                Contact us
              </a>
            </article>
            <article className="article article--50 article--hidden-laptop">
              <img className="header-image" src="media/header-image.svg" />
            </article>
          </article>
        </div>
      </section>
      <section className="section section--centered" id="services">
        <div className="section__inner">
          <article className="article article--50 article--centered article--text-centered article--mb-xl">
            <h2 className="heading heading--s">Services</h2>
            <div className="divider divider--l divider--centered"></div>
            <h3 className="heading">
              <span className="highlight">Create</span> something
            </h3>
            <p className="paragraph">
              There may be a problem with your product that you don't know how
              to solve, or your product might be just fine, but it could work
              better. In either case, you need the best people in your business
              vertical to discuss your product with you and determine how to
              help you.
            </p>
          </article>
          <article className="article">
            <div className="list list--space-evenly">
              <div className="card">
                <div className="card__icon">
                  <img
                    className="image"
                    src="media/icons/people-group-solid.svg"
                  />
                </div>
                <h4 className="heading heading--m">Team Extension</h4>
                <p className="paragraph paragraph--s">
                  If you're short on tech specialists, missing deadlines, or
                  going over budget—we're here for you.
                </p>
              </div>
              <div className="card">
                <div className="card__icon">
                  <img className="image" src="media/icons/code-solid.svg" />
                </div>
                <h4 className="heading heading--m">End-to-end Development</h4>
                <p className="paragraph paragraph--s">
                  We deliver end-to-end development services for web and mobile
                  applications. We can help you build your MVP, launch your
                  product, and scale your business.
                </p>
              </div>
              <div className="card">
                <div className="card__icon">
                  <img
                    className="image"
                    src="media/icons/handshake-angle-solid.svg"
                  />
                </div>
                <h4 className="heading heading--m">Consulting & Training</h4>
                <p className="paragraph paragraph--s">
                  We have a team of experts who can help you build a culture of
                  innovation and collaboration. We can also help you train your
                  team to build better products.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>
      <div className="parallax">
        <img className="parallax__image" src="media/stars.jpg" />
        <section className="section section--xs section--secondary section--v-centered">
          <div className="section__inner">
            <article className="article article--row article--space-between article--no-wrap">
              <article className="article article--75">
                <h3 className="heading heading--xl heading--light">
                  Let’s start collaborating!
                </h3>
                <a className="button" href="#contact">
                  Contact us
                </a>
              </article>
              <article className="article article--auto article--hidden-laptop">
                <img className="image" src="media/contact-cta.svg" />
              </article>
            </article>
          </div>
        </section>
      </div>
      <section className="section section--centered" id="about-us">
        <div className="section__inner">
          <article className="article article--50 article--centered article--text-centered article--mb-xl">
            <h2 className="heading heading--s">About us</h2>
            <div className="divider divider--l divider--centered"></div>
            <h3 className="heading">
              Meet our team of <span className="highlight">Creators</span> and{" "}
              <span className="highlight">Problem Solvers</span>
            </h3>
          </article>
          <article className="article">
            <div className="list list--center">
              <div className="image-card">
                <img
                  className="image-card__image"
                  src="media/people/julian.jpg"
                />
                <div className="image-card__caption">
                  <h4 className="heading heading--m">Julian Köhn</h4>
                  <div className="divider"></div>
                  <ul>
                    <li>CEO</li>
                    <li>Software development</li>
                    <li>Consulting</li>
                  </ul>
                </div>
              </div>
              <div className="image-card">
                <img
                  className="image-card__image"
                  src="media/people/steffen.jpg"
                />
                <div className="image-card__caption">
                  <h4 className="heading heading--m">Steffen Petschow</h4>
                  <div className="divider"></div>
                  <ul>
                    <li>Software development</li>
                    <li>Consulting</li>
                  </ul>
                </div>
              </div>
              <div className="image-card">
                <img
                  className="image-card__image"
                  src="media/people/matthias.jpg"
                />
                <div className="image-card__caption">
                  <h4 className="heading heading--m">Matthias Ort</h4>
                  <div className="divider"></div>
                  <ul>
                    <li>Consulting</li>
                  </ul>
                </div>
              </div>
              <div className="image-card">
                <img
                  className="image-card__image"
                  src="media/people/lamine.jpg"
                />
                <div className="image-card__caption">
                  <h4 className="heading heading--m">Lamine Dia</h4>
                  <div className="divider"></div>
                  <ul>
                    <li>Software development</li>
                    <li>Consulting</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
      <section
        className="section section--s section--primary section--centered section--v-centered"
        id="career"
      >
        <div className="section__inner">
          <div className="illustration-container">
            <h2 className="heading heading--light heading--xl">
              We are hiring
            </h2>
            <img id="star-1" src="media/star-1.svg" />
            <img id="star-2" src="media/star-2.svg" />
          </div>
          <a className="button button--secondary" href="#join">
            Join us
          </a>
        </div>
      </section>
      <section className="section section--centered" id="contact">
        <div className="section__inner">
          <article className="article article--max-600 article--centered article--text-centered article--mb-xl">
            <h2 className="heading heading--s">Contact</h2>
            <div className="divider divider--l divider--centered"></div>
            <h3 className="heading">
              Get in <span className="highlight">Touch</span>
            </h3>
            <p className="paragraph">
              Our dedicated agile teams can help you create a highly performant
              and scalable web application that users understand.
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
                placeholder="Tell us what you need…"
                required
              ></textarea>
              <input
                type="submit"
                className="button button--full-width button--bold"
                value="Send"
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
                  <h5 className="heading heading--xxs">PHONE</h5>
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
    </>
  );
};
