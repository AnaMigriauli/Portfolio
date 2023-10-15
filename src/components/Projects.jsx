import interactiveCard from "../assets/images/interactive-card.svg";
import toDoList from "../assets/images/To-Do-List.svg";
import githubApi from "../assets/images/github-api.svg";
import passwordGenerator from "../assets/images/passwordGenerator.svg";
import classes from "./Projects.module.css";
import linkChain from "../assets/images/akar-icons_link-chain.svg";
import github from "../assets/images/akar-icons_github-fill.svg";
import dictionary from "../assets/images/dictionary.svg";
const Projects = () => {
  const project = [
    {
      title: "Interactive Card Details Form",
      description:
        "An interactive card details form allows users to input their credit or debit card information in a user-friendly manner on a website or app.",
      techStack: ["React", "CSS"],
      liveLink:
        "https://anamigriauli.github.io/Interactive-Card-Details-Form-React/",
      codeLink:
        "https://github.com/AnaMigriauli/Interactive-Card-Details-Form-React",
      imageUrl: interactiveCard,
    },
    {
      title: "To Do List",
      description:
        "A To Do List is a simple application that helps users manage their tasks. It allows users to create a list of tasks, mark tasks as completed, and delete them from the list.",
      techStack: ["React"],
      liveLink: "https://anamigriauli.github.io/To-Do-React/",
      codeLink: "https://github.com/AnaMigriauli/To-Do-React",
      imageUrl: toDoList,
    },
    {
      title: "Github User Search App",
      description:
        "App generally allows users to search for GitHub users by their username and view details such as their repositories, stars, followers, following.",
      techStack: ["React"],
      liveLink: "https://anamigriauli.github.io/Github-User-Search-App-React/",
      codeLink: "https://github.com/AnaMigriauli/Github-User-Search-App-React",
      imageUrl: githubApi,
    },
    {
      title: "Password Generator App",
      description:
        "A Password Generator App creates secure and random passwords. This type of application is especially useful for generating strong, complex passwords.",
      techStack: ["React"],
      liveLink: "https://anamigriauli.github.io/Password-Generator-App-React/",
      codeLink: "https://github.com/AnaMigriauli/Password-Generator-App-React",
      imageUrl: passwordGenerator,
    },
    {
      title: "Dictionary Web App",
      description:
        "It allows users to search for words and retrieve definitions, synonyms, and other related data",
      techStack: ["React,Tailwind CSS,Context API,Custom Hooks"],
      liveLink: "https://anamigriauli.github.io/Dictionary-Web-App-React/",
      codeLink: "https://github.com/AnaMigriauli/Dictionary-Web-App-React",
      imageUrl: dictionary,
    },
  ];

  return (
    <div className={classes["projects-container"]} id="projects">
      <h1 className={classes.projects}>PROJECTS</h1>
      <div className={classes["projects-box"]}>
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
                  <img
                    className={classes.icon}
                    src={github}
                    alt="github icon"
                  />
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
      <div className={classes["more-projects"]}>
        <p>More projects I’ve worked on</p>
        <a
          className={classes.githubLink}
          href={"https://github.com/AnaMigriauli"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="GitHub" />
        </a>
      </div>
    </div>
  );
};

export default Projects;
