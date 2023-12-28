import axios from "axios";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
interface FormData {
  name: string;
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleRegister: SubmitHandler<FormData> = async (data) => {
    console.log(data);
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/auth/create-user",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.data.user) {
        console.log("Registration successful");
        toast.success("Account created successful");
        setLoading(false);
        navigate("/login");
      } else {
        // Registration failed, handle the error
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false); // Set loading to false when the request is complete
    }
  };
  return (
    <>
      <section className="h-screen">
        <div className="container h-full px-6 py-25 bg-gradient-to-r from-slate-100 to-white ">
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
              <form onSubmit={handleSubmit(handleRegister)}>
                <div>
                  <div className="text-sm font-bold text-gray-700 tracking-wide">
                    Name
                  </div>
                  <input
                    className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                    type="text"
                    {...register("name")}
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-700 tracking-wide mt-8">
                    Email Address
                  </div>
                  <input
                    className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                    type="email"
                    {...register("email")}
                    placeholder="abc@gmail.com"
                    required
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
                    type="password"
                    {...register("password")}
                    placeholder="Enter your password"
                    required
                  />
                </div>

                <div className="mt-10">
                  <button className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg">
                    <span className="inline-block mr-2">
                      {loading ? "Creating Account..." : "Create Account"}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-4 h-4 inline-block"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
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
