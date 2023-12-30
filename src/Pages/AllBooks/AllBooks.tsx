// AllBooks.tsx
import React from "react";
import { useGetProductsQuery } from "../../redux/api/apiSlice";
import {
  setPriceRange,
  toggleState,
  toggleGenre, // Import the new action
} from "../../redux/features/books/bookSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import AllData from "../AllData/AllData";

const AllBooks: React.FC = () => {
  const { priceRange, status, selectedGenres } = useAppSelector(
    (state) => state.product
  );
  const dispatch = useAppDispatch();

  const handleSlider = (value: number) => {
    dispatch(setPriceRange(value));
  };

  const handleToggleGenre = (genre: string) => {
    dispatch(toggleGenre(genre));
  };

  const { data, isLoading, error } = useGetProductsQuery();
  const [searchTerm, setSearchTerm] = React.useState<string>("");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const products = data?.products || [];
  const filteredProducts = products.filter(
    (product) =>
      (searchTerm === "" || // Include search term check
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.author.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedGenres.length === 0 || // Include selectedGenres check
        selectedGenres.some((genre) =>
          product.genre.toLowerCase().includes(genre)
        ))
  );

  const genres = Array.from(
    new Set(products.map((product) => product.genre.toLowerCase()))
  );

  return (
    <div className="grid grid-cols-12 max-w-7xl mx-auto relative">
      <div className="col-span-3 z mr-10 space-y-5 border rounded-2xl border-gray-200/80 p-5 self-start sticky top-16 h-[calc(100vh-80px)]">
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
        <div className="space-y-3">
          <h1 className="text-2xl uppercase">Filter by Genre</h1>
          {genres.map((genre) => (
            <label key={genre} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedGenres.includes(genre)}
                onChange={() => handleToggleGenre(genre)}
              />
              <span>{genre}</span>
            </label>
          ))}
        </div>
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
