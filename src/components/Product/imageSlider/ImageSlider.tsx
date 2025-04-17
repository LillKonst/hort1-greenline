import { useState } from "react";

const images = [
  { src: "/images/GreenlineBike.jpg", alt: "Rød elsykkel sett fra siden" },
  { src: "/images/technical_6_kv.jpg", alt: "Detalj av girsystemet på sykkelen" },
  { src: "/images/technical_1_kv.jpg", alt: "Frontdemper og styre på sykkelen" },
  { src: "/images/technical_2_kv.jpg", alt: "Bafang motor nærbilde" },
  { src: "/images/technical_3_kv.jpg", alt: "LCD-skjerm på styret" },
  { src: "/images/technical_4_kv.jpg", alt: "Hydrauliske skivebremser på hjul" },
  { src: "/images/technical_5_kv.jpg", alt: "Shimano gir og bakhjul" },
];



export default function ImageSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full max-w-[250px] xxs:max-w-[300px] xs:max-w-[400px] self-center m-2 p-2 flex flex-col items-center">
      <div className="w-full aspect-square mb-4 rounded-lg overflow-hidden">
      <img 
        src={images[activeIndex].src} 
        alt={images[activeIndex].alt} 
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
              src={img.src}
               alt={img.alt}
                className="object-cover w-full h-full"
            />
          </button>
        ))}
      </div>
    </div>
  );
}