import React from "react";
import Project from "./Project";
import WorkDayPlanner from "../images/WorkDayPlanner.png"
import WebAPI from "../images/WebAPI.png";
import Weather from "../images/Weather.png";
import LifeInTheSaddleBlog from "../images/LifeInTheSaddleBlog.png";
import DirtyDozenTeamProject from "../images/DirtyDozenTeamProject.png";
import RecipeBox from "../images/RecipeBox.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Portfolio.css";

function Portfolio() {
    return (
          // Portfolio container
      <div className="portfolio-wrapper">
        <h1 className="portfolio-title">Portfolio</h1>
        <div className="container">
          <div className="row">
            {[
    {
    title: "Life in the Saddle Blog",
    description: "CMS-Style Model View Controller Blog",
    imgSrc: LifeInTheSaddleBlog,
    deployedLink:
        "https://mysterious-fortress-89318.herokuapp.com/",
    githubLink:
        "https://github.com/Berkeleycodingmomma/cms-style-mvc-tech-blog",
        
    },
    {
        title: "Recipe Box",
        description: "Interactive Full-Stack Project",
        imgSrc: RecipeBox,
        deployedLink:
          "https://recipesbox.herokuapp.com/",
        githubLink:
          "https://github.com/Berkeleycodingmomma/recepie-box",
      },
      {
        title: "Online Workday Planner",
        description: "Third-Party API Scheduler Day.js",
        imgSrc: WorkDayPlanner,
        deployedLink:
          "https://berkeleycodingmomma.github.io/work-day-scheduler/",
        githubLink:
          "https://github.com/Berkeleycodingmomma/work-day-scheduler",
      },
      {
        title: "Java Script: WEB API Quiz",
        description: "Dynamically updated HTML & CSS Web API quiz game.",
        imgSrc: WebAPI,
        deployedLink:
          "https://berkeleycodingmomma.github.io/api-code-quiz/",
        githubLink:
          "https://github.com/Berkeleycodingmomma/api-code-quiz",
      },
      {
        title: "Dirty Dozen Team Project",
        description: "Interactive Front-End Application",
        imgSrc: DirtyDozenTeamProject,
        deployedLink:
          "https://berkeleycodingmomma.github.io/dirty-dozen-team-project/",
        githubLink:
          "https://github.com/Berkeleycodingmomma/dirty-dozen-team-project",
      },
      {
        title: "Weather Dashboard",
        description: "Server-Side APIs: (5) Day Weather Dashboard.",
        imgSrc: Weather,
        deployedLink:
          "https://berkeleycodingmomma.github.io/check-the-forecast/",
        githubLink:
          "https://github.com/Berkeleycodingmomma/check-the-forecast",
      },

    ].map((project, index) => (
        // Div container for each project
        <div className="col-12 col-md-6 col-lg-4 my-2" key={index}>
          <Project
            title={project.title}
            description={project.description}
            imgSrc={project.imgSrc}
            deployedLink={project.deployedLink}
            githubLink={project.githubLink}
          />
        </div>
      ))}
    </div>
  </div>
</div>
);
}
// Export Portfolio
export default Portfolio;