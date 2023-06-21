import React from 'react';
import './StatusTodosMessage.css';
import { TodoContext } from '../Context';

function StatusTodosMessage() {
    const {
        completedTodos,
        totalTodos
    } = React.useContext(TodoContext);

    return (
        <h1>{completedTodos} TODOS HECHOS DE {totalTodos}</h1>
    );
}

export { StatusTodosMessage };