import React from "react";
import ReactDOM from 'react-dom';
import { TodoProvider } from "../TodoContext";
import {AppUI}from './AppUI';

  // const defaultTodos=[
  // {text:'Cortar cebolla', completed:true},
  // {text:'Tormar el curso de intro a react', completed:true},
  // {text:'Llorar con la llorona', completed:false},
  // {text:'Como estas', completed:false},
  // ];


    

      // Guardamos nuestro item en una constante
  //const localStorageItem = localStorage.getItem(itemName, initialValue)   // Se llama al elemento guardado en localStorage para que no chocque con las demas versiones futuras 
 // let parsedItem; // trae la informacion guardada en localStorage

  // Utilizamos la lógica que teníamos, pero ahora con las variables y parámentros nuevos
  // if(!localStorageItem) {  // Si el usuario es nuevo no existe un item en localStorage, por lo tanto guardamos uno con un array vacío

  //   localStorage.setItem(itemName, JSON.stringify(initialValue))  // Para crear su primer todo por eso esta vacio
  //   parsedItem = [initialValue];  // Estado por defecto es un array por defecto

  // }   else{   // Si no ya tiene algunos todos de versiones del uso de los usuarios
  //   parsedItem = JSON.parse(localStorageItem); //  Hace un array con todos los todos que ya se allan creado los usuarios
  // }

  // const [item, setItem ] = React.useState(parsedItem);    // ¡Podemos utilizar otros hooks!


    // Actualizamos la función para guardar nuestro item con las nuevas variables y parámetros
  


function App() {
  
  


  /* const saveTodos = (newTodos) => {  // Creamos la función en la que actualizaremos nuestro localStorage
    const stringifiedTodos = JSON.stringify(newTodos);   // Se convierte en un string todos los todos
    localStorage.setItem('TODOS_V1' , stringifiedTodos);   // Los guardamos en el localStorage
    setTodos(newTodos);                                     // Actualizamos nuestro estado
  };*/

    


  //console.log('Render (antes del use effect)');


  //React.useEffect(() => {
    //console.log('use effect');
  //}, [totalTodos]);  // Agregamos un array que nos permite decidir cuando vamos a ejecutar el useffect


  //console.log('Render (despues del use effect)');


  return (

    <TodoProvider>
      <AppUI></AppUI>
    </TodoProvider>

    
  );
}

export default App;
