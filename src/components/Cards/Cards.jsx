//! Cards.jsx SERÁ EL CONTENEDOR DE cada card

import style from "../Cards/Cards.module.css"
import Card from '../Card/Card';

export default function Cards(props) {

   const {characters} = props;
   
   return( 
      <div className={style.container}>
         {characters.map((character) =>(
            <Card character= {character}/>
         ))}
      </div>
   )
}
