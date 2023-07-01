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
            placeholder="¿Perdiste una actividad?"
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