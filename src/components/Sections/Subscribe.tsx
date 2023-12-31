const Subscribe: React.FC = () => {
  return (
    <div className="bg-dark">
      <div className="flex flex-col items-center gap-8 md:justify-between md:flex-row">
        <div className="flex flex-col gap-2">
          <p className="text-gray-400">SUBSCRIBE TO OUR NEWSLETTER</p>
          <p className="text-gray-300">
            The latest news, article, resources, sent to your inbox weekly
          </p>
        </div>
        <div className="flex flex-col gap-4 xsm:flex-row md:p-0 mt-4 mb-4">
          <input
            className="px-4 bg-slate-50 py-3 text-lg transition-all duration-300 rounded-lg focus:outline-none focus:right-1 "
            placeholder="Enter your email"
            type="text"
          />
          <button className="px-6 py-4 font-semibold bg-purple-500 rounded-lg">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
