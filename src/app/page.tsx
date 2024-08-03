import About from "@/components/About";
import Events from "@/components/Events";
import Header from "@/components/Header";
import Lodging from "@/components/Lodging";
import Map from "@/components/Map";
import Services from "@/components/Services";
import BgImage from "./../../public/about img 2.jpg";

export default function Home() {
  return (
    <main className="pt-16 md:pt-20 lg:pt-24">
      <Header />
      <About 
              image={BgImage}
              subheading="Welcome"
              heading="Headinggggg"
              text="Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text"
              buttonText="Learn More"
              buttonLink="https://www.google.com"
      />
      <Lodging/>
      <Events/>
      <Map/>
      <Services/>
    </main>
  );
}
