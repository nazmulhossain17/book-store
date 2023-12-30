import { Link } from "react-router-dom";

interface ProductItemProps {
  product: {
    _id: string;
    title: string;
    image: string;
    author: string;
    genre: string;
    price: number;
    description: string;
    // Add more properties as needed
  };
}

const Demo: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <>
      <div>
        <div className="rounded-2xl h-[605px] flex flex-col items-start justify-between p-5 overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all gap-2">
          <Link to={`/bookdetails/${product._id}`} className="w-full">
            <img src={product?.image} alt="Books" className=" md:h-62 " />
            <h1 className="text-xl font-semibold">{product?.title}</h1>
          </Link>
          <p>Rating: {product?.author || "N/A"}</p>
          <p className="text-sm">genre: {product?.genre}</p>
          <p className="text-2xl">Price: ${product?.price}</p>
          {/* <button
            onClick={() => handleAddProduct(product)}
            className="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none"
          >
            Add to cart
          </button> */}
        </div>
      </div>
    </>
  );
};

export default Demo;
