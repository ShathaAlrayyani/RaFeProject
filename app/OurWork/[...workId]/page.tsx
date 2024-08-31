
"use client"
import { Footer, Header } from "@/app/components";
import { OurProductPage } from "@/app/components/OurWork";
import { extractSectionName } from "@/app/utils/common";
import { usePathname } from "next/navigation";

export interface ShowDetailsProps {
  description: string;
  id: string;
  imgSrc: string;
  showName: string;
  videos: string[];
}

export default function ShowDetails() {
  const pathname = usePathname();
  const sectionName = extractSectionName(pathname)

  return (
    <>
      <main>
        <Header />
        <main className="appWrapper">
            <OurProductPage sectionName={sectionName}/> 
          <Footer />
        </main>
      </main>
    </>
  );
}
