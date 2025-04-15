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
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  return(
    <div
    className={`
      absolute top-2 right-3
      bg-customGreen p-3 rounded-xl
      md:static md:bg-transparent md:p-0 md:rounded-none
    `}
  >
    <nav
      className={`
        mt-12 pt-5 p-5 flex flex-col gap-6
        text-white text-xl font-semibold
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