import { useState } from "react";
import { useGetProductsQuery } from "../../redux/api/apiSlice";
import {
  setPriceRange,
  toggleState,
} from "../../redux/features/books/bookSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import AllData from "../AllData/AllData";

const AllBooks: React.FC = () => {
  const { priceRange, status } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();

  const handleSlider = (value: number) => {
    dispatch(setPriceRange(value));
  };

  const { data, isLoading, error } = useGetProductsQuery();
  const [searchTerm, setSearchTerm] = useState<string>("");

  console.log(data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const products = data?.products || [];
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="grid grid-cols-12 max-w-7xl mx-auto relative">
      <div className="col-span-3 z mr-10 space-y-5 border rounded-2xl border-gray-200/80 p-5 self-start sticky top-16 h-[calc(100vh-80px)]">
        {/* ... Existing code ... */}
        <div className="space-y-3">
          <h1 className="text-2xl uppercase">Search</h1>
          <input
            type="text"
            placeholder="Search books..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full h-10 px-3 bg-gray-200 rounded-lg focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-700"
          />
        </div>
        {/* ... Existing code ... */}
      </div>
      <div className="col-span-9 grid grid-cols-4 gap-10 pb-20">
        {filteredProducts.map((product) => (
          <AllData key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
