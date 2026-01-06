import { motion } from "framer-motion";
import Navbar from "./components/NavBar.tsx";
import ScrollProgress from "./components/ScrollProgress.tsx";
import Home from "./sections/Home.tsx";
import About from "./sections/About.tsx";
import Experience from "./sections/Experience.tsx";
import Skills from "./sections/Skills.tsx";
import Projects from "./sections/Projects.tsx";
import Contact from "./sections/Contact.tsx";
import Languages from "./sections/Languages.tsx";
import ScrollToTop from "./components/scrollToTop.tsx";

export default function App() {
  console.log("App component rendered");
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ScrollProgress />
      <Navbar />
      <Home />
      <About />
      <Languages />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <ScrollToTop />
    </motion.div>
  );
}
