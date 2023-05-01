import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import Menu from "./Menu"

function Navbar({handlestate}:any){
    
    
    return(
        <div className="h-20 bg-white px-12 py-1 flex justify-between">
            <a href="#"><img className="h-full" src="https://upload.wikimedia.org/wikipedia/commons/2/25/LOGO_UNIV_ORAN_1_Anglais.png" alt="" /></a>
            <button onClick={handlestate}><img className="h-fit my-auto" src="https://res.cloudinary.com/dbiudcrba/image/upload/v1682616730/burger_gjirio.svg" alt="" /></button>
            {/*<ul className="flex space-x-5 my-auto">
                <li><a href="#">Home</a></li>
                <li><a href="#">Test</a></li>
                <li><a href="#">Wee</a></li>
            </ul>*/}
            
        </div>
    )
}

export default function MediumNavbar(){
    const [open, setOpen] = useState(false)

    function handleMenu(){
        if(open === false) {return setOpen(true)}
        else return setOpen(false)
    }

    //{state === false ? <h1 className="my-auto text-red-500">Closed</h1> : <h1 className="my-auto text-green-500">Open</h1>}
    
    return (
        <>
            <Navbar handlestate={handleMenu}></Navbar>
            <AnimatePresence>
                {open && 
                <motion.div className="overflow-x-hidden fixed top-0 left-0 right-0"  initial={{y:-1000}} transition={{duration:0.7}} animate={{y:0}} exit={{y: -1000}}>
                    <Menu state={open} handlestate={handleMenu}></Menu>
                </motion.div>}
            </AnimatePresence>
            
        </>
    )
}