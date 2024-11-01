import { memo } from "react"

const Service = ({image, categories, id, fade, contact}) => {
    return (
        <div onClick={() => {
            document.getElementById(id).showModal()
        }} data-aos={`fade-${fade}`} className="w-full cursor-pointer max-w-[350px]">

                <div className="lg:opacity-80 hover:opacity-100 hover:scale-[1.03] transition-all relative z-[1] bg-[#FFF] py-[30px] px-[30px] rounded-[20px] shadow-normal">

                <div className="flex justify-center w-full items-start">
                    <img className="h-[150px] max-w-[280px] object-cover" src={image} alt={"Xizmat"} />
                </div>

                <div className="h-[100px] mt-[25px] flex flex-col items-start gap-0.5">
                    {
                        categories?.map((item, index) => (
                            <p className="text-[#605e66] text-[20px] font-[400] truncate max-w-[266px]">- {item}</p>
                        ))
                    }
                </div>

                <div className="flex justify-end mt-5">
                    <button className="py-[8px] w-full justify-center transition-all bg-[#458FF6] text-[#fff] border border-[#458FF6] rounded-[15px] flex items-center gap-1.5 hover:bg-[#fff] hover:text-[#458FF6] font-[700]">To'liq <i class="fa-solid mt-0.5 fa-angle-right"></i></button>
                </div>

            </div>


            <dialog id={id} className="modal">
                <div className="modal-box">
                    <div className="flex items-start flex-col lg:flex-row justify-start gap-[25px]">
                        <img className="hidden md:block max-w-[220px] object-cover h-[150px] rounded-3xl" src={image} alt={"Xizmat"} />
                        <div className=" mt-[25px] flex flex-col items-start gap-0.5">
                            {
                                categories?.map((item, index) => (
                                    <p className="text-[#605e66] text-[22px] flex font-[400] max-w-[266px]">- {item}</p>
                                ))
                            }
                        </div>
                    </div>
                    <div className="flex justify-center mt-5">
                        <form method="dialog" className="w-full">
                            <button onClick={() => {
                                contact.current.scrollIntoView()
                            }} className="mb-2 ml-2 py-[8px] border-0 outline-none md:flex w-full justify-center transition-all bg-[#458FF6] text-[#fff] border-[#458FF6] rounded-[15px] items-center gap-1.5 hover:bg-[#fff] hover:text-[#458FF6] font-[700]">Tanlash <i class="fa-solid mt-0.5 fa-angle-right"></i></button>
                        </form>
                    </div>  
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>

        </div>
        
    )
}

export default memo(Service)