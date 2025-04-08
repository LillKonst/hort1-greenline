export default function ProductDetails() {
  return (
    <div className="md:m-2 p-3 flex flex-col">
       <h1 className="text-xl xxs:text-3xl xs:text-4xl font-bold">Hort1 <span className="text-customGreen">Greenline</span></h1>
        <p className="xxs:text-lg my-2">
        Dette er elsykkelen for deg som liker både byliv og natur. Med <span className="font-semibold">Hort1 <span className="text-customGreen">Greenline</span></span> får du blant annet: 
        </p>
        <ul className=" m-3 p-2 list-disc">
          <li className="xxs:text-lg font-semibold md:p-1">40km/t hastighet</li>
          <li className="xxs:text-lg font-semibold md:p-1">65nm+ torque</li>
          <li className="xxs:text-lg font-semibold md:p-1">låsbar frontdemper</li>
          <li className="xxs:text-lg font-semibold md:p-1">LED frontlys</li>
          <li className="xxs:text-lg font-semibold md:p-1">Shimano girsystem med 27 gir</li>
        </ul>

        <p className="xxs:text-lg my-2">Kontakt oss for mer info og kjøp via mail:</p>
        <button className="w-fit py-2 px-3 flex justify-center self-center md:self-start items-center bg-customGreen text-white rounded-md gap-2 text-center transition-transform duration-300 hover:scale-105">vår-mailadresse@sykkel.no
        </button>
    </div>
  );
}