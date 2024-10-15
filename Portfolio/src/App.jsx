import "./App.css";

console.log("App component loaded");

import Header from "./Header.jsx";
import Navbar from "./components/Navbar.jsx";
import Introduction from "./components/Introduction.jsx";
import WorkExperience from "./components/WorkExpirience.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Technologies from "./components/Technologies.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

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
