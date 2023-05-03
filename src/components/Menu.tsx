import {AnimatePresence, motion} from "framer-motion"

export default function Menu({state, handlestate}:any){
    return(
        <>
            <div className=" bg-[#151615] overflow-hidden select-none font-[Inter] grid content-between h-screen w-full">
                <div className="flex pr-8  justify-between py-8 w-full h-22">
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
    

                <div className=" text-white px-8 my-auto mt-4 flex-col space-y-10 text-5xl w-fit h-96 font-[Merriweather]">
                    <h1 className="">Se Connecter</h1>
                    <h1 className="">Inscription</h1>
                    <h1 className="">Recherche</h1>
                    <h1 className="">Post-Graduation</h1>

                </div>

                <div className="flex border-t-[1px] border-gray-500 full font-[Inter] h-20 text-white px-8">
                    <div className="my-auto">
                        <h1>Liens utiles</h1>
                    </div>
                </div>
            </div>

        </>
    )
}