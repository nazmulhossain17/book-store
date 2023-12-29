import { Link } from "react-router-dom";

interface ProductItemProps {
  product: {
    _id: string;
    title: string;
    image: string;
    author: string;
    price: number;
    description: string;
    // Add more properties as needed
  };
}

const AllData: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <>
      <div className="rounded-2xl h-[450px] md:h-auto flex flex-col items-start justify-between p-5 overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[103%] transition-all">
        <Link to={`/bookdetails/${product._id}`} className="w-full">
          <img
            className="w-full md:h-64 object-cover"
            src={product?.image}
            alt="product"
          />
        </Link>
        <h1 className="text-xl font-semibold mt-2 md:mt-0">{product?.title}</h1>
        <p className="mt-1">Author: {product?.author}</p>
        <p className="text-sm">Price: ${product?.price}</p>
        <br />
        <button className="px-2 py-1 border border-orange-600 rounded-2xl text-gray-600 hover:bg-red-400 hover:text-white w-full transition-all duration-300">
          Buy
        </button>
      </div>
    </>
  );
};

export default AllData;
