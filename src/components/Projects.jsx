import interactiveCard from "../assets/images/interactive-card.svg";
import toDoList from "../assets/images/To-Do-List.svg";
import githubApi from "../assets/images/github-api.svg";
import passwordGenerator from "../assets/images/passwordGenerator.svg";
import classes from "./Projects.module.css";
import linkChain from "../assets/images/akar-icons_link-chain.svg";
import github from "../assets/images/akar-icons_github-fill.svg";
const Projects = () => {
  const project = [
    {
      title: "Interactive Card Details Form",
      description: "",
      techStack: ["React"],
      liveLink:
        "https://anamigriauli.github.io/Interactive-Card-Details-Form-React/",
      codeLink:
        "https://github.com/AnaMigriauli/Interactive-Card-Details-Form-React",
      imageUrl: interactiveCard,
    },
    {
      title: "To Do List",
      description: "",
      techStack: ["React"],
      liveLink: "https://anamigriauli.github.io/To-Do-React/",
      codeLink: "https://github.com/AnaMigriauli/To-Do-React",
      imageUrl: toDoList,
    },
    {
      title: "Github User Search App",
      description: "",
      techStack: ["React"],
      liveLink: "https://anamigriauli.github.io/Github-User-Search-App-React/",
      codeLink: "https://github.com/AnaMigriauli/Github-User-Search-App-React",
      imageUrl: githubApi,
    },
    {
      title: "Password Generator App",
      description: "",
      techStack: ["React"],
      liveLink: "https://anamigriauli.github.io/Password-Generator-App-React/",
      codeLink: "https://github.com/AnaMigriauli/Password-Generator-App-React",
      imageUrl: passwordGenerator,
    },
  ];

  return (
    <div className={classes["projects-container"]}>
      <h1 className={classes.projects}>PROJECTS</h1>
      {project.map((proj) => (
        <div className={classes["project-card"]} key={proj.title}>
          <img className={classes.img} src={proj.imageUrl} alt={proj.title} />
          <div className={classes.card}>
            <h2 className={classes.title}>{proj.title}</h2>
            <p className={classes.description}>{proj.description}</p>
            <p className={classes.stack}>
              Tech Stack: {proj.techStack.join(", ")}
            </p>
            <div className={classes["links-container"]}>
              <div>
                <img
                  className={classes.icon}
                  src={linkChain}
                  alt="link chain icon "
                />
                <a
                  className={classes.link}
                  href={proj.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Live
                </a>
              </div>
              <div>
                <img className={classes.icon} src={github} alt="github icon" />
                <a
                  className={classes.link}
                  href={proj.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
