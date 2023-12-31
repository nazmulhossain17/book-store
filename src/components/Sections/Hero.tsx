import React, { useState } from "react";
import Book1 from "../../assets/books/book2.jpg";
import Book2 from "../../assets/books/max.jpg";
import Book3 from "../../assets/books/book3.jpg";
import { Link } from "react-router-dom";
// import Vector from "../../assets/books/blue-pattern.png";

interface ImageItem {
  id: number;
  img: string;
  title: string;
  description: string;
}

const ImageList: ImageItem[] = [
  {
    id: 1,
    img: Book1,
    title: "His Life will forever be Changed",
    description:
      "Do you know what line I have heard a thousand times? Everything you need is inside of you What the heck? I need so many things! This is a ridiculous declaration! Inside me where, exactly And one day someone said to me “everything you need is inside of you” and it hit me. It hit me hard.",
  },
  {
    id: 2,
    img: Book2,
    title: "Max Payne 3",
    description:
      "Bridging the gaps between Max Payne, Max Payne 2: The Fall of Max Payne and 2012's critically acclaimed Max Payne 3 from Rockstar Games, Max Payne 3: The Complete Series reveals formerly hidden moments in Max's life story, from a young cop on the rise to the man whose battles with the criminal underworld cost him everything he ever held close. Max is now more alone than ever - and this time, he may not even be able to rely on himself.",
  },
  {
    id: 3,
    img: Book3,
    title: "Keeping Up",
    description:
      "Keeping Up, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

interface HeroProps {
  handleOrderPopup: () => void;
}

const Hero: React.FC<HeroProps> = ({ handleOrderPopup }) => {
  const [imageId, setImageId] = useState<string>(Book1);
  const [title, setTitle] = useState<string>(
    "His Life will forever be Changed"
  );
  const [description, setDescription] = useState<string>(
    "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  );

  const bgImage: React.CSSProperties = {
    // backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    // height: "100%",
    width: "100%",
  };

  return (
    <>
      <div
        className="min-h-[550px] sm:min-h-[650px] bg-orange-50 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200"
        style={bgImage}
      >
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* text content section */}
            <div
              data-aos-once="true"
              className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1"
            >
              <h1
                data-aos="zoom-out"
                data-aos-duration="500"
                data-aos-once="true"
                className="text-5xl sm:text-6xl lg:text-7xl font-bold"
              >
                {title}
              </h1>
              <p
                data-aos="slide-up"
                data-aos-duration="500"
                data-aos-delay="100"
                className="text-sm "
              >
                {description}
              </p>
              <div>
                <Link
                  to="/allbooks"
                  onClick={handleOrderPopup}
                  className=" bg-gradient-to-r from-purple-400 to-secondary hover:scale-105 duration-200 text-white py-3 px-6 rounded-sm"
                >
                  See All Books
                </Link>
              </div>
            </div>
            {/* Image section */}
            <div className="min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative order-1 sm:order-2 ">
              <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
                <img
                  data-aos="zoom-in"
                  data-aos-once="true"
                  src={imageId}
                  alt="book img"
                  className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto mt-14"
                />
              </div>
              <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute -bottom-[40px] lg:-right-1 bg-white rounded-full">
                {ImageList.map((item) => (
                  <img
                    key={item.id}
                    data-aos="zoom-in"
                    data-aos-once="true"
                    src={item.img}
                    onClick={() => {
                      setImageId(
                        item.id === 1 ? Book1 : item.id === 2 ? Book2 : Book3
                      );
                      setTitle(item.title);
                      setDescription(item.description);
                    }}
                    alt="biryani img"
                    className="max-w-[100px] h-[100px] object-contain inline-block hover:scale-110 duration-200"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
