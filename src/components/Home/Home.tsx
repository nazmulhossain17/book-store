import Hero from "../Sections/Hero";

const Home: React.FC = () => {
  const handleOrderPopup = () => {
    // Your implementation for handling order popup
    console.log("Order popup triggered");
  };
  return (
    <>
      <Hero handleOrderPopup={handleOrderPopup} />
    </>
  );
};

export default Home;
