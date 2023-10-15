import MobileNavigation from "../navigation/MobileNavigation";
import DesktopNavigation from "../navigation/DesktopNavgation";
import { useState } from "react";
import AboutMe from "./AboutMe";
import Footer from "./Footer";
import HomePage from "./HomePage";
import classes from "./MainContainer.module.css";

const MainContainer = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={classes["main-container"]}>
      {window.innerWidth >= 550 ? (
        <DesktopNavigation scrollToSection={scrollToSection} />
      ) : (
        <MobileNavigation
          menuIsOpen={menuIsOpen}
          setMenuIsOpen={setMenuIsOpen}
        />
      )}

      <HomePage menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
      <AboutMe />
      <Footer />
    </div>
  );
};
export default MainContainer;
