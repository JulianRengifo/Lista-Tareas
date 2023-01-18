import React from "react";

function useLocalStorage(itemName, initialValue){  // Recibimos como parámetros el nombre y el estado inicial de nuestro item.

    const[error, setError] = React.useState(false);        //Estado de error
    const[loading, setLoading] = React.useState(true);     // Estado de cargando
    const [item, setItem ] = React.useState(initialValue);

    React.useEffect(() => {

      setTimeout(() => {  // setTimeout permite que la aplicacion se ejecute dentro de un tiempo estimado

        try{

          const localStorageItem = localStorage.getItem(itemName) 
        let parsedItem;

        
        if(!localStorageItem) {  // Si el usuario es nuevo no existe un item en localStorage, por lo tanto guardamos uno con un array vacío

             localStorage.setItem(itemName, JSON.stringify(initialValue));  // Para crear su primer todo por eso esta vacio
             parsedItem = initialValue;  // Estado por defecto es un array por defecto
        
           }else{   // Si no ya tiene algunos todos de versiones del uso de los usuarios
             parsedItem = JSON.parse(localStorageItem); //  Hace un array con todos los todos que ya se allan creado los usuarios
          }

          setItem(parsedItem);
          setLoading(false);

        } catch(error){

            setError(error);
        }

      }, 1000);  // Tiempo en el que se ejecuta la aplicacion 
    });

    const saveItem = (newItem) => {  // Creamos la función en la que actualizaremos nuestro localStorage
    
        try{
    
          const stringifiedItem = JSON.stringify(newItem);  
        localStorage.setItem(itemName , stringifiedItem);   // Los guardamos en el localStorage
        setItem(newItem);                                     // Actualizamos nuestro estado
       
      }catch(error){
    
        setError(error);
    
        }
        
      };
    
        // Regresamos los datos que necesitamos
      return {
        item,
        saveItem,
        loading,
        error,
      };
        }

        export{useLocalStorage};