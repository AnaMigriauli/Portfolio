import html from "../assets/images/vscode-icons_file-type-html.svg";
import css from "../assets/images/vscode-icons_file-type-css.svg";
import js from "../assets/images/vscode-icons_file-type-js-official.svg";
import git from "../assets/images/akar-icons_github-fill.svg";
import vscode from "../assets/images/vscode-icons_file-type-vscode.svg";
import react from "../assets/images/logos_react.svg";
import scss from "../assets/images/logos_sass.svg";
import figma from "../assets/images/figma-1 1.svg";
import redux from "../assets/images/redux.svg";
import tailwind from "../assets/images/tailwind.svg";
import styledComponenets from "../assets/images/file-type-styled.svg";
import classes from "./AboutMe.module.css";
import Projects from "./Projects";

const AboutMe = () => {
  return (
    <div className={classes["about-container"]}>
      <div className={classes["about-me"]} id="aboutMe">
        <h2 className={classes.header}>ABOUT ME</h2>
        <p className={classes["about-text"]}>
          Hello ! My name is Ana . As a highly motivated individual, I
          consistently welcome new challenges and persistently explore
          opportunities to enhance my skills. I am particularly attracted to
          coding for its creativity and potential for innovation.
        </p>
        <p className={classes["about-text"]}>
          As a React Developer, I aspire to be part of a healthy working
          environment and contribute to the growth of the company I join. I am
          dedicated to delivering high-quality work and strongly believe in the
          power of responsibility and effective communication in this field. I
          am excited about the possibility of applying my skills to a dynamic
          team.
        </p>
        <p className={classes["about-text"]}>
          As a self-taught programmer, I have developed several projects, which
          are available below.
        </p>
      </div>
      <div className={classes.skills} id="skills">
        <h2 className={classes.header}>MY TECH STACK</h2>
        <p> Technologies I’ve been working with recently</p>
        <div className={classes["icon-container"]}>
          <img className={classes["rotate-infinite"]} src={js} alt="js" />
          <img
            className={classes["rotate-infinite-01"]}
            src={react}
            alt="react "
          />
          <img
            className={classes["rotate-infinite-01"]}
            src={redux}
            alt="redux"
          />
          <img
            className={classes["rotate-infinite-02"]}
            src={tailwind}
            alt="tailwind"
          />
          <img
            className={classes["rotate-infinite"]}
            src={styledComponenets}
            alt="styledComponenets"
          />
          <img className={classes["rotate-infinite"]} src={html} alt="html" />
          <img className={classes["rotate-infinite-02"]} src={css} alt="css" />
          <img className={classes["rotate-infinite-01"]} src={git} alt="git" />
          <img
            className={classes["rotate-infinite"]}
            src={vscode}
            alt="VS code"
          />
          <img className={classes["rotate-infinite"]} src={scss} alt="SCSS" />

          <img
            className={classes["rotate-infinite-02"] + " " + classes.figma}
            src={figma}
            alt="SCSS"
          />
        </div>
      </div>
      <Projects />
    </div>
  );
};

export default AboutMe;
