import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import control from "../../assets/books/control.png";
import plus from "../../assets/books/circle-plus-solid.svg";

interface FormData {
  title: string;
  author: string;
  genre: string;
  image: string;
  price: string;
  description: string;
}

const Create: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(true);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Handle form submission logic here
    console.log(data);
    setLoading(true);
    try {
      const response = await axios.post(
        "https://nazmul-book-store-api.vercel.app/api/books/create",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.data.user) {
        console.log("book created successful");
        toast.success("Book created successful");
        setLoading(false);
        navigate("/allbooks");
      } else {
        // Registration failed, handle the error
        console.error("Book create failed");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false); // Set loading to false when the request is complete
    }
  };
  return (
    <>
      <div className="flex">
        <div
          className={` ${
            open ? "w-72" : "w-20 "
          } bg-gradient-to-r from-slate-200 to-purple-100 h-screen p-5 pt-8 relative duration-300`}
        >
          <img
            src={control}
            className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          />
          <div className="flex gap-x-4 items-center">
            <img
              src={plus}
              className={`cursor-pointer duration-500 w-5 ${
                open && "rotate-[360deg]"
              }`}
            />
            <h1
              className={`text-dark cursor-pointer origin-left font-medium text-xl duration-200 ${
                !open && "scale-0"
              }`}
            >
              Create
            </h1>
          </div>
        </div>
        <div className="p-7 text-2xl font-semibold flex-1 h-screen bg-gradient-to-r from-gray-200 to-white">
          <div className=" md:w-1/2 mx-auto">
            <h2 className="text-4xl text-neutral-700 font-semibold ">
              Create your Book
            </h2>
            <form
              className="max-w-md mx-2 mb-9 mt-7"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  {...register("title", { required: true })}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  required
                />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Title of your Book
                </label>
                {errors.title && (
                  <span className="text-red-500">Title is required</span>
                )}
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    {...register("author", { required: true })}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    required
                  />
                  <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Author
                  </label>
                  {errors.author && (
                    <span className="text-red-500">Author is required</span>
                  )}
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    {...register("genre", { required: true })}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    required
                  />
                  <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Genre
                  </label>
                  {errors.genre && (
                    <span className="text-red-500">Genre is required</span>
                  )}
                </div>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  {...register("image", { required: true })}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  required
                />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Image url
                </label>
                {errors.image && (
                  <span className="text-red-500">Genre is required</span>
                )}
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  {...register("price", { required: true })}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  required
                />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Price
                </label>
                {errors.price && (
                  <span className="text-red-500">Genre is required</span>
                )}
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  {...register("description", { required: true })}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  required
                />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Description
                </label>
                {errors.description && (
                  <span className="text-red-500">Genre is required</span>
                )}
              </div>

              <button
                type="submit"
                className="px-2 py-1 border border-lime-600 rounded-2xl text-gray-600 hover:bg-green-800 hover:text-white w-full transition-all duration-300"
              >
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
      {/*  */}
    </>
  );
};

export default Create;
