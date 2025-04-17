import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main className="pt-[130px] md:pt-0">
      <Outlet />
      </main>
      <Footer />
    </div>
  );
}
