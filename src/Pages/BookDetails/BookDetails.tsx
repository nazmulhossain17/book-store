import React from "react";
import { useParams } from "react-router-dom";
import { useSingleProductQuery } from "../../redux/api/apiSlice";
import { useAppDispatch } from "../../redux/hooks";
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
  console.log(product);
  const dispatch = useAppDispatch();

  const handleAddProduct = (selectedProduct: Product) => {
    // dispatch(addToCart(selectedProduct));
    toast.success("Product Added!");
  };

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
          <h1 className="text-3xl font-semibold">{product?.result.title}</h1>
          <p className="text-xl">Author: {product?.result.author}</p>
          <p className="text-lg mt-1">{product?.result.description}</p>
          <p className="text-lg mt-1">Price: ${product?.result.price}</p>
          <button
            onClick={() => handleAddProduct(product)}
            className="px-6 py-2 mt-3 transition ease-in duration-200 uppercase rounded-2xl hover:bg-purple-800 hover:text-white border-2 border-purple-900 focus:outline-none"
          >
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default BookDetails;
