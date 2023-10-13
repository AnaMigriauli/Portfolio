import { useState } from "react";
import burgerMenu from "../assets/images/menu-icon.svg";
import burgerMenuClose from "../assets/images/menu-close-icon.svg";
import classes from "./MobileNavigation.module.css";
const MobileNavigation = ({ menuIsOpen, setMenuIsOpen }) => {
  // const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <div>
      <div className={classes["mobile-navigation"]}>
        <button
          className={classes.menu}
          onClick={() => {
            setMenuIsOpen((prevState) => !prevState);
          }}
        >
          {!menuIsOpen ? (
            <img src={burgerMenu} alt="menu" />
          ) : (
            <img src={burgerMenuClose} alt="close menu" />
          )}
        </button>
      </div>
      {menuIsOpen && (
        <ul className={classes["menu-list"]}>
          <li>About Me</li>
          <li>Skills</li>
          <li>Portfolio</li>
          <li>CONTACT ME</li>
        </ul>
      )}
    </div>
  );
};

export default MobileNavigation;
