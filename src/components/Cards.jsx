//! Cards.jsx SERÁ EL CONTENEDOR DE cada card

import Card from './Card';

export default function Cards(props) {

   const {characters} = props;
   
   return( 
      <div>
         {characters.map((character) =>(
            <Card character= {character}/>
         ))}
      </div>
   )
}
