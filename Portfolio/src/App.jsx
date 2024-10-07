import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import WorkExperience from "./components/WorkExpirience";
import "bootstrap/dist/css/bootstrap.min.css";
import Technologies from "./components/Technologies";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Introduction />
      <WorkExperience />
      <Technologies />
    </div>
  );
}

export default App;

/*import Cards from "./components/Cards"; */
