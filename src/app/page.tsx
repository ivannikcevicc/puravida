import About from "@/components/About";
import Events from "@/components/Events";
import Header from "@/components/Header";
import Lodging from "@/components/Lodging";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="pt-16 md:pt-20 lg:pt-24">
      <Navbar />
      <Header />
      <About />
      <Lodging/>
      <Events/>
    </main>
  );
}
