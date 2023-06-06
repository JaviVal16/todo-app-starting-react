import React from 'react';
import './App.css';
import { StatusTodosMessage } from './StatusTodosMessage';
import { TodosSearchBox } from './TodosSearchBox';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { AddTodoBtn } from './AddTodoBtn';
import { AlertCompleted } from './AlertCompleted';


const exampleTodos = [
  { text: 'Completar curso React', completed: true },
  { text: 'Lavar los trastes', completed: false },
  { text: 'Hacer ejercicio', completed: false },
  { text: 'Hacer un pastel de platano', completed: true },
  { text: 'Sacar a pasear a Nutela', completed: false },
  { text: 'Bañarse', completed: false },
];

function App() {
  const [todos, setTodos] = React.useState(exampleTodos);
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
    setTodos(newTodos);
  }

  const allCompleted = () => {
    const newTodos = [...todos];
    const allCompleted = newTodos.filter(
      element => element.completed === false
    )
    let x;
    allCompleted.length === 0 ? x = true : x = false;

    return x;
  }

  const todoDeleted = (id) => {
    const newTodos = [...todos];
    const indexTodo = newTodos.findIndex(
      (element) => element.text === id
    );
    newTodos.splice(indexTodo, 1);
    setTodos(newTodos);
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
