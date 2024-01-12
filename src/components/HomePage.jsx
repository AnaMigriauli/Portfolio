import linkedin from "../assets/images/linkedin.svg";
import github from "../assets/images/github.svg";
import mail from "../assets/images/mail.svg";
import classes from "./HomePage.module.css";

const HomePage = ({ menuIsOpen }) => {
  const numberOfStars = 100;

  const renderStars = () => {
    let stars = [];
    for (let i = 0; i < numberOfStars; i++) {
      const size = Math.random() * 2 + 1;
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;

      stars.push(
        <div
          key={i}
          className={classes.star}
          style={{
            width: `${size}px`,
            height: `${size}px`,
            top: `${posY}%`,
            left: `${posX}%`,
          }}
        />
      );
    }
    return stars;
  };

  return (
    <div className={`${classes.homePage} ${menuIsOpen ? classes.blur : ""}`}>
      {renderStars()}
      <div className={classes["home-page-text"]}>
        <h1 className={classes.greeting + " " + classes["typing-effect"]}>
          Hi👋, I am
        </h1>
        <p className={classes.userName + " " + classes["typing-effect"]}>
          Ana Migriauli
        </p>
        <p className={classes.userRole + " " + classes["typing-effect"]}>
          Junior Front-End React developer
        </p>
        <div className={classes.contactLinks}>
          <a
            className={classes.mailLink}
            href="mailto:anamigriauli1994@gmail.com"
          >
            <img src={mail} alt="mail" />
          </a>
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
    </div>
  );
};
export default HomePage;
