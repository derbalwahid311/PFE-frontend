import { Fragment } from 'react';
import Media from 'react-media'
import LargeNavbar from './components/LargeNavbar';
import MediumNavbar from './components/MediumNavbar';
import Menu from './components/Menu';
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
                  {matches.large && <LargeNavbar></LargeNavbar>}
               </Fragment>
            )}

         </Media>
      </>
   );
}