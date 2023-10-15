import classes from "./DesktopNavigation.module.css";

const DesktopNavigation = ({ scrollToSection }) => {
  return (
    <div className={classes["desktop-navigation"]}>
      <ul className={classes["navigation-list"]}>
        <li onClick={() => scrollToSection("aboutMe")}>About Me</li>
        <li onClick={() => scrollToSection("skills")}>Skills</li>
        <li onClick={() => scrollToSection("projects")}>Projects</li>
        <li onClick={() => scrollToSection("contactMe")}>CONTACT ME</li>
      </ul>
    </div>
  );
};

export default DesktopNavigation;
