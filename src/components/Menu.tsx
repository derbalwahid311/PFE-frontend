import {AnimatePresence, motion} from "framer-motion"

export default function Menu({state, handlestate}:any){
    return(
        <>
            <div className="bg-[#2c302b] select-none font-[Inter] flex-col pr-8 py-4 h-screen w-full">
                <div className="flex justify-between py-4 w-full h-24">
                    <img className="h-16 px-8 " src="https://res.cloudinary.com/dbiudcrba/image/upload/v1682879624/Uni_Logo_copy_n0fnmu.png" alt="logo" />
                    <div onClick={handlestate} className="cursor-pointer  stroke-[0.3px] transition-all duration-300  hover:stroke-[0.8]  h-fit flex">
                        <h1 className=" text-white my-auto font text px-3" >Fermer</h1>

                        <svg className="my-auto" width="34" height="34" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle className="" cx="10" cy="10" r="9.75" stroke="white" />
                            <path d="M7 7L13 13" stroke="white" stroke-width="1" stroke-linecap="round"/>
                            <path d="M13 7L7 13" stroke="white" stroke-width="1" stroke-linecap="round"/>
                        </svg>
                    </div>
                </div>

                {/*<div className="mt-14 text-white px-8 flex-col space-y-10 my-scrollbar text-5xl w-[600px] h-96 font-[Merriweather] overflow-y-scroll">
                    <h1 className="">Se Connecter</h1>
                    <h1 className="">Inscription</h1>
                    <h1 className="">Recherche</h1>
                    <h1 className="">Habiltation</h1>
                    <h1 className="">Post-Graduation</h1>
                    <h1 className="">Diplomes Nationaux</h1>
                    <h1 className="">Chekla</h1>
                </div>*/ }
            </div>

        </>
    )
}