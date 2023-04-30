export default function LargeNavbar(){
    return(
        <>
        <div className="h-24 font-[Inter] text-white bg-[#080E06] flex justify-between">
            <a className="my-auto" href="#">
                <div className="flex my-auto">
                    <img className="h-16 pl-8 px-3 my-2 border-r-[1px]" src="https://res.cloudinary.com/dbiudcrba/image/upload/v1682879624/Uni_Logo_copy_n0fnmu.png" alt="logo" />
                    <div className="flex-col my-auto px-3">
                            <h1 className="text-xs">DEPARTMENT OF</h1>
                            <h1 className="text-2xl">COMPUTER SCIENCE</h1>
                    </div>
                </div>
            </a>
            <div className="flex cursor-pointer bg-[#2c302b] hover:bg-[#474b46] px-6 space-x-5">
                <img className="h-3 my-auto" src="https://res.cloudinary.com/dbiudcrba/image/upload/v1682882755/Vector_l5lf1a.svg" alt="" />
                <h1 className="my-auto">Menu</h1>
            </div>
        </div>
        </>
    )
}