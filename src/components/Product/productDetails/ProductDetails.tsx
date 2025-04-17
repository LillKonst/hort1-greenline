interface ProductDetailsProps {
  onContactClick: () => void;
}

export default function ProductDetails({ onContactClick }: ProductDetailsProps) {
  return (
    <div className="flex-1 w-full md:m-2 p-3 flex flex-col">
       <h1 className="text-xl xxs:text-3xl xs:text-4xl font-bold">Hort1 <span className="text-customGreen">Greenline</span></h1>
        <p className="xxs:text-lg my-2">
        Dette er elsykkelen for deg som liker både byliv og natur. Med <span className="font-semibold">Hort1 <span className="text-customGreen">Greenline</span></span> får du blant annet: 
        </p>
        <ul className="my-2 mx-4 p-2 xxs:text-lg xl:text-xl font-semibold md:p-1 flex flex-col gap-2">
          <li className="before:content-['✓'] before:mr-2">Bafang motor</li>
          <li className="before:content-['✓'] before:mr-2">65nm+ torque</li>
          <li className="before:content-['✓'] before:mr-2">Fulldempet</li>
          <li className="before:content-['✓'] before:mr-2">LED frontlys</li>
          <li className="before:content-['✓'] before:mr-2">Shimano girsystem med 27 gir</li>
          <li className="before:content-['✓'] before:mr-2">Shimano bremser</li>
        </ul>

        <h2 className="font-semibold text-3xl mt-8 mx-5">23 500,-</h2>

        <p className="xxs:text-lg mt-3 my-2">Kontakt oss for mer info og kjøp:</p>
        <button 
        onClick={onContactClick}
        className="w-fit py-3 px-4 flex justify-center md:self-start items-center font-semibold bg-customGreen text-white rounded-md gap-2 text-center transition-transform duration-300 hover:scale-105">SEND MELDING
        </button>
    </div>
  );
}