import React from 'react';
import './App.css';
import { StatusTodosMessage } from './StatusTodosMessage';
import { TodosSearchBox } from './TodosSearchBox';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { AddTodoBtn } from './AddTodoBtn';

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
      (element) => element.text == id
    );
    newTodos[indexTarea].completed = true;
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
          />
        ))}
      </TodoList>

      <AddTodoBtn />
    </>
  );
}

export default App;
