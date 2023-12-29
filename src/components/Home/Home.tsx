import Hero from "../Sections/Hero";
import Sectionz from "../Sections/Sectionz";

const Home: React.FC = () => {
  const handleOrderPopup = () => {
    // Your implementation for handling order popup
    console.log("Order popup triggered");
  };
  return (
    <>
      <Hero handleOrderPopup={handleOrderPopup} />
      <Sectionz />
    </>
  );
};

export default Home;
