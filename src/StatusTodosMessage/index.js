import './StatusTodosMessage.css';

function StatusTodosMessage({ total, completed }) {
    return (
        <h1>{completed} TODOS HECHOS DE {total}</h1>
    );
}

export { StatusTodosMessage };