import "./App.css";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import WorkExperience from "./components/WorkExpirience";
import "bootstrap/dist/css/bootstrap.min.css";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Introduction />
      <WorkExperience />
      <Technologies />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

/*import Cards from "./components/Cards"; */
