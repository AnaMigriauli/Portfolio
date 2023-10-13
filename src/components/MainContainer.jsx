import MobileNavigation from "../navigation/MobileNavigation";
import { useState } from "react";
import AboutMe from "./AboutMe";
import Footer from "./Footer";
import HomePage from "./HomePage";

const MainContainer = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <div>
      <MobileNavigation menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
      <HomePage menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
      <AboutMe />
      <Footer />
    </div>
  );
};
export default MainContainer;
