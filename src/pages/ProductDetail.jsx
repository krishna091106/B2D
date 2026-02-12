import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import products from "../data/products.json";
import { Link } from "react-router-dom";
import { ProductDetailSkeleton, ProductGridSkeleton } from "../components/SkeletonLoaders";


export default function ProductDetail() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [itemStatus, setItemStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      let foundProduct = products.find((p) => p.id === id);

      // check admin items
      if (!foundProduct) {
        const adminItems = localStorage.getItem("adminItems");
        if (adminItems) {
          const items = JSON.parse(adminItems);
          const adminProduct = items.find(
            (item) => item.id.toString() === id
          );
          if (adminProduct) {
            foundProduct = {
              ...adminProduct,
              images: [adminProduct.image],
              source: "admin",
            };
          }
        }
      }

      setProduct(foundProduct);

      if (foundProduct) {
        setCurrentIndex(0);
        setMainImage(foundProduct.images[0]);

        let sold = foundProduct.active === "sold";

        if (!sold) {
          const adminItems = localStorage.getItem("adminItems");
          if (adminItems) {
            const items = JSON.parse(adminItems);
            const match = items.find(
              (item) =>
                item.id.toString() === id ||
                item.name.toLowerCase() ===
                foundProduct.name.toLowerCase()
            );
            if (match) sold = match.sold;
          }
        }

        setItemStatus(sold);
      }
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [id]);

  if (isLoading) {
    return (
      <div className="px-10 py-16">
        <ProductDetailSkeleton />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="p-10 text-center text-gray-400">
        Product not found
      </div>
    );
  }

  const isSold = itemStatus === true;

  /* ---------- IMAGE CONTROLS ---------- */
  const nextImage = () => {
    const index = (currentIndex + 1) % product.images.length;
    setCurrentIndex(index);
    setMainImage(product.images[index]);
  };

  const prevImage = () => {
    const index =
      (currentIndex - 1 + product.images.length) %
      product.images.length;
    setCurrentIndex(index);
    setMainImage(product.images[index]);
  };

  /* ---------- RANDOM SUGGESTIONS ---------- */
  const suggestedItems = products
    .filter((p) => p.id !== id)
    .sort(() => 0.5 - Math.random())
    .slice(0,10);

  /* ---------- BASE URL ---------- */
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <div className="px-10 py-16">
      <div className="grid md:grid-cols-2 gap-16">

        {/* IMAGE SECTION */}
        <div>
          <div className="relative">
            <img
              src={`${baseUrl}${mainImage}`}
              alt={product.name}
              className={`h-96 md:h-140 w-full object-cover rounded-lg ${isSold ? "opacity-50" : ""
                }`}
            />

            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 text-white px-3 py-2 rounded-full"
            >
              ‹
            </button>

            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white px-3 py-2 rounded-full"
            >
              ›
            </button>
          </div>

          {/* THUMBNAILS */}
          <div className="flex gap-3 mt-4">
            {product.images.map((img, index) => (
              <img
                key={img}
                src={`${baseUrl}${img}`}
                onClick={() => {
                  setMainImage(img);
                  setCurrentIndex(index);
                }}
                className={`w-24 h-24 object-cover cursor-pointer rounded-lg border
                  ${mainImage === img
                    ? "border-purple-500"
                    : "border-transparent"
                  }`}
              />
            ))}
          </div>
        </div>

        {/* PRODUCT INFO */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-4xl font-bold tracking-widest">
              {product.name}
            </h1>

            {itemStatus && (
              <span className="px-4 py-2 bg-purple-900 text-purple-300 rounded-lg font-bold">
                Sold
              </span>
            )}
          </div>

          <p className="text-xl text-gray-400 mb-6">
            ₹{product.price}
          </p>

          {isSold && (
            <div className="mb-6 p-4 bg-purple-900/40 rounded-lg text-purple-300">
              This item has been sold
            </div>
          )}

          <p className="text-gray-300 mb-8">
            {product.description ||
              "Premium quality thrifted fashion item."}
          </p>

          {!isSold && product.sizes?.length > 0 && (
            <div className="mb-8">
              <p className="text-gray-400 mb-3">Available Size:</p>
              <div className="flex gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className="px-4 py-2 rounded-lg border border-gray-600 text-gray-400"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {!isSold && (
            <button
              onClick={() => {
                const imageUrl =
                  `${window.location.origin}${baseUrl}${mainImage}`;

                const message = `🛍️ *${product.name}*
                💰 Price: ₹${product.price}
                🖼️ Image:
                  ${imageUrl}`;

                const phone = "917567091106";

                window.open(
                  `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(
                    message
                  )}`,
                  "_blank"
                );
              }}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg"
            >
              💬 Message on WhatsApp
            </button>
          )}
        </div>
      </div>

      {/* SUGGESTED ITEMS */}
      <div className="mt-20">
        <h2 className="text-2xl font-bold mb-6 tracking-widest">
          You may also like
        </h2>

        {isLoading ? (
          <ProductGridSkeleton count={4} />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {suggestedItems.map((item) => (
              <Link
                key={item.id}
                to={`/product/${item.id}`}
                className="group"
              >
                <div className="overflow-hidden">
                  <img
                    src={`${baseUrl}${item.images[0]}`}
                    className="h-50 md:h-90 w-full object-cover "
                  />
                </div>
                <p className="mt-3 text-gray-300 font-semibold">
                  {item.name}
                </p>
                <p className="text-gray-500">₹{item.price}</p>
              </Link>

            ))}
          </div>
        )}
      </div>
    </div>
  );
}
