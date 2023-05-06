import { Fragment, useEffect, useState } from 'react';
import Media from 'react-media'
import LargeNavbar from './components/LargeNavbar';
import MediumNavbar from './components/MediumNavbar';
import Menu from './components/Menu';
import SmallNavbar from './components/SmallNavbar';
import quotes from './quotes';


export default function App() {
   const [data, setData]:any=useState(null);
   let indice:number = Math.floor(Math.random()*50)
   let q;
   let a;

   
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
                  {matches.large && <LargeNavbar></LargeNavbar>}
               </Fragment>
            )}

         </Media>
         <div className='font-[Merryweather] px-32 selection:bg-white selection:text-gray-900 w-screen mt-2 text-white' >
            <h1 className='text-5xl text-center'>{q}</h1>
            <h1 className='text-center mt-4 text-lg'>By - {a}</h1>
         </div>
      </>
   );
}