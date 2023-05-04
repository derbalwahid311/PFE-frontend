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
    const [openitem, setOpenitem] = useState(false);


    function handleItem1(){
        if(item1 === false){setOpenitem(true);setItem1(true);setItem2(false);setItem3(false);setItem4(false);setItem5(false)}
        else {setItem1(false);setOpenitem(false)}
    }

    function handleItem2(){
        if(item2 === false){setOpenitem(true);setItem2(true);setItem1(false);setItem3(false);setItem4(false);setItem5(false)}
        else {setItem2(false);setOpenitem(false)}
    }

    function handleItem3(){
        if(item3 === false){setOpenitem(true);setItem3(true);setItem2(false);setItem1(false);setItem4(false);setItem5(false)}
        else {setItem3(false);setOpenitem(false)}
    }

    function handleItem4(){
        if(item4 === false){setOpenitem(true);setItem4(true);setItem2(false);setItem3(false);setItem1(false);setItem5(false)}
        else {setItem4(false);setOpenitem(false)}
    }

    function handleItem5(){
        if(item5 === false){setOpenitem(true);setItem5(true);setItem2(false);setItem3(false);setItem4(false);setItem1(false)}
        else {setItem5(false);setOpenitem(false)}
    }

    
    return(
        <>
            <div className=" bg-[#0f0f0f] overflow-hidden select-none font-[Inter] grid content-between h-screen w-full">
                <div className="flex pr-10  justify-between py-6 w-full -mb-8 h-22">
                    <img className="h-16 px-10 " src="https://res.cloudinary.com/dbiudcrba/image/upload/v1682879624/Uni_Logo_copy_n0fnmu.png" alt="logo" />
                    <div onClick={handlestate} className="cursor-pointer  stroke-[0.3px] transition-all duration-300  hover:stroke-[0.8]  h-fit flex">
                        <h1 className=" text-white my-auto px-3" >Fermer</h1>

                        <svg className="my-auto" width="34" height="34" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle className="" cx="10" cy="10" r="9.75" stroke="white" />
                            <path d="M7 7L13 13" stroke="white" strokeWidth="1" strokeLinecap="round"/>
                            <path d="M13 7L7 13" stroke="white" strokeWidth="1" strokeLinecap="round"/>
                        </svg>
                    </div>
                </div>
    

                <motion.div initial={{y:-30}} animate={{y:0}} transition={{duration:0.2}} className="flex px-11 w-full h-full  text-white box-content ">

                    <div className="flex-col w-fit h-full  mr-10 pr-6  text-5xl font-[Merriweather]  space-y-8">
                        <motion.h1 onClick={handleItem1} initial={{y:-30, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.15, duration:0.4, opacity:{duration:0.7, delay:0.15}}} className={openitem && item1===false ? "cursor-pointer text-[#8996a0] text-opacity-70 hover:text-white group w-fit  transition-colors duration-200" : openitem && item1 ? "cursor-pointer text-white group w-fit transition-colors duration-200" : "cursor-pointer  text-white group w-fit transition-colors duration-200"}>S'identifier<span className={openitem && item1 ? "block w-full transition-all duration-300 h-[0.5px] bg-gray-200": "" }></span></motion.h1>
                        <motion.h1 onClick={handleItem2} initial={{y:-30, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.16, duration:0.4, opacity:{duration:0.7, delay:0.15}}} className={openitem && item2===false ? "cursor-pointer text-[#8996a0] text-opacity-70 hover:text-white group w-fit  transition-colors duration-200" : openitem && item2 ? "cursor-pointer text-white group w-fit transition-colors duration-200" : "cursor-pointer  text-white group w-fit transition-colors duration-200"}>Demande<span className={openitem && item2 ? "block w-full transition-all duration-300 h-[0.5px] bg-gray-200": "" }></span></motion.h1>
                        <motion.h1 onClick={handleItem3} initial={{y:-30, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.17, duration:0.4, opacity:{duration:0.7, delay:0.15}}} className={openitem && item3===false ? "cursor-pointer text-[#8996a0] text-opacity-70 hover:text-white group w-fit  transition-colors duration-200" : openitem && item3 ? "cursor-pointer text-white group w-fit transition-colors duration-200" : "cursor-pointer  text-white group w-fit transition-colors duration-200"}>Inscription<span className={openitem && item3 ? "block w-full transition-all duration-300 h-[0.5px] bg-gray-200": "" }></span></motion.h1>
                        <motion.h1 onClick={handleItem4} initial={{y:-30, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.18, duration:0.4, opacity:{duration:0.7, delay:0.15}}} className={openitem && item4===false ? "cursor-pointer text-[#8996a0] text-opacity-70 hover:text-white group w-fit  transition-colors duration-200" : openitem && item4 ? "cursor-pointer text-white group w-fit transition-colors duration-200" : "cursor-pointer  text-white group w-fit transition-colors duration-200"}>Recherche<span className={openitem && item4 ? "block w-full transition-all duration-300 h-[0.5px] bg-gray-200": "" }></span></motion.h1>
                        <motion.h1 onClick={handleItem5} initial={{y:-30, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.19, duration:0.4, opacity:{duration:0.7, delay:0.15}}} className={openitem && item5===false ? "cursor-pointer text-[#8996a0] text-opacity-70 hover:text-white group w-fit  transition-colors duration-200" : openitem && item5 ? "cursor-pointer text-white group w-fit transition-colors duration-200" : "cursor-pointer  text-white group w-fit transition-colors duration-200"}>Exemple<span className={openitem && item5 ? "block w-full transition-all duration-300 h-[0.5px] bg-gray-200": "" }></span></motion.h1>
                    </div>
                    
                    <AnimatePresence>
                        {item1 && 
                        <motion.div className="relative ml-2 top-0 bottom-0 right-0 left-10" initial={{x:"-25px",opacity:0}} exit={{x:"-30px",opacity:0, transition:{duration:0}}} transition={{duration:0.2, delay:0.1}} animate={{x:"0px",opacity:1}}>
                            <Login></Login>
                        </motion.div>}
                    </AnimatePresence>

                    <AnimatePresence>
                        {item2 && 
                        <motion.div className="relative ml-2 top-0 bottom-0 right-0 left-10" initial={{x:"-25px",opacity:0}} exit={{x:"-30px",opacity:0, transition:{duration:0}}} transition={{duration:0.2, delay:0.1}} animate={{x:"0px",opacity:1}}>
                        <Demande/>
                        </motion.div>}
                    </AnimatePresence>

                    <AnimatePresence>
                        {item3 && 
                        <motion.div className="relative ml-2 top-0 bottom-0 right-0 left-10" initial={{x:"-25px",opacity:0}} exit={{x:"-30px",opacity:0, transition:{duration:0}}} transition={{duration:0.2, delay:0.1}} animate={{x:"0px",opacity:1}}>
                            <Inscri/>
                        </motion.div>}
                    </AnimatePresence>

                    <AnimatePresence>
                        {item4 && 
                        <motion.div className="relative ml-2 top-0 bottom-0 right-0 left-10" initial={{x:"-25px",opacity:0}} exit={{x:"-30px",opacity:0, transition:{duration:0}}} transition={{duration:0.2, delay:0.1}} animate={{x:"0px",opacity:1}}>
                            <Rech/>
                        </motion.div>}
                    </AnimatePresence>

                    <AnimatePresence>
                        {item5 && 
                        <motion.div className="relative ml-2 top-0 bottom-0 right-0 left-10" initial={{x:"-25px",opacity:0}} exit={{x:"-30px",opacity:0, transition:{duration:0}}} transition={{duration:0.2, delay:0.1}} animate={{x:"0px",opacity:1}}>
                            <Exemple/>
                        </motion.div>}
                    </AnimatePresence>

                </motion.div>


                <div className="flex border-t-[1px] select-none border-[#535355] space-x-8 w-full font-[GT-America-Regular] h-[90px] text-white px-11">
                    <div className="flex space-x-8 h-full ">
                        <h1 className="text-lg my-auto text-[#8996a0] ">Liens utiles</h1>
                        <svg className="my-auto" width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L6 6.21739L1 11" stroke="#8996a0" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>

                    <div className="flex font-black font-[GT-America-Bold] tracking-wide my-auto text-lg overflow-x-auto space-x-8">
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