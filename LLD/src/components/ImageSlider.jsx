import { useEffect, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { images } from "../../constant";

function ImageSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      loadNextImage();
    }, 2000);

    return () => clearInterval(id);
  }, [active]);

  function loadPrevImage() {
    setActive((active) => (active - 1 < 0 ? images.length - 1 : active - 1));
  }

  function loadNextImage() {
    setActive((active) => (active + 1) % images.length);
  }

  return (
    <div className="m-2 flex items-center justify-center gap-6">
      <HiChevronLeft
        className="h-10 w-10 cursor-pointer"
        onClick={loadPrevImage}
      />
      {images.map((image, i) => (
        <img
          className={
            "h-[500px] w-[800px] object-contain pt-5 " +
            (active === i ? "block" : "hidden")
          }
          src={image}
          alt="wallpaper"
          key={i}
        />
      ))}
      <HiChevronRight
        className="h-10 w-10 cursor-pointer"
        onClick={loadNextImage}
      />
    </div>
  );
}

export default ImageSlider;
