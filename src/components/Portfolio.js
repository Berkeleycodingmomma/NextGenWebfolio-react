import React from "react";
import Project from "./Project";
import WorkDayPlanner from "../images/WorkDayPlanner.GIF";
import WebAPI from "../images/WebAPI_.GIF";
import Weather from "../images/Weather.GIF";
import LifeInTheSaddleBlog from "../images/ Blog.GIF";



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
        title: "PersonalPortfolio",
        description: "Built On Advanced CSS",
        imgSrc: PersonalPortfolio,
        deployedLink:
          "https://berkeleycodingmomma.github.io/personal-portfolio/",
        githubLink:
          "https://github.com/Berkeleycodingmomma/personal-portfolio",
      },
      {
        title: "Online Workday Planner",
        description: "Third-Party API Sceduler ft. Day.js",
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
        description: "Interactive Front-End Application Guide ?????",
        imgSrc: ,
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
          {/* <h2>{project.title}</h2> */}
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