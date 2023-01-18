import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from '../TodoCounter';
import {TodoItem} from '../TodoItem';
import { TodoList } from '../TodoList';
import { TodoSearch } from '../TodoSearch';
import { CreateTodoButtom } from "../CreateTodoButton/CreateTodoButton";
import { getValue } from "@testing-library/user-event/dist/utils";



function AppUI() {   // Retorna todos los elementos de APP

     
    return(
        <React.Fragment>

        <TodoCounter /> 
      
        <TodoSearch/>

        <TodoContext.Consumer>

        {({
          error,
          loading,
          searchedTodos,
          completeTodo,
          deleteTodo,
        }) => (
          <TodoList>
            {error && <p>Desespérate, hubo un error...</p>}
            {loading && <p>Estamos cargando, no desesperes...</p>}
            {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}
            
            {searchedTodos.map(todo => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
        )}
      </TodoContext.Consumer>
      <CreateTodoButtom></CreateTodoButtom>
    </React.Fragment>
  );
}
              

export {AppUI};

