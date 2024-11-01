import { memo, useState } from "react"
import Wrapper from "../../layout/wrapper"

import "./footer.css"
import axios from "axios"

const Footer = ({main, about, service, contact}) => {

    const [name, setName] = useState()
    const [tel, setTel] = useState()

    const [isDisabled, setDisable] = useState(false)
    const [title, setTitle] = useState("Savollar uchun")

    const sendMessage = async () => {
        if(name && tel) {
            const TOKEN = ''
            const CHAT_ID = ''
            const URL_API = 'https://api.telegram.org/bot' + TOKEN + '/sendMessage'

            let msg = `<b>---------------------------</b>\n`
            msg += `<b>Ism: ${name}</b>\n`
            msg += `<b>Bog'lanish: ${tel}</b>\n`
            msg += `<b>---------------------------</b>`

            setDisable(true)
            setTitle("Jo'natildi!")

            setName("")
            setTel("")

            await axios.post(URL_API, {
                chat_id: CHAT_ID,
                parse_mode: 'html',
                text: msg
            }).then(res => {
                setName("")
                setTel("")
            })
        }
    }

    return (
        <div>
            <div className="bg-footer py-[65px] px-[5px] lg:px-0">
                <Wrapper>

                    <div>

                        <div className="flex lg:flex-row px-5 xl:px-0 flex-col justify-between items-start lg:gap-0 gap-[35px]">


                            <div>

                                <h1 className="text-xl text-gray-100 font-[700]">Bog'lanish</h1>

                                <div className="flex flex-col mt-[20px] items-start">
                                    <a href="tel:998732435747" className="hidden lg:block max-w-full text-[#fff] font-bold"><i class="fa-solid fa-phone mt-[5px] mr-1.5"></i> +998 73 243-57-47</a>
                                    <h1 className="text-sm text-start mt-2 max-w-[280px] text-[#fff] font-bold"><i class="fa-solid fa-location-dot mt-[5px] mr-1.5"></i> Farg'ona shahar, 150100, Qadriyat ko'chasi, 79</h1>
                                </div>
                            </div>

                            <div className="xl:block hidden">
                                <h1 className="text-xl text-gray-100 font-[700]">Havolalar</h1>
                                <div className="flex flex-col items-start mt-[20px] justify-start gap-[5px]">
                                    <p onClick={() => {
                                        window.scrollTo(0, 0)
                                    }} className={`text-[#ffffff] duration-400 hover:before:visible before:w-full hover:before:left-0 before:invisible before:h-[0px] before:duration-300 hover:before:bg-[#458FF6] before:transition-all before:rounded-sm before:bg-gray-400 before:content-[''] before:absolute before:-left-5 before:top-6 relative text-center cursor-pointer transition-all hover:relative font-[550]`}>Asosiy</p>
                                    <p onClick={() => {
                                        about.current.scrollIntoView()
                                    }} className={`text-[#ffffff] duration-400 hover:before:visible before:w-full hover:before:left-0 before:invisible before:h-[0px] before:duration-300 hover:before:bg-[#458FF6] before:transition-all before:rounded-sm before:bg-gray-400 before:content-[''] before:absolute before:-left-5 before:top-6 relative text-center cursor-pointer transition-all hover:relative font-[550]`}>Biz haqimizda</p>
                                    <p onClick={ () => {
                                        service.current.scrollIntoView()
                                    }} className={`text-[#ffffff] duration-400 hover:before:visible before:w-full hover:before:left-0 before:invisible before:h-[0px] before:duration-300 hover:before:bg-[#458FF6] before:transition-all before:rounded-sm before:bg-gray-400 before:content-[''] before:absolute before:-left-5 before:top-6 relative text-center cursor-pointer transition-all hover:relative font-[550]`}>Xizmatlar</p>
                                    <p onClick={() => {
                                        contact.current.scrollIntoView()
                                    }} className={`text-[#ffffff] duration-400 hover:before:visible before:w-full hover:before:left-0 before:invisible before:h-[0px] before:duration-300 hover:before:bg-[#458FF6] before:transition-all before:rounded-sm before:bg-gray-400 before:content-[''] before:absolute before:-left-5 before:top-6 relative text-center cursor-pointer transition-all hover:relative font-[550]`}>Bog'lanish</p>
                                </div>
                            </div>

                            <div className="xl:block hidden w-[20%]">
                                <h1 className="text-xl text-gray-100 font-[700]">{title}</h1>

                                <div className="flex flex-col items-start mt-[20px]">
                                    <input value={name} onChange={e => setName(e.target.value)} disabled={isDisabled} type={"text"} placeholder={"Ismingiz"} className="max-w-[320px] text-sm py-2.5 rounded-xl px-5 placeholder:text-[#8b8b8b] border-[#aacdff] duration-300 transition-all outline-none focus:outline-offset-0 focus:border-[#aacdff] focus:outline-none input-bordered w-full" />
                                    <input value={tel} onChange={e => setTel(e.target.value)} disabled={isDisabled} type={"text"} placeholder={"Telefon raqamingiz"} className="mt-1.5 max-w-[320px] text-sm py-2.5 rounded-xl px-5 placeholder:text-[#8b8b8b] border-[#aacdff] duration-300 transition-all outline-none focus:outline-offset-0 focus:border-[#aacdff] focus:outline-none input-bordered w-full" />

                                    <button disabled={isDisabled} onClick={sendMessage} className="py-[8px] w-wit px-[30px] mt-[12px] text-sm justify-center transition-all text-[#fff] bg-[#458FF6] rounded-[8px] flex items-center gap-1.5 hover:bg-[#fff] hover:text-[#458FF6] font-[700]">Yuborish <i class="fa-solid mt-0.5 fa-angle-right"></i></button>

                                </div>

                            </div>

                            <div className="w-full lg:w-fit"><iframe src="https://yandex.uz/map-widget/v1/?from=mapframe&ll=71.814846%2C40.360448&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgo1NjQ0NTUzNTQ3Ei5Pyrt6YmVraXN0b24sIEZhcmfKu29uYSwgUWFkcml5YXQga28nY2hhc2ksIDc5IgoNNKGPQhUacSFC&source=mapframe&um=constructor%3A1dae78b3982514ef3a61557cca89a277a95f4dfb1df0181c2726a792dde9e16a&utm_source=mapframe&z=17.15" className="w-full h-[200px] rounded-lg lg:w-[350px]"></iframe></div>

                        </div>

                        <div className="mt-[25px] flex justify-end">
                            <p className="max-w-[350px] text-end text-[#fff]">© {new Date().getFullYear()} Farg'ona Ixtisoslashtirilgan
                            Urologiya Ilmiy-amaliy Tibbiyot Markazi</p>
                        </div>

                    </div>

                </Wrapper>
            </div>
        </div>
    )
}

export default memo(Footer)