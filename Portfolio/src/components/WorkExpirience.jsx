import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css"; // Import your custom styles
import WorkExpirienceProps1 from "./WorkExpirienceProps1";
import WorkExpirienceProps2 from "./WorkExpirienceProps2";

function WorkExperience() {
  console.log("Rendering WorkExperience");
  return (
    <>
      <div
        className="container-fluid p-5 text-white custom-height2 bg-dark-custom work-experience"
        id="Experience"
      >
        {/* Top Line */}
        <div className="horizontal-line"></div>
        <h1 className="text-center display-1 p-3">Work Experience</h1>

        <WorkExpirienceProps1
          company="SEOBROTHERS"
          tag1="Search engine optimization "
          tag2="IT Internship in Latvia through ERASMUS "
          address="Address: Duntes iela 23 A, Ziemeļu rajons, Rīga, LV-1005, Latviah"
          date="Nov 2023 - Dec 2023"
        />
        <WorkExpirienceProps2
          company="University of Jan Evangelista Purkyně"
          tag1="Expirience from school"
          tag2="Working and showcasing school servers"
          tag3="Learning about Docker, working with Github, Linux and Internet history"
          address="Adress: Pasteurova 3544/1, 400 96 Ústí nad Labem"
          date="May 2024 - May 2024"
        />

        {/* Bottom Line */}
        <div className="horizontal-line custom-margin"></div>
      </div>
    </>
  );
}

export default WorkExperience;
