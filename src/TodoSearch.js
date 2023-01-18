import React from "react";
import './TodoSearch.css';

function TodoSearch({searchValue, setSearchValue}) {

     /*const [searchValue, setSearchValue] = React.useState(''); */        // Se agregan estados a los componentes cuando estan como funciones

     const onSearchValueChange = (event) => {
          console.log(event.target.value);
          setSearchValue(event.target.value);   // Esta funcion hacce que cuando el usuario hace un cambio llama a la funcion y se actualiza con el metodo onchange
     };

     return(
          <input 
          className="TodoSearch" 
          placeholder="Cebolla"
          value={searchValue}       // EL valor debe ser el mismo del estado para conectarlo
          onChange={onSearchValueChange}
          />

         /* <p>{searchValue}</p> */ // Se muestra el valor en el parrafo
     );
}

export {TodoSearch};