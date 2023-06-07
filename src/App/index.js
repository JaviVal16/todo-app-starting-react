import React from 'react';
import { StatusTodosMessage } from '../StatusTodosMessage';
import { TodosSearchBox } from '../TodosSearchBox';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { AddTodoBtn } from '../AddTodoBtn';
import { AlertCompleted } from '../AlertCompleted';
import { useLocalStorage } from './useLocaclStorage';


// const exampleTodos = [
//   { text: 'Completar curso React', completed: true },
//   { text: 'Lavar los trastes', completed: false },
//   { text: 'Hacer ejercicio', completed: false },
//   { text: 'Hacer un pastel de platano', completed: true },
//   { text: 'Sacar a pasear a Nutela', completed: false },
//   { text: 'Bañarse', completed: false },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(exampleTodos));
// localStorage.removeItem('TAREAS_V1');

function App() {
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(tarea => tarea.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    tarea => tarea.text.toLowerCase().includes(searchValue.toLowerCase())
  );


  const todoCompleted = (id) => {
    const newTodos = [...todos];
    const indexTarea = newTodos.findIndex(
      (element) => element.text === id
    );
    newTodos[indexTarea].completed = true;
    saveTodos(newTodos);
  }

  const todoDeleted = (id) => {
    const newTodos = [...todos];
    const indexTodo = newTodos.findIndex(
      (element) => element.text === id
    );
    newTodos.splice(indexTodo, 1);
    saveTodos(newTodos);
  }


  const allCompleted = () => {
    const newTodos = [...todos];
    let x;
    if (newTodos.length === 0) {
      x = true
    } else {

      const allCompleted = newTodos.filter(
        element => element.completed === false
      );
      allCompleted.length === 0 ? x = true : x = false;

      return x;
    }
  }

  return (
    <>
      <StatusTodosMessage completed={completedTodos} total={totalTodos} />
      <TodosSearchBox
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(element => (
          <TodoItem
            key={element.text}
            text={element.text}
            completed={element.completed}
            onComplete={() => todoCompleted(element.text)}
            delete={() => todoDeleted(element.text)}
          />
        ))}
      </TodoList>

      <AlertCompleted
        allCompleted={allCompleted()}
      />

      <AddTodoBtn />
    </>
  );
}

export default App;
