import { memo } from "react"

const News = ({title, image, desc, by, fullDesc, fade, id, addedAt}) => {
    return (
        <div data-aos={`fade-${fade}`} onClick={() => {
            document.getElementById(id).showModal()
        }} className="w-full cursor-pointer h-[400px] max-w-[350px]">
            <div className="lg:opacity-80 border-0 outline-none hover:opacity-100 hover:scale-[1.03] transition-all relative z-[1] bg-[#FFF] py-[48px] px-[40px] rounded-[20px] shadow-normal">
                <img className="max-w-[180px] object-cover h-[125px] rounded-2xl" src={image} alt={title} />
                <h1 className="text-[#000] text-[24px] font-[700] mt-[30px] truncate">{title}</h1>
                <p className="text-[#7D7987] font-[300] h-[70px] max-w-[266px] mt-[6px]">{desc.slice(0, 75)}{desc.length > 75 && "..."}</p>

                <div className="flex justify-between mt-[18px] items-center">
                    <h3 className="text-[#7D7987] font-[400] flex items-center gap-1.5"><i class="fa-regular text-sm mt-0.5 fa-copyright"></i> {by}</h3>
                    <button className="px-[20px] py-[5px] text-[14px] transition-all hover:bg-[#458FF6] hover:text-[#fff] border border-[#458FF6] rounded-[55px] flex items-center gap-1.5 text-[#458FF6] font-[700]">O'qish <i class="fa-solid mt-0.5 fa-angle-right"></i></button>
                </div>
            </div>

            <dialog id={id} className="modal">
                <div className="modal-box">
                    <div className="flex items-start gap-3 flex-col lg:flex-row justify-between">
                        <img className="max-w-[180px] object-cover h-[180px] rounded-3xl" src={image} alt={title} />
                        <div className="flex flex-1 flex-col justify-between">
                            <div className="flex flex-col items-end gap-0.5">
                                <p className="text-[#505050] flex justify-end items-center gap-2 font-[400]"><i class="fa-regular fa-clock"></i> {addedAt}</p>
                                <p className="text-[#505050] flex justify-end items-center gap-2 font-[400]"><i class="fa-regular mt-0.5 fa-copyright"></i> {by}</p>
                            </div>
                            <div className="flex flex-col justify-start w-full">
                                <h1 className="text-[#3f3f3f] text-[24px] font-[700] mt-[50px]">{title}</h1>
                            </div>
                        </div>
                    </div>

                    <p className="text-[#7D7987] font-[300] mt-3">{desc}</p>

                    <p className="text-[#3f3f3f] mb-2 mt-[10px]">{fullDesc}</p>

                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>

        </div>
    )
}

export default memo(News)