import { Outlet } from "react-router-dom";
import { FooterComponent } from "../components/FooterComponent";
import { NavigationComponent } from "../components/NavigationComponent";

export const DefaultLayout = () => {
  return (
    <>
      <NavigationComponent />
      <main className="main">
        <Outlet />
      </main>
      <FooterComponent />
    </>
  );
};
