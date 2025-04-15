import bike from "../../images/GreenlineBike.jpg";

export default function HomeBike () {
  return (
    <div className="w-full flex gap-4 mt-5">
      <div className="w-2/5">
        <img src={bike} alt="sykkel" className="w-full h-full object-cover"/>
      </div>
      <div className="m-5 w-3/5">
        <h2 className="text-5xl font-medium mt-5">Sjekk ut vår sykkel</h2>
        <p className="xxs:text-lg my-2 md:text-2xl m-2">
        Dette er elsykkelen for deg som liker både byliv og natur. Med <span className="font-semibold">Hort1 <span className="text-customGreen">Greenline</span></span> får du blant annet: </p>

        <ul className=" mt-10 p-2 flex gap-6">
          <li className="bg-customGreen rounded-full p-5 text-white font-bold text-center w-24 h-24 flex flex-col justify-center items-center"><p>Bafang</p><p>motor</p> </li>
          <li className="bg-customGreen rounded-full p-5 text-white font-bold text-center w-24 h-24 flex flex-col justify-center items-center"><p>65nm+</p> <p>torque</p></li>
          <li className="bg-customGreen rounded-full p-5 text-white font-bold text-center w-24 h-24 flex flex-col justify-center items-center"><p>Shimano</p><p>27 gir</p> </li>
          <li className="bg-customGreen rounded-full p-5 text-white font-bold text-center w-24 h-24 flex flex-col justify-center items-center"><p>Shimano</p> <p>bremser</p></li>
        </ul>
      </div>
      
    </div>
  );
}