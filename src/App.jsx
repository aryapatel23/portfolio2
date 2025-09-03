import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Component/Layout";
import Home from "./Component/Home";
import Skills from "./Component/Skills";
import Education from "./Component/Education";
import About from "./Component/About";
import Projects from "./Component/Projects";
import Contact from "./Component/Contact";
import Certificates from "./Component/Certificates";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Education" element={<Education />} />
          <Route path="/Certificates" element={<Certificates />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
