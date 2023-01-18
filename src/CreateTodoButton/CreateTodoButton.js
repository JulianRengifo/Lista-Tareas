import React from "react";
import './CreateTodoButton.css';


//import {FaHeart} from "react-icons/fa";


function CreateTodoButtom(props){

    const onClickButton = (msg) => {
        alert(msg);
    };

    return(

        <button class="CreateTodoButton"
        onClick={() => onClickButton('Aqui se deberia abrir el menu')}
        >   
            +

            </button>
        
        
    );
}

export { CreateTodoButtom};