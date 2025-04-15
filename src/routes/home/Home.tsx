import { Link } from "react-router-dom";
import HomeBike from "../../components/homeBike/HomeBike";
import HomePopUp from "../../components/homePopUp/HomePopUp";

export function GreenlineProduct() {
  return <div>GreenlineProduct</div>;
}

export default function Home() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-11/12 md:w-10/12 flex flex-col gap-4">
      
        <Link to="/GreenlineProduct">
        <HomeBike />
        </Link>
     
      <div>
        <HomePopUp />
      </div>
      </div>
    </div>
  );
}