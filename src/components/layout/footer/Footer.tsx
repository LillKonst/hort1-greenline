import logo from "../../../images/LOGO-HORT1.svg";

export default function Footer() {
  return(
    <div className="bottom-0 right-0 left-0 bg-customBlack text-white w-full h-fit flex flex-col justify-center">
    <div className="flex flex-col">
      <img src={logo} alt="logo" className="h-[80px] p-3 pt-0"/>
      <p className="text-center">Copyrights Hort1 Greenline 2025</p>
    </div>

    <div className="text-center">
      <p>ORG: 987654321</p>
      <p>Kontakt oss</p>
    </div>   

      <p className="text-right m-2">Nettside av Lill-Kristine Konst</p>

    </div>
  );
  
}
