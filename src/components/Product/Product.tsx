import bikeImg from "../../images/GreenlineBike.jpg";

export default function Product() {
  return(
    <div className="flex m-2 self-center-safe">
      <div className="w-full m-2">
        <img src={bikeImg} alt="A red electrical bike" />
      </div>
      <div className="w-full m-2">
        <h1 className="text-3xl font-bold">Hort1 <span className="text-customGreen">Greenline</span></h1>
        <p className="text-lg my-2">
        Dette er elsykkelen for deg som liker både byliv og natur. Med <span className="font-semibold">Hort1 <span className="text-customGreen">Greenline</span></span> får du blant annet: 
        </p>
        <ul className="p-2">
          <li className="text-lg font-semibold p-2">40km/t hastighet</li>
          <li className="text-lg font-semibold p-2">65nm+ torque</li>
          <li className="text-lg font-semibold p-2">låsbar frontdemper</li>
          <li className="text-lg font-semibold p-2">LED frontlys</li>
          <li className="text-lg font-semibold p-2">Shimano girsystem med 27 gir</li>
        </ul>

        <p className="text-lg my-2">Kontakt oss for mer info og kjøp via mail:</p>
        <button className="w-fit py-2 px-3 flex justify-center items-center bg-customGreen text-white rounded-md gap-2 text-center transition-transform duration-300 hover:scale-105">vår-mailadresse@sykkel.no
        </button>
      </div>
    </div>
  );
}