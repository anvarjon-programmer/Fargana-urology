import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

import Wrapper from "../layout/wrapper"
import Navbar from "../components/navbar/navbar"
import Footer from "../components/footer/footer"

import SliderComponent from "../components/slider/slider"

import Title from "../components/title/title"

import News from "../components/news/news"

import About from '../components/about/about';

import design_elem1 from "../assets/images/design_elem1.svg"
import design_elem2 from "../assets/images/design_elem2.svg"
import design_elem3 from "../assets/images/design_elem3.svg"
import Info from '../components/info/info';
import Service from '../components/service/service';
import Form from '../components/form/form';

import { memo, useRef } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { app } from '../firebase/firebase';
import { collection, getFirestore } from 'firebase/firestore';

const Home = () => {

    const main = useRef(null)
    const about = useRef(null)
    const service = useRef(null)
    const contact = useRef(null)

    const [sliders] = useCollection(
        collection(getFirestore(app), 'slider'),
        {
            snapshotListenOptions: { includeMetadataChanges: true },    
        }
    )

    const [news] = useCollection(
        collection(getFirestore(app), 'news'),
        {
            snapshotListenOptions: { includeMetadataChanges: true },    
        }
    )
    
    const [abouts] = useCollection(
        collection(getFirestore(app), 'about'),
        {
            snapshotListenOptions: { includeMetadataChanges: true },    
        }
    )

    const [counts] = useCollection(
        collection(getFirestore(app), 'counts'),
        {
            snapshotListenOptions: { includeMetadataChanges: true },    
        }
    )

    const [services] = useCollection(
        collection(getFirestore(app), 'service'),
        {
            snapshotListenOptions: { includeMetadataChanges: true },    
        }
    )

    return (
        <div ref={main}>
            <Navbar 
                main={main} 
                about={about} 
                service={service} 
                contact={contact} 
            />
            <div className="lg:mt-[25px] mt-[15px] py-[35px] lg:py-[75px]">
                <Wrapper>
                    <div>

                        {/* Swiper */}
                        <img data-aos="fade-right" className="absolute left-0" src={design_elem1} alt="|||" />

                        <Swiper
                            spaceBetween={80}
                            slidesPerView={1}
                            centeredSlides={true}
                            loop={true}
                            autoplay={{
                                delay: 6500,
                                disableOnInteraction: false,
                            }}
                            navigation={true}
                            modules={[Autoplay, Navigation]}
                        >
                            {
                                sliders?.docs.reverse().map((item, index) => (
                                    <SwiperSlide>
                                        <SliderComponent 
                                            title={item?.data().title} 
                                            desc={item?.data().desc} 
                                            img={item?.data().imageUrl} 
                                            contact={contact}/>
                                    </SwiperSlide>
                                ))
                            }

                        </Swiper>


                        {/* Янгиликлар */}
                        <div className="mt-[75px] lg:px-0 px-2 lg:mt-[150px]">

                            <img data-aos="fade-right" data-aos-duration="600" data-aos-delay="200" className="absolute left-0 mt-32" src={design_elem2} alt="|||" />

                            <img data-aos="fade-left" data-aos-duration="800" data-aos-delay="200" className="absolute right-0 mt-[500px]" src={design_elem1} alt="|||" />

                            <Title title={"Yangiliklar"} desc={"Shifoxonamizdagi so'nggi yangiliklar."} />

                            <div className="flex items-center flex-wrap mt-[50px] w-full gap-y-[45px] gap-x-[36px] justify-center">

                                {
                                    news?.docs.reverse().slice(0, 6).map((item, index) => (
                                        <News 
                                            title={item?.data().title} 
                                            image={item?.data().imageUrl}
                                            desc={item?.data().desc}
                                            by={item?.data().by}
                                            fullDesc={item?.data().fullDesc}
                                            addedAt={item?.data().addedAt}
                                            id={item?.id}
                                            fade={index == 0 ? "right" : index == 1 ? "up" : index == 2 ? "left" : index == 3 ? "right" : index == 4 ? "down" : index == 5 ? "left" : ""}
                                        />
                                    ))
                                }

                            </div>                            

                            <div ref={about}></div>

                        </div>


                        {/* Биз хакимизда */}
                        <div className="mt-[75px] lg:px-0 px-2 lg:mt-[150px]">

                            <img data-aos="fade-right" data-aos-duration="400" data-aos-delay="200" className="absolute left-0 mt-[400px]" src={design_elem1} alt="|||" />
                            <img data-aos="fade-left" data-aos-duration="800" data-aos-delay="200" className="absolute right-0 mt-[450px]" src={design_elem3} alt="|||" />

                            <Title title={"Biz haqimizda"} desc={"Bizning shifoxonada ishlaydigan malakali xodimlar."} />

                            <div className="flex items-center flex-wrap mt-[50px] w-full gap-y-[45px] gap-x-[36px] justify-center">

                                {
                                    abouts?.docs.slice(0, 6).map((item, index) => (
                                        <About 
                                            contact={contact}
                                            name={item?.data().name} 
                                            image={item?.data().imageUrl}
                                            roles={item?.data().roles}
                                            id={item?.id}
                                            fade={index == 0 ? "right" : index == 1 ? "up" : index == 2 ? "left" : index == 3 ? "right" : index == 4 ? "down" : index == 5 ? "left" : ""}
                                        />
                                    ))
                                }

                            </div>

                        </div>


                        {/* Малумот */}
                        <div className="mt-[75px] lg:px-0 px-2 lg:mt-[150px]">

                            <Title title={"Shifoxonamiz raqamlarda"} />

                            <div className='mt-[50px]'>

                                <Info info={[
                                    {
                                        title: counts?.docs[0]?.data()?.title,
                                        desc: counts?.docs[0]?.data()?.desc,
                                    },
                                    {
                                        title: counts?.docs[1]?.data()?.title,
                                        desc: counts?.docs[1]?.data()?.desc,
                                    },
                                    {
                                        title: counts?.docs[2]?.data()?.title,
                                        desc: counts?.docs[2]?.data()?.desc,
                                    },
                                    {
                                        title: counts?.docs[3]?.data()?.title,
                                        desc: counts?.docs[3]?.data()?.desc,
                                    },
                                    {
                                        title: counts?.docs[4]?.data()?.title,
                                        desc: counts?.docs[4]?.data()?.desc,
                                    }
                                ]}/>

                            </div>

                            <div ref={service}></div>

                        </div>
                        

                        {/* Хизматлар */}
                        <div className="mt-[75px] lg:px-0 px-2 lg:mt-[200px]">

                            <img data-aos="fade-right" data-aos-duration="600" data-aos-delay="200" className="absolute left-0 mt-32" src={design_elem2} alt="|||" />

                            <Title title={"Xizmatlar"} desc={"Bizning shifoxonada sizga yordam berishi mumkin bo'lgan xizmatlar."} />
                            
                            <div className="flex items-center flex-wrap mt-[50px] w-full gap-y-[45px] gap-x-[36px] justify-center">

                                {
                                    services?.docs.reverse().slice(0, 6).map((item, index) => (
                                        <Service 
                                            contact={contact}
                                            categories={[
                                                ...item?.data().items
                                            ]}
                                            image={item?.data()?.imageUrl}
                                            id={item?.id}
                                            fade={index == 0 ? "right" : index == 1 ? "up" : index == 2 ? "left" : index == 3 ? "right" : index == 4 ? "down" : index == 5 ? "left" : ""}
                                        />
                                    ))
                                }

                            </div>

                            

                        </div>

                        <div ref={contact}></div>

                        
                        {/* Контакт */}
                        <div className="mt-[75px] lg:px-0 px-2 lg:mt-[200px]">

                            <img data-aos="fade-right" data-aos-duration="600" data-aos-delay="200"  className="absolute left-0 mt-32" src={design_elem2} alt="|||" />
                            <img data-aos="fade-left" data-aos-duration="400" data-aos-delay="200" className="absolute right-0 mt-[350px]" src={design_elem1} alt="|||" />

                            <Title title={"Ma'lumotlaringizni qoldiring"} desc={"Ishchilarimiz sizga bog'lanishadi."} />
                                    
                            <div className='mt-[75px] relative z-50'>
                                <Form/> 
                            </div>  

                        </div>

                    </div>
                </Wrapper>
            </div>
            
            <div data-aos="fade-up" className='mt-[120px] lg:mt-[200px]'>
                <img className="absolute left-0 mt-[250px]" src={design_elem1} alt="|||" />
                <Footer
                    main={main} 
                    about={about} 
                    service={service} 
                    contact={contact} 
                />
            </div>
            
        </div>
    )
}

export default memo(Home)