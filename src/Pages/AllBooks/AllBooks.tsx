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
  // const dataArray = Array.isArray(data) ? data : [];

  // console.log("dataArray:", dataArray);

  const { data, isLoading, error } = useGetProductsQuery();
  console.log(data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const products = data?.products || [];

  return (
    <div className="grid grid-cols-12 max-w-7xl mx-auto relative">
      <div className="col-span-3 z mr-10 space-y-5 border rounded-2xl border-gray-200/80 p-5 self-start sticky top-16 h-[calc(100vh-80px)]">
        <div>
          <h1 className="text-2xl uppercase">Availability</h1>
          <div
            className="flex items-center space-x-2 mt-3"
            onClick={() => dispatch(toggleState())}
          >
            <label
              htmlFor="in-stock"
              className="relative inline-flex items-center cursor-pointer"
            >
              <input
                id="in-stock"
                type="checkbox"
                value=""
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
        <div className="space-y-3">
          <h1 className="text-2xl uppercase">Price Range</h1>
          <div className="max-w-xl">
            <input
              type="range"
              defaultValue={350}
              max={1000}
              min={0}
              step={1}
              onChange={(e) => handleSlider(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
          </div>
          <div>From 0$ To {priceRange}$</div>
        </div>
      </div>
      <div className="col-span-9 grid grid-cols-4 gap-10 pb-20">
        {products.map((product) => (
          <AllData key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
