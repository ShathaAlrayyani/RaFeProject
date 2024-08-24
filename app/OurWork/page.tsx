"use client";

import { Footer, Header, SummarySection, Tabs } from "../components";

export default function OurWork() {
  return (
    <>
      <main>
        <Header acivePage="Our Work" />
        <main className="appWrapper">
          <SummarySection />
          <Tabs />
          <Footer />
        </main>
      </main>
    </>
  );
}
