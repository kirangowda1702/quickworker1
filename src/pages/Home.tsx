import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Workers from "../components/Workers";
import WhyChoose from "../components/WhyChoose";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Workers />
      <WhyChoose />
      <Footer />
    </>
  );
}