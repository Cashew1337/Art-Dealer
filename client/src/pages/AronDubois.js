import React from 'react';
import DisplayCard from './DisplayCard'
import Link from '../components/Links'
import '../Styles/ArtistsPages.css'

function AronDubois() {
    const artistName = 'Aaron Dubois';
   const artistDescription = 'This is a brief description of the artist Aron Dubois.';
   const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

   const createRows = (cardsPerRow) => {
      const rows = [];
      let row = [];

      cards.forEach((card, index) => {
         row.push(<DisplayCard key={index} />);

         if ((index + 1) % cardsPerRow === 0 || index === cards.length - 1) {
            rows.push(
               <div className='art-cards-row' key={index}>
                  {row}
               </div>
            );
            row = [];
         }
      });

      return rows;
   };

   return (
      <div className='art-cards-container'>
         <div className='artist-info'>
            <h2>{artistName}</h2>
            <Link link={"https://www.instagram.com/aronjohndubois/"} />
            <p>{artistDescription}</p>
           
         </div>
         <div>
        {/*  {createRows(3)} */}
         <DisplayCard artistName="Aron Dubois"/>
         </div>
        
         
        
      </div>
   );
}

export default AronDubois; 