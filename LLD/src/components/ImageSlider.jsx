import { useState, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { images } from "../../constant";

const ImageSlider = () => {
  const [active, setActive] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     loadNextImage();
  //   }, 2000);

  //   return () => clearInterval(interval);
  // }, [active]);

  const loadNextImage = () => {
    setActive((prev) => (prev + 1) % images.length);
  };

  const loadPrevImage = () => {
    setActive((prev) => (prev - 1 < 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative m-4 mx-auto w-full max-w-(--breakpoint-lg)">
      <h1 className="text-center text-2xl font-extrabold">Image Slider</h1>
      {/* Left Arrow */}
      <button
        onClick={loadPrevImage}
        className="absolute left-4 top-1/2 -translate-y-1/2 transform rounded-full bg-black bg-opacity-50 p-2 text-4xl text-white transition-all duration-300 hover:bg-opacity-100"
        aria-label="Previous Image"
      >
        <HiChevronLeft />
      </button>

      {/* Image */}
      <div className="overflow-hidden">
        <img
          className="h-[500px] w-full object-cover transition-opacity duration-700 ease-in-out sm:h-[400px] md:h-[500px]"
          src={images[active]}
          alt={`Slider Image ${active}`}
        />
      </div>

      {/* Right Arrow */}
      <button
        onClick={loadNextImage}
        className="absolute right-4 top-1/2 -translate-y-1/2 transform rounded-full bg-black bg-opacity-50 p-2 text-4xl text-white transition-all duration-300 hover:bg-opacity-100"
        aria-label="Next Image"
      >
        <HiChevronRight />
      </button>
    </div>
  );
};

export default ImageSlider;
