import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <>
      <section className="section">
        <div className="section__inner">
          <article className="article article--50 article--centered article--text-centered">
            <img src="/media/404.svg" />
            <h1 className="heading heading--mt-l">Page not found</h1>
            <p className="paragraph">
              The page you are looking for does not exist.
            </p>
            <Link to="/" className="button button--center">
              To homepage
            </Link>
          </article>
        </div>
      </section>
    </>
  );
};
