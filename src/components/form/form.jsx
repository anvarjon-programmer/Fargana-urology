import axios from "axios"
import { memo, useState } from "react"

const FormInput = ({value, setValue, placeholder, type, disable}) => {
    return (
        <input value={value} disabled={disable} onChange={e => setValue(e.target.value)} type={type} placeholder={placeholder} className="input rounded-2xl px-8 placeholder:text-[#b3b3b3] border-[#e1edff] focus:border-l-[12px] duration-300 transition-all border outline-none focus:outline-offset-0 focus:border-[#91bfff] focus:outline-none input-bordered w-full" />
    )
}

const Form = () => {

    const [name, setName] = useState()
    const [lastname, setLastname] = useState()
    const [age, setAge] = useState()
    const [email, setEmail] = useState()
    const [tel, setTel] = useState()

    const [isDisabled, setDisable] = useState(false)
    const [title, setTitle] = useState("Bog'lanish")

    const sendMessage = async () => {
        if(name && lastname && age && email && tel) {
            const TOKEN = ''
            const CHAT_ID = ''
            const URL_API = 'https://api.telegram.org/bot' + TOKEN + '/sendMessage'

            let msg = `<b>---------------------------</b>\n`
            msg += `<b>Ism: ${name}</b>\n`
            msg += `<b>Familiya: ${lastname}</b>\n`
            msg += `<b>Yosh: ${age}</b>\n`
            msg += `<b>E-Mail: ${email}</b>\n`
            msg += `<b>Telefon raqam: ${tel}</b>\n`
            msg += `<b>---------------------------</b>`

            setDisable(true)
            setTitle("Жўнатилди!")

            setName("")
            setLastname("")
            setAge("")
            setEmail("")
            setTel("")

            await axios.post(URL_API, {
                chat_id: CHAT_ID,
                parse_mode: 'html',
                text: msg
            }).then(res => {
                setName("")
                setLastname("")
                setAge("")
                setEmail("")
                setTel("")
            })
        }
    }

    return (
        <div className="flex items-center justify-center gap-[75px]">

            <div data-aos="fade-right" className="lg:w-4/12 w-full flex flex-col gap-4">

                <div>
                    <h1 className="text-[20px] lg:text-[30px] font-[700] text-[##2c2c2c]">{title}</h1>
                    <p className="text-[#7D7987] mb-2 font-[300] text-[14px] lg:text-[18px]">{title == "Bog'lanish" ? "Biz bilan bog'lanish." : "Adminlarimizdan javob kuting."}</p>
                </div>

                <FormInput
                    disable={isDisabled}
                    value={name}
                    setValue={setName}
                    placeholder={"Ismingizni kiriting"}
                    type={"text"}
                />

                <FormInput
                    disable={isDisabled}
                    value={lastname}
                    setValue={setLastname}
                    placeholder={"Familiyangizni kiriting"}
                    type={"text"}
                />

                <FormInput
                    disable={isDisabled}
                    value={age}
                    setValue={setAge}
                    placeholder={"Yoshingizni kiriting"}
                    type={"number"}
                />

                <FormInput
                    disable={isDisabled}
                    value={email}
                    setValue={setEmail}
                    placeholder={"E-Mail"}
                    type={"email"}
                />

                <FormInput
                    disable={isDisabled}
                    value={tel}
                    setValue={setTel}
                    placeholder={"Telefon raqamingiz"}
                    type={"number"}
                />

                <div data-aos="fade-up" className="flex justify-start">
                    <button disabled={isDisabled} onClick={sendMessage} className="py-[8px] w-wit px-[45px] mt-[10px] justify-center transition-all bg-[#458FF6] text-[#fff] border border-[#458FF6] rounded-[15px] flex items-center gap-1.5 hover:bg-[#fff] hover:text-[#458FF6] font-[700]">Yuborish <i class="fa-solid mt-0.5 fa-angle-right"></i></button>
                </div>

            </div>

            <img data-aos="fade-left" className="hidden lg:block w-full max-w-[480px]" src="https://www.drchrono.com/site_media/images/main.5447d221549a.png" alt="Urologiya" />
        </div>
    )
}

export default memo(Form)