import React from "react";
import { useLocalStorage } from "./useLocaclStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {

    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
    } = useLocalStorage('TODOS_V1', []);

    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpemModal] = React.useState(false);

    const completedTodos = todos.filter(tarea => tarea.completed).length;
    const totalTodos = todos.length;

    const searchedTodos = todos.filter(
        tarea => tarea.text.toLowerCase().includes(searchValue.toLowerCase())
    );

    const addTodo = (newtodo) => {
        const newTodos = [...todos];
        newTodos.push({ text: newtodo, completed: false });
        newTodos.sort((x, y) => x.completed - y.completed);
        saveTodos(newTodos);
    }


    const todoCompleted = (id) => {
        const newTodos = [...todos];
        const indexTarea = newTodos.findIndex(
            (element) => element.text === id
        );
        newTodos[indexTarea].completed = true;
        newTodos.sort((x, y) => x.completed - y.completed);
        saveTodos(newTodos);
    }

    const todoDeleted = (id) => {
        const newTodos = [...todos];
        const indexTodo = newTodos.findIndex(
            (element) => element.text === id
        );
        newTodos.splice(indexTodo, 1);
        newTodos.sort((x, y) => x.completed - y.completed);
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
        <TodoContext.Provider value={{
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            loading,
            error,
            searchedTodos,
            todoCompleted,
            todoDeleted,
            allCompleted,
            openModal,
            setOpemModal,
            addTodo
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };