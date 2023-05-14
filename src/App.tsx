import { Fragment, useEffect, useState } from 'react';
import Media from 'react-media'
import LargeWrapper from './components/LargeWrapper';
import MediumNavbar from './components/MediumNavbar';
import SmallNavbar from './components/SmallNavbar';


export default function App() {
   
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
                  {matches.large && <LargeWrapper></LargeWrapper>}
               </Fragment>
            )}
         </Media>
         


         {/*<div className='absolute z-0 w-full bottom-0'>
            <svg className='mx-auto' width="1" height="925" viewBox="0 0 1 925" fill="none" xmlns="http://www.w3.org/2000/svg">
               <line x1="0.5" y1="2.18557e-08" x2="0.49996" y2="1000" stroke="#D5D5D5"/>
            </svg>
         </div>*/}
         
      </>
   );
}