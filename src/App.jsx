import { useState } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import MyWork from "./components/my work/MyWork";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  const [menu, setMenu] = useState("hero");

  return (
    <div>
      <Navbar menu={menu} setMenu={setMenu} />
      <Hero setMenu={setMenu} />
      <About />
      <Experience />
      <MyWork />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
