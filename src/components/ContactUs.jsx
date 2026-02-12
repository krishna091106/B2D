import { FaInstagram, FaDiscord, FaWhatsapp } from "react-icons/fa";


export default function ContactUs() {
  const baseUrl = import.meta.env.BASE_URL;
  return (
        <div className=" bg-black text-white flex flex-col justify-between border-t  border-white/30">
      
      {/* Top Section */}
      <div className="flex flex-col items-center justify-center flex-grow">
        
        {/* Logo */}
        <img
          src={`${baseUrl}B2D-red.png`}
          alt="The Bridge"
          className="w-15 mx-auto h-20 mt-10 mb-6"
        />

        
        {/* Social Icons */}
        <div className="flex gap-6 mb-10 text-2xl">
          <a href="#" className="hover:text-gray-400 transition">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-gray-400 transition">
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t  border-white/30 py-4 text-center text-sm text-gray-400">
        BACK2DRIP | © Copyright 2026
      </div>
    </div>
  );
}

