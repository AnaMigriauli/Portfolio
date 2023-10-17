import classes from "./Footer.module.css";
import linkedin from "../assets/images/linkedin.svg";
import github from "../assets/images/github.svg";
const Footer = () => {
  return (
    <div className={classes.footer} id="contactMe">
      <div className={classes.contact}>
        <div>
          <p className={classes.number}>+995 557 35 38 94</p>
          <p className={classes.mail}>anamigriauli1994@gmail.com</p>
        </div>
        <div className={classes.contactLinks}>
          <a
            className={classes.githubLink}
            href={"https://github.com/AnaMigriauli"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="GitHub" />
          </a>
          <a
            className={classes.linkedinLink}
            href={"https://www.linkedin.com/in/ana-migriauli-803378214/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="LinkedIn" />
          </a>
        </div>
      </div>
      <div className={classes.border}></div>
      <p className={classes.text}>
        Designed and built by Ana Migriauli with{" "}
        <span className={classes.love}>Love</span> &
        <span className={classes.coffee}> Coffee</span>
      </p>
    </div>
  );
};
export default Footer;
