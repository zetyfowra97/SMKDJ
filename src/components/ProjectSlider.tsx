import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import { useState } from "react";
import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css";

const items = [
  "/assets/images/SuratMaklumanTaklimatPakejTingkatan4.jpeg",
  "/assets/images/SURATMAKLUMANPERUBAHANJADUALPINTASTINGKATN42025.jpeg",
  "/assets/images/SURATMAKLUMANCUTIDEEPAVALI2025.jpeg",
  "/assets/images/MAJLISSOLATHAJATDANBACAANYASIN.jpeg",
];

const ProjectSlider = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <section className="mt-10 md:mt-20 px-0 w-full pb-20">
      {/* Heading */}
      <div className="heading text-center mb-10">
        <h6 className="text-sm md:text-base text-gray-400">HEBAHAN TERKINI</h6>
        <h4 className="text-2xl md:text-3xl font-bold text-white">MAKLUMAT</h4>
      </div>

      {/* Lightbox */}
      {isOpen && (
        <Lightbox
          mainSrc={items[photoIndex]}
          nextSrc={items[(photoIndex + 1) % items.length]}
          prevSrc={items[(photoIndex + items.length - 1) % items.length]}
          enableZoom
          onImageLoad={() => window.dispatchEvent(new Event("resize"))}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + items.length - 1) % items.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % items.length)
          }
        />
      )}

      {/* Swiper Slider */}
      <div>
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={3} // Always 3 slides visible
          slidesPerGroup={1}
          spaceBetween={15}
          loop={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          navigation
          className="w-full"
        >
          {items.map((item, i) => (
            <SwiperSlide key={i}>
              <div
                className="relative flex items-center justify-center overflow-hidden rounded-xl cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
                
                onClick={() => {
                  setIsOpen(true);
                  setPhotoIndex(i);
                }}
              >
                <img
                  src={item}
                  alt={`slide-${i}`}
                  className="w-full h-full object-contain"
                  style={{
                    maxHeight: "100%",
                    filter: "brightness(0.95)",
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Responsive scaling */}
     
    </section>
  );
};

export default ProjectSlider;
