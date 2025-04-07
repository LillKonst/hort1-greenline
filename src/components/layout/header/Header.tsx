import logo from "../../../images/LOGO-HORT1.svg";

export default function Header() {
  return (
    <div className="top-0 right-0 left-0 bg-customBlack w-full h-[70px]">
      <img src={logo} alt="logo" className="h-[55px] p-2"/>

    </div>
  );
}