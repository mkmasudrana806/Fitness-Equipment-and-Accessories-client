import React from "react";
import CompanyOverview from "../components/aboutUs/CompanyOverview";
import TeamIntroduction from "../components/aboutUs/TeamIntroduction";
import Testimonials from "../components/aboutUs/Testimonials";
import ContactInformation from "../components/aboutUs/ContactInformation";

const AboutUs = () => {
  return (
    <div>
      <CompanyOverview />
      <TeamIntroduction />
      <Testimonials />
      <ContactInformation />
    </div>
  );
};

export default AboutUs;
