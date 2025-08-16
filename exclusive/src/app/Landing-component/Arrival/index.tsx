import Image from "next/image";

const products = [
  {
    key: "ps5",
    title: "PlayStation 5",
    description: "Black and White version of the PS5 coming out on sale.",
    imageSrc: "/ps5-black-white.png", // replace with actual path
    link: "#",
    large: true,
  },
  {
    key: "womens-collections",
    title: "Women’s Collections",
    description: "Featured woman collections that give you another vibe.",
    imageSrc: "/women-hat.jpg", // replace with actual path
    link: "#",
  },
  {
    key: "speakers",
    title: "Speakers",
    description: "Amazon wireless speakers",
    imageSrc: "/amazon-speakers.png", // replace with actual path
    link: "#",
  },
  {
    key: "perfume",
    title: "Perfume",
    description: "GUCCI INTENSE OUD EDP",
    imageSrc: "/gucci-perfume.png", // replace with actual path
    link: "#",
  },
];

export default function ProductGrid() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-12 gap-6">
      {/* Large left block */}
      <div className="col-span-8 relative rounded-md overflow-hidden bg-black text-white">
        <Image
          src={products[0].imageSrc}
          alt={products.title}
          fill
          style={{ objectFit: "contain" }}
          className="z-0"
          priority
        />
        <div className="absolute bottom-6 left-6 z-10 max-w-[300px]">
          <h2 className="text-3xl font-bold">{products[0].title}</h2>
          <p className="mt-2 text-sm">{products.description}</p>
          <a href={products.link} className="inline-block mt-3 underline font-medium">
            Shop Now
          </a>
        </div>
      </div>

      {/* Right column grid */}
      <div className="col-span-4 grid grid-rows-2 gap-6">
        {/* Top block */}
        <div className="relative rounded-md overflow-hidden bg-black text-white flex items-center justify-center">
          <Image
            src={products[1].imageSrc}
            alt={products[1].title}
            fill
            style={{ objectFit: "cover" }}
            className="z-0"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 z-10 px-4 flex flex-col justify-center max-w-[320px]">
            <h3 className="text-xl md:text-2xl font-semibold mb-2">{products[1].title}</h3>
            <p className="text-xs md:text-sm">{products[1].description}</p>
            <a href={products[1].link} className="underline mt-4 w-max font-medium">
              Shop Now
            </a>
          </div>
        </div>

        {/* Bottom two small blocks */}
        <div className="grid grid-cols-2 gap-6">
          {[products[2], products].map((prod) => (
            <div
              key={prod.key}
              className="relative rounded-md overflow-hidden bg-black text-white flex items-center justify-center"
            >
              <Image
                src={prod.imageSrc}
                alt={prod.title}
                fill
                style={{ objectFit: "contain" }}
                className="z-0 p-8"
                priority
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 z-10 px-4 flex flex-col justify-center max-w-[220px]">
                <h3 className="text-lg font-semibold">{prod.title}</h3>
                <p className="text-xs">{prod.description}</p>
                <a href={prod.link} className="underline mt-2 w-max font-medium">
                  Shop Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
