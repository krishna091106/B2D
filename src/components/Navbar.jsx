import { Link } from "react-router-dom";

export default function Navbar() {
  const baseUrl = import.meta.env.BASE_URL;
  return (
    <nav className="sticky top-0 z-40 bg-black text-white md:px-30 px-10 py-1.5 flex justify-between items-center border-b border-gray-700">
      <Link
        to="/"
        className="text-xl font-bold tracking-widest"
      >
        <img src={`${baseUrl}B2D.png`} alt="Logo" className="h-12" />
      </Link>

      {/* <h1 className="permanent-marker-regular md:text-2xl text-[14px]">BACK<samp className="gloria-hallelujah-regular text-3xl">2</samp>DRIP</h1> */}

      <ul className="flex md:gap-6 gap-3 text-2xl uppercase cute-font-regular ">
        <li>
          <Link to="/" className="hover:text-gray-400 transition">
            Home
          </Link>
        </li>
        <li>
          <Link to="/products" className="hover:text-gray-400 transition">
            Catalog
          </Link>
        </li>
      </ul>
    </nav>
  );
}
