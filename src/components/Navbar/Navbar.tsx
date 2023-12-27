import { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isSticky, setIsSticky] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <header className="w-full fixed top-0 left-0 right-0">
        <nav
          className={`py-4 md:px-8 px-4 bg-white ${
            isSticky ? "sticky top-0 right-0 left-0 bg-white" : ""
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="font-bold text-2xl cursor-pointer text-black">
              <a href="#">Logo</a>
            </div>

            <div className="lg:flex items-center gap-3 hidden text-stone-700">
              <a href="#" className="block hover:text-gray-400 py-2 px-4">
                Home
              </a>
              <a href="#" className="block hover:text-gray-400 py-2 px-4">
                all books
              </a>
              <a href="#" className="block hover:text-gray-400 py-2 px-4">
                about
              </a>
              <a href="#" className="block hover:text-gray-400 py-2 px-4">
                contact
              </a>
            </div>

            {/* login */}
            <div className="lg:block hidden">
              <button className="px-4 py-2 border border-orange-600 rounded-sm text-gray-600 hover:bg-red-400 hover:text-white transition-all duration-300">
                Sign in
              </button>
            </div>

            <button
              onClick={toggleMenu}
              className="lg:hidden text-red-400 text-3xl"
            >
              <HiMenu />
            </button>
          </div>

          {/* mobile devices */}
          {isMenuOpen && (
            <div className="mt-4 bg-orange-400 text-white rounded py-4">
              <a href="#" className="block hover:text-gray-400 py-2 px-4">
                Home
              </a>
              <a href="#" className="block hover:text-gray-400 py-2 px-4">
                all books
              </a>
              <a href="#" className="block hover:text-gray-400 py-2 px-4">
                about
              </a>
              <a href="#" className="block hover:text-gray-400 py-2 px-4">
                contact
              </a>
              <button className="block hover:text-gray-400 py-2 px-4">
                Sign in
              </button>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Navbar;
