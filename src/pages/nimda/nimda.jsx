import { useEffect, useState } from "react"
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom"
import { db, app } from '../../firebase/firebase';
import { useCollection } from 'react-firebase-hooks/firestore';
import { getFirestore, collection, doc, setDoc, deleteDoc } from "firebase/firestore"; 

import "./nimda.css"

const Nimda = () => {

    const [isLogined, setLogin] = useState(true)
    const [tab, setTab] = useState(1)

    const [sliders] = useCollection(
        collection(getFirestore(app), 'slider'),
        {
            snapshotListenOptions: { includeMetadataChanges: true },    
        }
    );

    const [news] = useCollection(
        collection(getFirestore(app), 'news'),
        {
            snapshotListenOptions: { includeMetadataChanges: true },    
        }
    );

    const [about] = useCollection(
        collection(getFirestore(app), 'about'),
        {
            snapshotListenOptions: { includeMetadataChanges: true },    
        }
    );

    const [counts] = useCollection(
        collection(getFirestore(app), 'counts'),
        {
            snapshotListenOptions: { includeMetadataChanges: true },    
        }
    );

    const [service] = useCollection(
        collection(getFirestore(app), 'service'),
        {
            snapshotListenOptions: { includeMetadataChanges: true },    
        }
    );


    const deleteSlider = async (id) => {
        await deleteDoc(doc(db, "slider", id))
    }

    const [sliderInp, setSliderInp] = useState({})

    const addSlider = async () => {
        if (sliderInp.title && sliderInp.desc && sliderInp.imageUrl) {

            const slidersRef = doc(db, 'slider', `${new Date().getTime()}`);
            setSliderInp({
                title: "",
                desc: "",
                imageUrl: "",
            })

            await setDoc(slidersRef, {
                title: sliderInp.title,
                desc: sliderInp.desc,
                imageUrl: sliderInp.imageUrl,
            }, { merge: true });

            document.getElementById('sliderModal').close()
        }
    }


    const deleteNews = async (id) => {
        await deleteDoc(doc(db, "news", id))
    }

    const [newsInp, setNewsInp] = useState({})

    const addNews = async () => {
        if (newsInp.title && newsInp.desc && newsInp.fullDesc && newsInp.imageUrl && newsInp.by) {

            const newsRef = doc(db, 'news', `${new Date().getTime()}`);
            setNewsInp({
                title: "",
                desc: "",
                fullDesc: "",
                by: "",
                imageUrl: "",
            })

            await setDoc(newsRef, {
                title: newsInp.title,
                desc: newsInp.desc,
                fullDesc: newsInp.fullDesc,
                imageUrl: newsInp.imageUrl,
                by: newsInp.by,
                addedAt: `${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()}`
            }, { merge: true });

            document.getElementById('newsModal').close()
        }
    }


    const deleteAbout = async (id) => {
        await deleteDoc(doc(db, "about", id))
    }

    const [aboutInp, setAboutInp] = useState({})

    const addAbout = async () => {
        if (aboutInp.name && aboutInp.roles && aboutInp.imageUrl) {

            const aboutRef = doc(db, 'about', `${new Date().getTime()}`);
            setAboutInp({
                name: "",
                roles: "",
                imageUrl: "",
            })

            await setDoc(aboutRef, {
                name: aboutInp.name,
                roles: aboutInp.roles.split(", "),
                imageUrl: aboutInp.imageUrl,
            }, { merge: true });

            document.getElementById('aboutModal').close()
        }
    }


    const deleteCounts = async (id) => {
        await deleteDoc(doc(db, "counts", id))
    }

    const [countsInp, setCountsInp] = useState({})

    const addCounts = async () => {
        if (countsInp.title && countsInp.desc) {

            const countsRef = doc(db, 'counts', `${new Date().getTime()}`);
            setCountsInp({
                title: "",
                desc: "",
            })

            await setDoc(countsRef, {
                title: countsInp.title,
                desc: countsInp.desc
            }, { merge: true });

            document.getElementById('countsModal').close()
        }
    }


    const deleteService = async (id) => {
        await deleteDoc(doc(db, "service", id))
    }

    const [serviceInp, setServiceInp] = useState({})

    const addService = async () => {
        if (serviceInp.items && serviceInp.imageUrl) {

            const serviceRef = doc(db, 'service', `${new Date().getTime()}`);
            setServiceInp({
                items: "",
                imageUrl: "",
            })

            await setDoc(serviceRef, {
                imageUrl: serviceInp.imageUrl,
                items: serviceInp.items.split(", ")
            }, { merge: true });

            document.getElementById('serviceModal').close()
        }
    }

    return (
        <>
        {
            isLogined ?
            <div className="flex justify-start items-start">
                <div className="w-[360px] bg-[#FFFFFF] h-screen flex flex-col items-center pt-5 shadow-admin">
                    <Link to={"/"}>
                        <img src={logo} alt="logo" className="w-24" />
                    </Link>
                    <div className="mt-[35px] flex flex-col items-start gap-3 w-full px-6">
                        <p onClick={() => setTab(1)} className={`${tab == 1 ? "bg-[#458FF6] text-[#fff] font-medium " : "bg-[#ececec50] text-[#7a7c80] "} text-lg rounded-[8px] hover:cursor-pointer hover:translate-x-1.5 transition-all py-[8px] px-[25px] w-full mr-5`}><i class="fa-regular fa-images mr-2"></i> Слайдерлар</p>
                        <p onClick={() => setTab(2)} className={`${tab == 2 ? "bg-[#458FF6] text-[#fff] font-medium " : "bg-[#ececec50] text-[#7a7c80] "} text-lg rounded-[8px] hover:cursor-pointer hover:translate-x-1.5 transition-all py-[8px] px-[25px] w-full mr-5`}><i class="fa-regular fa-newspaper mr-2"></i> Янгиликлар</p>
                        <p onClick={() => setTab(3)} className={`${tab == 3 ? "bg-[#458FF6] text-[#fff] font-medium " : "bg-[#ececec50] text-[#7a7c80] "} text-lg rounded-[8px] hover:cursor-pointer hover:translate-x-1.5 transition-all py-[8px] px-[25px] w-full mr-5`}><i class="fa-regular fa-address-card mr-2"></i> Биз хакимизда</p>
                        <p onClick={() => setTab(4)} className={`${tab == 4 ? "bg-[#458FF6] text-[#fff] font-medium " : "bg-[#ececec50] text-[#7a7c80] "} text-lg rounded-[8px] hover:cursor-pointer hover:translate-x-1.5 transition-all py-[8px] px-[25px] w-full mr-5`}><i class="fa-regular fa-flag mr-2"></i> Ракамларда</p>
                        <p onClick={() => setTab(5)} className={`${tab == 5 ? "bg-[#458FF6] text-[#fff] font-medium " : "bg-[#ececec50] text-[#7a7c80] "} text-lg rounded-[8px] hover:cursor-pointer hover:translate-x-1.5 transition-all py-[8px] px-[25px] w-full mr-5`}><i class="fa-solid fa-taxi mr-2"></i> Хизматлар</p>
                    </div>
                </div>
                <div className="p-5 bg-[#FAFBFF] w-11/12">
                    {
                        tab == 1 
                        &&
                        <div className="overflow-x-auto h-screen">
                            <div className="flex justify-between items-center my-3">
                                <h1 className="text-2xl font-[800] text-[#5c5c5c]"><i class="fa-regular fa-images mr-2"></i> Слайдерлар</h1>
                                <button onClick={() => document.getElementById('sliderModal').showModal()} className="btn bg-[#458FF6] hover:bg-[#3166AF] text-[#fff]">Слайдер кошиш <i class="fa-solid fa-plus"></i></button>
                            </div>
                            <table className="shadow-admin2 table my-20 bg-[#FFFFFF] w-11/12 mx-auto">
                                <thead className="w-full">
                                    <tr className="flex justify-between py-2.5">
                                        <th className="w-[65px] text-center">№</th>
                                        <th className="w-4/12">Номи</th>
                                        <th className="w-4/12">Малумоти</th>
                                        <th className="w-3/12">Расми</th>
                                        <th className="w-1/12 text-center">Учириш</th>
                                    </tr>
                                </thead>
                                <tbody className="rounded-[30px] w-full">
                                    {
                                        sliders?.docs.sort().map((item, index) => (
                                            <tr className="bg-[#FFFFFF] hover:bg-[#f1f1f16c] flex justify-between w-full py-[10px]">
                                                <th className="w-[65px] text-center">{index + 1}</th>
                                                <td className="w-4/12">{item.data().title}</td>
                                                <td className="w-4/12">{item.data().desc}</td>
                                                <td className="w-3/12">{item.data().imageUrl.toString().slice(0, 36)}...</td>
                                                <td onClick={() => deleteSlider(item.id)} className="w-1/12 cursor-pointer block hover:scale-105 transition-all text-red-500 text-center"><i class="fa-regular fa-trash-can"></i></td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    }
                    {
                        tab == 2 
                        &&
                        <div className="overflow-x-auto h-screen">
                            <div className="flex justify-between items-center my-3">
                                <h1 className="text-2xl font-[800] text-[#5c5c5c]"><i class="fa-regular fa-newspaper mr-2"></i> Янгиликлар</h1>
                                <button onClick={() => document.getElementById('newsModal').showModal()} className="btn bg-[#458FF6] hover:bg-[#3166AF] text-[#fff]">Янгилик кошиш <i class="fa-solid fa-plus"></i></button>
                            </div>
                            <table className="shadow-admin2 table my-20 bg-[#FFFFFF] w-11/12 mx-auto">
                                <thead className="w-full">
                                    <tr className="flex justify-between py-2.5">
                                        <th className="w-[65px] text-center">№</th>
                                        <th className="w-3/12">Номи</th>
                                        <th className="w-4/12">Киска малумоти</th>
                                        <th className="w-6/12">Толик малумот</th>
                                        <th className="w-4/12">Расми</th>
                                        <th className="w-2/12">Ким ёзгани</th>
                                        <th className="w-2/12">Качон кошилгани</th>
                                        <th className="w-1/12">Учириш</th>
                                    </tr>
                                </thead>
                                <tbody className="rounded-[30px] w-full">
                                    {
                                        news?.docs.sort().map((item, index) => (
                                            <tr className="bg-[#FFFFFF] hover:bg-[#f1f1f16c] flex justify-between w-full py-[10px]">
                                                <th className="w-[65px] text-center">{index + 1}</th>
                                                <td className="w-3/12">{item.data().title}</td>
                                                <td className="w-4/12">{item.data().desc}</td>
                                                <td className="w-6/12">{item.data().fullDesc.toString().slice(0, 36)}...</td>
                                                <td className="w-4/12">{item.data().imageUrl.toString().slice(0, 36)}...</td>
                                                <td className="w-2/12">{item.data().by}</td>
                                                <td className="w-2/12">{item.data().addedAt}</td>
                                                <td onClick={() => deleteNews(item.id)} className="w-1/12 cursor-pointer block hover:scale-105 transition-all text-red-500 text-center"><i class="fa-regular fa-trash-can"></i></td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    }
                    {
                        tab == 3 
                        &&
                        <div className="overflow-x-auto h-screen">
                            <div className="flex justify-between items-center my-3">
                                <h1 className="text-2xl font-[800] text-[#5c5c5c]"><i class="fa-regular fa-address-card mr-2"></i> Ходимлар</h1>
                                <button onClick={() => document.getElementById('aboutModal').showModal()} className="btn bg-[#458FF6] hover:bg-[#3166AF] text-[#fff]">Ходим кошиш <i class="fa-solid fa-plus"></i></button>
                            </div>
                            <table className="shadow-admin2 table my-20 bg-[#FFFFFF] w-11/12 mx-auto">
                                <thead className="w-full">
                                    <tr className="flex justify-between py-2.5">
                                        <th className="w-[65px] text-center">№</th>
                                        <th className="w-4/12">Ф.И.О.</th>
                                        <th className="w-4/12">Ёналишлари</th>
                                        <th className="w-3/12">Расм URL</th>
                                        <th className="w-1/12 text-center">Учириш</th>
                                    </tr>
                                </thead>
                                <tbody className="rounded-[30px] w-full">
                                    {
                                        about?.docs.sort().map((item, index) => (
                                            <tr className="bg-[#FFFFFF] hover:bg-[#f1f1f16c] flex justify-between w-full py-[10px]">
                                                <th className="w-[65px] text-center">{index + 1}</th>
                                                <td className="w-4/12">{item.data().name}</td>
                                                <td className="w-4/12">{item.data().roles.join(", ")}</td>
                                                <td className="w-3/12">{item.data().imageUrl.toString().slice(0, 36)}...</td>
                                                <td onClick={() => deleteAbout(item.id)} className="w-1/12 cursor-pointer block hover:scale-105 transition-all text-red-500 text-center"><i class="fa-regular fa-trash-can"></i></td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    }
                    {
                        tab == 4 
                        &&
                        <div className="overflow-x-auto h-screen">
                            <div className="flex justify-between items-center my-3">
                                <h1 className="text-2xl font-[800] text-[#5c5c5c]"><i class="fa-regular fa-flag mr-2"></i> Ракамли малумотлар</h1>
                                <button onClick={() => document.getElementById('countsModal').showModal()} className="btn bg-[#458FF6] hover:bg-[#3166AF] text-[#fff]">Ракамли малумот кошиш <i class="fa-solid fa-plus"></i></button>
                            </div>
                            <table className="shadow-admin2 table my-20 bg-[#FFFFFF] w-11/12 mx-auto">
                                <thead className="w-full">
                                    <tr className="flex justify-between py-2.5">
                                        <th className="w-[65px] text-center">№</th>
                                        <th className="w-5/12">Ном</th>
                                        <th className="w-5/12">Малумот</th>
                                        <th className="w-1/12 text-center">Учириш</th>
                                    </tr>
                                </thead>
                                <tbody className="rounded-[30px] w-full">
                                    {
                                        counts?.docs.sort().map((item, index) => (
                                            <tr className="bg-[#FFFFFF] hover:bg-[#f1f1f16c] flex justify-between w-full py-[10px]">
                                                <th className="w-[65px] text-center">{index + 1}</th>
                                                <td className="w-5/12">{item.data().title}</td>
                                                <td className="w-5/12">{item.data().desc.toString().slice(0, 36)}...</td>
                                                <td onClick={() => deleteCounts(item.id)} className="w-1/12 cursor-pointer block hover:scale-105 transition-all text-red-500 text-center"><i class="fa-regular fa-trash-can"></i></td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    }
                    {
                        tab == 5 
                        &&
                        <div className="overflow-x-auto h-screen">
                            <div className="flex justify-between items-center my-3">
                                <h1 className="text-2xl font-[800] text-[#5c5c5c]"><i class="fa-solid fa-taxi mr-2"></i> Хизматлар</h1>
                                <button onClick={() => document.getElementById('serviceModal').showModal()} className="btn bg-[#458FF6] hover:bg-[#3166AF] text-[#fff]">Хизмат кошиш <i class="fa-solid fa-plus"></i></button>
                            </div>
                            <table className="shadow-admin2 table my-20 bg-[#FFFFFF] w-11/12 mx-auto">
                                <thead className="w-full">
                                    <tr className="flex justify-between py-2.5">
                                        <th className="w-[65px] text-center">№</th>
                                        <th className="w-5/12">Хизматлар</th>
                                        <th className="w-5/12">Расм URL</th>
                                        <th className="w-1/12 text-center">Учириш</th>
                                    </tr>
                                </thead>
                                <tbody className="rounded-[30px] w-full">
                                    {
                                        service?.docs.sort().map((item, index) => (
                                            <tr className="bg-[#FFFFFF] hover:bg-[#f1f1f16c] flex justify-between w-full py-[10px]">
                                                <th className="w-[65px] text-center">{index + 1}</th>
                                                <td className="w-5/12">{item.data()?.items.join(", ")}</td>
                                                <td className="w-5/12">{item.data().imageUrl.toString().slice(0, 38)}...</td>
                                                <td onClick={() => deleteService(item.id)} className="w-1/12 cursor-pointer block hover:scale-105 transition-all text-red-500 text-center"><i class="fa-regular fa-trash-can"></i></td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    }
                </div>
            </div>
            :
            <div></div>
        }

        <dialog id="sliderModal" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Слайдер кошиш.</h3>
                <div className="w-full flex flex-col gap-2 mt-[15px]">
                    <input onChange={e => setSliderInp(prev => ({ ...prev, title: e.target.value }))} value={sliderInp.title} type="text" placeholder="Номи" className="input input-bordered" />
                    <input onChange={e => setSliderInp(prev => ({...prev, desc: e.target.value}))} value={sliderInp.desc} type="text" placeholder="Малумоти" className="input input-bordered" />
                    <input onChange={e => setSliderInp(prev => ({...prev, imageUrl: e.target.value}))} value={sliderInp.imageUrl} type="text" placeholder="Расм URL" className="input input-bordered" />

                    <button onClick={addSlider} className="mt-[10px] btn bg-[#458FF6] hover:bg-[#3166AF] text-[#fff]">Кошиш</button>

                </div>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>

        <dialog id="newsModal" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Янгилик кошиш.</h3>
                <div className="w-full flex flex-col gap-2 mt-[15px]">
                    <input onChange={e => setNewsInp(prev => ({ ...prev, title: e.target.value }))} value={newsInp.title} type="text" placeholder="Номи" className="input input-bordered" />
                    <input onChange={e => setNewsInp(prev => ({...prev, desc: e.target.value}))} value={newsInp.desc} type="text" placeholder="Киска малумоти" className="input input-bordered" />
                    <textarea onChange={e => setNewsInp(prev => ({...prev, fullDesc: e.target.value}))} value={newsInp.fullDesc} type="text" placeholder="Толик малумоти" className="input input-bordered" />
                    <input onChange={e => setNewsInp(prev => ({...prev, imageUrl: e.target.value}))} value={newsInp.imageUrl} type="text" placeholder="Расм URL" className="input input-bordered" />
                    <input onChange={e => setNewsInp(prev => ({...prev, by: e.target.value}))} value={newsInp.by} type="text" placeholder="Ким томонидан ёзилгани" className="input input-bordered" />

                    <button onClick={addNews} className="mt-[10px] btn bg-[#458FF6] hover:bg-[#3166AF] text-[#fff]">Кошиш</button>

                </div>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>

        <dialog id="aboutModal" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Ходим кошиш.</h3>
                <div className="w-full flex flex-col gap-2 mt-[15px]">
                    <input onChange={e => setAboutInp(prev => ({ ...prev, name: e.target.value }))} value={aboutInp.name} type="text" placeholder="Исми" className="input input-bordered" />
                    <input onChange={e => setAboutInp(prev => ({...prev, roles: e.target.value}))} value={aboutInp.roles} type="text" placeholder="Мутахассислиги" className="input input-bordered" />
                    <input onChange={e => setAboutInp(prev => ({...prev, imageUrl: e.target.value}))} value={aboutInp.imageUrl} type="text" placeholder="Расм URL" className="input input-bordered" />

                    <button onClick={addAbout} className="mt-[10px] btn bg-[#458FF6] hover:bg-[#3166AF] text-[#fff]">Кошиш</button>

                </div>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>

        <dialog id="countsModal" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Ракамли малумот кошиш.</h3>
                <div className="w-full flex flex-col gap-2 mt-[15px]">
                    <input onChange={e => setCountsInp(prev => ({ ...prev, title: e.target.value }))} value={countsInp.title} type="text" placeholder="Ном" className="input input-bordered" />
                    <input onChange={e => setCountsInp(prev => ({...prev, desc: e.target.value}))} value={countsInp.desc} type="text" placeholder="Малумот" className="input input-bordered" />

                    <button onClick={addCounts} className="mt-[10px] btn bg-[#458FF6] hover:bg-[#3166AF] text-[#fff]">Кошиш</button>

                </div>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>

        <dialog id="serviceModal" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Хизмат кошиш.</h3>
                <div className="w-full flex flex-col gap-2 mt-[15px]">
                    <input onChange={e => setServiceInp(prev => ({ ...prev, items: e.target.value }))} value={serviceInp.items} type="text" placeholder="Хизматлар" className="input input-bordered" />
                    <input onChange={e => setServiceInp(prev => ({...prev, imageUrl: e.target.value}))} value={serviceInp.imageUrl} type="text" placeholder="Расм URL" className="input input-bordered" />

                    <button onClick={addService} className="mt-[10px] btn bg-[#458FF6] hover:bg-[#3166AF] text-[#fff]">Кошиш</button>

                </div>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>

        </>
    )
}

export default Nimda