import style from "../Searchbar/SearchBar.module.css"

export default function SearchBar(props) {

   const {onSearch} = props
   return (
      <div className={style.searchContainer}>
         <input  className={style.searchBar} type='search' />
         <button className={style.searchButton} onClick={onSearch}>Agregar</button>
      </div>
   );
}
