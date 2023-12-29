import React from "react";

const Sectionz: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "Buy Books",
      description: "Out membershop mangerdfklsdf;sdlfjsdf",
      image: "https://cdn-icons-png.flaticon.com/512/3655/3655341.png",
    },
    {
      id: 2,
      title: "Sell Books",
      description: "Out membershop mangerdfklsdf;sdlfjsdf",
      image: "https://cdn-icons-png.flaticon.com/512/4378/4378829.png",
    },
    {
      id: 3,
      title: "Enjoy",
      description: "Out membershop mangerdfklsdf;sdlfjsdf",
      image: "https://logowik.com/content/uploads/images/enjoy1839.jpg",
    },
  ];
  return (
    <>
      <div className="mt-20 md:w-1/2 mx-auto text-center">
        <h2 className="text-4xl text-neutral-700 font-semibold mb-3">
          Buy and Sell your Book in this single system
        </h2>
        <p className="text-xl">Try for free</p>
      </div>
      <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
        {services.map((service) => (
          <div
            key={service.id}
            className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-300 transition-all duration-300 flex items-center justify-center h-full"
          >
            <div>
              <div className="mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover rounded-tl-3xl rounded-br-3xl"
                />
              </div>
              <h4 className="text-2xl font-bold text-neutral-600 mb-2 px-2">
                {service.title}
              </h4>
              <p className="text-sm text-neutral-900">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Sectionz;
