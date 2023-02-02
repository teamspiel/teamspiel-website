import { Link, useLocation } from "react-router-dom";

export const NavigationComponent = () => {
  const location = useLocation();

  return (
    <nav className="navigation">
      <div className="navigation__inner">
        <div>
          <Link to="/">
            <img className="logo" src="/media/logo.svg" />
          </Link>
        </div>
        {location.pathname === "/" && (
          <div className="list navigation__list">
            <a className="link link--light link--bold" href="#services">
              Leistungen
            </a>
            <a className="link link--light link--bold" href="#about-us">
              Über uns
            </a>
            <a className="link link--light link--bold" href="#career">
              Karriere
            </a>
            <a className="link link--light link--bold" href="#contact">
              Kontakt
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};
