import logo from "../../../images/LOGO-HORT1.svg";

export default function Header() {
  return (
    <div className="top-0 right-0 left-0 bg-customBlack w-full h-[80px] flex align-center">

      <img src={logo} alt="logo" className="h-[80px] p-3 pt-0"/>

    </div>
  );
}