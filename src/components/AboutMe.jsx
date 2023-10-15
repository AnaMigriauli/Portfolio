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
          Hello! My name is Ana Migriauli. My academic adventure began at Grigol
          Robakidze University, where I earned a degree in Business
          Administration with a specialization in Finance. Now, I've shifted
          into the world of technology. As a highly motivated individual, I
          consistently welcome new challenges and persistently explore
          opportunities to enhance my skills. Engaging in daily coding
          challenges on Codewars has become a routine that helps me steadily
          sharpen my programming skills.
        </p>
        <p className={classes["about-text"]}>
          My journey into web development began with learning the basics: HTML,
          CSS, and JavaScript. It didn’t take long for me to fall in love with
          creating websites. Although the initial three months were challenging,
          envisioning the success awaiting in this field kept me going. Four
          months into my journey, I delved into React and was captivated by its
          capabilities. Currently, my focus is on continual learning, for me
          learning new things means one step towards success.
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
