import backgroundImage from "../assets/images/martin-katler-o9XN28KdyN8-unsplash.jpg";
import linkedin from "../assets/images/linkedin.svg";
import github from "../assets/images/github.svg";
import mail from "../assets/images/mail.svg";
import classes from "./HomePage.module.css";
import { useEffect, useState } from "react";
const HomePage = () => {
  const [scale, setScale] = useState(1); // initial scale value

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      let scaleValue = 1 + scrollPosition / 3000; // Adjust the denominator to control the zoom speed

      if (scaleValue > 2) scaleValue = 2; // Cap the maximum zoom level
      setScale(scaleValue);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={classes.homePage}
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <h1
        className={classes.greeting + " " + classes["zoom-text"]}
        style={{ transform: `scale(${scale})` }}
      >
        Hi, I am
      </h1>
      <p
        className={classes.userName + " " + classes["zoom-text"]}
        style={{ transform: `scale(${scale})` }}
      >
        Ana Migriauli
      </p>
      <p
        className={classes.userRole + " " + classes["zoom-text"]}
        style={{ transform: `scale(${scale})` }}
      >
        Junior React developer
      </p>
      <div className={classes.contactLinks}>
        <a className={classes.mailLink}>
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
  );
};
export default HomePage;
