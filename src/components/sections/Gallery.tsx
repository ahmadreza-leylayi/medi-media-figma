import Image from "next/image";

export default function Gallery() {
  const images = [
    "/gallery/1.jpg",
    "/gallery/2.jpg",
    "/gallery/3.jpg",
    "/gallery/4.jpg",
    "/gallery/5.webp",
    "/gallery/6.webp",
  ];

  return (
    <section className="w-auto bg-black flex justify-center items-center mt-1 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 w-[95%] md:w-[85%]">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative w-full overflow-hidden rounded-lg hover:scale-102 transition-transform duration-300"
          >
            <Image
              src={src}
              alt={`Gallery Image ${index + 1}`}
              height={300}
              width={300}

              className="object-cover h-[97%] w-full "
            />
          </div>
        ))}
      </div>
    </section>
  );
}
