import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Sections/Hero";

function App() {
  const handleOrderPopup = () => {
    // Your implementation for handling order popup
    console.log("Order popup triggered");
  };
  return (
    <>
      <Navbar />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Footer />
    </>
  );
}

export default App;
