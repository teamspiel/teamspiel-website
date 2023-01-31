export const FooterComponent = () => {
  return (
    <footer className="footer">
      <section className="section section--dark section--s">
        <div className="section__inner">
          <article className="article article--gap-l article-full-height article--space-between">
            <article className="article article--row article--space-between article--gap-l">
              <article className="article article--75">
                <h4 className="heading heading--light heading--m heading--regular">
                  Software- and consulting agency
                </h4>
                <div className="divider"></div>
                <img src="/media/logo.svg" className="logo logo--l" />
              </article>
              <article className="article article--auto">
                <h4 className="heading heading--light heading--m heading--regular">
                  Contact
                </h4>
                <div className="divider"></div>
                <p className="paragraph paragraph--light paragraph--bold">
                  +49 0123 456 44 879
                </p>
                <p className="paragraph paragraph--light paragraph--bold">
                  Germany
                  <br />
                  24536 Neumünster
                  <br />
                  Unterjörn 19A
                </p>
                <div className="list list--mt">
                  <a
                    href="https://github.com/teamspiel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link link--icon"
                  >
                    <img src="/media/icons/github.svg" />
                  </a>
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link link--icon"
                  >
                    <img src="/media/icons/twitter.svg" />
                  </a>
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link link--icon"
                  >
                    <img src="/media/icons/linkedin.svg" />
                  </a>
                </div>
              </article>
            </article>
            <article className="article">
              <div className="divider divider--full divider--light"></div>
              <article className="article article--row article--space-between">
                <article className="article article--auto">
                  <p className="paragraph paragraph--light paragraph--bold paragraph--s">
                    © 2023 teamspiel GmbH, All rights reserved.
                  </p>
                </article>
                <article className="article article--auto">
                  <div className="list">
                    <a className="link link--light link--s link--bold">Terms</a>
                    <a className="link link--light link--s link--bold">
                      Privacy
                    </a>
                  </div>
                </article>
              </article>
            </article>
          </article>
        </div>
      </section>
    </footer>
  );
};
