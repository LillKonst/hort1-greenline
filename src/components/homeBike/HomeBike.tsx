import bike from "../../images/GreenlineBike.jpg";
import { Link } from "react-router-dom";

export function GreenlineProduct() {
  return <div>GreenlineProduct</div>;
}

export default function HomeBike () {
  return (
    <div className="w-full flex justify-center">
    <div className="w-full xl:w-10/12 flex flex-col md:flex-row gap-4 mt-5 justify-center items-center">
      <Link to="/GreenlineProduct" className="w-full md:w-2/5 hover:scale-105">
      
        <img src={bike} alt="sykkel" className="w-full h-full object-cover px-10 md:px-0"/>
      </Link>
      <div className="md:m-5 w-full md:w-3/5">
        <h2 className="text-5xl font-semibold md:mt-5 text-customGreen tracking-wider">Greenline</h2>
        <p className="xxs:text-lg my-2 xl:text-2xl m-2">
        Dette er elsykkelen for deg som liker både byliv og natur. Med <span className="font-semibold">Hort1 <span className="text-customGreen">Greenline</span></span> får du blant annet: </p>

        <ul className="mt-2 md:mt-10 p-2 flex gap-2 xs:gap-4 flex-wrap">
          <li className="bg-customGreen rounded-full hover:scale-105 p-5 text-white text-xs xs:text-sm sm:text-lg font-bold text-center w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 flex flex-col justify-center items-center"><p>Bafang</p><p>motor</p> </li>
          <li className="bg-customGreen rounded-full hover:scale-105 p-5 text-white text-xs xs:text-sm sm:text-lg font-bold text-center w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 flex flex-col justify-center items-center"><p>65nm+</p> <p>torque</p></li>
          <li className="bg-customGreen rounded-full hover:scale-105 p-5 text-white text-xs xs:text-sm sm:text-lg font-bold text-center w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 flex flex-col justify-center items-center"><p>Shimano</p><p>27gir</p> </li>
          <li className="bg-customGreen rounded-full hover:scale-105 p-5 text-white text-xs xs:text-sm sm:text-lg font-bold text-center w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 flex flex-col justify-center items-center"><p>Shimano</p> <p>bremser</p></li>
          
        </ul>
      </div>
      
    </div></div>
  );
}