import Hero from "../../components/Sections/Hero";

const Home = () => {
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
