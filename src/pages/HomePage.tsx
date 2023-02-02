import React from "react";
import { AboutSectionComponent } from "../components/HomePage/AboutSectionComponent";
import { CareerSectionComponent } from "../components/HomePage/CareerSectionComponent";
import { ContactSectionComponent } from "../components/HomePage/ContactSectionComponent";
import { CTASectionComponent } from "../components/HomePage/CTASectionComponent";
import { HeaderSectionComponent } from "../components/HomePage/HeaderSectionComponent";
import { ServicesSectionComponent } from "../components/HomePage/ServicesSectionComponent";

export const HomePage = () => {
  return (
    <>
      <HeaderSectionComponent />
      <ServicesSectionComponent />
      <CTASectionComponent />
      <AboutSectionComponent />
      <CareerSectionComponent />
      <ContactSectionComponent />
    </>
  );
};
