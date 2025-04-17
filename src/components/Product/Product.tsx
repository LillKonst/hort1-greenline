import ImageSlider from "./imageSlider/ImageSlider";
import ProductDetails from "./productDetails/ProductDetails";
import { useState } from "react";
import ContactModal from "../contactModal/ContactModal";
import ProductInfo from "./productInfo/ProductInfo";

export default function Product() {
  const [ isModalOpen, setIsModalOpen ] = useState(false);
  const [ showSuccess, setShowSuccess ] = useState(false);

  const handleSuccess = () => {
    setIsModalOpen(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
  };

  return(
    <div className="w-full sm:w-11/12 lg:w-10/12 flex flex-col p-2 self-center-safe gap-8">
      <div className="flex flex-col md:flex-row justify-center items-start p-2 self-center-safe gap-8">
        <ImageSlider />
        <ProductDetails onContactClick={() => setIsModalOpen(true)}/>
      </div>

      <ProductInfo /> 

        <div>
        <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSuccess={handleSuccess}/>
        </div>

        {showSuccess && (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 bg-customGreen text-white text-center px-6 py-3 rounded-lg shadow-lg z-[9999] transition-opacity duration-300">
          <h1 className="text-2xl">E-posten ble sendt!</h1>
          <p className="text-lg">Vi svarer deg så raskt vi kan.</p>
        </div>
      )}
    </div>
  );
}