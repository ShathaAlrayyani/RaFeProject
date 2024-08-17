"use client";
import { Fragment } from "react";
import {
  Header,
} from "./components";
import { sectionsElements } from "./constants/mainPage";

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
