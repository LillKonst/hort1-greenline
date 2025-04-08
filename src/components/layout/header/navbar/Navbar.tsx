export default function Navbar() {
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
          <a>GREENLINE</a>
          <a>OM OSS</a>

          
        </nav>
    </div>
  );
}