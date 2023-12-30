import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../../redux/api/apiSlice";
import Demo from "./Demo";

const FrontBooks: React.FC = () => {
  const { data, isLoading, error } = useGetProductsQuery();
  console.log(data);

  const limitedData = data?.products?.slice(0, 4);
  console.log("Limited Data:", limitedData);
  return (
    <>
      <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto">
        <div className="text-center my-8">
          <h2 className="text-3xl mb-2">Featured Products</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 ">
          {limitedData?.map((product) => {
            console.log("Product:", product);
            return <Demo key={product._id} product={product} />;
          })}
        </div>
        <div className="text-center p-2">
          <Link
            to="/allbooks"
            className="bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-bold py-2 px-4 rounded mt-4 inline-block "
          >
            View All Books
          </Link>
        </div>
      </div>
    </>
  );
};

export default FrontBooks;
