import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "./info.css"

import { Parallax, Autoplay } from 'swiper/modules';
import { memo } from 'react';

const InfoSlide = ({title, desc}) => {
    return (
        <div className='pb-[20px] lg:pb-[100px] mb-[5px] lg:mb-10 pt-2 lg:pt-20 lg:px-[50px] flex flex-col items-start gap-[15px]'>
            <div data-swiper-parallax="-300" className='text-[#474747] bg-[#ffffffd2] lg:ml-10 backdrop-blur-sm rounded-3xl py-[15px] px-2 lg:px-[20px] uppercase text-xl lg:text-2xl max-w-2xl font-[700]'>
                {title}
            </div>
            <div  data-swiper-parallax="-200" className='text-[#474747] bg-[#ffffffd2] lg:ml-10 backdrop-blur-sm rounded-3xl py-[10px] px-2 lg:px-[20px] text-lg lg:text-xl font-[300] max-w-3xl'>
                {desc}
            </div>
        </div>
    )
}

const Info = ({info}) => {
    return (
        <div data-aos="zoom-in" data-aos-duration="800">
            <Swiper
                speed={600}
                parallax={true}
                loop={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Parallax, Autoplay]}
            >
                <div
                slot="container-start"
                className="parallax-bg"
                style={{
                    'background-image':
                    'url(https://cdn2.poz.com/113280_CHWi-20-016.jpg_2395dc32-1093-485b-9632-b288b23945c8_x2.jpeg)',
                }}
                data-swiper-parallax="-23%"
                ></div>
                
                {
                    info.map((item, index) => {
                        return item.title && <SwiperSlide>
                            <InfoSlide title={item.title} desc={item.desc} />
                        </SwiperSlide>
                    })
                }

            </Swiper>
        </div>
    )
}

export default memo(Info)