import { useState } from "react"

export default function SmallNavbar(){
    const [open, setOpen] = useState(false)

    function handleMenu(){
        if(open === false) return setOpen(true)
        else return setOpen(false)
    }
    return(
        <div className="h-16 bg-white px-6 py-1 flex justify-between">
            <a href="#"><img className="h-full" src="https://upload.wikimedia.org/wikipedia/commons/2/25/LOGO_UNIV_ORAN_1_Anglais.png" alt="" /></a>
            {open === false ? <h1 className="my-auto text-red-500">Closed</h1> : <h1 className="my-auto text-green-500">Open</h1>}
            <button onClick={handleMenu}><img className="h-fit my-auto" src="https://res.cloudinary.com/dbiudcrba/image/upload/v1682616730/burger_gjirio.svg" alt="" /></button>

            {/*<ul className="flex space-x-5 my-auto">
                <li><a href="#">Home</a></li>
                <li><a href="#">Test</a></li>
                <li><a href="#">Wee</a></li>
            </ul>*/}
        </div>
    )
}