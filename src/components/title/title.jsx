import { memo } from "react"

const Title = ({title, desc}) => {
    return (
        <div data-aos="fade-up" className="flex flex-col items-center gap-[8px]">
            <h1 data-aos="fade-up" className="text-[26px] text-center lg:text-[36px] font-[700] text-[##2c2c2c]">{title}</h1>
            <div className="w-[56px] h-[2px] bg-[#458FF6] rounded-[5px]"></div>
            <p data-aos-duration="420" className="mt-[10px] text-center text-[#7D7987] font-[300] text-[14px] lg:text-[18px]">{desc}</p>
        </div>
    )
}

export default memo(Title)