"use client";
import { Fragment } from "react";
import {
  AboutUsSection,
  Footer,
  Header,
  IntroductionSection,
  KeyServicesSection,
  MissionVisionSection,
  OurClientsSection,
  TeamCompanySection,
} from "./components";

const sectionsElements = [
  {
    Component: <IntroductionSection />,
  },
  {
    Component: <AboutUsSection />,
  },
  {
    Component: <MissionVisionSection />,
  },
  {
    Component: <KeyServicesSection />,
  },
  {
    Component: <TeamCompanySection />,
  },
  {
    Component: <OurClientsSection />,
  },
  {
    Component: <Footer />,
  },
];

export default function Home() {

  return (
    <main>
      <Header acivePage="Home" />
      <main className="appWrapper">
        {sectionsElements.map((section, index) => (
          <Fragment key={index + 123}>{section.Component}</Fragment>
        ))}
      </main>
    </main>
  );
}
