// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/effect-fade'
import 'swiper/scss/pagination'

import './Carousel.scss'

// import required modules
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper'

type CarouselProps = {
  images: string[]
}

export default function Carousel({ images }: CarouselProps) {
  return (
    <>
      <Swiper
        pagination
        navigation
        effect="fade"
        // autoHeight
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        speed={800}
        loop
        className="carousel"
      >
        {images.map((image, i) => (
          <SwiperSlide key={i} className="carousel__slide">
            <img alt={`pic-${i}`} src={image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
