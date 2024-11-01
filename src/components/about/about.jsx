import { memo } from "react"

const About = ({name, image, roles, id, fade, contact}) => {
    return (
        <div data-aos={`fade-${fade}`} className="w-full max-w-[350px]">
            <div className="lg:opacity-80 hover:opacity-100 hover:scale-[1.03] transition-all relative z-[1] bg-[#FFF] py-[30px] px-[30px] rounded-[20px] shadow-normal">

                <div className="flex justify-center w-full items-start">
                    <img className="h-[200px] max-w-[280px] object-cover" src={image} alt={name} />
                </div>

                <h1 className="text-[#2c2c2c] text-[24px] h-[100px] font-[700] mt-[25px]">{name}</h1>

                <div className="h-[65px] mt-[15px] flex flex-col items-start gap-0.5">
                    {
                        roles?.map((item, index) => (
                            <p className="text-[#7D7987] text-[17px] font-[300] max-w-[266px]">- {item}</p>
                        ))
                    }
                </div>

                
                <div className="flex justify-end mt-2">
                    <button onClick={() => {
                        contact.current.scrollIntoView()
                    }} className="mb-2 ml-2 py-[8px] flex w-full justify-center transition-all bg-[#458FF6] text-[#fff] border border-[#458FF6] rounded-[15px] items-center gap-1.5 hover:bg-[#fff] hover:text-[#458FF6] font-[700]">Tanlash <i class="fa-solid mt-0.5 fa-angle-right"></i></button>
                </div>


            </div>
        </div>
        
    )
}

export default memo(About)