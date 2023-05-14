import { useState, useEffect } from "react";
import quotes from "../quotes";
import LargeNavbar from "./LargeNavbar";

export default function LargeWrapper(){
    const [data, setData]:any=useState(null);
    const [isShowed, setIsShowed] = useState(true);
 
    let indice:number = Math.floor(Math.random()*50)
    let q;
    let a;
    
    useEffect(()=>{
        console.log(isShowed)
    },[isShowed])
 
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
        <div className='h-[100vh]  bg-no-repeat bg-cover bg-[url("https://res.cloudinary.com/dbiudcrba/image/upload/v1683405680/photo1683405253_dwhggh.jpg")] overflow-hidden'>
         <LargeNavbar setState={setIsShowed}></LargeNavbar>
            <div className='font-[Merriweather] inset-0 mt-32  px-32 selection:bg-white selection:text-gray-900 w-screen text-white' >
               <h1 className='text-5xl text-center'>{q}</h1>
               <h1 className='text-center mt-4 text-lg'>By - {a}</h1>
            </div>
         </div>

         <div className={`h-[100vh] overflow-hidden bg-white${isShowed === false ? " hidden" : ""}`}>
         </div>
        </>
    )
}