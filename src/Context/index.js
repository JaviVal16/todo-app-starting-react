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
    const [openModal, setOpemModal] = React.useState(true);

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
            setOpemModal
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };