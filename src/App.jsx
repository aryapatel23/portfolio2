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
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
