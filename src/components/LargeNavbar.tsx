import {AnimatePresence, motion} from "framer-motion"
import Menu from "./Menu"
import { useEffect, useState } from "react"


function Navbar({handlestate}:any){
    return(
        <>
        <div className="h-24 font-[Inter] text-white bg-[#0f0f0f] overflow-hidden select-none flex justify-between">
            <a className="my-auto" href="#">
                <div className="flex my-auto">
                    <img className="h-16 pl-8 px-3 my-2 border-r-[1px]" src="https://res.cloudinary.com/dbiudcrba/image/upload/v1682879624/Uni_Logo_copy_n0fnmu.png" alt="logo" />
                    
                    <div className="flex-col -space-y-1 my-auto overflow-clip  px-3">
                            <h1 className="text-xs">DEPARTMENT OF</h1>
                            <h1 className="text-2xl">COMPUTER SCIENCE</h1>
                    </div>
                    
                </div>
            </a>
            <div onClick={handlestate} className="flex cursor-pointer bg-[#2c302b] transition duration-200  hover:bg-[#474b46] px-8 space-x-5">

            <svg className="my-auto" width="30" height="30" viewBox="0 0 22 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 0.5H21" stroke="white" stroke-width="1.3" stroke-linecap="round"/>
                <path d="M1 5H16" stroke="white" stroke-width="1.3" stroke-linecap="round"/>
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
                <motion.div className="overflow-hidden absolute top-0 left-0 right-0"  initial={{y:"-100vh" }} transition={{duration:0.3}} animate={{y:"0vh"}} exit={{y:"-100vh",   transition:{duration:0.3}}}>
                    <Menu state={open} handlestate={handleMenu}></Menu>
                </motion.div>}
            </AnimatePresence>
        </>
    )
}