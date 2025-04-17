import HomeBike from "../../components/homeBike/HomeBike";
import HomePopUp from "../../components/homePopUp/HomePopUp";

export default function Home() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-11/12 md:w-10/12 flex flex-col gap-8 md:gap-4">
      
        <div className="mb-10">
        <HomeBike />
        </div>
    
        <HomePopUp />
  
      </div>
    </div>
  );
}