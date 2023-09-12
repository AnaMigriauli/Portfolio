import html from "../assets/images/vscode-icons_file-type-html.svg";
import css from "../assets/images/vscode-icons_file-type-css.svg";
import js from "../assets/images/vscode-icons_file-type-js-official.svg";
import git from "../assets/images/akar-icons_github-fill.svg";
import vscode from "../assets/images/vscode-icons_file-type-vscode.svg";
import react from "../assets/images/logos_react.svg";
import scss from "../assets/images/logos_sass.svg";
import bootstrap from "../assets/images/bootstrap-solid 1.svg";
import figma from "../assets/images/figma-1 1.svg";
import classes from "./AboutMe.module.css";
import Projects from "./Projects";

const AboutMe = () => {
  return (
    <div className={classes["about-container"]}>
      <div>
        <h2 className={classes.header}>ABOUT ME</h2>
        <p className={classes["about-text"]}>
          Hello! I'm Ana Migriauli. My academic journey began at Grigol
          Robakidze University, where I pursued a degree in Business
          Administration, specializing in Finance. Today, I've transitioned into
          the realm of tech. Being a highly motivated individual, I consistently
          embrace new challenges and tirelessly seek opportunities for skill
          improvement. I tackle coding challenges on Codewars every day, which
          allows me to continuously improve my programming abilities.
        </p>
        <p className={classes["about-text"]}>
          I started learning HTML, CSS, and Javascript concepts for the first
          time. After that, I gradually realized how much I liked creating
          websites. The first three months were tough, but time by time, I
          thought about the success I could achieve in this field. After 4
          months, I started learning React and realized how much I loved working
          with it. At this moment I am focused on learning new things, for me
          learning new things means one step towards success.{" "}
        </p>
        <p className={classes["about-text"]}>
          As a self-taught programmer, I have developed several projects, which
          are available below.
        </p>
      </div>
      <div className={classes.skills}>
        <h2 className={classes.header}>MY TECH STACK</h2>
        <div className={classes["icon-container"]}>
          <img src={js} alt="js" />
          <img src={react} alt="react " />
          <img src={html} alt="html" />
          <img src={css} alt="css" />
          <img src={git} alt="git" />
          <img src={vscode} alt="VS code" />
          <img src={scss} alt="SCSS" />
          <img src={bootstrap} alt="SCSS" />
          <img src={figma} alt="SCSS" />
        </div>
      </div>
      <Projects />
    </div>
  );
};

export default AboutMe;
