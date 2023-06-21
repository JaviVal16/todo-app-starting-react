import React from 'react';
import './TodosSearchBox.css';
import { TodoContext } from '../Context';

function TodosSearchBox() {
    const {
        searchValue,
        setSearchValue
    } = React.useContext(TodoContext);
    return (
        <input
            className='todosSearchBox'
            placeholder="Escribe una nueva tarea"
            value={searchValue}
            onChange={
                (event) => {
                    setSearchValue(event.target.value);
                }
            }
        ></input>
    );
}

export { TodosSearchBox };