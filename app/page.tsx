import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Certifications from "@/components/Certifications";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Aurora from "@/components/Aurora";
import SectionReveal from "@/components/SectionReveal";

export default function Home() {
  return (
    <>
      <Loader />
      <ScrollProgress />
      <Navbar />
      <Aurora />
      <main>
        <SectionReveal><Hero /></SectionReveal>
        <SectionReveal><About /></SectionReveal>
        <Skills />
        <SectionReveal><Projects /></SectionReveal>
        <SectionReveal><Achievements /></SectionReveal>
        <SectionReveal><Certifications /></SectionReveal>
        <SectionReveal><Education /></SectionReveal>
        <SectionReveal><Contact /></SectionReveal>
      </main>
      <Footer />
    </>
  );
}
