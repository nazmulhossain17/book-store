import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSingleProductQuery } from "../../redux/api/apiSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import toast from "react-hot-toast";

interface Product {
  _id: string;
  title: string;
  image: string;
  author: string;
  price: number;
  description: string;
}

const BookDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: product, isLoading, error } = useSingleProductQuery(id);
  const dispatch = useAppDispatch();
  const { currentUser } = useAppSelector((state) => state.user);
  const isUserLoggedIn = currentUser !== null;

  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleAddProduct = (selectedProduct: Product) => {
    // dispatch(addToCart(selectedProduct));
    toast.success("Book Added!");
  };
  // http://localhost:5000/api/books/delete-book/${product._id
  const handleDeleteProduct = async () => {
    if (!product || !product.result || !product.result._id) {
      // If the product or product.result._id is not defined, handle the error
      console.error("Invalid product or product ID", product);
      return;
    }

    console.log("Deleting book with ID:", product.result._id);

    try {
      const response = await fetch(
        `https://nazmul-book-store-api.vercel.app/api/books/delete-book/${product.result._id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            // Add any other headers as needed
          },
        }
      );

      if (response.ok) {
        // Book deleted successfully
        toast.success("Book deleted successfully");
        setDeleteModalOpen(false); // Close the modal after deletion
        navigate("/");
      } else if (response.status === 404) {
        // Book not found
        toast.error("Book not found");
      } else {
        // Handle other error cases
        toast.error("Error deleting the book");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error deleting the book");
    }
  };

  const handleEditClick = () => {
    // Navigate to the update page when the "Edit" button is clicked
    navigate(`/updatebook/${id}`);
  };

  const publicationDate = new Date(product?.result.createdAt);
  const formattedDate = publicationDate.toLocaleDateString();

  return (
    <>
      <div className="flex flex-col max-w-7xl mx-auto items-center border-b border-gray-300 mt-10 sm:flex-row">
        <div className="w-full sm:w-2/5 mb-6 sm:mb-0">
          <img
            src={product?.result.image}
            alt=""
            className="w-full h-[200px] sm:h-[450px] object-contain mx-auto mt-4 sm:mt-0"
          />
        </div>
        <div className="w-full sm:w-3/5 space-y-3 text-center sm:text-left">
          <div className="flex justify-between">
            <h1 className="text-3xl font-semibold">{product?.result.title}</h1>
            {isUserLoggedIn && (
              <>
                <p className="cursor-pointer" onClick={handleEditClick}>
                  <b className="text-green-500">Edit</b>
                </p>

                <button
                  onClick={() => setDeleteModalOpen(true)}
                  className="text-red-500 font-bold"
                  type="button"
                >
                  Delete Book
                </button>
              </>
            )}
          </div>

          <p className="text-xl">Author: {product?.result.author}</p>
          <p className="text-lg mt-1">{product?.result.description}</p>
          <p className="text-lg mt-1">
            Price: $<b>{product?.result.price}</b>
          </p>
          <p className="text-lg mt-1">published: {formattedDate}</p>
          <button
            onClick={() => handleAddProduct(product)}
            className="px-6 py-2 mt-3 transition ease-in duration-200 uppercase rounded-2xl hover:bg-purple-800 hover:text-white border-2 border-purple-900 focus:outline-none"
          >
            Buy
          </button>
        </div>
      </div>

      {/* Delete Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-md sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg
                      className="h-6 w-6 text-red-600 hover:cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                      onClick={() => setDeleteModalOpen(false)}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-lg leading-6 font-medium text-gray-900"
                      id="modal-headline"
                    >
                      Are you sure you want to delete this Book?
                    </h3>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  onClick={handleDeleteProduct}
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Yes, I'm sure
                </button>
                <button
                  onClick={() => setDeleteModalOpen(false)}
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  No, cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BookDetails;
