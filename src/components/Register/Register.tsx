import React from "react";
import { Link } from "react-router-dom";

const Register: React.FC = () => {
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
              <h2 className="text-center text-4xl text-indigo-900 ">
                CREATE ACCOUNT
              </h2>
              <form>
                <div>
                  <div className="text-sm font-bold text-gray-700 tracking-wide">
                    Name
                  </div>
                  <input
                    className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                    type=""
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-700 tracking-wide mt-8">
                    Email Address
                  </div>
                  <input
                    className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                    type=""
                    placeholder="abc@gmail.com"
                  />
                </div>
                <div className="mt-8">
                  <div className="flex justify-between items-center">
                    <div className="text-sm font-bold text-gray-700 tracking-wide">
                      Password
                    </div>
                  </div>
                  <input
                    className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                    type=""
                    placeholder="Enter your password"
                  />
                </div>

                <div className="mt-10">
                  <button className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg">
                    Sign Up
                  </button>
                </div>
              </form>
              <div className="mt-7 text-sm font-display font-semibold text-gray-700 text-center">
                Don't have an account ?
                <Link
                  to="/login"
                  className="cursor-pointer text-indigo-600 hover:text-indigo-800"
                >
                  Sign in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
