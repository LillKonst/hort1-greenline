import { Link, useLocation } from "react-router-dom";

interface NavbarProps {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Home() {
  return <div>Home</div>;
}

export function GreenlineProduct() {
  return <div>GreenlineProduct</div>;
}


export function Contact() {
  return <div>Contact</div>;
}

export function RouteNotFound() {
  return <div>Page not found</div>;
}

export default function Navbar({ setIsMenuOpen }: NavbarProps) {
  const location = useLocation();

  return(
    <div
    className={`
      absolute top-0 right-0 left-0 h-[146px] md:h-[0px]
      bg-white p-3 
      md:static md:bg-transparent md:p-0 md:rounded-none
    `}
  >
    <nav
      className={`
         pt-5 p-5 flex flex-col gap-6
        text-black md:text-white text-xl font-bold md:font-semibold
        md:mt-0 md:pt-0 md:p-0 md:flex-row
      `}
    >
          <Link
            to="/GreenlineProduct"
            onClick={() => setIsMenuOpen(false)}
            className={`${
              location.pathname === "/GreenlineProduct" ? "font-normal" : "font-normal"
            }`}
           >
            Greenline El-Sykkel
          </Link>
          <Link
            to="/Contact"
            onClick={() => setIsMenuOpen(false)}
            className={`${
              location.pathname === "/Contact" ? "font-normal" : "font-normal"
            }`}
          >
            Kontakt
              
          </Link>

          
        </nav>
    </div>
  );
}