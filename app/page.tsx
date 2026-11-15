
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Founder from "@/components/Founder";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <div id="home">
          <Hero />
        </div>

        <div id="services">
          <Services />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="founder">
          <Founder />
        </div>

        <Contact />
      </main>

      <Footer />
    </>
  );
}
