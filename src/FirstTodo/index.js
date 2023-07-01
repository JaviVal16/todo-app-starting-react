import React from 'react';
import './FirstTodo.css';
import { NothingIcon } from './NothingIcon';

function FirstTodo() {

    return (
        <div className='messageDiv'>
            <h2>No exisite ninguna actividad pendiente</h2>
            <NothingIcon />
            <div className='ondaBtn'></div>
        </div>
    );
}

export { FirstTodo };