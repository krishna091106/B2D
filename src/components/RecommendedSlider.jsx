import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const items = [
  { img: "models/model1.jpg" },
  { img: "models/model2.jpg" },
  { img: "models/model3.jpg" },
];

export default function RecommendedSlider() {
  const sliderRef = useRef(null);
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const baseUrl = import.meta.env.BASE_URL;

  useEffect(() => {
    const autoScroll = () => {
      if (!sliderRef.current) return;

      const slideWidth = sliderRef.current.children[0].offsetWidth;
      const nextIndex = (index + 1) % items.length;

      sliderRef.current.scrollTo({
        left: slideWidth * nextIndex,
        behavior: "smooth",
      });

      setIndex(nextIndex);

      // ⏸ Pause 5 seconds before next scroll
      timeoutRef.current = setTimeout(autoScroll, 5000);
    };

    timeoutRef.current = setTimeout(autoScroll, 5000);

    return () => clearTimeout(timeoutRef.current);
  }, [index]);

  return (
    <section className="text-white px-6 md:px-10 pt-10 overflow-hidden">

      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-xl md:text-3xl tracking-[0.35em] uppercase text-gray-200 cute-font-regular">
          You may also like
        </h2>

        <Link
          to="/products"
          className="hidden md:flex items-center gap-2 text-[11px] tracking-widest text-gray-400 hover:text-white transition"
        >
          View catalog
          <span className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-600">
            ↗
          </span>
        </Link>
      </div>

      {/* 📱 Mobile auto-scroll */}
      <div className="md:hidden">
        <div
          ref={sliderRef}
          className="
            flex
            gap-4
            overflow-x-auto
            snap-x
            snap-mandatory
            scroll-smooth
            scrollbar-hide
          "
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="snap-center flex-shrink-0"
            >
              <img
                src={`${baseUrl}${item.img}`}
                alt="model"
                className="w-[280px] h-[440px] object-cover "
              />
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {items.map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full ${
                index === i ? "bg-white" : "bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>

      {/* 🖥 Desktop Grid */}
      <div className="hidden md:flex justify-center">
        <div className="grid grid-cols-3 gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden bg-[#1b1b1b]"
            >
              <img
                src={`${baseUrl}${item.img}`}
                alt="model"
                className="w-[330px] h-[450px] object-cover "
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
