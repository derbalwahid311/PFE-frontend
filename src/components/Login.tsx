import {AnimatePresence, motion} from "framer-motion"
import { useState } from "react"



export default function Login(){
    
    return (
        <>  
            <div className="">
                <div className="space-y-2 mb-8">
                    <h1 className="">Email</h1>
                    <input className="text-white bg-transparent border-2 focus:border-2 focus:outline-0 focus:ring-2 focus:ring-white py-1 px-3" type="email" name="" />
                </div>
                <div className="space-y-2 mb-12">
                    <h1 className="">Mot de passe</h1>
                    <input className="text-white bg-transparent border-2 focus:border-2 focus:outline-0 focus:ring-2 focus:ring-white py-1 px-3" type="password" name="" />
                </div>

                <button className="w-full py-2 bg-opacity-75 transition-all duration-200 bg-[#595050] hover:bg-transparent hover:ring-2 ring-white">S'identifier</button>
            </div>
        </>
    )
}