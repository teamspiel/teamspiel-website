import { Link } from "react-router-dom";

export const NavigationComponent = () => {
  return (
    <nav className="navigation">
      <div className="navigation__inner">
        <div>
          <Link to="/">
            <img className="logo" src="/media/logo.svg" />
          </Link>
        </div>
        <div className="list navigation__list">
          <a className="link link--light link--bold" href="#services">
            Services
          </a>
          <a className="link link--light link--bold" href="#about-us">
            About us
          </a>
          <a className="link link--light link--bold" href="#career">
            Career
          </a>
          <a className="link link--light link--bold" href="#contact">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};
