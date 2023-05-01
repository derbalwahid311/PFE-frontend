import {AnimatePresence, motion} from "framer-motion"
import Menu from "./Menu"
import { useEffect, useState } from "react"


function Navbar({handlestate}:any){
    return(
        <>
        <div className="h-24 font-[Inter] text-white bg-[#151615] overflow-hidden select-none flex justify-between">
            <a className="my-auto" href="#">
                <div className="flex my-auto">
                    <img className="h-16 pl-8 px-3 my-2 border-r-[1px]" src="https://res.cloudinary.com/dbiudcrba/image/upload/v1682879624/Uni_Logo_copy_n0fnmu.png" alt="logo" />
                    
                    <div className="flex-col -space-y-1 my-auto overflow-clip  px-3">
                            <h1 className="text-xs">DEPARTMENT OF</h1>
                            <h1 className="text-2xl">COMPUTER SCIENCE</h1>
                    </div>
                    
                </div>
            </a>
            <div onClick={handlestate} className="flex cursor-pointer bg-[#2c302b] transition duration-150  hover:bg-[#474b46] px-8 space-x-5">
                <img className="h-3 my-auto" src="https://res.cloudinary.com/dbiudcrba/image/upload/v1682882755/Vector_l5lf1a.svg" alt="" />
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