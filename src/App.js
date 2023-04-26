import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import ScrollToTopButton from "./pages/ScrollToTop";
import Skills from "./pages/Skills/Skills";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <ScrollToTopButton />
      </main>
      <hr />
      <Footer />
    </>
  );
}

export default App;
