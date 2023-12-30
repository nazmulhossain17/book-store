import { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  deleteUserFailure,
  deleteUserSuccess,
  signOutUserFailure,
  signOutUserStart,
  signOutUserSuccess,
} from "../../redux/user/userSlice";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const { currentUser } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

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

  const handleLogOut = async () => {
    try {
      dispatch(signOutUserStart());
      const res = await fetch("http://localhost:5000/api/v1/auth/log-out", {
        method: "GET",
        credentials: "include",
      });

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();

      if (data.success === false) {
        dispatch(deleteUserFailure(data.message));
        return;
      }

      document.cookie = "access_token=; expires=Thu, 01 Jan 1970 00:00:00 GMT";

      dispatch(deleteUserSuccess(data));
    } catch (error) {
      dispatch(deleteUserFailure(error.message));
    }
  };

  return (
    <>
      <header className="w-full fixed top-0 left-0 right-0">
        <nav
          className={`py-4 md:px-8 px-4 bg-gradient-to-r from-violet-200 to-lime-100 ${
            isSticky ? "sticky top-0 right-0 left-0 bg-white" : ""
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="font-bold text-2xl cursor-pointer text-black">
              <Link to="/">Nazmul Book Store</Link>
            </div>

            <div className="lg:flex items-center gap-3 hidden text-stone-700">
              <Link
                to="/"
                className="block hover:text-green-700 py-2 px-4 font-semibold"
              >
                Home
              </Link>
              <Link
                to="/allbooks"
                className="block hover:text-green-700 py-2 px-4 font-semibold"
              >
                all books
              </Link>
              <Link
                to="/about"
                className="block hover:text-green-700 py-2 px-4 font-semibold"
              >
                about
              </Link>
              <Link
                to="/contact"
                className="block hover:text-green-700 py-2 px-4 font-semibold"
              >
                contact
              </Link>
            </div>

            {/* login */}

            <div className="lg:block hidden">
              {currentUser ? (
                <>
                  <Link
                    to="/create-book"
                    className="px-4 py-2 mr-2 border border-orange-600 rounded-sm text-gray-600 hover:bg-red-400 hover:text-white transition-all duration-300"
                  >
                    Create Book
                  </Link>
                  <span
                    onClick={handleLogOut}
                    className="px-4 py-2 border border-orange-600 rounded-sm text-gray-600 hover:bg-red-400 hover:text-white transition-all duration-300"
                  >
                    Sign out
                  </span>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="px-4 py-2 border border-orange-600 rounded-sm text-gray-600 hover:bg-red-400 hover:text-white transition-all duration-300"
                  >
                    Sign in
                  </Link>
                </>
              )}
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
              <Link to="/" className="block hover:text-gray-400 py-2 px-4">
                Home
              </Link>
              <Link
                to="/allbooks"
                className="block hover:text-gray-400 py-2 px-4"
              >
                all books
              </Link>
              <Link to="/about" className="block hover:text-gray-400 py-2 px-4">
                about
              </Link>
              <Link
                to="/contact"
                className="block hover:text-gray-400 py-2 px-4"
              >
                contact
              </Link>
              <Link to="/login" className="block hover:text-gray-400 py-2 px-4">
                Sign in
              </Link>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Navbar;
