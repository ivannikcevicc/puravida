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
              text='On August 30, 2022, Drobni Pijesak Beach in Budvanska Rivijera, Montenegro, was honored as one of Europe&apos;s top 40 beaches, a testament to its exceptional charm and allure. This recognition highlights the beach&apos;s appeal to travelers seeking extraordinary coastal destinations. Nestled in a picturesque setting, Drobni Pijesak Beach embodies the essence of &quot;Pura Vida&quot; with its pristine sands and crystal-clear waters. The hidden gem offers a serene escape framed by dramatic cliffs and lush greenery. Its tranquil ambiance, coupled with natural beauty and an idyllic setting, makes it a perfect spot for relaxation and enjoying the unspoiled Adriatic coast.'   buttonText="Learn More"
              buttonLink="https://www.google.com"
      />
      <Lodging/>
      <Events/>
      <Map/>
      <Services/>
    </main>
  );
}
