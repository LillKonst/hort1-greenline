import bike from "../../images/GreenlineBike.jpg";

export default function HomeBike () {
  return (
    <div className="w-full flex justify-center">
    <div className="w-full xl:w-10/12 flex flex-col md:flex-row gap-4 mt-5 justify-center items-center">
      <div className="w-full md:w-2/5 hover:scale-105">
        <img src={bike} alt="sykkel" className="w-full h-full object-cover"/>
      </div>
      <div className="m-5 w-full md:w-3/5">
        <h2 className="text-5xl font-semibold mt-5 text-customGreen tracking-wider">Greenline</h2>
        <p className="xxs:text-lg my-2 xl:text-2xl m-2">
        Dette er elsykkelen for deg som liker både byliv og natur. Med <span className="font-semibold">Hort1 <span className="text-customGreen">Greenline</span></span> får du blant annet: </p>

        <ul className=" mt-10 p-2 flex gap-4 flex-wrap">
          <li className="bg-customGreen rounded-full hover:scale-105 p-5 text-white text-sm md:text-sm lg:text-lg font-bold text-center w-20 h-20 lg:w-24 lg:h-24 flex flex-col justify-center items-center"><p>Bafang</p><p>motor</p> </li>
          <li className="bg-customGreen rounded-full hover:scale-105 p-5 text-white text-sm md:text-sm lg:text-lg font-bold text-center w-20 h-20 lg:w-24 lg:h-24 flex flex-col justify-center items-center"><p>65nm+</p> <p>torque</p></li>
          <li className="bg-customGreen rounded-full hover:scale-105 p-5 text-white text-sm md:text-sm lg:text-lg font-bold text-center w-20 h-20 lg:w-24 lg:h-24 flex flex-col justify-center items-center"><p>Shimano</p><p>27 gir</p> </li>
          <li className="bg-customGreen rounded-full hover:scale-105 p-5 text-white text-sm md:text-sm lg:text-lg font-bold text-center w-20 h-20 lg:w-24 lg:h-24 flex flex-col justify-center items-center"><p>Shimano</p> <p>bremser</p></li>
          
        </ul>
      </div>
      
    </div></div>
  );
}