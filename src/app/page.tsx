import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { isResumeAvailable } from "@/lib/resume";

export default function HomePage() {
  const resumeAvailable = isResumeAvailable();
  return (
    <>
      <Navbar resumeAvailable={resumeAvailable} />
      <main id="main">
        <Hero resumeAvailable={resumeAvailable} />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Resume resumeAvailable={resumeAvailable} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
