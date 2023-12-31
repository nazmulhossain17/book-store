import React, { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import {
  signInFailure,
  signInStart,
  signInSuccess,
  userAdded,
} from "../../redux/user/userSlice";
import toast from "react-hot-toast";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch(
        "https://nazmul-book-store-api.vercel.app/api/v1/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
          credentials: "include",
        }
      );

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();
      console.log(data); // Log the response data

      if (data.success === false) {
        // Handle unsuccessful login here
        dispatch(signInFailure(data.message as string));
        return;
      }
      dispatch(signInSuccess(data));
      dispatch(userAdded(data));
      toast.success("Login successful");
      navigate("/");
    } catch (error) {
      console.error("Fetch error:", (error as Error).message);
      dispatch(signInFailure((error as Error).message));
    }
  };

  return (
    <>
      <section className="h-screen">
        <div className="container h-full px-6 py-24 bg-gradient-to-r from-slate-100 to-white ">
          <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
              <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/web-development-3817577-3181531.png"
                className="w-full"
                alt="Phone image"
              />
            </div>

            <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
              <h2 className="text-center text-4xl text-indigo-900 ">SIGN IN</h2>
              <form onSubmit={handleSubmit}>
                <div>
                  <div className="text-sm font-bold text-gray-700 tracking-wide">
                    Email Address
                  </div>
                  <input
                    className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                    type="email"
                    placeholder="abc@gmail.com"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mt-8">
                  <div className="flex justify-between items-center">
                    <div className="text-sm font-bold text-gray-700 tracking-wide">
                      Password
                    </div>
                    <div>
                      <a className="text-xs font-display font-semibold text-indigo-600 hover:text-indigo-800 cursor-pointer">
                        Forgot Password?
                      </a>
                    </div>
                  </div>
                  <input
                    className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                    type="password"
                    placeholder="Enter your password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="mt-10">
                  <button className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg">
                    Sign In
                  </button>
                </div>
              </form>
              <div className="mt-7 text-sm font-display font-semibold text-gray-700 text-center">
                Don't have an account ?
                <Link
                  to="/register"
                  className="cursor-pointer text-indigo-600 hover:text-indigo-800"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
