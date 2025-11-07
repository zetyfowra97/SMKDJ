import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css";

const items = [
  {
    src: "/assets/images/SuratMaklumanTaklimatPakejTingkatan4.jpeg",
    link: "/makluman",
  },
  {
    src: "/assets/images/SURATMAKLUMANPERUBAHANJADUALPINTASTINGKATN42025.jpeg",
    link: "/makluman",
  },
  {
    src: "/assets/images/SURATMAKLUMANCUTIDEEPAVALI2025.jpeg",
    link: "/makluman",
  },
  {
    src: "/assets/images/MAJLISSOLATHAJATDANBACAANYASIN.jpeg",
    link: "/makluman",
  },
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
          mainSrc={items[photoIndex].src}
          nextSrc={items[(photoIndex + 1) % items.length].src}
          prevSrc={items[(photoIndex + items.length - 1) % items.length].src}
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
          slidesPerView={3}
          slidesPerGroup={1}
          spaceBetween={15}
          loop={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          navigation
          className="w-full"
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {items.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="relative flex items-center justify-center overflow-hidden rounded-xl cursor-pointer transition-transform duration-300 hover:scale-[1.02]">
                <NavLink
                  to={item.link}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(true);
                    setPhotoIndex(i);
                  }}
                >
                  <img
                    src={item.src}
                    alt={`slide-${i}`}
                    className="w-full h-full object-contain"
                    style={{
                      maxHeight: "100%",
                      filter: "brightness(0.95)",
                    }}
                  />
                </NavLink>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProjectSlider;
