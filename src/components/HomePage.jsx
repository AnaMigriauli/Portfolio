import backgroundImage from "../assets/images/martin-katler-o9XN28KdyN8-unsplash.jpg";
import linkedin from "../assets/images/linkedin.svg";
import github from "../assets/images/github.svg";
import mail from "../assets/images/mail.svg";
import classes from "./HomePage.module.css";
const HomePage = () => {
  return (
    <div
      className={classes.homePage}
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <h1 className={classes.greeting}>Hi, I am</h1>
      <p className={classes.userName}>Ana Migriauli</p>
      <p className={classes.userRole}>Junior React developer</p>
      <div className={classes.contactLinks}>
        <a className={classes.mailLink}>
          <img src={mail} alt="mail" />
        </a>
        <a className={classes.githubLink}>
          <img src={github} alt="GitHub" />
        </a>
        <a className={classes.linkedinLink}>
          <img src={linkedin} alt="LinkedIn" />
        </a>
      </div>
    </div>
  );
};
export default HomePage;
