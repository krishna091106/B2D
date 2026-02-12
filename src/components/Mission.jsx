export default function Mission() {
  const baseUrl = import.meta.env.BASE_URL;
  return (
    <section className="relative bg-black text-white px-6 md:px-14 py-24 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96  rounded-full blur-3xl" />

      <div className="relative grid md:grid-cols-2 gap-14 items-center">
        
        {/* Left Content */}
        <div>
          <span className="inline-block mb-4 px-4 py-1 text-xs tracking-widest uppercase border border-white/20 rounded-full text-gray-300">
            Who we are
          </span>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Our <span className="text-gray-400">Mission</span>
          </h2>

          <p className="text-gray-400 text-lg mb-8 max-w-xl">
            We curate premium fashion pieces that tell a story. Our mission is to
            connect style, sustainability, and individuality—one outfit at a time.
          </p>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/40 to-transparent rounded-3xl" />
          <img
            src={`${baseUrl}bg2.png`}
            alt="Our Mission"
            className="md:w-full md:h-[420px] object-cover rounded-3xl shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}
