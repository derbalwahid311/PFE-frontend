import {AnimatePresence, motion} from "framer-motion"
import { useState } from "react"
import Demande from "./Demande";
import Exemple from "./Exemple";
import Inscri from "./Inscri";
import Login from "./Login";
import Rech from "./Rech";


export default function Menu({state, handlestate}:any){

    const [item1, setItem1] = useState(false);
    const [item2, setItem2] = useState(false);
    const [item3, setItem3] = useState(false);
    const [item4, setItem4] = useState(false);
    const [item5, setItem5] = useState(false);
    const [item6, setItem6] = useState(false);
    const [openitem, setOpenitem] = useState(false);
    const [bg, setBg] = useState("bg-[#0e0e0e]")


    function handleItem1(){
        if(item1 === false){setOpenitem(true);setBg("bg-no-repeat bg-cover bg-[url('https://res.cloudinary.com/dbiudcrba/image/upload/v1683405680/photo1683405253_dwhggh.jpg')]");setItem1(true);setItem2(false);setItem3(false);setItem4(false);setItem5(false);setItem6(false)}
        else {setItem1(false);setBg("bg-[#0e0e0e]");setOpenitem(false)}
    }

    function handleItem2(){
        if(item2 === false){setOpenitem(true);setBg("bg-no-repeat bg-cover bg-[url('https://res.cloudinary.com/dbiudcrba/image/upload/v1683405680/photo1683405253_dwhggh.jpg')]");setItem2(true);setItem1(false);setItem3(false);setItem4(false);setItem5(false);setItem6(false)}
        else {setItem2(false);setBg("bg-[#0e0e0e]");setOpenitem(false)}
    }

    function handleItem3(){
        if(item3 === false){setOpenitem(true);setItem3(true);setItem2(false);setItem1(false);setItem4(false);setItem5(false);setItem6(false)}
        else {setItem3(false);setOpenitem(false)}
    }

    function handleItem4(){
        if(item4 === false){setOpenitem(true);setItem4(true);setItem2(false);setItem3(false);setItem1(false);setItem5(false);setItem6(false)}
        else {setItem4(false);setOpenitem(false)}
    }

    function handleItem5(){
        if(item5 === false){setOpenitem(true);setItem5(true);setItem2(false);setItem3(false);setItem4(false);setItem1(false);setItem6(false)}
        else {setItem5(false);setOpenitem(false)}
    }

    function handleItem6(){
        if(item6 === false){setOpenitem(true);setItem6(true);setItem1(false);setItem2(false);setItem3(false);setItem4(false);setItem5(false)}
        else {setItem6(false);setOpenitem(false)}
    }
    
    const myStyle = {
        background: "linear-gradient(rgba(0, 0, 0, 0.9),  rgba(0, 0, 0, 0.8)), url('https://res.cloudinary.com/dbiudcrba/image/upload/v1683405680/photo1683405253_dwhggh.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    }
    
    return(
        <>
            <div style={bg !== "bg-[#0e0e0e]" ? myStyle : {}} className={`${bg} overscroll-none overflow-hidden select-none font-[Inter] grid content-between h-[100%] w-[100%]`}>
                <div className="flex pr-10 bg-gradient-to-b from-[#0e0e0e] justify-between py-6 w-full -mb-16 h-22">
                    <img className="h-16 px-10 " src="https://res.cloudinary.com/dbiudcrba/image/upload/v1683442551/Off_Logo_zeimlq.png" alt="logo" />
                    <div onClick={handlestate} className="cursor-pointer  stroke-[0.3px] transition-all duration-300  hover:stroke-[0.8]  h-fit flex">
                        <h1 className=" text-white my-auto px-3" >Fermer</h1>

                        <svg className="my-auto" width="34" height="34" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle className="" cx="10" cy="10" r="9.75" stroke="white" />
                            <path d="M7 7L13 13" stroke="white" strokeWidth="1" strokeLinecap="round"/>
                            <path d="M13 7L7 13" stroke="white" strokeWidth="1" strokeLinecap="round"/>
                        </svg>
                    </div>
                </div>
                {/* <div className="absolute top-20 pointer-events-none bottom-0 left-0 z-10 right-0 h-24 bg-gradient-to-b from-[#0e0e0e]" ></div>*/}


                <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.1, delay:0.12 ,ease:"easeOut"}} className="flex fixed top-20  px-10 w-full h-fit text-white">

                    <div className="flex-col w-fit h-[495px] tracking-tight mr-2 pr-10 leading-[1.1] text-[52px] font-[Merriweather] overflow-y-scroll py-24 space-y-7">
                        <motion.h1 onClick={handleItem1} initial={{y:-30, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.22, duration:0.28, opacity:{duration:0.7, delay:0.15, ease:"easeOut"}, ease:"easeOut"}} className={openitem && item1===false ? "cursor-pointer text-[#8996a0] text-opacity-75 hover:text-white group w-fit  transition-colors duration-200" : openitem && item1 ? "cursor-pointer text-white group w-fit transition-colors duration-200" : "cursor-pointer  text-white group w-fit transition-colors duration-200"}>S'identifier<span className={openitem && item1 ? "block w-full transition-all duration-300 h-[0.5px] bg-gray-200": openitem && item1===false ? "block max-w-0 group-hover:max-w-full transition-all duration-300 h-[0.5px]" : "block max-w-0 group-hover:max-w-full transition-all duration-300 h-[0.5px] bg-gray-200"}></span></motion.h1>
                        <motion.h1 onClick={handleItem2} initial={{y:-30, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.22, duration:0.28, opacity:{duration:0.7, delay:0.15, ease:"easeOut"}, ease:"easeOut"}} className={openitem && item2===false ? "cursor-pointer text-[#8996a0] text-opacity-75 hover:text-white group w-fit  transition-colors duration-200" : openitem && item2 ? "cursor-pointer text-white group w-fit transition-colors duration-200" : "cursor-pointer  text-white group w-fit transition-colors duration-200"}>Admin<span className={openitem && item2 ? "block w-full transition-all duration-300 h-[0.5px] bg-gray-200": openitem && item2===false ? "block max-w-0 group-hover:max-w-full transition-all duration-300 h-[0.5px]" : "block max-w-0 group-hover:max-w-full transition-all duration-300 h-[0.5px] bg-gray-200"}></span></motion.h1>
                    </div>
                    
                    <AnimatePresence>
                        {item1 && 
                        <motion.div className="relative ml-2 mt-24 top-0 bottom-0 right-0 left-10" initial={{x:"-25px",opacity:0}} exit={{x:"-30px",opacity:0, transition:{duration:0}}} transition={{duration:0.2, delay:0.1}} animate={{x:"0px",opacity:1}}>
                            <Login></Login>
                        </motion.div>}
                    </AnimatePresence>

                    <AnimatePresence>
                        {item2 && 
                        <motion.div className="relative ml-2 mt-24 top-0 bottom-0 right-0 left-10" initial={{x:"-25px",opacity:0}} exit={{x:"-30px",opacity:0, transition:{duration:0}}} transition={{duration:0.2, delay:0.1}} animate={{x:"0px",opacity:1}}>
                            <a href="https://www.backend.com/admin/">Site Admin</a>
                        </motion.div>}
                    </AnimatePresence>


                    
                </motion.div>

                {/*<div className="absolute top-[480px] pointer-events-none bottom-0 left-0 z-0 right-0 h-24 bg-gradient-to-t from-[#0e0e0e]" ></div>*/}
                
                <div className="flex border-t-[1px] bg-[#0e0e0e] z-10 text-lg select-none border-[#535355] space-x-8 w-full font-[GT-America-Regular] h-[88px] text-white px-11">
                    <div className="flex space-x-8 h-full ">
                        <h1 className="my-auto text-[#8996a0] ">Liens utiles</h1>
                        <svg className="my-auto" width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L6 6.21739L1 11" stroke="#8996a0" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>

                    <div className="flex font-black font-[GT-America-Bold] tracking-wide my-auto overflow-x-auto space-x-8">
                        <h1 className="transition duration-300 hover:text-[#aab0b4]"><a href="#">Université</a></h1>
                        <h1 className="transition duration-300 hover:text-[#aab0b4]"><a href="#">Faculté</a></h1>
                        <h1 className="transition duration-300 hover:text-[#aab0b4]"><a href="#">Bibliotheque</a></h1>
                        <h1 className="transition duration-300 hover:text-[#aab0b4]"><a href="#">MESRS</a></h1>
                        <h1 className="transition duration-300 hover:text-[#aab0b4]"><a href="#">Textes Reglementaires</a></h1>
                    </div>
                </div>
            </div>

        </>
    )
}