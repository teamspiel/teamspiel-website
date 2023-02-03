import { useOutletContext } from "react-router-dom";
import { AboutSectionComponent } from "../components/HomePage/AboutSectionComponent";
import { CareerSectionComponent } from "../components/HomePage/CareerSectionComponent";
import { ContactSectionComponent } from "../components/HomePage/ContactSectionComponent";
import { CTASectionComponent } from "../components/HomePage/CTASectionComponent";
import { HeaderSectionComponent } from "../components/HomePage/HeaderSectionComponent";
import { ServicesSectionComponent } from "../components/HomePage/ServicesSectionComponent";

export const HomePage = () => {
  const {
    headerSectionCollection,
    servicesSectionCollection,
    ctaSectionCollection,
    aboutSectionCollection,
    careerSectionCollection,
    contactSectionCollection,
  } = useOutletContext<any>();

  return (
    <>
      <HeaderSectionComponent content={headerSectionCollection?.items[0]} />
      <ServicesSectionComponent content={servicesSectionCollection?.items[0]} />
      <CTASectionComponent content={ctaSectionCollection?.items[0]} />
      <AboutSectionComponent content={aboutSectionCollection?.items[0]} />
      <CareerSectionComponent content={careerSectionCollection?.items[0]} />
      <ContactSectionComponent content={contactSectionCollection?.items[0]} />
    </>
  );
};
