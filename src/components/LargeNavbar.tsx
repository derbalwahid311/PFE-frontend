export default function LargeNavbar(){
    return(
        <>
        <div className="h-24 bg-white px-10 py-1 flex justify-between">
            <a href="#"><img className="h-full" src="https://upload.wikimedia.org/wikipedia/commons/2/25/LOGO_UNIV_ORAN_1_Anglais.png" alt="" /></a>
            <ul className="flex space-x-5 my-auto">
                <li><a href="#">Home</a></li>
                <li><a href="#">Test</a></li>
                <li><a href="#">Wee</a></li>
            </ul>
        </div>
        </>
    )
}