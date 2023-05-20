import { useState, useEffect } from "react";
import quotes from "../quotes";
import LargeNavbar from "./LargeNavbar";

export default function LargeWrapper(){
    const [data, setData]:any=useState(null);
    const [isShowed, setIsShowed] = useState(true);
 
    let indice:number = Math.floor(Math.random()*50)
    let q;
    let a;
    
    /*useEffect(()=>{
        console.log(isShowed)
    },[isShowed])*/
 
    useEffect(()=>{
       let quote = quotes()
       setData(quote[indice])
    },[])
 
    if(data!==null){
       q=data["q"]
       a=data["a"]
       //console.log(data)
       //console.log(q)
       //console.log(a)
    }
    return(
        <>
        
        <div className='h-[100vh] bg-no-repeat bg-cover bg-[url("https://www.harvard.edu/wp-content/uploads/2023/04/052418_Com_SM_3033-2000x1333.jpg")] overflow-hidden'>
         <LargeNavbar setState={setIsShowed}></LargeNavbar>
            <div className='font-[Canela-Deck-Regular]  mt-52 px-32 selection:bg-white selection:text-[#1e1e1e] w-screen text-white' >
               <h1 className='text-5xl text-center'>{q}</h1>
               <h1 className='text-center mt-4 text-lg'>By - {a}</h1>
            </div>
         </div>

         <div className={isShowed === false ? " hidden" : ""}>
            <div className="h-[950px] w-full font-[Canela-Deck-Regular] overflow-hidden bg-[#f3f4f4]">
                <h1 className="text-center mt-16 text-6xl text-[#1e1e1e] selection:text-white selection:bg-[#1e1e1e]">Alumni</h1>
                
                <div className="w-full text-[#1e1e1e]  mt-16 flex justify-center space-x-16">
                  
                     <div className="w-80 h-fit cursor-pointer bg-gray-300 group overflow-hidden hover:bg-white hover:bg-opacity-100 transition duration-200 bg-opacity-40 tracking-wide">
                        <div className="transition duration-300 overflow-hidden group-hover:scale-110">
                           <img className="h-fit" src="https://res.cloudinary.com/dbiudcrba/image/upload/v1684071267/mobile-07_ukvefi.jpg" alt="" />
                        </div>
                        <h1 className="px-6 pt-10 group w-fit text-3xl">Kadiour Zoubir<span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-[2px] bg-[#1e1e1e]"></span></h1>
                        <p className="mb-10 px-6 pt-4 tracking-normal text-lg font-[GT-America-Regular]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae mattis tellus. Suspendisse ante diam, gravida id maximus eu, imperdiet at leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae</p>
                     </div>
                     
                     <div className="w-80 h-fit cursor-pointer bg-gray-300 group overflow-hidden hover:bg-white hover:bg-opacity-100 transition duration-200 bg-opacity-40 tracking-wide">
                        <div className="transition duration-300 overflow-hidden group-hover:scale-110">
                           <img className="h-fit" src="https://res.cloudinary.com/dbiudcrba/image/upload/v1684071683/mobile-05_bnrctz.jpg" alt="" />
                        </div>
                        <h1 className="px-6 pt-10 group w-fit text-3xl">Test Bnadem<span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-[2px] bg-[#1e1e1e]"></span></h1>
                        <p className="mb-10 px-6 pt-4 tracking-normal text-lg font-[GT-America-Regular]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae mattis tellus. Suspendisse ante diam, gravida id maximus eu, imperdiet at leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae</p>
                     </div>
                     
                     <div className="w-80 h-fit cursor-pointer bg-gray-300 group overflow-hidden hover:bg-white hover:bg-opacity-100 transition duration-200 bg-opacity-40 tracking-wide">
                        <div className="transition duration-300 overflow-hidden group-hover:scale-110">
                           <img className="h-fit" src="https://res.cloudinary.com/dbiudcrba/image/upload/v1684075302/mobile-06_fcyjmu.jpg" alt="" />
                        </div>
                        <h1 className="px-6 pt-10 w-fit group text-3xl">Another Bnadem<span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-[2px] bg-[#1e1e1e]"></span></h1>
                        <p className="mb-10 px-6 pt-4 tracking-normal text-lg font-[GT-America-Regular]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae mattis tellus. Suspendisse ante diam, gravida id maximus eu, imperdiet at leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae</p>
                     </div>
                     
                </div>
            </div>

            <footer className="h-44 w-full select-none text-[#8996a0] font-[GT-America-Regular] pt-10 bg-[#0e0e0e]">
            <img className="h-20 mx-auto -mb-6" src="https://res.cloudinary.com/dbiudcrba/image/upload/v1683442551/Off_Logo_zeimlq.png" alt="" />
               <div className="flex h-fit mx-auto px-16 space-x-10 justify-between">
                  <h1 className="my-auto">2023 - By Derbal Techach And BINOME</h1>
                  <div className="flex space-x-10 my-auto">
                     <h1 className="cursor-pointer transition duration-150 hover:text-white hover:underline underline-offset-4">Facebook</h1>
                     <h1 className="cursor-pointer transition duration-150 hover:text-white hover:underline underline-offset-4">Twitter</h1>
                     <h1 className="cursor-pointer transition duration-150 hover:text-white hover:underline underline-offset-4">Youtube</h1>
                  </div>
               </div>
            </footer>
         </div>
        </>
    )
}