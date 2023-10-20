import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Slider(){
    return (
        <div className='w-3/4 mx-auto my-5'>
        <Swiper
            centeredSlides={true}
            slidesPerView={1}
            autoplay={true}
            className='custom-slider'
            >
                <SwiperSlide>
                    <img className="custom-slide w-full" src="https://i.pinimg.com/originals/e7/19/45/e719459ca952cc229bf748959fc6a6a8.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="custom-slide w-full " src="https://i.pinimg.com/originals/15/2c/4d/152c4d092e81d81e394c0bb51aa337eb.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="custom-slide w-full" src="https://i.pinimg.com/originals/90/d2/36/90d2367a7f769110b6c1f0e9a5b7f170.png" alt="" />
                </SwiperSlide>
        </Swiper>
        </div>

    )
}