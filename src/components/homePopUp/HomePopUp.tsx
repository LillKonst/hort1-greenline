import sykler from "../../images/sykler-pop-up.jpg";
import ContactModal from "../contactModal/ContactModal";
import { useState } from "react";

export default function HomePopUp () {
  const [ isModalOpen, setIsModalOpen ] = useState(false);
      const [ showSuccess, setShowSuccess ] = useState(false);
    
      const handleSuccess = () => {
        setIsModalOpen(false);
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 5000);
      };
  return(
    <div className="flex flex-col lg:flex-row gap-4 my-5 mb-10">

   
    <div className="w-full lg:w-1/2 flex flex-col gap-4">
      <h2 className="text-5xl font-semibold">POP-UP UTSTILLING</h2>
      <div className="text-xl md:mt-2">
        <p>Vi stiller ut syklene i</p>
        <p>Apoteker gata 18, 3187 Horten</p>
      </div>
      <h2 className="text-3xl font-semibold md:mt-2">13/04 til 31/05</h2>
      
      <p className="text-xl mt-2">Dette er en vindu-utstilling, men du kan avtale time på 434 16 838 / 400 50 009 
      eller her:</p>
      <button 
        onClick={() => setIsModalOpen(true)}

        className="w-fit py-3 px-4 flex justify-center items-center md:items-start bg-customGreen text-white text-2xl font-semibold rounded-md gap-2 text-center transition-transform duration-300 hover:scale-105">SEND MELDING
        </button>
    </div>
    <div className="w-full lg:w-1/2">
      <img src={sykler} alt="sykler" className="rounded-md"/>
    </div>



    <ContactModal  isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSuccess={handleSuccess}/>
       
     
           {showSuccess && (
             <div className="fixed top-1/2 left-1/2 -translate-x-1/2 bg-customGreen text-white text-center px-6 py-3 rounded-lg shadow-lg z-[9999] transition-opacity duration-300">
               <h1 className="text-2xl">E-posten ble sendt!</h1>
               <p className="text-lg">Vi svarer deg så raskt vi kan.</p>
             </div>
           )}
     </div>
           
  );
}