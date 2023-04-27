export default function SmallNavbar(){
    return(
        <div className="h-16 bg-white px-6 py-1 flex justify-between">
            <a href="#"><img className="h-full" src="https://upload.wikimedia.org/wikipedia/commons/2/25/LOGO_UNIV_ORAN_1_Anglais.png" alt="" /></a>
            <img className="h-3 my-auto" src="https://res.cloudinary.com/dbiudcrba/image/upload/v1682616730/burger_gjirio.svg" alt="" />
            {/*<ul className="flex space-x-5 my-auto">
                <li><a href="#">Home</a></li>
                <li><a href="#">Test</a></li>
                <li><a href="#">Wee</a></li>
            </ul>*/}
        </div>
    )
}