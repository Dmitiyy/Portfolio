import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects/";
import Price from "./components/Price";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import './app.sass';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Price />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
