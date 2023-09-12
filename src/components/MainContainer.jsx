import MobileNavigation from "../navigation/MobileNavigation";
import AboutMe from "./AboutMe";
import Footer from "./Footer";
import HomePage from "./HomePage";

const MainContainer = () => {
  return (
    <div>
      <MobileNavigation />
      <HomePage />
      <AboutMe />
      <Footer />
    </div>
  );
};
export default MainContainer;
