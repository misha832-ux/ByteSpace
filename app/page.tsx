import Hero from "@/components/Hero";
import LogoStrip from "@/components/LogoStrip";
import Courses from "@/components/Courses";
import Paths from "@/components/Paths";
import Growth from "@/components/Growth";
import CreatorCta from "@/components/CreatorCta";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <LogoStrip />
      <Courses />
      <Paths />
      <Growth />
      <CreatorCta />
      <Testimonials />
      <Footer />
    </main>
  );
}
