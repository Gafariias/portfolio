import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react'
import image0 from '../../assets/images/spotify.png'
import image1 from '../../assets/images/lista.png'
import image2 from '../../assets/images/jogo.png'
import image3 from '../../assets/images/android.png'
import { Pagination, A11y, Autoplay } from 'swiper'

import './slider.css'
import 'swiper/css'
import 'swiper/css/pagination'
import { ReactNode } from 'react'

interface SliderProps {
    settings: SwiperProps 
    children: ReactNode
}

export function Slider({ settings, children }: SliderProps) {

    return(
        <Swiper 
            autoplay={{delay: 2000}}
            id="homeSlider" 
            modules={[Pagination, A11y, Autoplay]} {...settings}>
            {children}
            <SwiperSlide className='sliderHome'>
                <a 
                    href="https://gafariias.github.io/clone-spotify-web-player/"
                    target={'_blank'}>
                    <img src={image0} alt="" />
                </a>
            </SwiperSlide>

            <SwiperSlide className='sliderHome'>
                <a 
                    href=""
                    target={'_blank'}>
                    <img src={image1} alt="" />
                </a>
            </SwiperSlide>

            <SwiperSlide className='sliderHome'>
                <a 
                    href="https://gafariias.github.io/Jogo-de-defesa-de-base/"
                    target={'_blank'}>
                    <img src={image2} alt="" />
                </a>
            </SwiperSlide>

            <SwiperSlide className='sliderHome'>
                <a 
                    href="https://gafariias.github.io/Projeto-Android/"
                    target={'_blank'}>
                    <img src={image3} alt="" />
                </a>
            </SwiperSlide>
        </Swiper>
    );
}