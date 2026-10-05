import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Zoom } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/zoom";

type ProjectCarouselProps = {
  images?: string[];
  projectName: string;
};

export default function ProjectCarousel({
  images,
  projectName,
}: ProjectCarouselProps) {
  if (!images?.length) return null;

  return (
    <div className="project-carousel relative mt-4 w-full overflow-hidden rounded-lg border border-border bg-black/20">
      <Swiper
        modules={[Navigation, EffectFade, Zoom]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        navigation
        zoom
        loop={images.length > 1}
      >
        {images.map((image, index) => (
          <SwiperSlide key={image}>
            <div className="swiper-zoom-container">
              <img
                src={image}
                alt={`${projectName} ${index + 1}`}
                loading={index === 0 ? "eager" : "lazy"}
                className="h-full w-full object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .project-carousel .swiper-button-prev,
        .project-carousel .swiper-button-next {
          width: 28px;
          height: 28px;
          color: #a1a1aa;
        }

        .project-carousel .swiper-button-prev::after,
        .project-carousel .swiper-button-next::after {
          font-size: 16px;
          font-weight: 600;
        }

        .project-carousel .swiper-button-prev:hover,
        .project-carousel .swiper-button-next:hover {
          color: #e4e4e7;
        }
      `}</style>
    </div>
  );
}