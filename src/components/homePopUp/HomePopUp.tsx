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
    <div className="flex flex-col lg:flex-row gap-4 my-5">

   
    <div className="w-full flex flex-col gap-4">
      <h2 className="text-5xl font-medium">POP-UP UTSTILLING</h2>
      <div className="text-xl">
        <p>Vi stiller ut syklene i</p>
        <p>Apoteker gata 18, 3187 Horten</p>
      </div>
      <h2 className="text-3xl font-medium">13/04 til 31/05</h2>
      
      <p className="text-xl">Dette er en vindu-utstilling, men du kan avtale time på 434 16 838 / 400 50 009 
      eller her:</p>
      <button 
        onClick={() => setIsModalOpen(true)}

        className="w-fit py-2 px-3 flex justify-center items-center md:items-start bg-customGreen text-white rounded-md gap-2 text-center transition-transform duration-300 hover:scale-105">SEND MELDING
        </button>
    </div>
    <div>
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