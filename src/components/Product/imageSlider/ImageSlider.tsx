import { useState } from "react";

const images = [
  "/images/GreenlineBike.jpg",
  "/images/technical_6_kv.jpg",
  "/images/technical_1_kv.jpg",
  "/images/technical_2_kv.jpg",
  "/images/technical_3_kv.jpg",
  "/images/technical_4_kv.jpg",
  "/images/technical_5_kv.jpg",
];


export default function ImageSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full md:max-w-[300px] xl:max-w-[400px] self-center md:m-2 p-2 flex flex-col items-center">
      <div className="w-full aspect-square mb-4 rounded-lg overflow-hidden">
        <img 
          src={images[activeIndex]} 
          alt={`Image ${activeIndex + 1}`} 
          className="w-full h-full object-cover" 
        />
      </div>

      <div className="w-full flex sm:gap-2 md:justify-between overflow-x-auto scrollbar-hide">
        {images.map((img, index) => (
          <button 
            key={index}onClick={() => setActiveIndex(index)}
            className={`border-2 rounded-md overflow-hidden w-16 h-16 xs:w-20 xs:h-20 flex-shrink-0 ${
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