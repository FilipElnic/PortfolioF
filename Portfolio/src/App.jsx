import "./App.css";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import Introduction from "./components/Introduction.jsx";
import WorkExperience from "./components/WorkExperience.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Technologies from "./components/Technologies.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";

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
