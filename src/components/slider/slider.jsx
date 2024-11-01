import { memo } from "react"

const SliderComponent = ({title, desc, img, contact}) => {
    return (
        <div className="lg:px-2 flex justify-around flex-col lg:flex-row items-start">
            <div data-aos="fade-right" className="flex flex-col items-start mt-[25px] gap-[25px]">
                <div className="flex flex-col items-start gap-[10px]">
                    <h1 className="text-[30px] lg:text-[48px] font-bold max-w-lg text-[#2c2c2c] leading-10 lg:leading-[56px]"> {title}</h1>
                    <p className="text-[#5b595f] text-[17px] lg:text-[21px] font-light mt-[8px] max-w-md leading-7 lg:leading-[32px]"> {desc}</p>
                </div>
                <div data-aos="fade-up" className="flex text-[6px] lg:mt-[10px] justify-start flex-col lg:flex-row gap-[12.5px]">
                    <button onClick={() => {
                        contact.current.scrollIntoView()
                    }} className="font-[700] text-[14px] hidden md:flex lg:text-[18px] transition-all text-[#fff] hover:bg-[#3a6cb1] bg-[#458FF6] rounded-[55px] py-[10px] px-[40px] items-center"><i class="text-xs mr-3 fa-solid fa-truck-medical"></i> Bog'lanish</button>
                </div>
            </div>
            <img data-aos="fade-left" className="lg:block hidden w-full object-cover rounded-2xl lg:w-[520px]" src={img} />
        </div>
    )
}

export default memo(SliderComponent)