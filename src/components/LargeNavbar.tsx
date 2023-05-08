import {AnimatePresence, motion} from "framer-motion"
import Menu from "./Menu"
import { useEffect, useState } from "react"


function Navbar({handlestate}:any){
    return(
        <>
        <div className="h-24 font-[Inter] text-white  overflow-hidden select-none flex justify-between">
            <a className="my-auto" href="#">
                <div className="flex my-auto">
                    <img className="h-16 pl-8 px-3 my-2 border-r-[1px]" src="https://res.cloudinary.com/dbiudcrba/image/upload/v1683442551/Off_Logo_zeimlq.png" alt="logo" />
                    
                    <div className="flex-col -space-y-1 my-auto overflow-clip  px-3">
                            <h1 className="text-xs">DEPARTMENT OF</h1>
                            <h1 className="text-2xl">COMPUTER SCIENCE</h1>
                    </div>
                    
                </div>
            </a>
            <div onClick={handlestate} className="flex cursor-pointer bg-[#181717] transition duration-200  hover:bg-[#2b2b2b] px-8 space-x-5">

            <svg className="my-auto" width="32" height="32" viewBox="0 0 22 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 0H16" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
                <path d="M1 6H16" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
            </svg>

                <h1 className="my-auto">Menu</h1>
            </div>
        </div>
        </>
    )
}



export default function LargeNavbar(){
    const [open, setOpen] = useState(false)

    function handleMenu(){
        if(open === false) return setOpen(true)
        else return setOpen(false)
    }

    return(
        <>
            <Navbar handlestate={handleMenu}></Navbar>
            <AnimatePresence>
                {open && 
                <motion.div className="overflow-hidden absolute top-0 left-0 right-0"  initial={{y:"-100vh" }} transition={{duration:0.3, ease:"easeOut"}} animate={{y:"0vh"}} exit={{y:"-100vh", transition:{duration:0.3, ease:"easeOut"}}}>
                    <Menu state={open} handlestate={handleMenu}></Menu>
                </motion.div>}
            </AnimatePresence>
        </>
    )
}