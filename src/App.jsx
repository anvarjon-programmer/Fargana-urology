import { Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import { useEffect } from "react"
import AOS from "aos";
import "aos/dist/aos.css";
import Nimda from "./pages/nimda/nimda";
import NotFound from "./pages/404";
import Loader from "./components/loader/loader";
import AboutPage from "./pages/aboutPage";

const App = () => {

    useEffect(() => {
        AOS.init({});
    }, [])

    return (
        <div>
            <Loader/>
            <div>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/uro-nimda/" element={<Nimda/>} />
                    <Route path="/*" element={<NotFound/>} />
                    <Route path="/about" element={<AboutPage/>} />
                </Routes>   
            </div>
        </div>
    )
}

document.body.onload = () => {
    setTimeout(() => {
        let preloader = document.querySelector(".preloader");
        let images = document.images;
        if(!preloader.classList.contains("hidden") && images) {
            preloader.classList.add("hidden");
        }
        document.documentElement.style.overflowX = "hidden"
        document.documentElement.style.overflowY = "scroll"
    }, 1200);
}

export default App