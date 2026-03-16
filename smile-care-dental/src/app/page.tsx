import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import Doctors from "@/components/Doctors/Doctors";
import Booking from "@/components/Booking/Booking";
import Loader from "@/components/Loader/Loader";
import SmoothScroll from "@/components/SmoothScroll/SmoothScroll";
import Portal from "@/components/Portal/Portal";
import Gallery from "@/components/Gallery/Gallery";
import Intake from "@/components/Intake/Intake";
import Pricing from "@/components/Pricing/Pricing";
import Testimonials from "@/components/Testimonials/Testimonials";
import FAQ from "@/components/FAQ/FAQ";
import Contact from "@/components/Contact/Contact";
import FloatingCTA from "@/components/FloatingCTA/FloatingCTA";
import Footer from "@/components/Footer/Footer";
import Chatbot from "@/components/Chatbot/Chatbot";

export default function Home() {
  return (
    <main>
      <Loader />
      <SmoothScroll />
      <Navbar />
      <Hero />
      <Services />
      <Doctors />
      <Booking />
      <Portal />
      <Gallery />
      <Intake />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingCTA />
      <Chatbot />
    </main>
  );
}
