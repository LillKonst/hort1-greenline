// import bikeImg from "../../images/GreenlineBike.jpg";
import ImageSlider from "./imageSlider/ImageSlider";
import ProductDetails from "./productDetails/ProductDetails";

export default function Product() {
  return(
    <div className="w-full sm:w-11/12 md:w-10/12 flex flex-col md:flex-row justify-center items-center p-2 self-center-safe">
      <ImageSlider />
      <ProductDetails/>
    </div>
  );
}