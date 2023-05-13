import { Fragment, useEffect, useState } from 'react';
import Media from 'react-media'
import LargeNavbar from './components/LargeNavbar';
import MediumNavbar from './components/MediumNavbar';
import Menu from './components/Menu';
import SmallNavbar from './components/SmallNavbar';
import quotes from './quotes';


export default function App() {
   const [data, setData]:any=useState(null);
   const [isShowed, setIsShowed] = useState(true);

   let indice:number = Math.floor(Math.random()*50)
   let q;
   let a;

   function handleShowed(){
      if(isShowed===false){setIsShowed(true)}
      else setIsShowed(true)
   }

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
   
   return (
      <>
         <Media queries={{
            small:"(max-width: 450px)",
            medium:"(min-width: 451px) and (max-width: 700px)",
            large:"(min-width: 701px)"
         }}>
            {matches =>(
               <Fragment>
                  {matches.small && <SmallNavbar></SmallNavbar>}
                  {matches.medium && <MediumNavbar></MediumNavbar>}
               </Fragment>
            )}
         </Media>
         
         <div className='h-[100vh] bg-[center_bottom_-220px] bg-no-repeat bg-cover bg-[url("https://res.cloudinary.com/dbiudcrba/image/upload/v1683405680/photo1683405253_dwhggh.jpg")] overflow-hidden'>
         <LargeNavbar setState={isShowed}></LargeNavbar>
            <div className='font-[Merriweather] mt-32 z-10 px-32 selection:bg-white selection:text-gray-900 w-screen text-white' >
               <h1 className='text-5xl text-center'>{q}</h1>
               <h1 className='text-center mt-4 text-lg'>By - {a}</h1>
            </div>
         </div>

         <div className='h-[100vh] bg-white'>

         </div>

         {/*<div className='absolute z-0 w-full bottom-0'>
            <svg className='mx-auto' width="1" height="925" viewBox="0 0 1 925" fill="none" xmlns="http://www.w3.org/2000/svg">
               <line x1="0.5" y1="2.18557e-08" x2="0.49996" y2="1000" stroke="#D5D5D5"/>
            </svg>
         </div>*/}
         
      </>
   );
}