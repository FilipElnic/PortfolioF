import "./App.css";
import Header from "./components/header";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import WorkExperience from "./components/WorkExpirience";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Introduction />
      <WorkExperience />
    </div>
  );
}

export default App;

/*import Cards from "./components/Cards"; */
