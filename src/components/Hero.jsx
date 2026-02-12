import { Link } from "react-router-dom";

export default function Hero() {
  const baseUrl = import.meta.env.BASE_URL;
  
  return (
    <section
      className="
        w-full
        md:h-[600px]
        h-[550px]
        flex
        justify-end
        bg-cover
        bg-center
        bg-fixed
        relative
      "
      style={{
        backgroundImage: `url('${baseUrl}hero.jpg')`
      }}
    >
      <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white text-center">
        <h1 className="text-6xl font-extrabold tracking-widest gloria-hallelujah-regular">
          STYLE VIBE<br />REFLECT
        </h1>

        <p className="mt-4 text-gray-300 text-2xl cute-font-regular">
          LIFE ISN'T PERFECT BUT YOUR OUTFIT CAN BE.
        </p>

        <Link
          to="/products"
          className="mt-6 px-8 py-3 bg-white text-black text-sm tracking-widest hover:bg-gray-200 inline-block"
        >
          SHOP NOW
        </Link>
      </div>
    </section>
  );
}
