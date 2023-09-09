import backgroundImage from "../assets/images/martin-katler-o9XN28KdyN8-unsplash.jpg";
const HomePage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        width: "382px",
        height: "681px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    ></div>
  );
};
export default HomePage;
