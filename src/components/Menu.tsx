import {AnimatePresence, motion} from "framer-motion"

export default function Menu({state, handlestate}:any){
    return(
        <>
            <div className=" bg-[#0f0f0f] overflow-hidden select-none font-[Inter] grid content-between h-screen w-full">
                <div className="flex pr-10  justify-between py-6 w-full -mb-4 h-22">
                    <img className="h-16 px-10 " src="https://res.cloudinary.com/dbiudcrba/image/upload/v1682879624/Uni_Logo_copy_n0fnmu.png" alt="logo" />
                    <div onClick={handlestate} className="cursor-pointer  stroke-[0.3px] transition-all duration-300  hover:stroke-[0.8]  h-fit flex">
                        <h1 className=" text-white my-auto px-3" >Fermer</h1>

                        <svg className="my-auto" width="34" height="34" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle className="" cx="10" cy="10" r="9.75" stroke="white" />
                            <path d="M7 7L13 13" stroke="white" stroke-width="1" stroke-linecap="round"/>
                            <path d="M13 7L7 13" stroke="white" stroke-width="1" stroke-linecap="round"/>
                        </svg>
                    </div>
                </div>
    

                <motion.div initial={{y:-50}} animate={{y:0}} transition={{duration:0.4}} className=" text-white px-11 flex-col space-y-8 text-5xl w-fit h-96 font-[Merriweather]">
                    <motion.h1 initial={{y:-30, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.15, duration:0.4, opacity:{duration:0.7, delay:0.15}}} className="cursor-pointer group w-fit">S'identifier<span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-[0.5px] bg-gray-200"></span></motion.h1>
                    <motion.h1 initial={{y:-30, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.16, duration:0.4, opacity:{duration:0.7, delay:0.15}}} className="cursor-pointer group w-fit">Demande<span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-[0.5px] bg-gray-200"></span></motion.h1>
                    <motion.h1 initial={{y:-30, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.17, duration:0.4, opacity:{duration:0.7, delay:0.15}}} className="cursor-pointer group w-fit">Inscription<span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-[0.5px] bg-gray-200"></span></motion.h1>
                    <motion.h1 initial={{y:-30, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.18, duration:0.4, opacity:{duration:0.7, delay:0.15}}} className="cursor-pointer group w-fit">Recherche<span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-[0.5px] bg-gray-200"></span></motion.h1>
                    <motion.h1 initial={{y:-30, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.19, duration:0.4, opacity:{duration:0.7, delay:0.15}}} className="cursor-pointer group w-fit">Post-Graduation<span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-[0.5px] bg-gray-200"></span></motion.h1>


                </motion.div>

                <div className="flex border-t-[1px] select-none border-[#3c3b41] space-x-8 w-full font-[GT-America-Regular] h-[90px] text-white px-11">
                    <div className="flex space-x-8 h-full ">
                        <h1 className="text-lg my-auto text-[#8996a0] ">Liens utiles</h1>
                        <svg className="my-auto" width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L6 6.21739L1 11" stroke="#8996a0" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
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