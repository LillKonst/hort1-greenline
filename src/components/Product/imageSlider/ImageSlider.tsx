import { useState } from "react";

const images = [
  "/images/GreenlineBike.jpg",
  "/images/technical_1.png",
  "/images/technical_2.png",
  "/images/technical_3.png",
  "/images/technical_4.png",
  "/images/technical_5.png",
];


export default function ImageSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-11/12 self-center md:m-2 p-2 flex flex-col items-center">
      <div className="w-full aspect-square mb-4 rounded overflow-hidden">
        <img 
          src={images[activeIndex]} 
          alt={`Image ${activeIndex + 1}`} 
          className="w-full h-full object-cover" 
        />
      </div>

      <div className="flex sm:gap-2 md:justify-between overflow-x-auto scrollbar-hide">
        {images.map((img, index) => (
          <button 
            key={index}onClick={() => setActiveIndex(index)}
            className={`border-2 rounded-md overflow-hidden w-6 h-6 xxs:w-16 xxs:h-16 xs:w-20 xs:h-20 flex-shrink-0 ${
              activeIndex === index ? "border-customGreen" : "border-transparent" 
            }`}
          >
            <img
              src= {img}
              alt={`Thumbnail ${index + 1}`}
              className="object-cover w-full h-full"
            />
          </button>
        ))}
      </div>
    </div>
  );
}