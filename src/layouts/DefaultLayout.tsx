import { Outlet } from "react-router-dom";
import { FooterComponent } from "../components/FooterComponent";
import { NavigationComponent } from "../components/NavigationComponent";
import { dataQuery } from "../data-query";
import { useFetchContent } from "../hooks/useFetchContent";

export const DefaultLayout = () => {
  const data = useFetchContent(dataQuery);

  // show a loading screen case the data hasn't arrived yet
  if (!data) {
    return (
      <div className="loading-screen">
        <img
          alt="Loading screen spinner"
          src="/media/icons/3-dots-fade.svg"
          width={100}
        />
      </div>
    );
  }

  return (
    <div className="fade-in">
      <NavigationComponent />
      <main className="main">
        <Outlet context={data} />
      </main>
      <FooterComponent />
    </div>
  );
};
