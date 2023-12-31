import FrontBooks from "../Sections/FrontBooks";
import Hero from "../Sections/Hero";
import Sectionz from "../Sections/Sectionz";
import Subscribe from "../Sections/Subscribe";

const Home: React.FC = () => {
  const handleOrderPopup = () => {
    // Your implementation for handling order popup
    console.log("Order popup triggered");
  };
  return (
    <>
      <Hero handleOrderPopup={handleOrderPopup} />
      <Sectionz />
      <FrontBooks />
      <Subscribe />
    </>
  );
};

export default Home;
