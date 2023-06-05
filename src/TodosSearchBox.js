import React from 'react';
import './TodosSearchBox.css';

function TodosSearchBox({ searchValue, setSearchValue }) {

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